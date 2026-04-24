# Perguntas Frequentes (FAQ)

---

### O dashboard carrega mas não mostra dados — o que pode ser?

Verifique nesta ordem:
1. **Token expirado** — gere um novo token e atualize o Worker
2. **Ad Account ID errado** — confirme o formato `act_123456789`
3. **Permissões insuficientes** — o token precisa de `ads_read` e `ads_management`
4. **Worker offline** — acesse a URL do Worker diretamente no navegador; deve retornar `{"error":"Unexpected end of JSON input"}`

---

### As thumbnails dos criativos aparecem quebradas

As URLs de thumbnail retornadas pela Meta API são temporárias (expiram em algumas horas). Clique em **"↺ Atualizar"** para recarregar com URLs novas.

---

### O filtro de campanha não aparece

O filtro de campanhas só aparece nas **abas individuais** de cada unidade — não na aba Geral. Selecione uma unidade específica para ver as campanhas disponíveis.

---

### O botão "Analisar agora" não copia nada

O botão copia o prompt para o clipboard. Se não funcionar:
- **Chrome/Edge**: deve funcionar normalmente
- **Firefox**: pode ser necessário permitir acesso ao clipboard nas configurações do site
- **Alternativa**: o texto aparece na área de texto — selecione tudo com Ctrl+A e copie com Ctrl+C

---

### Posso usar o mesmo Worker para vários clientes?

Sim! Um único Worker funciona para todos os dashboards, desde que as contas de anúncio estejam todas vinculadas ao mesmo token de acesso (mesma conta Business da Meta). Se um cliente tiver um Business Manager separado, será necessário um Worker com token diferente.

---

### Como adicionar mais unidades a um dashboard existente?

Abra o `index.html` do cliente e localize a seção CONFIG:

```js
const ACCOUNTS = [
  { name: "Unidade A", id: "act_111" },
  { name: "Unidade B", id: "act_222" },
  // adicione aqui:
  { name: "Unidade C", id: "act_333" },
];
```

Salve e faça upload novamente no servidor.

---

### Os dados da aba Geral diferem da soma das abas individuais

Isso pode ocorrer porque:
- A aba Geral carrega os dados em sequência — se uma conta falhar, ela é ignorada
- Algumas métricas (CPC, CPM, CPA, frequência) são **médias** entre as contas, não somas
- O período anterior é calculado automaticamente e pode ter leve diferença dependendo do preset

---

### Posso usar outro período além dos pré-definidos?

Sim — selecione **"Personalizado"** no seletor de período e escolha as datas de início e fim. O sistema calcula automaticamente o período anterior equivalente para comparação.

---

### Como exportar o relatório?

Duas formas:
1. **PDF**: clique no ícone ⬇ no canto superior direito → abre o diálogo de impressão → escolha "Salvar como PDF"
2. **Texto**: clique em "Analisar [cliente] agora" → cole no Claude → copie o relatório gerado

---

### O token foi gerado mas a API retorna erro de permissão

Verifique se o usuário que gerou o token tem acesso às contas de anúncio no Business Manager. O token reflete as permissões do usuário — se a conta não estiver vinculada ao usuário, a API retorna erro 200 (permissão negada).

---

### Como funciona o filtro de campanha nos KPIs?

Ao selecionar uma campanha, os KPIs são **recalculados a partir dos anúncios** daquela campanha — somando impressões, alcance, cliques, mensagens e investimento apenas dos anúncios que pertencem à campanha selecionada. O CPC e CPM são derivados dessas somas.

> Nota: os KPIs calculados desta forma podem ter pequena variação em relação aos dados oficiais do Gerenciador de Anúncios, que usa metodologia própria de atribuição.
