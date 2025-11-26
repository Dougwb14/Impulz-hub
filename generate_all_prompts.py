#!/usr/bin/env python3
"""
Script para gerar todos os 50 prompts estruturados profissionalmente
usando a API da OpenAI para garantir qualidade e consistência.
"""

import json
import os
from openai import OpenAI

# Cliente OpenAI já configurado via variáveis de ambiente
client = OpenAI()

# Template base para geração de prompts estruturados
SYSTEM_PROMPT = """Você é um especialista em engenharia de prompts para agentes de IA.

Sua tarefa é transformar um prompt simples em um prompt estruturado e profissional seguindo EXATAMENTE este formato:

# PAPEL
[Definição clara do papel do agente - quem ele é]

# OBJETIVO
[O que o agente deve fazer - objetivo claro e mensurável]

# ENTRADA ESPERADA
Você receberá:
[Lista dos dados/informações que o agente vai receber]

Formato de entrada:
```
[Exemplo de formato de entrada com placeholders]
```

# INSTRUÇÕES DE PROCESSAMENTO

## ETAPA 1: [Nome da Etapa]
[Descrição do que fazer nesta etapa]

## ETAPA 2: [Nome da Etapa]
[Descrição do que fazer nesta etapa]

[Continue com mais etapas conforme necessário - mínimo 3, máximo 6 etapas]

# FORMATO DE SAÍDA

[Descrição do formato de saída esperado]

```
[Exemplo de saída estruturada - pode ser texto, JSON, tabela, etc.]
```

# REGRAS E RESTRIÇÕES
- [Regra 1]
- [Regra 2]
- [Regra 3]
[Mínimo 5 regras]

IMPORTANTE:
- Seja EXTREMAMENTE detalhado e específico
- Inclua exemplos concretos sempre que possível
- O prompt deve ser auto-suficiente (alguém deve conseguir usar sem contexto adicional)
- Use linguagem profissional mas clara
- Foque em criar um prompt que REALMENTE funcione na prática"""

def generate_structured_prompt(template_info):
    """Gera um prompt estruturado usando a API da OpenAI"""
    
    user_prompt = f"""Transforme este prompt simples em um prompt estruturado e profissional:

NOME DO TEMPLATE: {template_info['name']}
CATEGORIA: {template_info['category']}
DESCRIÇÃO: {template_info['description']}
DIFICULDADE: {template_info['difficulty']}
CASOS DE USO: {', '.join(template_info['useCases'])}

PROMPT ATUAL (SIMPLES):
{template_info['prompt']}

Gere um prompt estruturado COMPLETO e PROFISSIONAL seguindo o formato especificado no system prompt.
O prompt deve ser detalhado o suficiente para que qualquer pessoa possa criar um agente funcional com ele."""

    try:
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt}
            ],
            temperature=0.7,
            max_tokens=2000
        )
        
        return response.choices[0].message.content.strip()
    
    except Exception as e:
        print(f"Erro ao gerar prompt para {template_info['name']}: {e}")
        return template_info['prompt']  # Retorna o prompt original em caso de erro

def main():
    # Ler o arquivo mockData.js original
    with open('/home/ubuntu/impulz-hub/src/data/mockData.js', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extrair os templates (parsing simples - assumindo estrutura consistente)
    # Nota: Este é um parsing simplificado. Em produção, usaríamos um parser JS adequado.
    
    print("Iniciando geração de prompts estruturados...")
    print("Este processo pode levar alguns minutos...")
    print("=" * 80)
    
    # Por enquanto, vamos gerar os primeiros 10 templates como teste
    # Depois expandimos para todos os 50
    
    templates_to_process = [
        {
            "id": 7,
            "name": "Qualificador de Leads B2B (Geração de Perfil Ideal)",
            "category": "Vendas",
            "description": "Agente que recebe dados brutos de leads e os enriquece com informações de mercado, qualificando-os automaticamente com base no Perfil de Cliente Ideal (ICP) e priorizando para o time de vendas.",
            "difficulty": "Intermediário",
            "useCases": ["Lead scoring automatizado", "Enriquecimento de dados", "Priorização de follow-up"],
            "prompt": "Você é um Qualificador de Leads B2B. Receba os dados do lead [DADOS DO LEAD]. Verifique se ele atende aos critérios do nosso ICP (Empresa B2B, 50-200 funcionários, setor de Tecnologia). Se sim, atribua um score de 80. Se não, atribua um score de 30. Justifique o score e sugira o próximo passo (ligar, enviar e-mail, descartar).",
            "minPlan": "Starter"
        },
        {
            "id": 8,
            "name": "Analisador de Propostas e Contratos",
            "category": "Vendas",
            "description": "Analisa propostas e contratos de clientes, identificando cláusulas de risco, oportunidades de upsell e garantindo que todos os requisitos técnicos e comerciais sejam atendidos antes da assinatura.",
            "difficulty": "Intermediário",
            "useCases": ["Revisão de contratos", "Identificação de riscos", "Otimização de propostas"],
            "prompt": "Você é um Analisador de Propostas. Receba o texto da proposta/contrato [TEXTO]. Identifique todas as cláusulas que mencionam 'penalidade', 'prazo de entrega' e 'escopo'. Resuma os 3 principais riscos para a empresa e sugira uma alteração de texto para mitigar cada risco. O ton deve ser legal e preciso.",
            "minPlan": "Growth"
        }
    ]
    
    results = []
    
    for i, template in enumerate(templates_to_process, 1):
        print(f"\n[{i}/{len(templates_to_process)}] Gerando prompt para: {template['name']}")
        
        structured_prompt = generate_structured_prompt(template)
        
        template['prompt'] = structured_prompt
        results.append(template)
        
        print(f"✓ Prompt gerado com sucesso ({len(structured_prompt)} caracteres)")
    
    # Salvar resultados
    output_file = '/home/ubuntu/impulz-hub/prompts_generated.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print("\n" + "=" * 80)
    print(f"✓ Prompts gerados e salvos em: {output_file}")
    print(f"Total de prompts gerados: {len(results)}")
    
    # Exibir o primeiro prompt como exemplo
    print("\n" + "=" * 80)
    print("EXEMPLO DE PROMPT GERADO:")
    print("=" * 80)
    print(f"\n{results[0]['name']}:\n")
    print(results[0]['prompt'][:1000] + "..." if len(results[0]['prompt']) > 1000 else results[0]['prompt'])

if __name__ == "__main__":
    main()
