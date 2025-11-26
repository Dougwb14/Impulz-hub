#!/usr/bin/env python3
"""
Script robusto para integrar TODOS os 50 prompts estruturados no mockData.js
"""

import json
import re

# Carregar TODOS os prompts estruturados
prompts_1_10 = {}
prompts_11_50 = {}

with open('/home/ubuntu/impulz-hub/all_prompts_structured.json', 'r') as f:
    for t in json.load(f):
        prompts_1_10[t['id']] = t['prompt']

with open('/home/ubuntu/impulz-hub/prompts_11_50.json', 'r') as f:
    for t in json.load(f):
        prompts_11_50[t['id']] = t['prompt']

all_prompts = {**prompts_1_10, **prompts_11_50}

print(f"Total de prompts carregados: {len(all_prompts)}")
print(f"IDs: {sorted(all_prompts.keys())}")

# Carregar mockData.js
with open('/home/ubuntu/impulz-hub/src/data/mockData.js', 'r') as f:
    lines = f.readlines()

# Processar linha por linha para substituir prompts
output_lines = []
i = 0
updated_count = 0

while i < len(lines):
    line = lines[i]
    
    # Detectar início de template
    id_match = re.match(r'\s*id:\s*(\d+),', line)
    
    if id_match:
        template_id = int(id_match.group(1))
        
        # Copiar linhas até encontrar o prompt
        output_lines.append(line)
        i += 1
        
        # Procurar a linha do prompt
        while i < len(lines):
            line = lines[i]
            
            # Detectar linha do prompt
            if re.match(r'\s*prompt:', line):
                # Substituir pelo novo prompt se existir
                if template_id in all_prompts:
                    # Escapar o prompt para JavaScript
                    new_prompt = all_prompts[template_id]
                    new_prompt = new_prompt.replace('\\', '\\\\')
                    new_prompt = new_prompt.replace('`', '\\`')
                    new_prompt = new_prompt.replace('${', '\\${')
                    
                    # Escrever nova linha de prompt
                    indent = '    '
                    output_lines.append(f'{indent}prompt: `{new_prompt}`,\n')
                    updated_count += 1
                    print(f"✓ Template {template_id} atualizado")
                    
                    # Pular a linha antiga do prompt
                    i += 1
                    break
                else:
                    # Manter prompt original
                    output_lines.append(line)
                    i += 1
                    break
            else:
                # Copiar outras linhas do template
                output_lines.append(line)
                i += 1
    else:
        # Copiar linhas que não são parte de templates
        output_lines.append(line)
        i += 1

# Salvar o novo mockData.js
with open('/home/ubuntu/impulz-hub/src/data/mockData.js', 'w') as f:
    f.writelines(output_lines)

print(f"\n{'='*80}")
print(f"✓ mockData.js atualizado com {updated_count} prompts!")
print(f"✓ Arquivo salvo com {len(output_lines)} linhas")
print(f"{'='*80}")
