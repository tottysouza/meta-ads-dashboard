# Guia de Configuração — Passo a Passo

## Índice

1. [Criar app na Meta](#1-criar-app-na-meta)
2. [Gerar Access Token](#2-gerar-access-token)
3. [Configurar o Cloudflare Worker](#3-configurar-o-cloudflare-worker)
4. [Renovação automática do token](#4-renovação-automática-do-token)
5. [Criar dashboard para um cliente](#5-criar-dashboard-para-um-cliente)
6. [Publicar o dashboard](#6-publicar-o-dashboard)

---

## 1. Criar app na Meta

1. Acesse [developers.facebook.com](https://developers.facebook.com) e faça login
2. Clique em **Meus apps → Criar app**
3. Escolha **"Outros"** → **"Empresa"**
4. Preencha o nome do app (ex: "Dashboard ADS")
5. Vá em **Configurações → Básico** e anote:
   - **ID do aplicativo** (App ID)
   - **Chave secreta** (App Secret) — clique em "Mostrar"

---

## 2. Gerar Access Token

### Token curto (teste — expira em 2 horas)

1. Acesse [Graph API Explorer](https://developers.facebook.com/tools/explorer)
2. Selecione seu app no campo "Application"
3. Clique em **"Generate Access Token"**
4. Adicione as permissões: `ads_read`, `ads_management`
5. Copie o token gerado

### Token longo (produção — dura 60 dias)

Cole esta URL no navegador substituindo os três valores:

```
https://graph.facebook.com/oauth/access_token?grant_type=fb_exchange_token&client_id=APP_ID&client_secret=APP_SECRET&fb_exchange_token=TOKEN_CURTO
```

A resposta será um JSON com o campo `access_token` — este é o token de longa duração.

### Pegar o Ad Account ID

1. Acesse [Gerenciador de Anúncios](https://business.facebook.com/adsmanager)
2. O ID aparece no canto superior esquerdo no formato `act_123456789`
3. Anote com o prefixo `act_` para cada conta/unidade

---

## 3. Configurar o Cloudflare Worker

1. Crie conta gratuita em [cloudflare.com](https://cloudflare.com)
2. Acesse **Workers & Pages → Create application → Create Worker**
3. Cole o conteúdo de `worker/worker.js`
4. Substitua `SEU_ACCESS_TOKEN_AQUI` pelo seu token de longa duração
5. Clique em **Save and Deploy**
6. Anote a URL gerada: `https://nome-worker.usuario.workers.dev/`

> O plano gratuito do Cloudflare Workers suporta **100.000 requisições/dia** — mais que suficiente para múltiplos clientes.

---

## 4. Renovação automática do token

O token de longa duração expira em 60 dias. Configure este fluxo no **Make.com** para renovar automaticamente:

### Fluxo no Make

```
[Agendamento: toda segunda-feira às 06h]
         ↓
[HTTP GET] → graph.facebook.com/oauth/access_token
  Parâmetros:
  - grant_type: fb_exchange_token
  - client_id: SEU_APP_ID
  - client_secret: SEU_APP_SECRET
  - fb_exchange_token: TOKEN_ATUAL
         ↓
[HTTP PUT] → Cloudflare API (atualiza o Worker)
  ou
[Envio de e-mail/WhatsApp com o novo token]
         ↓
[Atualização manual no Worker]
```

### Alternativa manual

Quando receber o alerta de expiração:

1. Gere um novo token longo (passo 2)
2. Abra o Worker no Cloudflare
3. Substitua o `TOKEN` e clique em Save and Deploy

---

## 5. Criar dashboard para um cliente

1. Abra `https://dash.tsdg.com.br/generator.html` no navegador
2. Preencha:
   - **Título**: nome do cliente
   - **Subtítulo**: descrição (ex: "Gestão Meta ADS")
   - **URL do Worker**: copiada no passo 3
   - **Contas**: nome e Ad Account ID de cada unidade
3. Clique em **"Gerar código"**
4. Copie o código e salve como `index.html`
5. Adicione a URL da logo no campo `LOGO_URL` no topo do arquivo:

```js
const LOGO_URL = "https://seusite.com/logo-cliente.png";
```

---

## 6. Publicar o dashboard

### Netlify (mais simples)

1. Crie uma pasta com apenas o `index.html`
2. Acesse [netlify.com](https://netlify.com) → arraste a pasta
3. Configure um domínio customizado se desejar

> No Netlify **não precisa** do arquivo `_redirects` — o `PROXY` aponta diretamente para o Worker.

### Domínio próprio / cPanel

1. Acesse o File Manager do cPanel
2. Navegue até a pasta do subdomínio (ex: `dash.seusite.com.br/cliente/`)
3. Faça upload do `index.html`
4. Certifique-se que `PROXY` aponta para a URL completa do Worker

> **Nunca use** `/api/meta` como `PROXY` fora do Netlify — esse caminho relativo só funciona com o `_redirects` do Netlify.
