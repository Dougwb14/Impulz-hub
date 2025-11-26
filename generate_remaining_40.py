#!/usr/bin/env python3
import json, time, re
from openai import OpenAI

client = OpenAI()

SYSTEM = """Você é especialista em engenharia de prompts. Transforme o prompt simples em estruturado seguindo EXATAMENTE:

# PAPEL
[Definição do agente]

# OBJETIVO
[O que fazer]

# ENTRADA ESPERADA
Você receberá:
[Lista de dados]

Formato:
```
[Exemplo]
```

# INSTRUÇÕES DE PROCESSAMENTO

## ETAPA 1: [Nome]
[Descrição]

## ETAPA 2: [Nome]
[Descrição]

[3-6 etapas]

# FORMATO DE SAÍDA
```
[Exemplo de saída]
```

# REGRAS E RESTRIÇÕES
- [Mínimo 5 regras]

Seja EXTREMAMENTE detalhado."""

def gen(t):
    try:
        r = client.chat.completions.create(
            model="gpt-4.1-mini",
            messages=[
                {"role": "system", "content": SYSTEM},
                {"role": "user", "content": f"NOME: {t['name']}\nCATEGORIA: {t['category']}\nDESCRIÇÃO: {t['description']}\nDIFICULDADE: {t['difficulty']}\nCASOS: {', '.join(t['useCases'])}\nPROMPT: {t['prompt']}"}
            ],
            temperature=0.7,
            max_tokens=2500
        )
        return r.choices[0].message.content.strip()
    except Exception as e:
        print(f"  ✗ {e}")
        return t['prompt']

# Extrair templates 11-50 do mockData.js
with open('/home/ubuntu/impulz-hub/src/data/mockData.js', 'r') as f:
    content = f.read()

# Parsing manual dos templates
templates = []
blocks = re.findall(r'\{[^}]*id:\s*(\d+)[^}]*name:\s*["\']([^"\']+)["\'][^}]*category:\s*["\']([^"\']+)["\'][^}]*description:\s*["\']([^"\']+)["\'][^}]*difficulty:\s*["\']([^"\']+)["\'][^}]*useCases:\s*\[([^\]]+)\][^}]*prompt:\s*["\']([^"\']+)["\'][^}]*minPlan:\s*["\']([^"\']+)["\'][^}]*\}', content, re.DOTALL)

for b in blocks:
    tid = int(b[0])
    if 11 <= tid <= 50:
        templates.append({
            'id': tid,
            'name': b[1],
            'category': b[2],
            'description': b[3],
            'difficulty': b[4],
            'useCases': [u.strip(' "\'') for u in b[5].split(',')],
            'prompt': b[6],
            'minPlan': b[7]
        })

print(f"Extraídos {len(templates)} templates (11-50)")
print("="*80)

results = []
for i, t in enumerate(templates, 11):
    print(f"[{i}/50] {t['name'][:55]}...")
    sp = gen(t)
    t['prompt'] = sp
    results.append(t)
    print(f"  ✓ {len(sp)} chars")
    time.sleep(0.8)

with open('/home/ubuntu/impulz-hub/prompts_11_50.json', 'w') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("\n" + "="*80)
print(f"✓ {len(results)} prompts gerados!")
print("✓ Arquivo: prompts_11_50.json")
