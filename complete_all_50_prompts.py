#!/usr/bin/env python3
"""
Script completo para gerar TODOS os 50 prompts estruturados e atualizar o mockData.js
"""

import json
import time
import re
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

def extract_templates_from_js(file_path):
    """Extrai os templates do arquivo mockData.js"""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extrair apenas a seção de templates
    templates_match = re.search(r'const templates = \[(.*?)\];', content, re.DOTALL)
    if not templates_match:
        print("Erro: Não foi possível encontrar a seção de templates")
        return []
    
    templates_text = templates_match.group(1)
    
    # Parsing simples dos templates
    templates = []
    template_blocks = re.findall(r'\{(.*?)\}(?=,\s*\{|\s*\])', templates_text, re.DOTALL)
    
    for block in template_blocks:
        template = {}
        
        # Extrair campos
        id_match = re.search(r'id:\s*(\d+)', block)
        name_match = re.search(r'name:\s*["\']([^"\']+)["\']', block)
        category_match = re.search(r'category:\s*["\']([^"\']+)["\']', block)
        description_match = re.search(r'description:\s*["\']([^"\']+)["\']', block)
        difficulty_match = re.search(r'difficulty:\s*["\']([^"\']+)["\']', block)
        prompt_match = re.search(r'prompt:\s*["\']([^"\']+)["\']', block)
        minPlan_match = re.search(r'minPlan:\s*["\']([^"\']+)["\']', block)
        useCases_match = re.search(r'useCases:\s*\[(.*?)\]', block)
        
        if id_match and name_match:
            template['id'] = int(id_match.group(1))
            template['name'] = name_match.group(1)
            template['category'] = category_match.group(1) if category_match else ""
            template['description'] = description_match.group(1) if description_match else ""
            template['difficulty'] = difficulty_match.group(1) if difficulty_match else ""
            template['prompt'] = prompt_match.group(1) if prompt_match else ""
            template['minPlan'] = minPlan_match.group(1) if minPlan_match else ""
            
            if useCases_match:
                use_cases_text = useCases_match.group(1)
                template['useCases'] = [uc.strip(' "\'') for uc in use_cases_text.split(',')]
            else:
                template['useCases'] = []
            
            templates.append(template)
    
    return templates[:50]  # Apenas os primeiros 50 templates

def generate_structured_prompt(template):
    """Gera um prompt estruturado usando a API"""
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
        print(f"  ✗ Erro na API: {e}")
        return template['prompt']

def main():
    print("="*80)
    print("GERAÇÃO COMPLETA DE 50 PROMPTS ESTRUTURADOS")
    print("="*80)
    
    # Carregar templates já gerados (se existirem)
    try:
        with open('/home/ubuntu/impulz-hub/all_prompts_structured.json', 'r', encoding='utf-8') as f:
            generated = json.load(f)
            already_generated = {t['id']: t['prompt'] for t in generated}
    except:
        already_generated = {}
    
    print(f"\nPrompts já gerados: {len(already_generated)}")
    
    # Extrair templates do mockData.js
    print("Extraindo templates do mockData.js...")
    templates = extract_templates_from_js('/home/ubuntu/impulz-hub/src/data/mockData.js')
    print(f"Templates extraídos: {len(templates)}")
    
    if len(templates) < 50:
        print(f"AVISO: Apenas {len(templates)} templates foram extraídos. Esperado: 50")
    
    # Gerar prompts faltantes
    print(f"\nGerando {50 - len(already_generated)} prompts restantes...")
    print("="*80)
    
    all_templates = []
    start_time = time.time()
    
    for i, template in enumerate(templates, 1):
        template_id = template['id']
        
        # Usar prompt já gerado se existir
        if template_id in already_generated:
            print(f"[{i}/50] {template['name'][:50]}... (já gerado)")
            template['prompt'] = already_generated[template_id]
        else:
            print(f"[{i}/50] {template['name'][:50]}...")
            structured_prompt = generate_structured_prompt(template)
            template['prompt'] = structured_prompt
            print(f"  ✓ Gerado ({len(structured_prompt)} caracteres)")
            time.sleep(1)  # Rate limiting
        
        all_templates.append(template)
    
    elapsed = time.time() - start_time
    
    # Salvar todos os prompts gerados
    output_file = '/home/ubuntu/impulz-hub/final_50_prompts.json'
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(all_templates, f, ensure_ascii=False, indent=2)
    
    print("\n" + "="*80)
    print(f"✓ CONCLUÍDO EM {elapsed/60:.1f} MINUTOS")
    print(f"✓ Arquivo salvo: {output_file}")
    print(f"✓ Total de prompts: {len(all_templates)}")
    print("="*80)
    
    # Estatísticas
    total_chars = sum(len(t['prompt']) for t in all_templates)
    avg_chars = total_chars / len(all_templates)
    print(f"\nESTATÍSTICAS:")
    print(f"- Total de caracteres: {total_chars:,}")
    print(f"- Média por prompt: {avg_chars:.0f} caracteres")
    print(f"- Menor prompt: {min(len(t['prompt']) for t in all_templates)} caracteres")
    print(f"- Maior prompt: {max(len(t['prompt']) for t in all_templates)} caracteres")

if __name__ == "__main__":
    main()
