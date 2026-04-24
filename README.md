# 📊 Meta ADS Dashboard — sua central de resultados em um clique

Se você gerencia campanhas de tráfego pago para um ou vários clientes, provavelmente já perdeu tempo demais abrindo aba por aba no Gerenciador de Anúncios, copiando números para planilhas e montando relatórios à mão.

Este projeto resolve exatamente isso.

---

## O que é

Um dashboard de performance para Meta Ads que consolida os dados de todas as suas contas de anúncio em uma única tela — com visual limpo, atualização em tempo real e análise qualitativa gerada por inteligência artificial.

Sem código para manter. Sem assinatura de plataforma. Sem planilha.

---

## O que ele entrega

Ao abrir o dashboard, você vê instantaneamente:

- **Impressões, alcance, cliques, mensagens e investimento** do período que escolher
- **Comparação automática com o período anterior** — cada indicador mostra se subiu ou caiu, em verde ou vermelho
- **Top anúncios** com thumbnail, campanha, unidade e métricas ordenáveis
- **Distribuição do público** por gênero e faixa etária
- **Visão consolidada** de todas as unidades em uma aba Geral
- **Filtro por campanha** para analisar uma estratégia específica sem sair da tela
- **Análise qualitativa com IA** — com um clique, gera um diagnóstico completo do período no formato de relatório, pronto para enviar ao cliente

---

## Como funciona na prática

```
Você abre o dashboard no navegador
         ↓
Os dados chegam direto do Meta Ads em segundos
         ↓
Você escolhe o período, a unidade e a campanha
         ↓
Clica em "Analisar"
         ↓
A IA gera o relatório completo — diagnóstico,
pontos de atenção e próximos passos
         ↓
Você copia e envia para o cliente
```

O que antes levava 40 minutos agora leva menos de 5.

---

## Por que isso importa para quem trabalha com tráfego

Gestores de tráfego vivem entre dados e relatórios. A maior parte do tempo não é gasta otimizando campanhas — é gasta coletando, organizando e apresentando informações que já existem, mas estão espalhadas em lugares diferentes.

Este dashboard centraliza tudo, filtra com inteligência e ainda escreve o relatório. Você fica livre para fazer o que realmente importa: tomar decisões e melhorar os resultados.

---

## Como ter o seu

O processo inteiro leva menos de uma tarde e não exige nenhum conhecimento técnico avançado. São três etapas:

**1. Configurar uma conta gratuita no Cloudflare**
É o serviço que conecta o dashboard à API do Meta de forma segura. Você cola um código pronto, substitui o seu token de acesso e pronto — a conexão está feita.

**2. Gerar o arquivo do dashboard**
Existe um gerador visual (também neste repositório) onde você informa o nome do cliente, a URL da conexão e os IDs das contas de anúncio. Ele produz um único arquivo HTML, que é o seu dashboard.

**3. Publicar em qualquer servidor**
Você sobe esse arquivo para o Netlify (gratuito), para o seu próprio domínio, ou para qualquer hospedagem que já tenha. O dashboard fica acessível pelo navegador, de qualquer lugar, sem instalar nada.

Para cada novo cliente, você repete o passo 2. São menos de 5 minutos.

---

## O que você vai precisar

| O que | Para quê | Custo |
|---|---|---|
| Conta no Meta for Developers | Gerar o token de acesso às suas contas de anúncio | Gratuito |
| Conta no Cloudflare | Conectar o dashboard à API do Meta | Gratuito |
| Qualquer hospedagem | Publicar o arquivo HTML | Gratuito ou incluso no plano atual |

Nenhuma assinatura. Nenhum software instalado. Nenhuma dependência de terceiros além dos serviços que você já usa.

---

## Para quem é este projeto

- Gestores de tráfego que atendem múltiplos clientes
- Agências que precisam de relatórios recorrentes sem retrabalho
- Profissionais de marketing que querem autonomia sobre seus próprios dados
- Donos de negócio que querem acompanhar campanhas sem depender de relatórios manuais

Se você consegue fazer upload de um arquivo e seguir um passo a passo, consegue ter esse dashboard funcionando hoje.
