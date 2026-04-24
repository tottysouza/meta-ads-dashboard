📊 Meta ADS Dashboard — Para gestores de tráfego

Chega de abrir dez abas no Gerenciador de Anúncios para entender o que está acontecendo com as suas campanhas.

O problema que ele resolve
Quem trabalha com tráfego pago sabe como é: cada cliente tem sua conta, cada conta tem suas campanhas, e no final da semana você precisa compilar tudo isso num relatório que faça sentido para o cliente — enquanto ainda toma decisões sobre onde pausar, onde escalar e o que está funcionando.
Esse processo consome tempo. Muito tempo.
Este projeto entrega uma ferramenta visual, rápida e personalizável que reúne todos os indicadores do Meta Ads em um único lugar — e ainda gera a análise qualitativa com um clique.

O que você vê na tela
Assim que abre o dashboard, os dados do período selecionado já aparecem organizados:

Indicadores principais — impressões, alcance, cliques, ThruPlay, mensagens, investimento, CPC, CPM e custo por mensagem, todos com a variação em relação ao período anterior (verde quando melhora, vermelho quando piora)
Top anúncios — tabela com os criativos ranqueados por performance, com thumbnail de cada peça, nome da campanha e métricas do período exato selecionado
Público impactado — distribuição por gênero, faixa etária de quem clicou e de quem enviou mensagem
Filtro por campanha — selecione uma campanha específica e todos os indicadores se atualizam na hora
Aba Geral — visão consolidada de todas as unidades juntas, com tabela comparativa entre elas


Como a análise funciona
Depois de ver os números, você clica em "Analisar agora". O dashboard monta automaticamente um relatório estruturado com todos os dados do período — incluindo as variações — e copia para a sua área de transferência.
Você cola no Claude, e em segundos recebe uma análise qualitativa completa: o que está funcionando, o que precisa de atenção e três ações concretas para os próximos dias.
O relatório já sai formatado no padrão que você usa com o cliente — com emojis, destaques e linguagem acessível. É só copiar e enviar.

Como configurar para um novo cliente
Você não precisa saber programar para isso. O processo todo leva menos de 15 minutos:
1. Cria um app gratuito no Meta for Developers e gera um token de acesso às contas do cliente
2. Configura um proxy gratuito no Cloudflare (é um serviço que faz a ponte entre o dashboard e a API do Meta — você cola um código pronto, clica em publicar)
3. Abre o gerador de dashboards, preenche o nome do cliente, a URL do proxy e os IDs das contas de anúncio
4. Clica em "Gerar código", salva o arquivo e sobe no servidor do cliente
Pronto. O dashboard está no ar, com os dados em tempo real, no domínio que você quiser.

O que torna isso diferente
A maioria das ferramentas de relatório cobra mensalidade, exige integração complexa ou entrega dados genéricos que você ainda precisa interpretar. Este projeto é:

Gratuito para rodar — as ferramentas usadas (Cloudflare, Meta API, hospedagem estática) têm planos gratuitos que cobrem o uso normal
Seu — o código fica na sua mão, você personaliza como quiser, coloca a logo do cliente, escolhe o domínio
Rápido de replicar — uma vez configurado o proxy, criar um novo dashboard para um novo cliente leva menos de 5 minutos
Conectado com IA — a análise não é um template fixo; ela lê os dados reais do período e gera um diagnóstico contextualizado


Para quem é esse projeto

Gestores de tráfego que atendem múltiplos clientes e precisam de visibilidade rápida sem abrir o Gerenciador de Anúncios a todo momento
Analistas de marketing que querem entregar relatórios mais rápido e com mais profundidade
Donos de agência que querem oferecer uma experiência diferenciada ao cliente com um dashboard próprio e personalizado
Profissionais de produto que precisam acompanhar performance de campanhas sem depender de um analista para interpretar os dados
