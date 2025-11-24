// Templates de Prompts
const templates = [
  {
    id: 1,
    name: "Análise de Cliente",
    category: "Inteligência de Mercado",
    description: "Analise feedback de clientes e extraia insights acionáveis",
    difficulty: "Intermediário",
    useCases: ["Análise de sentimento", "Identificação de padrões"],
    prompt: "Você é um especialista em análise de experiência do cliente...",
    minPlan: "Starter"
  },
  {
    id: 2,
    name: "Pesquisa Competitiva",
    category: "Inteligência de Mercado",
    description: "Monitore e analise ações dos concorrentes",
    difficulty: "Avançado",
    useCases: ["Monitoramento de concorrentes", "Análise de mercado"],
    prompt: "Você é um analista de inteligência competitiva...",
    minPlan: "Growth"
  },
  {
    id: 3,
    name: "Análise de Tendências",
    category: "Inteligência de Mercado",
    description: "Identifique tendências emergentes no seu mercado",
    difficulty: "Avançado",
    useCases: ["Previsão de tendências", "Análise de mercado"],
    prompt: "Você é um analista de tendências de mercado...",
    minPlan: "Growth"
  },
  {
    id: 4,
    name: "Copywriting de Vendas",
    category: "Marketing",
    description: "Crie copy persuasivo para campanhas de vendas",
    difficulty: "Intermediário",
    useCases: ["Email marketing", "Landing pages", "Anúncios"],
    prompt: "Você é um especialista em copywriting de vendas...",
    minPlan: "Starter"
  },
  {
    id: 5,
    name: "Gerador de Conteúdo",
    category: "Marketing",
    description: "Gere conteúdo de qualidade para redes sociais",
    difficulty: "Básico",
    useCases: ["Social media", "Blog posts", "Newsletters"],
    prompt: "Você é um especialista em criação de conteúdo...",
    minPlan: "Starter"
  },
  {
    id: 6,
    name: "Estratégia de SEO",
    category: "Marketing",
    description: "Desenvolva estratégias de SEO eficazes",
    difficulty: "Avançado",
    useCases: ["Pesquisa de keywords", "Otimização de conteúdo"],
    prompt: "Você é um especialista em SEO...",
    minPlan: "Growth"
  },
  {
    id: 7,
    name: "Qualificação de Leads",
    category: "Vendas",
    description: "Qualifique e priorize leads automaticamente",
    difficulty: "Intermediário",
    useCases: ["Lead scoring", "Segmentação", "Priorização"],
    prompt: "Você é um especialista em qualificação de leads...",
    minPlan: "Starter"
  },
  {
    id: 8,
    name: "Análise de Proposta",
    category: "Vendas",
    description: "Analise propostas de clientes e identifique oportunidades",
    difficulty: "Intermediário",
    useCases: ["Análise de propostas", "Identificação de gaps"],
    prompt: "Você é um analista de propostas de vendas...",
    minPlan: "Growth"
  },
  {
    id: 9,
    name: "Previsão de Churn",
    category: "Vendas",
    description: "Identifique clientes em risco de cancelamento",
    difficulty: "Avançado",
    useCases: ["Previsão de churn", "Retenção de clientes"],
    prompt: "Você é um especialista em previsão de churn...",
    minPlan: "Growth"
  },
  {
    id: 10,
    name: "Resposta Automática",
    category: "Atendimento",
    description: "Responda automaticamente a perguntas comuns",
    difficulty: "Básico",
    useCases: ["Suporte ao cliente", "FAQ", "Chatbot"],
    prompt: "Você é um especialista em atendimento ao cliente...",
    minPlan: "Starter"
  }
];

// Arquiteturas de Fluxos
const architectures = [
  {
    id: 1,
    name: "Sistema de Atendimento Multi-Canal",
    category: "Atendimento",
    description: "Sistema completo de atendimento integrado com múltiplos canais",
    difficulty: "Avançado",
    agentCount: 5,
    components: [
      "Agente de Roteamento",
      "Agente de Análise de Sentimento",
      "Agente de Resposta",
      "Agente de Escalonamento",
      "Agente de Feedback"
    ],
    integrations: ["Slack", "Email", "WhatsApp", "CRM"],
    implementationTime: "4-6 semanas"
  },
  {
    id: 2,
    name: "Pipeline de Inteligência de Mercado",
    category: "Inteligência de Mercado",
    description: "Pipeline automatizado para coleta e análise de inteligência de mercado",
    difficulty: "Avançado",
    agentCount: 8,
    components: [
      "Agente de Coleta",
      "Agente de Limpeza",
      "Agente de Análise",
      "Agente de Síntese",
      "Agente de Alertas",
      "Agente de Relatórios",
      "Agente de Armazenamento",
      "Agente de Distribuição"
    ],
    integrations: ["APIs de Notícias", "Redes Sociais", "Data Warehouse"],
    implementationTime: "6-8 semanas"
  },
  {
    id: 3,
    name: "Assistente de Vendas Inteligente",
    category: "Vendas",
    description: "Assistente que qualifica leads e prepara propostas",
    difficulty: "Intermediário",
    agentCount: 4,
    components: [
      "Agente de Qualificação",
      "Agente de Análise de Perfil",
      "Agente de Geração de Proposta",
      "Agente de Follow-up"
    ],
    integrations: ["CRM", "Email", "Calendário"],
    implementationTime: "3-4 semanas"
  },
  {
    id: 4,
    name: "Sistema de Geração de Conteúdo",
    category: "Marketing",
    description: "Sistema automatizado para geração e publicação de conteúdo",
    difficulty: "Intermediário",
    agentCount: 6,
    components: [
      "Agente de Pesquisa",
      "Agente de Ideação",
      "Agente de Redação",
      "Agente de Revisão",
      "Agente de Otimização",
      "Agente de Publicação"
    ],
    integrations: ["Blog", "Social Media", "Email"],
    implementationTime: "3-4 semanas"
  },
  {
    id: 5,
    name: "Pipeline de Análise de Feedback",
    category: "Inteligência de Mercado",
    description: "Processa e analisa feedback de clientes em tempo real",
    difficulty: "Intermediário",
    agentCount: 5,
    components: [
      "Agente de Coleta",
      "Agente de Classificação",
      "Agente de Análise de Sentimento",
      "Agente de Extração de Insights",
      "Agente de Alertas"
    ],
    integrations: ["Surveys", "Reviews", "Redes Sociais"],
    implementationTime: "2-3 semanas"
  },
  {
    id: 6,
    name: "Sistema de Onboarding Automatizado",
    category: "Atendimento",
    description: "Automatiza o processo de onboarding de novos clientes",
    difficulty: "Básico",
    agentCount: 3,
    components: [
      "Agente de Boas-vindas",
      "Agente de Treinamento",
      "Agente de Suporte"
    ],
    integrations: ["Email", "LMS", "Documentação"],
    implementationTime: "2-3 semanas"
  },
  {
    id: 7,
    name: "Assistente de P&D",
    category: "Inteligência de Mercado",
    description: "Apoia pesquisa e desenvolvimento com análise de dados",
    difficulty: "Avançado",
    agentCount: 5,
    components: [
      "Agente de Pesquisa",
      "Agente de Análise de Dados",
      "Agente de Síntese",
      "Agente de Documentação",
      "Agente de Recomendações"
    ],
    integrations: ["Databases", "APIs", "Ferramentas de BI"],
    implementationTime: "4-6 semanas"
  },
  {
    id: 8,
    name: "Sistema de Gestão de Crise",
    category: "Marketing",
    description: "Monitora e responde a crises em tempo real",
    difficulty: "Avançado",
    agentCount: 6,
    components: [
      "Agente de Monitoramento",
      "Agente de Detecção",
      "Agente de Análise",
      "Agente de Resposta",
      "Agente de Comunicação",
      "Agente de Relatório"
    ],
    integrations: ["Redes Sociais", "Notícias", "Slack"],
    implementationTime: "4-6 semanas"
  },
  {
    id: 9,
    name: "Pipeline de Qualificação de Leads",
    category: "Vendas",
    description: "Qualifica e prioriza leads automaticamente",
    difficulty: "Intermediário",
    agentCount: 5,
    components: [
      "Agente de Coleta",
      "Agente de Validação",
      "Agente de Scoring",
      "Agente de Segmentação",
      "Agente de Roteamento"
    ],
    integrations: ["CRM", "Email", "Formulários"],
    implementationTime: "2-3 semanas"
  },
  {
    id: 10,
    name: "Sistema de Análise de Churn",
    category: "Vendas",
    description: "Identifica e previne cancelamentos de clientes",
    difficulty: "Avançado",
    agentCount: 4,
    components: [
      "Agente de Coleta de Dados",
      "Agente de Análise Preditiva",
      "Agente de Identificação de Risco",
      "Agente de Intervenção"
    ],
    integrations: ["CRM", "Analytics", "Email"],
    implementationTime: "3-4 semanas"
  }
];

// Questões de Diagnóstico
const diagnosticQuestions = [
  {
    id: 1,
    question: "Sua empresa já utiliza alguma forma de IA ou automação?",
    type: "single",
    category: "baseline",
    options: [
      { value: "none", label: "Não, estamos começando agora", score: 0 },
      { value: "basic", label: "Sim, mas apenas ferramentas básicas", score: 25 },
      { value: "intermediate", label: "Sim, temos alguns processos automatizados", score: 50 },
      { value: "advanced", label: "Sim, temos sistemas avançados de IA", score: 75 }
    ]
  },
  {
    id: 2,
    question: "Qual é o nível de maturidade dos seus dados?",
    type: "single",
    category: "data",
    options: [
      { value: "scattered", label: "Dados espalhados em diferentes sistemas", score: 0 },
      { value: "centralized", label: "Dados centralizados mas desorganizados", score: 25 },
      { value: "structured", label: "Dados estruturados e bem organizados", score: 50 },
      { value: "optimized", label: "Dados otimizados e prontos para IA", score: 75 }
    ]
  },
  {
    id: 3,
    question: "Sua equipe tem conhecimento técnico em IA e automação?",
    type: "single",
    category: "team",
    options: [
      { value: "none", label: "Nenhum conhecimento", score: 0 },
      { value: "basic", label: "Conhecimento básico", score: 25 },
      { value: "intermediate", label: "Conhecimento intermediário", score: 50 },
      { value: "advanced", label: "Conhecimento avançado", score: 75 }
    ]
  },
  {
    id: 4,
    question: "Qual é o seu orçamento para implementação de IA?",
    type: "single",
    category: "budget",
    options: [
      { value: "low", label: "Baixo (< R$ 50k)", score: 0 },
      { value: "medium", label: "Médio (R$ 50k - R$ 200k)", score: 25 },
      { value: "high", label: "Alto (R$ 200k - R$ 500k)", score: 50 },
      { value: "very_high", label: "Muito alto (> R$ 500k)", score: 75 }
    ]
  },
  {
    id: 5,
    question: "Qual é a sua principal dor em relação a processos manuais?",
    type: "single",
    category: "pain",
    options: [
      { value: "time", label: "Consumem muito tempo", score: 25 },
      { value: "errors", label: "Geram muitos erros", score: 25 },
      { value: "cost", label: "Custam muito caro", score: 25 },
      { value: "all", label: "Todos os anteriores", score: 75 }
    ]
  },
  {
    id: 6,
    question: "Você tem infraestrutura de cloud?",
    type: "single",
    category: "infrastructure",
    options: [
      { value: "no", label: "Não", score: 0 },
      { value: "partial", label: "Parcialmente", score: 25 },
      { value: "yes", label: "Sim, temos", score: 50 },
      { value: "advanced", label: "Sim, com setup avançado", score: 75 }
    ]
  },
  {
    id: 7,
    question: "Qual é o seu timeline para implementação?",
    type: "single",
    category: "timeline",
    options: [
      { value: "urgent", label: "Urgente (próximas 2 semanas)", score: 0 },
      { value: "short", label: "Curto prazo (1-3 meses)", score: 25 },
      { value: "medium", label: "Médio prazo (3-6 meses)", score: 50 },
      { value: "long", label: "Longo prazo (6+ meses)", score: 75 }
    ]
  },
  {
    id: 8,
    question: "Qual é o seu nível de disposição para mudança organizacional?",
    type: "single",
    category: "change",
    options: [
      { value: "low", label: "Baixo", score: 0 },
      { value: "medium", label: "Médio", score: 25 },
      { value: "high", label: "Alto", score: 50 },
      { value: "very_high", label: "Muito alto", score: 75 }
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
