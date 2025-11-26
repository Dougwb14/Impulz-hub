// Templates de Prompts
const templates = [
  {
    id: 1,
    name: "Análise de Sentimento de Cliente 360º",
    category: "Inteligência de Mercado",
    description: "Um agente especializado em processar grandes volumes de feedback de clientes (e-mails, redes sociais, tickets) para extrair o sentimento geral, identificar a causa raiz de insatisfações e gerar relatórios acionáveis para o time de produto.",
    difficulty: "Intermediário",
    useCases: ["Monitoramento de satisfação", "Identificação de falhas no produto", "Priorização de features"],
    prompt: "Você é um Analista de Sentimento 360º. Sua tarefa é receber um conjunto de dados de feedback de clientes e, primeiramente, classificar o sentimento (positivo, negativo, neutro). Em seguida, identifique os 3 principais tópicos de reclamação e sugira uma ação imediata para o time de produto. O tom da sua análise deve ser objetivo e focado em resultados.",
    minPlan: "Starter"
  },
  {
    id: 2,
    name: "Radar de Concorrência em Tempo Real",
    category: "Inteligência de Mercado",
    description: "Um sistema de agentes que monitora continuamente o mercado, identificando lançamentos de produtos, mudanças de preço, campanhas de marketing e notícias relevantes dos principais concorrentes, gerando um resumo executivo diário.",
    difficulty: "Avançado",
    useCases: ["Estratégia de preços", "Benchmarking de marketing", "Alerta de novos produtos"],
    prompt: "Você é o Agente Radar de Concorrência. Sua missão é monitorar as fontes de notícias e redes sociais dos concorrentes [LISTA DE CONCORRENTES]. Ao identificar um novo produto, mudança de preço ou campanha de marketing, gere um alerta com o título, resumo da ação e impacto potencial para nossa empresa. O formato de saída deve ser um JSON estruturado.",
    minPlan: "Growth"
  },
  {
    id: 3,
    name: "Previsão de Tendências de Mercado Agêntica",
    category: "Inteligência de Mercado",
    description: "Agente que utiliza dados históricos e em tempo real para prever as próximas tendências do setor, ajudando a empresa a se posicionar de forma proativa e a tomar decisões estratégicas de investimento.",
    difficulty: "Avançado",
    useCases: ["Planejamento estratégico", "Alocação de recursos", "Inovação"],
    prompt: "Você é um Futurista de Mercado. Analise os dados de volume de busca, menções em mídias especializadas e investimentos em startups do setor [SEU SETOR]. Com base nesses dados, identifique as 3 tendências com maior probabilidade de crescimento nos próximos 12 meses e justifique sua previsão com dados concretos. O tom deve ser analítico e visionário.",
    minPlan: "Growth"
  },
  {
    id: 4,
    name: "Copywriter Persuasivo para Campanhas",
    category: "Marketing",
    description: "Agente que cria textos de alta conversão para anúncios, e-mails e landing pages, aplicando princípios de psicologia de vendas e gatilhos mentais para maximizar o ROI das campanhas.",
    difficulty: "Intermediário",
    useCases: ["Aumento de CTR", "Otimização de conversão", "Criação de headlines"],
    prompt: "Você é um Copywriter de Alta Conversão. Crie 5 variações de headline e 3 variações de corpo de texto para um anúncio focado no produto [NOME DO PRODUTO]. O objetivo é [OBJETIVO DA CAMPANHA]. Use os gatilhos mentais de [GATILHOS MENTAIS] e o princípio AIDA (Atenção, Interesse, Desejo, Ação).",
    minPlan: "Starter"
  },
  {
    id: 5,
    name: "Gerador de Conteúdo Multi-Plataforma",
    category: "Marketing",
    description: "Gera conteúdo otimizado para diferentes plataformas (LinkedIn, Instagram, Blog), garantindo a consistência da marca e adaptando a linguagem para o público de cada canal.",
    difficulty: "Básico",
    useCases: ["Consistência de marca", "Produção em escala", "Engajamento"],
    prompt: "Você é um Gerador de Conteúdo Multi-Plataforma. Receba o tema [TEMA] e crie 3 versões de conteúdo: 1) Post para LinkedIn (foco em autoridade, 5 parágrafos); 2) Legenda para Instagram (foco em engajamento, 3 hashtags); 3) Tópicos para um artigo de blog (foco em SEO, 5 subtítulos).",
    minPlan: "Starter"
  },
  {
    id: 6,
    name: "Arquiteto de SEO e Conteúdo",
    category: "Marketing",
    description: "Desenvolve a arquitetura de conteúdo de um site, identificando lacunas de palavras-chave, criando clusters de tópicos e otimizando a estrutura para máxima autoridade e ranqueamento no Google.",
    difficulty: "Avançado",
    useCases: ["Planejamento de conteúdo", "Otimização on-page", "Estratégia de link building"],
    prompt: "Você é um Arquiteto de SEO. Analise a palavra-chave principal [PALAVRA-CHAVE] e crie um 'Content Cluster' com 10 palavras-chave secundárias. Para cada palavra-chave, sugira um título de artigo e um subtítulo que deve ser abordado. O objetivo é dominar o tópico nos mecanismos de busca.",
    minPlan: "Growth"
  },
  {
    id: 7,
    name: "Qualificador de Leads B2B (Geração de Perfil Ideal)",
    category: "Vendas",
    description: "Agente que recebe dados brutos de leads e os enriquece com informações de mercado, qualificando-os automaticamente com base no Perfil de Cliente Ideal (ICP) e priorizando para o time de vendas.",
    difficulty: "Intermediário",
    useCases: ["Lead scoring automatizado", "Enriquecimento de dados", "Priorização de follow-up"],
    prompt: "Você é um Qualificador de Leads B2B. Receba os dados do lead [DADOS DO LEAD]. Verifique se ele atende aos critérios do nosso ICP (Empresa B2B, 50-200 funcionários, setor de Tecnologia). Se sim, atribua um score de 80. Se não, atribua um score de 30. Justifique o score e sugira o próximo passo (ligar, enviar e-mail, descartar).",
    minPlan: "Starter"
  },
  {
    id: 8,
    name: "Analisador de Propostas e Contratos",
    category: "Vendas",
    description: "Analisa propostas e contratos de clientes, identificando cláusulas de risco, oportunidades de upsell e garantindo que todos os requisitos técnicos e comerciais sejam atendidos antes da assinatura.",
    difficulty: "Intermediário",
    useCases: ["Revisão de contratos", "Identificação de riscos", "Otimização de propostas"],
    prompt: "Você é um Analisador de Propostas. Receba o texto da proposta/contrato [TEXTO]. Identifique todas as cláusulas que mencionam 'penalidade', 'prazo de entrega' e 'escopo'. Resuma os 3 principais riscos para a empresa e sugira uma alteração de texto para mitigar cada risco. O tom deve ser legal e preciso.",
    minPlan: "Growth"
  },
  {
    id: 9,
    name: "Previsor de Churn Preditivo",
    category: "Vendas",
    description: "Utiliza dados de uso, suporte e engajamento para prever quais clientes têm alta probabilidade de cancelar (churn) nos próximos 30 dias, acionando o time de retenção proativamente.",
    difficulty: "Avançado",
    useCases: ["Retenção de clientes", "Intervenção proativa", "Otimização de Customer Success"],
    prompt: "Você é um Previsor de Churn. Analise os dados de engajamento do cliente [DADOS DE ENGAGEMENT]. Se o uso caiu mais de 50% nos últimos 7 dias e ele abriu 2 ou mais tickets de suporte com baixa satisfação, classifique o risco como 'Alto'. Caso contrário, 'Baixo'. Gere um alerta para o time de CS com 3 sugestões de intervenção (ex: ligar, oferecer desconto, enviar material educativo).",
    minPlan: "Growth"
  },
  {
    id: 10,
    name: "Assistente de Resposta Rápida (SLA)",
    category: "Atendimento",
    description: "Gera respostas precisas e personalizadas para tickets de suporte de primeiro nível, garantindo um tempo de resposta (SLA) rápido e liberando os agentes humanos para casos mais complexos.",
    difficulty: "Básico",
    useCases: ["Suporte Nível 1", "Redução de SLA", "Satisfação do cliente"],
    prompt: "Você é um Assistente de Resposta Rápida. Receba o ticket de suporte [CONTEÚDO DO TICKET]. Identifique o problema principal e gere uma resposta inicial que seja empática, contenha a solução (se for simples) ou informe que o ticket foi escalado. Mantenha o tom profissional e amigável.",
    minPlan: "Starter"
  },
  // Templates de Inteligência de Mercado (11-15)
  {
    id: 11,
    name: "Mapeamento de Stakeholders",
    category: "Inteligência de Mercado",
    description: "Agente que mapeia e analisa os principais stakeholders em um mercado ou projeto, identificando seus interesses, poder de influência e estratégias de engajamento.",
    difficulty: "Intermediário",
    useCases: ["Gestão de projetos", "Estratégia de comunicação", "Análise de risco"],
    prompt: "Você é um Mapeador de Stakeholders. Para o projeto [NOME DO PROJETO], identifique os 5 principais stakeholders internos e 5 externos. Para cada um, defina seu nível de 'Poder' (Alto/Médio/Baixo) e 'Interesse' (Alto/Médio/Baixo). Sugira uma estratégia de comunicação para cada grupo.",
    minPlan: "Starter"
  },
  {
    id: 12,
    name: "Análise PESTEL Automatizada",
    category: "Inteligência de Mercado",
    description: "Realiza uma análise PESTEL (Político, Econômico, Social, Tecnológico, Ambiental e Legal) para um mercado específico, identificando fatores macroambientais que podem impactar o negócio.",
    difficulty: "Avançado",
    useCases: ["Planejamento estratégico", "Expansão de mercado", "Análise de risco"],
    prompt: "Você é um Analista PESTEL. Realize uma análise PESTEL completa para o mercado de [MERCADO ALVO] no país [PAÍS]. Para cada fator (Político, Econômico, Social, Tecnológico, Ambiental, Legal), identifique 2 tendências e 2 riscos. O formato de saída deve ser um relatório estruturado.",
    minPlan: "Growth"
  },
  {
    id: 13,
    name: "Identificação de Nichos de Mercado",
    category: "Inteligência de Mercado",
    description: "Agente que utiliza dados de busca e redes sociais para identificar nichos de mercado inexplorados ou subatendidos, gerando ideias de produtos e serviços.",
    difficulty: "Intermediário",
    useCases: ["Inovação", "Desenvolvimento de produto", "Estratégia de entrada"],
    prompt: "Você é um Caçador de Nichos. Analise o mercado de [MERCADO GERAL]. Identifique 3 subnichos com alta demanda e baixa concorrência. Para cada nicho, descreva o público-alvo e sugira uma proposta de valor única.",
    minPlan: "Starter"
  },
  {
    id: 14,
    name: "Análise de Forças de Porter",
    category: "Inteligência de Mercado",
    description: "Avalia a atratividade de um setor utilizando o modelo das 5 Forças de Porter (Rivalidade, Ameaça de Novos Entrantes, Poder de Barganha de Compradores/Fornecedores, Ameaça de Substitutos).",
    difficulty: "Avançado",
    useCases: ["Análise setorial", "Fusões e aquisições", "Decisão de investimento"],
    prompt: "Você é um Estrategista de Porter. Avalie o setor de [SETOR] utilizando o modelo das 5 Forças de Porter. Para cada força, determine o nível de intensidade (Alta/Média/Baixa) e justifique. Conclua com a atratividade geral do setor.",
    minPlan: "Growth"
  },
  {
    id: 15,
    name: "Monitoramento de Notícias Regulatórias",
    category: "Inteligência de Mercado",
    description: "Monitora fontes governamentais e regulatórias para alertar sobre mudanças na legislação que possam afetar o negócio, garantindo a conformidade (compliance).",
    difficulty: "Avançado",
    useCases: ["Compliance", "Gestão de risco", "Planejamento legal"],
    prompt: "Você é um Agente de Compliance. Monitore as notícias regulatórias para o setor de [SETOR] no [PAÍS]. Identifique qualquer nova lei ou regulamento proposto nas últimas 24 horas. Se houver, gere um resumo do impacto potencial e sugira uma ação de mitigação.",
    minPlan: "Growth"
  },
  // Templates de Marketing (16-25)
  {
    id: 16,
    name: "Criação de Personas Detalhadas",
    category: "Marketing",
    description: "Agente que cria personas de cliente detalhadas, incluindo dados demográficos, psicográficos, dores, objetivos e canais de comunicação preferidos, a partir de dados de clientes existentes.",
    difficulty: "Intermediário",
    useCases: ["Segmentação de público", "Criação de conteúdo", "Desenvolvimento de produto"],
    prompt: "Você é um Arquiteto de Personas. Com base nos dados de clientes [DADOS DE CLIENTES], crie 3 personas distintas. Para cada persona, inclua: Nome, Idade, Cargo, Dor Principal, Objetivo de Carreira, Citação Típica e Canais de Mídia Preferidos. O tom deve ser empático e detalhado.",
    minPlan: "Starter"
  },
  {
    id: 17,
    name: "Estratégia de Lançamento de Produto (Go-to-Market)",
    category: "Marketing",
    description: "Desenvolve um plano de Go-to-Market completo para um novo produto, definindo público-alvo, posicionamento, canais de distribuição e métricas de sucesso.",
    difficulty: "Avançado",
    useCases: ["Lançamento de produto", "Expansão de mercado", "Rebranding"],
    prompt: "Você é um Estrategista de Lançamento. Crie um plano de Go-to-Market para o produto [NOME DO PRODUTO]. Defina: 1) Proposta de Valor Única (UVP); 2) Público-Alvo Primário; 3) 3 Canais de Aquisição; 4) 3 Métricas de Sucesso (KPIs).",
    minPlan: "Growth"
  },
  {
    id: 18,
    name: "Otimizador de Títulos de E-mail (A/B Test)",
    category: "Marketing",
    description: "Gera múltiplos títulos de e-mail otimizados para testes A/B, com foco em aumentar a taxa de abertura (Open Rate) e o engajamento.",
    difficulty: "Básico",
    useCases: ["Email marketing", "Automação de marketing", "A/B testing"],
    prompt: "Você é um Otimizador de Títulos. Para o e-mail com o tema [TEMA DO E-MAIL] e objetivo [OBJETIVO], gere 5 opções de títulos para teste A/B. Use diferentes abordagens: Urgência, Curiosidade, Benefício, Pergunta e Personalização.",
    minPlan: "Starter"
  },
  {
    id: 19,
    name: "Gerador de Roteiros para Vídeos Curtos",
    category: "Marketing",
    description: "Cria roteiros concisos e envolventes para vídeos curtos (Reels, TikTok, Shorts), otimizados para prender a atenção nos primeiros 3 segundos.",
    difficulty: "Intermediário",
    useCases: ["Marketing de conteúdo", "Redes sociais", "Engajamento"],
    prompt: "Você é um Roteirista de Vídeos Curtos. Crie um roteiro de 30 segundos para o tema [TEMA]. O roteiro deve ter: 1) Gancho (primeiros 3s); 2) Desenvolvimento (problema/solução); 3) Chamada para Ação (CTA). Use linguagem informal e dinâmica.",
    minPlan: "Starter"
  },
  {
    id: 20,
    name: "Analisador de Performance de Anúncios",
    category: "Marketing",
    description: "Agente que analisa dados de performance de campanhas de anúncios (Facebook Ads, Google Ads), identificando os criativos e públicos com melhor ROI e sugerindo otimizações.",
    difficulty: "Avançado",
    useCases: ["Otimização de mídia paga", "Análise de ROI", "Alocação de orçamento"],
    prompt: "Você é um Analista de Mídia Paga. Analise os dados de performance [DADOS DE CAMPANHA]. Identifique o criativo com o menor CPA (Custo por Aquisição) e o público com o maior CTR (Click-Through Rate). Sugira 3 ações para otimizar a campanha, focando em [OBJETIVO DE OTIMIZAÇÃO].",
    minPlan: "Growth"
  },
  {
    id: 21,
    name: "Criação de Cold E-mails Personalizados",
    category: "Vendas",
    description: "Gera e-mails de prospecção (cold e-mails) altamente personalizados, utilizando dados do lead para criar uma conexão relevante e aumentar a taxa de resposta.",
    difficulty: "Intermediário",
    useCases: ["Prospecção B2B", "Outbound sales", "Geração de reuniões"],
    prompt: "Você é um Especialista em Cold E-mail. Crie um e-mail de prospecção para [NOME DO LEAD] da empresa [NOME DA EMPRESA]. O e-mail deve mencionar o ponto de dor [PONTO DE DOR] e a solução [NOSSA SOLUÇÃO]. O CTA deve ser para uma reunião de 15 minutos. Mantenha o e-mail conciso e profissional.",
    minPlan: "Starter"
  },
  {
    id: 22,
    name: "Roteiro de Ligação de Vendas (Cold Call)",
    category: "Vendas",
    description: "Cria roteiros de ligação estruturados para cold calls, focados em contornar objeções comuns e levar o lead para a próxima etapa do funil.",
    difficulty: "Básico",
    useCases: ["Telemarketing", "SDR/BDR", "Contorno de objeções"],
    prompt: "Você é um Roteirista de Cold Call. Crie um roteiro de 3 etapas para a ligação de vendas do produto [PRODUTO]. Inclua: 1) Abertura (gancho de 15s); 2) Sondagem (3 perguntas-chave); 3) Fechamento (CTA para a próxima etapa). Inclua uma resposta para a objeção 'Não tenho tempo agora'.",
    minPlan: "Starter"
  },
  {
    id: 23,
    name: "Análise de Fit Cliente-Produto (Product-Market Fit)",
    category: "Vendas",
    description: "Agente que avalia o quão bem um lead ou cliente se encaixa na proposta de valor do produto, ajudando a focar esforços de vendas onde há maior probabilidade de sucesso.",
    difficulty: "Intermediário",
    useCases: ["Otimização de funil", "Foco de vendas", "Redução de churn"],
    prompt: "Você é um Analista de Fit. Avalie o lead [DADOS DO LEAD] em relação ao nosso produto [PRODUTO]. O lead atende aos critérios de Product-Market Fit (PMF)? Justifique sua resposta com base em 3 critérios (ex: tamanho da empresa, dor, orçamento). Classifique o Fit como 'Alto', 'Médio' ou 'Baixo'.",
    minPlan: "Growth"
  },
  {
    id: 24,
    name: "Geração de Proposta Comercial Personalizada",
    category: "Vendas",
    description: "Cria propostas comerciais detalhadas e personalizadas, utilizando dados do cliente e do produto para destacar o ROI e acelerar o ciclo de vendas.",
    difficulty: "Avançado",
    useCases: ["Fechamento de vendas", "Propostas complexas", "Negociação"],
    prompt: "Você é um Gerador de Propostas. Crie uma proposta comercial para o cliente [NOME DO CLIENTE]. A proposta deve incluir: 1) Resumo Executivo (foco na dor do cliente); 2) Escopo de Serviço (com 3 entregáveis); 3) Preço (R$ [VALOR]); 4) ROI Estimado (em [MÉTRICA]). O tom deve ser formal e persuasivo.",
    minPlan: "Growth"
  },
  {
    id: 25,
    name: "Analisador de Objeções de Vendas",
    category: "Vendas",
    description: "Agente que analisa as objeções mais comuns levantadas pelos leads e gera um playbook de respostas eficazes para o time de vendas.",
    difficulty: "Básico",
    useCases: ["Treinamento de vendas", "Otimização de pitch", "Contorno de objeções"],
    prompt: "Você é um Analista de Objeções. Para o produto [PRODUTO], liste as 5 objeções mais comuns (ex: preço, concorrência, tempo). Para cada objeção, crie uma resposta de contorno de 2 frases que seja persuasiva e baseada em valor.",
    minPlan: "Starter"
  },
  {
    id: 26,
    name: "Estratégia de Follow-up Automatizado",
    category: "Vendas",
    description: "Cria uma sequência de follow-up por e-mail ou mensagem, otimizada para reengajar leads que pararam de responder, sem ser invasivo.",
    difficulty: "Intermediário",
    useCases: ["Reengajamento de leads", "Automação de vendas", "Aumento de taxa de resposta"],
    prompt: "Você é um Estrategista de Follow-up. Crie uma sequência de 3 e-mails de follow-up para um lead que não respondeu após a primeira reunião. O primeiro e-mail deve ser um 'check-in' amigável, o segundo deve adicionar valor (ex: um case study) e o terceiro deve ser um 'breakup e-mail' (última tentativa).",
    minPlan: "Starter"
  },
  {
    id: 27,
    name: "Análise de Causa Raiz de Perda (Lost Deals)",
    category: "Vendas",
    description: "Analisa dados de negócios perdidos (lost deals) para identificar a causa raiz da perda (preço, concorrência, falta de fit) e gerar insights para o time de vendas e produto.",
    difficulty: "Avançado",
    useCases: ["Otimização de funil", "Feedback de produto", "Treinamento de vendas"],
    prompt: "Você é um Analista de Perdas. Analise os dados dos 5 últimos negócios perdidos [DADOS DE PERDAS]. Classifique a principal razão da perda (ex: Preço, Concorrência, Funcionalidade). Sugira 1 ação para o time de vendas e 1 ação para o time de produto para evitar perdas futuras pela mesma razão.",
    minPlan: "Growth"
  },
  {
    id: 28,
    name: "Simulador de Pipeline de Vendas",
    category: "Vendas",
    description: "Simula o desempenho do pipeline de vendas com base em diferentes variáveis (taxa de conversão, volume de leads), ajudando a prever resultados e a planejar metas.",
    difficulty: "Avançado",
    useCases: ["Previsão de vendas", "Planejamento de metas", "Alocação de recursos"],
    prompt: "Você é um Simulador de Pipeline. Simule o resultado do pipeline de vendas com as seguintes variáveis: Leads/Mês [NÚMERO], Taxa de Conversão de Lead para Oportunidade [PORCENTAGEM], Taxa de Fechamento de Oportunidade [PORCENTAGEM], Ticket Médio [VALOR]. Qual será a Receita Mensal Recorrente (MRR) esperada?",
    minPlan: "Growth"
  },
  {
    id: 29,
    name: "Agente de Upsell e Cross-sell",
    category: "Vendas",
    description: "Identifica oportunidades de upsell (venda de planos superiores) e cross-sell (venda de produtos complementares) para clientes existentes, com base em seu histórico de uso e perfil.",
    difficulty: "Intermediário",
    useCases: ["Aumento de LTV", "Expansão de conta", "Retenção"],
    prompt: "Você é um Agente de Expansão de Conta. Analise o cliente [DADOS DO CLIENTE]. Ele utiliza o produto [PRODUTO ATUAL] e atende aos critérios para o produto [PRODUTO SUPERIOR/COMPLEMENTAR]? Se sim, crie um pitch de 3 frases focado no valor adicional que ele receberá.",
    minPlan: "Starter"
  },
  {
    id: 30,
    name: "Análise de Produtividade do Time de Vendas",
    category: "Vendas",
    description: "Analisa métricas de produtividade individual e de equipe (ligações, e-mails, reuniões) para identificar gargalos e sugerir treinamentos ou ajustes de processo.",
    difficulty: "Intermediário",
    useCases: ["Gestão de equipe", "Treinamento", "Otimização de processo"],
    prompt: "Você é um Analista de Produtividade. Analise as métricas do vendedor [NOME DO VENDEDOR]: [MÉTRICAS]. Onde ele está abaixo da média da equipe? Sugira 2 áreas de foco para treinamento e 1 ajuste de processo para melhorar seu desempenho.",
    minPlan: "Starter"
  },
  // Templates de Atendimento (31-40)
  {
    id: 31,
    name: "Gerador de FAQ Inteligente",
    category: "Atendimento",
    description: "Agente que analisa o histórico de tickets de suporte e gera automaticamente uma lista de Perguntas Frequentes (FAQ) e suas respostas, otimizando a base de conhecimento.",
    difficulty: "Intermediário",
    useCases: ["Base de conhecimento", "Autoatendimento", "Redução de tickets"],
    prompt: "Você é um Gerador de FAQ. Analise os 50 tickets de suporte mais recentes [DADOS DE TICKETS]. Identifique as 10 perguntas mais recorrentes. Para cada pergunta, crie uma resposta clara e concisa, com foco em autoatendimento.",
    minPlan: "Starter"
  },
  {
    id: 32,
    name: "Classificador de Urgência de Ticket",
    category: "Atendimento",
    description: "Classifica automaticamente a urgência e a prioridade de um ticket de suporte (Baixa, Média, Alta, Crítica) com base no conteúdo e no perfil do cliente.",
    difficulty: "Básico",
    useCases: ["Priorização de suporte", "SLA", "Roteamento de tickets"],
    prompt: "Você é um Classificador de Urgência. Receba o ticket [CONTEÚDO DO TICKET] do cliente [PERFIL DO CLIENTE]. Classifique a urgência como 'Baixa' (pergunta geral), 'Média' (problema não crítico), 'Alta' (impacto no negócio) ou 'Crítica' (sistema fora do ar). Justifique a classificação.",
    minPlan: "Starter"
  },
  {
    id: 33,
    name: "Agente de Resolução de Problemas (Nível 2)",
    category: "Atendimento",
    description: "Agente treinado para resolver problemas técnicos de Nível 2, utilizando a base de conhecimento e manuais técnicos para fornecer soluções detalhadas.",
    difficulty: "Avançado",
    useCases: ["Suporte técnico", "Resolução de bugs", "Redução de escalonamento"],
    prompt: "Você é um Agente de Suporte Nível 2. O cliente reportou o erro [DESCRIÇÃO DO ERRO]. Consulte a base de conhecimento [BASE DE CONHECIMENTO]. Identifique a causa provável e forneça um passo a passo de 3 etapas para a resolução. Se não houver solução, peça as informações [INFORMAÇÕES NECESSÁRIAS] para escalonar para o Nível 3.",
    minPlan: "Growth"
  },
  {
    id: 34,
    name: "Analisador de Satisfação do Cliente (CSAT/NPS)",
    category: "Atendimento",
    description: "Analisa as respostas de pesquisas de satisfação (CSAT, NPS) para identificar padrões, tendências e a causa raiz de notas baixas, gerando insights para melhoria do serviço.",
    difficulty: "Intermediário",
    useCases: ["Melhoria de serviço", "Análise de feedback", "Gestão de qualidade"],
    prompt: "Você é um Analista de Satisfação. Analise as 10 últimas respostas de NPS [RESPOSTAS NPS]. Classifique os clientes em Promotores, Neutros e Detratores. Qual é o principal motivo citado pelos Detratores? Sugira 1 ação para converter um Detrator em Neutro.",
    minPlan: "Starter"
  },
  {
    id: 35,
    name: "Gerador de Respostas Empáticas",
    category: "Atendimento",
    description: "Cria respostas de suporte que combinam precisão técnica com empatia e tom de voz da marca, melhorando a experiência do cliente em momentos de frustração.",
    difficulty: "Básico",
    useCases: ["Comunicação com cliente", "Gestão de crise", "Treinamento de agentes"],
    prompt: "Você é um Agente Empático. O cliente escreveu [MENSAGEM DO CLIENTE]. Sua resposta deve ser: 1) Reconhecer a frustração; 2) Informar a ação que será tomada; 3) Garantir que o problema será resolvido. Mantenha o tom de voz [TOM DE VOZ DA MARCA].",
    minPlan: "Starter"
  },
  {
    id: 36,
    name: "Monitoramento de Redes Sociais para Suporte",
    category: "Atendimento",
    description: "Monitora menções à marca em redes sociais e fóruns, identificando solicitações de suporte e direcionando-as para o canal oficial de atendimento.",
    difficulty: "Intermediário",
    useCases: ["Suporte proativo", "Gestão de reputação", "Monitoramento de marca"],
    prompt: "Você é um Monitor de Suporte Social. Identifique menções à [NOME DA MARCA] nas últimas 24 horas que contenham palavras-chave como 'ajuda', 'problema', 'não funciona'. Se encontrar, gere uma resposta padrão convidando o usuário a abrir um ticket no [LINK DO SUPORTE].",
    minPlan: "Starter"
  },
  {
    id: 37,
    name: "Agente de Reembolso e Cancelamento",
    category: "Atendimento",
    description: "Gerencia o processo de reembolso e cancelamento de forma automatizada, garantindo a conformidade com as políticas da empresa e coletando feedback valioso.",
    difficulty: "Avançado",
    useCases: ["Gestão financeira", "Retenção", "Compliance"],
    prompt: "Você é um Agente de Retenção/Reembolso. O cliente solicitou o cancelamento/reembolso [MOTIVO]. Se o motivo for [MOTIVO DE RETENÇÃO], ofereça a alternativa [OFERTA DE RETENÇÃO]. Se não, inicie o processo de reembolso e colete o feedback [PERGUNTA DE FEEDBACK].",
    minPlan: "Growth"
  },
  {
    id: 38,
    name: "Análise de Tempo Médio de Atendimento (TMA)",
    category: "Atendimento",
    description: "Analisa o Tempo Médio de Atendimento (TMA) por agente e por tipo de ticket, identificando ineficiências e sugerindo melhorias no fluxo de trabalho.",
    difficulty: "Intermediário",
    useCases: ["Gestão de performance", "Otimização de processo", "Treinamento"],
    prompt: "Você é um Analista de TMA. Analise os dados de TMA dos agentes [DADOS DE TMA]. Qual agente tem o TMA mais alto? Qual é o tipo de ticket que mais consome tempo? Sugira 2 mudanças no processo para reduzir o TMA em 10%.",
    minPlan: "Starter"
  },
  {
    id: 39,
    name: "Gerador de Resumos de Interação",
    category: "Atendimento",
    description: "Cria resumos concisos e precisos de longas interações de chat ou e-mail, facilitando a transferência de contexto entre agentes e o registro no CRM.",
    difficulty: "Básico",
    useCases: ["Registro de CRM", "Transferência de agente", "Auditoria"],
    prompt: "Você é um Resumidor de Interações. Receba a transcrição do chat [TRANSCRICÃO]. Crie um resumo de 3 frases que inclua: 1) O problema inicial; 2) A solução fornecida; 3) O status atual do cliente. O tom deve ser objetivo e informativo.",
    minPlan: "Starter"
  },
  {
    id: 40,
    name: "Agente de Feedback de Produto (Feature Request)",
    category: "Atendimento",
    description: "Coleta e organiza solicitações de novas funcionalidades (feature requests) dos clientes, classificando-as por impacto e frequência para o time de produto.",
    difficulty: "Avançado",
    useCases: ["Roadmap de produto", "Inovação", "Priorização de desenvolvimento"],
    prompt: "Você é um Agente de Feedback de Produto. Analise as 20 últimas solicitações de funcionalidade [SOLICITAÇÕES]. Classifique-as em 3 categorias (ex: Usabilidade, Performance, Nova Feature). Qual é a funcionalidade mais solicitada? Sugira a prioridade (Alta/Média/Baixa) para o time de produto.",
    minPlan: "Growth"
  },
  // Templates de Produtividade (41-50)
  {
    id: 41,
    name: "Assistente de Reuniões Inteligente",
    category: "Produtividade",
    description: "Agente que transcreve, resume e gera itens de ação (action items) de reuniões, integrando-se com ferramentas de calendário e gestão de projetos.",
    difficulty: "Intermediário",
    useCases: ["Gestão de tempo", "Documentação", "Follow-up"],
    prompt: "Você é um Assistente de Reuniões. Receba a transcrição da reunião [TRANSCRICÃO]. Gere: 1) Um resumo executivo de 5 linhas; 2) Uma lista de 3 itens de ação (quem, o quê, prazo); 3) Uma lista de 5 decisões tomadas. O tom deve ser formal e preciso.",
    minPlan: "Starter"
  },
  {
    id: 42,
    name: "Gerador de E-mails Profissionais",
    category: "Produtividade",
    description: "Cria e-mails profissionais e bem estruturados a partir de rascunhos ou instruções curtas, otimizando a comunicação interna e externa.",
    difficulty: "Básico",
    useCases: ["Comunicação interna", "E-mail formal", "Economia de tempo"],
    prompt: "Você é um Gerador de E-mails. Crie um e-mail para [DESTINATÁRIO] com o objetivo de [OBJETIVO]. O e-mail deve ser [TOM DE VOZ] e incluir a informação [INFORMAÇÃO CHAVE].",
    minPlan: "Starter"
  },
  {
    id: 43,
    name: "Organizador de Tarefas e Prioridades (Matriz Eisenhower)",
    category: "Produtividade",
    description: "Agente que recebe uma lista de tarefas e as classifica automaticamente na Matriz Eisenhower (Urgente/Importante) para ajudar na priorização diária.",
    difficulty: "Intermediário",
    useCases: ["Gestão de tarefas", "Priorização", "Foco"],
    prompt: "Você é um Organizador de Tarefas. Classifique as seguintes tarefas [LISTA DE TAREFAS] na Matriz Eisenhower: 1) Fazer Agora (Urgente e Importante); 2) Agendar (Não Urgente e Importante); 3) Delegar (Urgente e Não Importante); 4) Eliminar (Não Urgente e Não Importante).",
    minPlan: "Starter"
  },
  {
    id: 44,
    name: "Agente de Pesquisa Rápida e Síntese",
    category: "Produtividade",
    description: "Realiza pesquisas rápidas na web sobre um tópico e sintetiza as informações mais relevantes em um formato de bullet points, economizando tempo de pesquisa.",
    difficulty: "Básico",
    useCases: ["Pesquisa de mercado", "Estudo rápido", "Geração de conteúdo"],
    prompt: "Você é um Agente de Síntese. Pesquise sobre [TÓPICO]. Encontre 3 fatos chave e 2 estatísticas relevantes. Apresente o resultado em bullet points.",
    minPlan: "Starter"
  },
  {
    id: 45,
    name: "Gerador de Relatórios Executivos",
    category: "Produtividade",
    description: "Cria relatórios executivos concisos e visuais a partir de dados brutos ou relatórios longos, focando nos KPIs e nas conclusões mais importantes.",
    difficulty: "Avançado",
    useCases: ["Comunicação com diretoria", "Relatórios mensais", "Análise de desempenho"],
    prompt: "Você é um Gerador de Relatórios Executivos. Receba o relatório detalhado [RELATÓRIO]. Crie um resumo executivo de 1 página que inclua: 1) Os 3 principais KPIs (com valores); 2) A principal conclusão; 3) 2 recomendações de ação. O tom deve ser direto e profissional.",
    minPlan: "Growth"
  },
  {
    id: 46,
    name: "Agente de Tradução e Localização",
    category: "Produtividade",
    description: "Traduz documentos e textos com precisão, adaptando a linguagem e o contexto cultural (localização) para diferentes mercados.",
    difficulty: "Básico",
    useCases: ["Expansão internacional", "Comunicação global", "Documentação"],
    prompt: "Você é um Agente de Localização. Traduza o texto [TEXTO] para [IDIOMA]. Adapte a linguagem para o contexto cultural de [PAÍS], garantindo que o tom [TOM DE VOZ] seja mantido.",
    minPlan: "Starter"
  },
  {
    id: 47,
    name: "Otimizador de Documentos (Clareza e Concisão)",
    category: "Produtividade",
    description: "Revisa documentos longos e complexos, melhorando a clareza, a concisão e a estrutura, tornando-os mais fáceis de ler e entender.",
    difficulty: "Intermediário",
    useCases: ["Revisão de contratos", "Documentação técnica", "Comunicação interna"],
    prompt: "Você é um Otimizador de Documentos. Receba o parágrafo [PARÁGRAFO]. Reescreva-o para ser 30% mais conciso, mantendo o significado original. O foco é na clareza e na eliminação de jargões desnecessários.",
    minPlan: "Starter"
  },
  {
    id: 48,
    name: "Gerador de Apresentações (Outline)",
    category: "Produtividade",
    description: "Cria o outline (estrutura) de uma apresentação (PPT/Slides) a partir de um tópico, definindo o fluxo lógico e o conteúdo de cada slide.",
    difficulty: "Intermediário",
    useCases: ["Criação de slides", "Pitch de vendas", "Treinamento"],
    prompt: "Você é um Gerador de Apresentações. Crie o outline de uma apresentação de 10 slides sobre [TÓPICO]. Para cada slide, defina o título e 3 bullet points de conteúdo. O objetivo da apresentação é [OBJETIVO].",
    minPlan: "Starter"
  },
  {
    id: 49,
    name: "Agente de Análise de Dados (SQL/Python)",
    category: "Produtividade",
    description: "Agente que recebe uma pergunta em linguagem natural e gera o código SQL ou Python (Pandas) necessário para extrair e analisar os dados, acelerando a análise.",
    difficulty: "Avançado",
    useCases: ["Análise de dados", "Business Intelligence", "Relatórios ad-hoc"],
    prompt: "Você é um Analista de Dados. Para a tabela de banco de dados [ESQUEMA DA TABELA], escreva a query SQL que responde à pergunta: [PERGUNTA EM LINGUAGEM NATURAL].",
    minPlan: "Growth"
  },
  {
    id: 50,
    name: "Assistente de Brainstorming e Ideação",
    category: "Produtividade",
    description: "Facilita sessões de brainstorming, gerando ideias criativas, avaliando-as e ajudando a refinar os conceitos mais promissores.",
    difficulty: "Básico",
    useCases: ["Inovação", "Resolução de problemas", "Criação de campanhas"],
    prompt: "Você é um Facilitador de Brainstorming. Gere 10 ideias para [TEMA DO BRAINSTORMING]. Use a técnica 'Pensamento Lateral'. Para as 3 melhores ideias, sugira um próximo passo de validação.",
    minPlan: "Starter"
  }
];

// Arquiteturas de Fluxos
const architectures = [
  {
    id: 1,
    name: "Sistema de Atendimento Multi-Canal 2.0",
    category: "Atendimento",
    description: "Uma arquitetura robusta de 5 agentes que integra e gerencia interações de clientes de múltiplos canais (WhatsApp, Chat, E-mail), roteando, analisando o sentimento e escalonando para o agente humano correto, garantindo um SLA de 95%.",
    difficulty: "Avançado",
    agentCount: 5,
    components: [
      "Agente de Ingestão (Coleta e Normalização de Dados)",
      "Agente de Roteamento Inteligente (Direciona para o Agente Correto)",
      "Agente de Análise de Sentimento (Classifica a urgência e o humor)",
      "Agente de Resposta de Primeiro Nível (Respostas automáticas e FAQ)",
      "Agente de Escalonamento e Notificação (Alerta o agente humano e registra no CRM)"
    ],
    integrations: ["CRM (Salesforce/HubSpot)", "Plataforma de E-mail", "API de WhatsApp", "Slack/Teams"],
    implementationTime: "4-6 semanas",
    minPlan: "Growth"
  },
  {
    id: 2,
    name: "Pipeline de Inteligência Competitiva",
    category: "Inteligência de Mercado",
    description: "O pipeline mais completo para monitorar a concorrência. 8 agentes trabalham 24/7 para coletar, limpar, analisar, sintetizar e distribuir informações estratégicas sobre o mercado, transformando dados brutos em vantagem competitiva.",
    difficulty: "Avançado",
    agentCount: 8,
    components: [
      "Agente de Coleta de Dados (Web Scraping e APIs)",
      "Agente de Limpeza e Normalização (Tratamento de dados brutos)",
      "Agente de Análise de Preços e Produtos (Identifica mudanças)",
      "Agente de Análise de Sentimento de Mercado (O que o mercado diz)",
      "Agente de Síntese Executiva (Cria resumos para a diretoria)",
      "Agente de Alertas Críticos (Notifica sobre ações imediatas)",
      "Agente de Armazenamento (Grava no Data Warehouse)",
      "Agente de Distribuição (Envia relatórios por e-mail/Slack)"
    ],
    integrations: ["APIs de Notícias Financeiras", "Data Warehouse (Snowflake/BigQuery)", "Slack", "Email"],
    implementationTime: "6-8 semanas",
    minPlan: "Growth"
  },
  {
    id: 3,
    name: "Assistente de Vendas Proativo",
    category: "Vendas",
    description: "Um assistente de 4 agentes que não apenas qualifica, mas também enriquece leads, personaliza a abordagem de vendas e agenda reuniões automaticamente, aumentando a taxa de conversão em 30%.",
    difficulty: "Intermediário",
    agentCount: 4,
    components: [
      "Agente de Qualificação (Score e Validação de Leads)",
      "Agente de Enriquecimento de Dados (Busca informações de mercado)",
      "Agente de Personalização de Abordagem (Cria o pitch ideal)",
      "Agente de Agendamento (Integração com Calendário e Follow-up)"
    ],
    integrations: ["CRM (Pipedrive/RD Station)", "Email Marketing", "Calendário (Google/Outlook)"],
    implementationTime: "3-4 semanas",
    minPlan: "Starter"
  },
  {
    id: 4,
    name: "Fábrica de Conteúdo Otimizado (SEO)",
    category: "Marketing",
    description: "Uma fábrica de 6 agentes que automatiza a criação de conteúdo de alta qualidade, desde a pesquisa de palavras-chave até a publicação otimizada para SEO, garantindo um fluxo constante de material relevante.",
    difficulty: "Intermediário",
    agentCount: 6,
    components: [
      "Agente de Pesquisa de Keywords (Identifica lacunas de SEO)",
      "Agente de Ideação e Títulos (Criação de temas e headlines)",
      "Agente de Redação (Gera o rascunho do artigo)",
      "Agente de Revisão e Fatos (Verifica a precisão e o tom)",
      "Agente de Otimização SEO (Adiciona tags, links internos e meta-descrições)",
      "Agente de Publicação (Integração com CMS)"
    ],
    integrations: ["Ferramentas de SEO (SEMRush/Ahrefs)", "CMS (WordPress/Webflow)", "Google Docs"],
    implementationTime: "3-4 semanas",
    minPlan: "Growth"
  },
  {
    id: 5,
    name: "Sistema de Análise de Feedback 360º",
    category: "Inteligência de Mercado",
    description: "Processa e analisa feedback de clientes de todas as fontes (NPS, redes sociais, reviews) em tempo real, classificando, extraindo insights e gerando alertas para a equipe de Customer Success e Produto.",
    difficulty: "Intermediário",
    agentCount: 5,
    components: [
      "Agente de Coleta (Ingestão de dados de diversas fontes)",
      "Agente de Classificação (NPS, Categoria, Urgência)",
      "Agente de Análise de Sentimento (Identifica o humor do cliente)",
      "Agente de Extração de Insights (Identifica a causa raiz da satisfação/insatisfação)",
      "Agente de Alertas (Notifica a equipe responsável)"
    ],
    integrations: ["Plataformas de Pesquisa (Typeform/SurveyMonkey)", "APIs de Redes Sociais", "Slack"],
    implementationTime: "2-3 semanas",
    minPlan: "Starter"
  },
  // Arquiteturas de Marketing (6-7)
  {
    id: 6,
    name: "Pipeline de Geração de Leads e Nutrição",
    category: "Marketing",
    description: "Uma arquitetura de 7 agentes que automatiza a jornada do lead, desde a captura (formulários, landing pages) até a nutrição personalizada e a entrega qualificada para vendas (MQL).",
    difficulty: "Avançado",
    agentCount: 7,
    components: [
      "Agente de Captura (Integração com formulários)",
      "Agente de Enriquecimento (Busca dados adicionais do lead)",
      "Agente de Segmentação (Divide leads por persona e interesse)",
      "Agente de Nutrição (Gera e-mails e conteúdo personalizado)",
      "Agente de Lead Scoring (Calcula a pontuação de MQL)",
      "Agente de Alerta de MQL (Notifica vendas)",
      "Agente de Feedback (Mede a eficácia da nutrição)"
    ],
    integrations: ["CRM", "Plataforma de E-mail Marketing", "Landing Page Builder"],
    implementationTime: "4-6 semanas",
    minPlan: "Growth"
  },
  {
    id: 7,
    name: "Otimizador de Campanhas de Mídia Paga",
    category: "Marketing",
    description: "Sistema de 5 agentes que monitora o desempenho de campanhas de anúncios em tempo real, ajustando lances, pausando anúncios de baixo desempenho e otimizando o orçamento para o melhor ROI.",
    difficulty: "Avançado",
    agentCount: 5,
    components: [
      "Agente de Monitoramento de KPIs (CTR, CPA, ROAS)",
      "Agente de Análise de Causa Raiz (Identifica o porquê do baixo desempenho)",
      "Agente de Otimização de Lances (Ajusta o bid em tempo real)",
      "Agente de Teste A/B (Sugere e executa testes de criativos)",
      "Agente de Relatório de Performance (Gera insights diários)"
    ],
    integrations: ["APIs de Google Ads/Facebook Ads", "Data Warehouse", "Slack"],
    implementationTime: "6-8 semanas",
    minPlan: "Growth"
  },
  // Arquiteturas de Vendas (8-10)
  {
    id: 8,
    name: "Máquina de Prospecção Outbound Automatizada",
    category: "Vendas",
    description: "Uma máquina de 6 agentes que identifica, qualifica, personaliza a abordagem e executa a prospecção outbound (cold e-mail, LinkedIn) de forma escalável e humanizada, gerando um fluxo constante de reuniões qualificadas.",
    difficulty: "Avançado",
    agentCount: 6,
    components: [
      "Agente de Geração de Lista (Busca leads no ICP)",
      "Agente de Enriquecimento de Dados (Valida e completa informações)",
      "Agente de Personalização de Copy (Cria e-mails únicos)",
      "Agente de Sequência de Follow-up (Gerencia a cadência)",
      "Agente de Agendamento (Integração com calendário)",
      "Agente de Análise de Resposta (Classifica as respostas dos leads)"
    ],
    integrations: ["CRM", "Ferramentas de Prospecção (Apollo/Sales Navigator)", "Calendário"],
    implementationTime: "4-6 semanas",
    minPlan: "Growth"
  },
  {
    id: 9,
    name: "Assistente de Fechamento de Negócios (Deal Closer)",
    category: "Vendas",
    description: "Sistema de 5 agentes que apoia o vendedor nas etapas finais do funil, analisando propostas, contornando objeções complexas e prevendo a probabilidade de fechamento, acelerando o ciclo de vendas.",
    difficulty: "Intermediário",
    agentCount: 5,
    components: [
      "Agente de Análise de Proposta (Revisão de risco e valor)",
      "Agente de Contorno de Objeções (Sugere respostas em tempo real)",
      "Agente de Previsão de Fechamento (Calcula a probabilidade)",
      "Agente de Documentação (Gera o contrato final)",
      "Agente de Follow-up Pós-Proposta (Gerencia a cadência final)"
    ],
    integrations: ["CRM", "Ferramentas de Assinatura Eletrônica", "Base de Conhecimento"],
    implementationTime: "3-4 semanas",
    minPlan: "Growth"
  },
  {
    id: 10,
    name: "Sistema de Análise Preditiva de Churn",
    category: "Vendas",
    description: "Um sistema de 4 agentes que utiliza modelos de Machine Learning para identificar clientes em risco de cancelamento, acionando campanhas de retenção personalizadas e medindo o impacto das intervenções.",
    difficulty: "Avançado",
    agentCount: 4,
    components: [
      "Agente de Coleta de Dados (Uso, Suporte, Faturamento)",
      "Agente de Análise Preditiva (Roda o modelo de ML)",
      "Agente de Identificação de Risco (Gera a lista de clientes em risco)",
      "Agente de Intervenção (Sugere a ação de retenção e mede o resultado)"
    ],
    integrations: ["CRM", "Analytics (Mixpanel/Google Analytics)", "Email Marketing"],
    implementationTime: "3-4 semanas",
    minPlan: "Growth"
  },
  // Arquiteturas de Atendimento (11-12)
  {
    id: 11,
    name: "Central de Ajuda Inteligente (Self-Service)",
    category: "Atendimento",
    description: "Arquitetura de 4 agentes focada em autoatendimento, que mantém a base de conhecimento (FAQ, tutoriais) sempre atualizada e usa IA para responder a 80% das dúvidas dos clientes sem intervenção humana.",
    difficulty: "Intermediário",
    agentCount: 4,
    components: [
      "Agente de Monitoramento de Dúvidas (Identifica perguntas frequentes)",
      "Agente de Geração de Conteúdo (Cria e atualiza artigos de FAQ)",
      "Agente de Busca Semântica (Melhora a busca na base de conhecimento)",
      "Agente de Resposta (Integração com o widget de chat)"
    ],
    integrations: ["Plataforma de Help Desk (Zendesk/Freshdesk)", "CMS da Base de Conhecimento"],
    implementationTime: "2-3 semanas",
    minPlan: "Starter"
  },
  {
    id: 12,
    name: "Sistema de Feedback e Melhoria Contínua",
    category: "Atendimento",
    description: "Sistema de 5 agentes que transforma o feedback do cliente (tickets, pesquisas) em um ciclo de melhoria contínua, roteando insights diretamente para os times de Produto e Engenharia.",
    difficulty: "Avançado",
    agentCount: 5,
    components: [
      "Agente de Coleta de Feedback (Ingestão de dados)",
      "Agente de Classificação de Categoria (Bug, Feature Request, Dúvida)",
      "Agente de Priorização (Calcula o impacto e a frequência)",
      "Agente de Roteamento (Envia para o time correto - Slack/Jira)",
      "Agente de Follow-up (Notifica o cliente sobre a resolução)"
    ],
    integrations: ["Jira/Trello", "Slack/Teams", "Plataformas de Pesquisa"],
    implementationTime: "4-6 semanas",
    minPlan: "Growth"
  },
  // Arquiteturas de Produtividade (13-15)
  {
    id: 13,
    name: "Assistente de Gestão de Projetos Ágil",
    category: "Produtividade",
    description: "Um assistente de 6 agentes que automatiza tarefas de gestão de projetos (Scrum/Kanban), como criação de tarefas, estimativa de esforço, monitoramento de progresso e geração de relatórios de status.",
    difficulty: "Avançado",
    agentCount: 6,
    components: [
      "Agente de Ingestão de Requisitos (Transforma texto em tarefas)",
      "Agente de Estimativa de Esforço (Calcula o tempo de execução)",
      "Agente de Alocação de Recursos (Atribui tarefas à equipe)",
      "Agente de Monitoramento de Progresso (Atualiza o status)",
      "Agente de Alerta de Bloqueio (Notifica sobre impedimentos)",
      "Agente de Relatório de Status (Gera o Daily Scrum Report)"
    ],
    integrations: ["Jira/Trello/Asana", "Slack/Teams", "Calendário"],
    implementationTime: "4-6 semanas",
    minPlan: "Growth"
  },
  {
    id: 14,
    name: "Pipeline de Análise de Dados e BI",
    category: "Produtividade",
    description: "Arquitetura de 5 agentes que automatiza a extração, transformação e carregamento (ETL) de dados, gerando relatórios de Business Intelligence (BI) e dashboards em linguagem natural.",
    difficulty: "Avançado",
    agentCount: 5,
    components: [
      "Agente de Extração de Dados (Conexão com fontes)",
      "Agente de Transformação (Limpeza e modelagem de dados)",
      "Agente de Carregamento (Gravação no Data Warehouse)",
      "Agente de Geração de Query (Traduz pergunta em SQL/Python)",
      "Agente de Visualização (Cria gráficos e dashboards)"
    ],
    integrations: ["Bancos de Dados (PostgreSQL/MySQL)", "Data Warehouse", "Ferramentas de BI (Tableau/Power BI)"],
    implementationTime: "6-8 semanas",
    minPlan: "Growth"
  },
  {
    id: 15,
    name: "Assistente de Conformidade e Auditoria",
    category: "Produtividade",
    description: "Sistema de 4 agentes que monitora processos internos, garantindo a conformidade com regulamentos (LGPD, SOX) e gerando trilhas de auditoria automáticas.",
    difficulty: "Avançado",
    agentCount: 4,
    components: [
      "Agente de Monitoramento de Processos (Verifica a execução correta)",
      "Agente de Análise de Conformidade (Compara com as regras)",
      "Agente de Alerta de Não Conformidade (Notifica o time de Compliance)",
      "Agente de Geração de Trilha de Auditoria (Documenta todas as ações)"
    ],
    integrations: ["Sistemas Internos (ERP/CRM)", "Plataformas de Documentação"],
    implementationTime: "4-6 semanas",
    minPlan: "Growth"
  }
];

// Questões de Diagnóstico
const diagnosticQuestions = [
  {
    id: 1,
    question: "Qual é o seu nível atual de automação de processos de negócio?",
    type: "single",
    category: "baseline",
    options: [
      { value: "none", label: "Nenhum processo automatizado", score: 0 },
      { value: "basic", label: "Automações básicas (e-mail, planilhas)", score: 25 },
      { value: "intermediate", label: "Automações de fluxo de trabalho (CRM, ERP)", score: 50 },
      { value: "advanced", label: "Sistemas de IA e agentes em produção", score: 75 }
    ]
  },
  {
    id: 2,
    question: "Seus dados estão prontos para serem consumidos por IA?",
    type: "single",
    category: "data",
    options: [
      { value: "scattered", label: "Dados em silos, inconsistentes e desorganizados", score: 0 },
      { value: "centralized", label: "Dados centralizados, mas exigem limpeza manual", score: 25 },
      { value: "structured", label: "Dados estruturados, limpos e acessíveis via API", score: 50 },
      { value: "optimized", label: "Dados otimizados, em tempo real e com governança", score: 75 }
    ]
  },
  {
    id: 3,
    question: "Qual o nível de expertise da sua equipe em arquitetura de agentes de IA?",
    type: "single",
    category: "team",
    options: [
      { value: "none", label: "Nenhum conhecimento técnico", score: 0 },
      { value: "basic", label: "Conhecimento em prompts básicos (ChatGPT)", score: 25 },
      { value: "intermediate", label: "Conhecimento em frameworks de agentes (LangChain, CrewAI)", score: 50 },
      { value: "advanced", label: "Capacidade de desenvolver e manter sistemas multi-agente", score: 75 }
    ]
  },
  {
    id: 4,
    question: "Qual é o seu foco principal ao implementar agentes de IA?",
    type: "single",
    category: "pain",
    options: [
      { value: "cost", label: "Redução de custos operacionais", score: 25 },
      { value: "efficiency", label: "Aumento de eficiência e velocidade", score: 25 },
      { value: "revenue", label: "Aumento de receita e vendas", score: 25 },
      { value: "innovation", label: "Inovação e criação de novos produtos", score: 75 }
    ]
  },
  {
    id: 5,
    question: "Sua infraestrutura de TI suporta a demanda de sistemas de IA?",
    type: "single",
    category: "infrastructure",
    options: [
      { value: "no", label: "Infraestrutura local e limitada", score: 0 },
      { value: "partial", label: "Cloud básica, mas sem recursos de IA", score: 25 },
      { value: "yes", label: "Cloud robusta com serviços de IA (AWS, Azure, GCP)", score: 50 },
      { value: "advanced", label: "Infraestrutura serverless e escalável para IA", score: 75 }
    ]
  },
  {
    id: 6,
    question: "Qual é o seu nível de urgência para iniciar a implementação?",
    type: "single",
    category: "timeline",
    options: [
      { value: "exploratory", label: "Exploratório (sem pressa)", score: 0 },
      { value: "short", label: "Curto prazo (1-3 meses)", score: 25 },
      { value: "medium", label: "Médio prazo (3-6 meses)", score: 50 },
      { value: "urgent", label: "Urgente (próximas semanas)", score: 75 }
    ]
  },
  {
    id: 7,
    question: "Você tem um orçamento definido para projetos de IA?",
    type: "single",
    category: "budget",
    options: [
      { value: "none", label: "Nenhum orçamento definido", score: 0 },
      { value: "low", label: "Orçamento baixo (< R$ 50k)", score: 25 },
      { value: "medium", label: "Orçamento médio (R$ 50k - R$ 200k)", score: 50 },
      { value: "high", label: "Orçamento alto (> R$ 200k)", score: 75 }
    ]
  },
  {
    id: 8,
    question: "Qual é o seu nível de disposição para mudança organizacional?",
    type: "single",
    category: "change",
    options: [
      { value: "low", label: "Baixo (resistência à mudança)", score: 0 },
      { value: "medium", label: "Médio (disposto a pequenos ajustes)", score: 25 },
      { value: "high", label: "Alto (disposto a reestruturar processos)", score: 50 },
      { value: "very_high", label: "Muito alto (cultura de inovação e experimentação)", score: 75 }
    ]
  }
];

// Dados consolidados
export const mockData = {
  templates,
  architectures,
  diagnosticQuestions
};

export default mockData;
