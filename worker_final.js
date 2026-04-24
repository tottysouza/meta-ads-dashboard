/**
 * Meta ADS Dashboard — Cloudflare Worker
 * Proxy entre o dashboard (HTML) e a Meta Ads API.
 *
 * Como usar:
 * 1. Substitua TOKEN pelo seu Access Token de longa duração
 * 2. Deploy no Cloudflare Workers (Save and Deploy)
 * 3. Cole a URL gerada no campo PROXY do index.html
 *
 * Renovação do token: o token expira em 60 dias.
 * Configure o cenário de renovação no Make.com (ver README).
 */

const TOKEN = "SEU_ACCESS_TOKEN_AQUI";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "*",
  "Access-Control-Max-Age": "86400",
  "Access-Control-Allow-Credentials": "false",
};

export default {
  async fetch(request) {

    // Responde ao preflight CORS
    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: CORS });
    }

    try {
      const body        = await request.json();
      const accountId   = body.account_id;
      const datePreset  = body.date_preset || "last_7d";
      const startDate   = body.start_date;
      const endDate     = body.end_date;

      const BASE   = "https://graph.facebook.com/v19.0";
      const FIELDS = "impressions,reach,clicks,spend,frequency,cpm,cpc,actions,cost_per_action_type,video_thruplay_watched_actions";

      // Campos dos anúncios — data filtrada dentro do campo insights
      const adInsightFields = "impressions,reach,clicks,spend,actions,video_thruplay_watched_actions,ctr,cpm,cpc";
      let insightField;
      if (startDate && endDate) {
        insightField = `insights.time_range({"since":"${startDate}","until":"${endDate}"}){${adInsightFields}}`;
      } else {
        insightField = `insights.date_preset(${datePreset}){${adInsightFields}}`;
      }
      const AD_FIELDS = `name,campaign{name},${insightField},creative{thumbnail_url,effective_instagram_media_id}`;

      // Parâmetro de data para os insights da conta
      const dateParams = (startDate && endDate)
        ? `time_range={"since":"${startDate}","until":"${endDate}"}`
        : `date_preset=${datePreset}`;

      const insightsURL = `${BASE}/${accountId}/insights?access_token=${TOKEN}&fields=${FIELDS}&level=account&limit=1&${dateParams}`;
      const adsURL      = `${BASE}/${accountId}/ads?access_token=${TOKEN}&fields=${AD_FIELDS}&limit=20&sort=clicks_descending`;

      // Chamadas paralelas
      const [insightsResp, adsResp] = await Promise.all([
        fetch(insightsURL),
        fetch(adsURL),
      ]);

      const [insightsData, adsData] = await Promise.all([
        insightsResp.json(),
        adsResp.json(),
      ]);

      return new Response(
        JSON.stringify({ account: insightsData, ads: adsData }),
        { status: 200, headers: { ...CORS, "Content-Type": "application/json" } }
      );

    } catch (err) {
      return new Response(
        JSON.stringify({ error: err.message }),
        { status: 500, headers: { ...CORS, "Content-Type": "application/json" } }
      );
    }
  },
};
