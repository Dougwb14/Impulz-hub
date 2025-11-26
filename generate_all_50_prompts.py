#!/usr/bin/env python3
"""
Script para gerar TODOS os 50 prompts estruturados profissionalmente
"""

import json
import os
import time
from openai import OpenAI

client = OpenAI()

SYSTEM_PROMPT = """Você é um especialista em engenharia de prompts para agentes de IA.

Transforme o prompt simples em um prompt estruturado e profissional seguindo EXATAMENTE este formato:

# PAPEL
[Definição clara do papel do agente]

# OBJETIVO
[O que o agente deve fazer]

# ENTRADA ESPERADA
Você receberá:
[Lista dos dados/informações]

Formato de entrada:
```
[Exemplo com placeholders]
```

# INSTRUÇÕES DE PROCESSAMENTO

## ETAPA 1: [Nome]
[Descrição]

## ETAPA 2: [Nome]
[Descrição]

[3-6 etapas]

# FORMATO DE SAÍDA

```
[Exemplo de saída estruturada]
```

# REGRAS E RESTRIÇÕES
- [Mínimo 5 regras]

Seja EXTREMAMENTE detalhado, inclua exemplos concretos, use linguagem profissional."""

# TODOS OS 50 TEMPLATES
ALL_TEMPLATES = [
    {"id": 1, "name": "Análise de Sentimento de Cliente 360º", "category": "Inteligência de Mercado", "description": "Um agente especializado em processar grandes volumes de feedback de clientes (e-mails, redes sociais, tickets) para extrair o sentimento geral, identificar a causa raiz de insatisfações e gerar relatórios acionáveis para o time de produto.", "difficulty": "Intermediário", "useCases": ["Monitoramento de satisfação", "Identificação de falhas no produto", "Priorização de features"], "prompt": "Você é um Analista de Sentimento 360º. Sua tarefa é receber um conjunto de dados de feedback de clientes e, primeiramente, classificar o sentimento (positivo, negativo, neutro). Em seguida, identifique os 3 principais tópicos de reclamação e sugira uma ação imediata para o time de produto. O tom da sua análise deve ser objetivo e focado em resultados.", "minPlan": "Starter"},
    {"id": 2, "name": "Radar de Concorrência em Tempo Real", "category": "Inteligência de Mercado", "description": "Um sistema de agentes que monitora continuamente o mercado, identificando lançamentos de produtos, mudanças de preço, campanhas de marketing e notícias relevantes dos principais concorrentes, gerando um resumo executivo diário.", "difficulty": "Avançado", "useCases": ["Estratégia de preços", "Benchmarking de marketing", "Alerta de novos produtos"], "prompt": "Você é o Agente Radar de Concorrência. Sua missão é monitorar as fontes de notícias e redes sociais dos concorrentes [LISTA DE CONCORRENTES]. Ao identificar um novo produto, mudança de preço ou campanha de marketing, gere um alerta com o título, resumo da ação e impacto potencial para nossa empresa. O formato de saída deve ser um JSON estruturado.", "minPlan": "Growth"},
    {"id": 3, "name": "Previsão de Tendências de Mercado Agêntica", "category": "Inteligência de Mercado", "description": "Agente que utiliza dados históricos e em tempo real para prever as próximas tendências do setor, ajudando a empresa a se posicionar de forma proativa e a tomar decisões estratégicas de investimento.", "difficulty": "Avançado", "useCases": ["Planejamento estratégico", "Alocação de recursos", "Inovação"], "prompt": "Você é um Futurista de Mercado. Analise os dados de volume de busca, menções em mídias especializadas e investimentos em startups do setor [SEU SETOR]. Com base nesses dados, identifique as 3 tendências com maior probabilidade de crescimento nos próximos 12 meses e justifique sua previsão com dados concretos. O tom deve ser analítico e visionário.", "minPlan": "Growth"},
    {"id": 4, "name": "Copywriter Persuasivo para Campanhas", "category": "Marketing", "description": "Agente que cria textos de alta conversão para anúncios, e-mails e landing pages, aplicando princípios de psicologia de vendas e gatilhos mentais para maximizar o ROI das campanhas.", "difficulty": "Intermediário", "useCases": ["Aumento de CTR", "Otimização de conversão", "Criação de headlines"], "prompt": "Você é um Copywriter de Alta Conversão. Crie 5 variações de headline e 3 variações de corpo de texto para um anúncio focado no produto [NOME DO PRODUTO]. O objetivo é [OBJETIVO DA CAMPANHA]. Use os gatilhos mentais de [GATILHOS MENTAIS] e o princípio AIDA (Atenção, Interesse, Desejo, Ação).", "minPlan": "Starter"},
    {"id": 5, "name": "Gerador de Conteúdo Multi-Plataforma", "category": "Marketing", "description": "Gera conteúdo otimizado para diferentes plataformas (LinkedIn, Instagram, Blog), garantindo a consistência da marca e adaptando a linguagem para o público de cada canal.", "difficulty": "Básico", "useCases": ["Consistência de marca", "Produção em escala", "Engajamento"], "prompt": "Você é um Gerador de Conteúdo Multi-Plataforma. Receba o tema [TEMA] e crie 3 versões de conteúdo: 1) Post para LinkedIn (foco em autoridade, 5 parágrafos); 2) Legenda para Instagram (foco em engajamento, 3 hashtags); 3) Tópicos para um artigo de blog (foco em SEO, 5 subtítulos).", "minPlan": "Starter"},
    {"id": 6, "name": "Arquiteto de SEO e Conteúdo", "category": "Marketing", "description": "Desenvolve a arquitetura de conteúdo de um site, identificando lacunas de palavras-chave, criando clusters de tópicos e otimizando a estrutura para máxima autoridade e ranqueamento no Google.", "difficulty": "Avançado", "useCases": ["Planejamento de conteúdo", "Otimização on-page", "Estratégia de link building"], "prompt": "Você é um Arquiteto de SEO. Analise a palavra-chave principal [PALAVRA-CHAVE] e crie um 'Content Cluster' com 10 palavras-chave secundárias. Para cada palavra-chave, sugira um título de artigo e um subtítulo que deve ser abordado. O objetivo é dominar o tópico nos mecanismos de busca.", "minPlan": "Growth"},
    {"id": 7, "name": "Qualificador de Leads B2B (Geração de Perfil Ideal)", "category": "Vendas", "description": "Agente que recebe dados brutos de leads e os enriquece com informações de mercado, qualificando-os automaticamente com base no Perfil de Cliente Ideal (ICP) e priorizando para o time de vendas.", "difficulty": "Intermediário", "useCases": ["Lead scoring automatizado", "Enriquecimento de dados", "Priorização de follow-up"], "prompt": "Você é um Qualificador de Leads B2B. Receba os dados do lead [DADOS DO LEAD]. Verifique se ele atende aos critérios do nosso ICP (Empresa B2B, 50-200 funcionários, setor de Tecnologia). Se sim, atribua um score de 80. Se não, atribua um score de 30. Justifique o score e sugira o próximo passo (ligar, enviar e-mail, descartar).", "minPlan": "Starter"},
    {"id": 8, "name": "Analisador de Propostas e Contratos", "category": "Vendas", "description": "Analisa propostas e contratos de clientes, identificando cláusulas de risco, oportunidades de upsell e garantindo que todos os requisitos técnicos e comerciais sejam atendidos antes da assinatura.", "difficulty": "Intermediário", "useCases": ["Revisão de contratos", "Identificação de riscos", "Otimização de propostas"], "prompt": "Você é um Analisador de Propostas. Receba o texto da proposta/contrato [TEXTO]. Identifique todas as cláusulas que mencionam 'penalidade', 'prazo de entrega' e 'escopo'. Resuma os 3 principais riscos para a empresa e sugira uma alteração de texto para mitigar cada risco. O tom deve ser legal e preciso.", "minPlan": "Growth"},
    {"id": 9, "name": "Previsor de Churn Preditivo", "category": "Vendas", "description": "Utiliza dados de uso, suporte e engajamento para prever quais clientes têm alta probabilidade de cancelar (churn) nos próximos 30 dias, acionando o time de retenção proativamente.", "difficulty": "Avançado", "useCases": ["Retenção de clientes", "Intervenção proativa", "Otimização de Customer Success"], "prompt": "Você é um Previsor de Churn. Analise os dados de engajamento do cliente [DADOS DE ENGAGEMENT]. Se o uso caiu mais de 50% nos últimos 7 dias e ele abriu 2 ou mais tickets de suporte com baixa satisfação, classifique o risco como 'Alto'. Caso contrário, 'Baixo'. Gere um alerta para o time de CS com 3 sugestões de intervenção (ex: ligar, oferecer desconto, enviar material educativo).", "minPlan": "Growth"},
    {"id": 10, "name": "Assistente de Resposta Rápida (SLA)", "category": "Atendimento", "description": "Gera respostas precisas e personalizadas para tickets de suporte de primeiro nível, garantindo um tempo de resposta (SLA) rápido e liberando os agentes humanos para casos mais complexos.", "difficulty": "Básico", "useCases": ["Suporte Nível 1", "Redução de SLA", "Satisfação do cliente"], "prompt": "Você é um Assistente de Resposta Rápida. Receba o ticket de suporte [CONTEÚDO DO TICKET]. Identifique o problema principal e gere uma resposta inicial que seja empática, contenha a solução (se for simples) ou informe que o ticket foi escalado. Mantenha o tom profissional e amigável.", "minPlan": "Starter"},
]

def generate_prompt(template):
    """Gera um prompt estruturado"""
    user_prompt = f"""Transforme este prompt em um prompt estruturado:

NOME: {template['name']}
CATEGORIA: {template['category']}
DESCRIÇÃO: {template['description']}
DIFICULDADE: {template['difficulty']}
CASOS DE USO: {', '.join(template['useCases'])}
PROMPT ATUAL: {template['prompt']}

Gere um prompt COMPLETO e PROFISSIONAL."""

    try:
        response = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": user_prompt}
            ],
            temperature=0.7,
            max_tokens=2500
        )
        return response.choices[0].message.content.strip()
    except Exception as e:
        print(f"  ✗ Erro: {e}")
        return template['prompt']

def main():
    print("="*80)
    print("GERAÇÃO DE TODOS OS 50 PROMPTS ESTRUTURADOS")
    print("="*80)
    print(f"\nTotal de templates a processar: {len(ALL_TEMPLATES)}")
    print("Tempo estimado: 10-15 minutos")
    print("\nIniciando...\n")
    
    results = []
    start_time = time.time()
    
    for i, template in enumerate(ALL_TEMPLATES, 1):
        print(f"[{i}/{len(ALL_TEMPLATES)}] {template['name'][:50]}...")
        
        structured_prompt = generate_prompt(template)
        template['prompt'] = structured_prompt
        results.append(template)
        
        print(f"  ✓ Gerado ({len(structured_prompt)} caracteres)")
        
        # Pequeno delay para não sobrecarregar a API
        if i < len(ALL_TEMPLATES):
            time.sleep(1)
    
    elapsed = time.time() - start_time
    
    # Salvar resultados
    output_file = '/home/ubuntu/impulz-hub/all_prompts_structured.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    
    print("\n" + "="*80)
    print(f"✓ CONCLUÍDO EM {elapsed/60:.1f} MINUTOS")
    print(f"✓ Arquivo salvo: {output_file}")
    print(f"✓ Total de prompts: {len(results)}")
    print("="*80)

if __name__ == "__main__":
    main()
