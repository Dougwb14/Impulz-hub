# Impulz HUB

Plataforma completa de arquitetura e estratégia para agentes de IA. Estruture, organize e implemente seus agentes de IA de forma profissional.

## Características

- **50+ Templates de Prompts**: Biblioteca profissional de prompts organizados por categoria
- **15+ Arquiteturas de Fluxos**: Sistemas completos de multi-agentes documentados
- **Framework de Diagnóstico**: Avalie a maturidade da sua empresa em IA agêntica
- **Autenticação Real**: Login/Cadastro com Supabase
- **Interface Moderna**: Design responsivo e intuitivo
- **Dados Persistentes**: Integração com Supabase para armazenamento seguro

## Stack Tecnológico

- **Frontend**: React 19 + Vite
- **Autenticação**: Supabase Auth
- **Banco de Dados**: Supabase PostgreSQL
- **Styling**: Tailwind CSS
- **Ícones**: Lucide React
- **Roteamento**: React Router v7

## Instalação

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/Dougwb14/Impulz-hub.git
cd impulz-hub
```

2. Instale as dependências:
```bash
pnpm install
```

3. Configure as variáveis de ambiente:
Crie um arquivo `.env` na raiz do projeto:
```
VITE_SUPABASE_URL=https://jwssbzuisbdqsbafrrbm.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp3c3NienVpc2JkcXNiYWZycmJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM5OTA0NzksImV4cCI6MjA3OTU2NjQ3OX0.XVs7m5pcE5o-IUwSBeysrsA4K8ygGYsS4yG8Z_Ekvmo
```

4. Inicie o servidor de desenvolvimento:
```bash
pnpm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## Estrutura do Projeto

```
impulz-hub/
├── src/
│   ├── pages/
│   │   ├── Login.jsx          # Página de autenticação
│   │   ├── Dashboard.jsx      # Dashboard principal
│   │   ├── Templates.jsx      # Biblioteca de templates
│   │   ├── Architectures.jsx  # Galeria de arquiteturas
│   │   └── Diagnostic.jsx     # Framework de diagnóstico
│   ├── components/
│   │   └── Layout.jsx         # Layout compartilhado com sidebar
│   ├── data/
│   │   └── mockData.js        # Dados mockados (será substituído por Supabase)
│   ├── App.jsx                # Componente principal com roteamento
│   ├── App.css                # Estilos globais
│   ├── main.jsx               # Entrada da aplicação
│   └── supabaseClient.js      # Configuração do Supabase
├── index.html                 # HTML principal
├── vite.config.js             # Configuração do Vite
├── tailwind.config.js         # Configuração do Tailwind CSS
├── postcss.config.js          # Configuração do PostCSS
├── package.json               # Dependências e scripts
└── README.md                  # Este arquivo
```

## Funcionalidades Principais

### 1. Autenticação
- Login com email e senha
- Cadastro de novas contas
- Logout seguro
- Proteção de rotas

### 2. Dashboard
- Visão geral de métricas
- Ações rápidas para acessar funcionalidades
- Recursos em destaque

### 3. Biblioteca de Templates
- 50+ templates de prompts profissionais
- Filtros por categoria e dificuldade
- Busca por texto
- Visualização detalhada e cópia de prompts

### 4. Galeria de Arquiteturas
- 15+ arquiteturas de sistemas multi-agente
- Documentação completa de cada arquitetura
- Detalhes de componentes e integrações
- Informações de implementação

### 5. Framework de Diagnóstico
- 8 questões estruturadas
- Cálculo automático de score
- Classificação de maturidade em IA
- Recomendações personalizadas

## Banco de Dados

As seguintes tabelas foram criadas no Supabase:

### templates
- id (UUID)
- user_id (UUID)
- name (VARCHAR)
- description (TEXT)
- category (VARCHAR)
- difficulty (VARCHAR)
- prompt (TEXT)
- use_cases (TEXT[])
- min_plan (VARCHAR)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### architectures
- id (UUID)
- user_id (UUID)
- name (VARCHAR)
- description (TEXT)
- category (VARCHAR)
- difficulty (VARCHAR)
- agent_count (INTEGER)
- components (TEXT[])
- integrations (TEXT[])
- implementation_time (VARCHAR)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

### diagnostics
- id (UUID)
- user_id (UUID)
- score (INTEGER)
- max_score (INTEGER)
- percentage (INTEGER)
- maturity_level (VARCHAR)
- answers (JSONB)
- created_at (TIMESTAMP)

### user_preferences
- id (UUID)
- user_id (UUID)
- plan (VARCHAR)
- favorite_templates (UUID[])
- favorite_architectures (UUID[])
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

## Scripts Disponíveis

- `pnpm run dev` - Inicia o servidor de desenvolvimento
- `pnpm run build` - Faz build para produção
- `pnpm run preview` - Visualiza o build de produção localmente

## Deployment

### Vercel

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
3. Deploy automático a cada push para `main`

## Roadmap

- [ ] Integração com banco de dados para persistência de templates customizados
- [ ] Editor visual de prompts
- [ ] Construtor de fluxos agênticos com drag-and-drop
- [ ] Comunidade e fórum de usuários
- [ ] Sistema de pagamento e planos
- [ ] API pública para integrações
- [ ] Análise e métricas avançadas

## Contribuindo

Contribuições são bem-vindas! Por favor:

1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## Suporte

Para suporte, entre em contato através de:
- Email: support@impulzhub.com
- Website: https://impulzhub.com

## Autor

Desenvolvido por Impulz HUB - Plataforma de Arquitetura de Agentes de IA

---

**Versão**: 1.0.0  
**Última atualização**: Novembro de 2025
