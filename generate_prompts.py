#!/usr/bin/env python3
"""
Script para gerar todos os 50 prompts estruturados profissionalmente
para o Impulz Hub de forma programática e eficiente.
"""

# Dados base dos templates (7-25) - vou criar prompts estruturados para cada um
templates_data = [
    {
        "id": 7,
        "name": "Qualificador de Leads B2B (Geração de Perfil Ideal)",
        "category": "Vendas",
        "description": "Agente que recebe dados brutos de leads e os enriquece com informações de mercado, qualificando-os automaticamente com base no Perfil de Cliente Ideal (ICP) e priorizando para o time de vendas.",
        "difficulty": "Intermediário",
        "useCases": ["Lead scoring automatizado", "Enriquecimento de dados", "Priorização de follow-up"],
        "minPlan": "Starter",
        "prompt_structure": {
            "role": "Qualificador de Leads B2B especializado em analisar dados brutos de leads, enriquecê-los com informações de mercado e qualificá-los automaticamente com base no Perfil de Cliente Ideal (ICP) da empresa.",
            "objective": "Receber dados de um lead, verificar se ele se encaixa no ICP definido, atribuir um score de qualificação (0-100) e recomendar a próxima ação para o time de vendas.",
            "input_format": """DADOS DO LEAD:
- Nome: [nome completo]
- Cargo: [cargo]
- Empresa: [nome da empresa]
- Setor: [setor de atuação]
- Tamanho da Empresa: [número de funcionários]
- Receita Anual: [faixa de receita]
- País/Região: [localização]
- Fonte do Lead: [origem]

PERFIL DE CLIENTE IDEAL (ICP):
- Tipo de Empresa: [B2B/B2C/B2B2C]
- Tamanho: [faixa de funcionários]
- Setor: [setores prioritários]
- Receita Mínima: [valor]
- Região: [regiões de atuação]
- Cargo do Decisor: [cargos-alvo]""",
            "steps": [
                "Verificação de Fit com ICP: Compare cada critério do lead com o ICP definido",
                "Cálculo de Score: Atribua pontos para cada critério atendido (0-100)",
                "Enriquecimento de Dados: Identifique informações adicionais relevantes (se disponível)",
                "Classificação de Prioridade: Alta (80-100), Média (50-79), Baixa (0-49)",
                "Recomendação de Ação: Defina o próximo passo ideal para o time de vendas"
            ],
            "output_format": """## RESULTADO DA QUALIFICAÇÃO

**Lead**: [Nome] - [Cargo] na [Empresa]

### Score de Qualificação: [0-100]

### Análise de Fit com ICP

| Critério | ICP Esperado | Lead Atual | Match | Pontos |
|----------|--------------|------------|-------|--------|
| Tipo de Empresa | [esperado] | [atual] | ✓/✗ | [pontos] |
| Tamanho | [esperado] | [atual] | ✓/✗ | [pontos] |
| Setor | [esperado] | [atual] | ✓/✗ | [pontos] |
| Receita | [esperado] | [atual] | ✓/✗ | [pontos] |
| Região | [esperado] | [atual] | ✓/✗ | [pontos] |
| Cargo Decisor | [esperado] | [atual] | ✓/✗ | [pontos] |

**Score Total**: [soma dos pontos]/100

### Classificação
- **Prioridade**: [Alta/Média/Baixa]
- **Justificativa**: [Explicação do score]

### Dados Enriquecidos (se disponível)
- LinkedIn da empresa: [URL]
- Notícias recentes: [resumo]
- Tecnologias utilizadas: [lista]

### Próxima Ação Recomendada
**Ação**: [Ligar imediatamente / Enviar e-mail personalizado / Nutrir com conteúdo / Descartar]
**Razão**: [Por que essa ação é a mais adequada]
**Prioridade de Follow-up**: [Imediata (24h) / Curto Prazo (1 semana) / Longo Prazo (1 mês) / Não prioritário]

### Sugestão de Abordagem
[Texto sugerido para o primeiro contato, personalizado com base nos dados do lead]""",
            "rules": [
                "Seja objetivo e baseie o score apenas em dados fornecidos",
                "Se algum dado estiver faltando, indique claramente e ajuste o score proporcionalmente",
                "Priorize leads que atendem 80%+ dos critérios do ICP",
                "Para leads de baixo score, sugira ações de nutrição ou descarte",
                "Sempre personalize a sugestão de abordagem com informações específicas do lead"
            ]
        }
    },
    # Adicionar mais templates aqui...
]

def generate_structured_prompt(template_data):
    """Gera um prompt estruturado completo a partir dos dados do template"""
    ps = template_data["prompt_structure"]
    
    prompt = f"""# PAPEL
Você é um {ps['role']}

# OBJETIVO
{ps['objective']}

# ENTRADA ESPERADA
Você receberá:

```
{ps['input_format']}
```

# INSTRUÇÕES DE PROCESSAMENTO

"""
    
    for i, step in enumerate(ps['steps'], 1):
        prompt += f"## ETAPA {i}: {step.split(':')[0]}\n{step.split(':')[1] if ':' in step else ''}\n\n"
    
    prompt += f"""# FORMATO DE SAÍDA

```
{ps['output_format']}
```

# REGRAS E RESTRIÇÕES
"""
    
    for rule in ps['rules']:
        prompt += f"- {rule}\n"
    
    return prompt

# Gerar e imprimir o primeiro template como exemplo
if __name__ == "__main__":
    template = templates_data[0]
    prompt = generate_structured_prompt(template)
    print(f"=== Template #{template['id']}: {template['name']} ===\n")
    print(prompt)
    print("\n" + "="*80 + "\n")
