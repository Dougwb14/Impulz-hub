import { useState } from 'react'
import { Search, Copy, Check, Zap } from 'lucide-react'
import { mockData } from '../data/mockData'

export default function Templates() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [copiedId, setCopiedId] = useState(null)

  const categories = ['Todas', 'Inteligência de Mercado', 'Marketing', 'Vendas', 'Atendimento', 'Produtividade']
  
  const filteredTemplates = mockData.templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todas' || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Simula a cópia para o feedback visual, já que o navigator.clipboard não funciona no sandbox
  const handleCopyPrompt = (prompt) => {
    // Em um ambiente real, usaria navigator.clipboard.writeText(prompt)
    console.log("Prompt copiado (simulado):", prompt)
    setCopiedId(prompt)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Básico':
        return 'badge-success'
      case 'Intermediário':
        return 'badge-warning'
      case 'Avançado':
        return 'badge-danger'
      default:
        return 'badge-primary'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Biblioteca de Templates</h1>
        <p className="text-text-secondary">Acesse mais de 50 templates profissionais de prompts para estruturar seus agentes de IA</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-text-tertiary" size={20} />
          <input
            type="text"
            placeholder="Buscar templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary focus:ring-opacity-20"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-secondary text-white shadow-lg'
                  : 'bg-white border border-border text-text-primary hover:border-secondary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map(template => (
          <div
            key={template.id}
            className="card cursor-pointer"
            onClick={() => setSelectedTemplate(template)}
          >
            <div className="card-header">
              <div className="flex-1">
                <h3 className="card-title">{template.name}</h3>
                <p className="card-description mt-2 line-clamp-3">{template.description}</p>
              </div>
              <Zap size={24} className="text-secondary flex-shrink-0 ml-2" />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className={`badge ${getDifficultyColor(template.difficulty)}`}>
                {template.difficulty}
              </span>
              <span className="badge badge-primary">
                {template.category}
              </span>
              <span className="badge badge-secondary">
                Plano: {template.minPlan}
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-border">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedTemplate(template)
                }}
                className="btn btn-secondary btn-sm w-full"
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary text-lg">Nenhum template encontrado</p>
          <p className="text-text-tertiary mt-2">Tente ajustar seus filtros de busca</p>
        </div>
      )}

      {/* Modal de Detalhes */}
      {selectedTemplate && (
        <div className="modal-overlay" onClick={() => setSelectedTemplate(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2 className="modal-title">{selectedTemplate.name}</h2>
                <p className="text-text-secondary text-sm mt-1">{selectedTemplate.category}</p>
              </div>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="modal-close"
              >
                ✕
              </button>
            </div>

            <div className="modal-body space-y-6">
              {/* Descrição */}
              <div>
                <h3 className="font-semibold text-primary mb-2">Descrição Completa</h3>
                <p className="text-text-secondary">{selectedTemplate.description}</p>
              </div>

              {/* Badges */}
              <div>
                <h3 className="font-semibold text-primary mb-2">Informações</h3>
                <div className="flex flex-wrap gap-2">
                  <span className={`badge ${getDifficultyColor(selectedTemplate.difficulty)}`}>
                    {selectedTemplate.difficulty}
                  </span>
                  <span className="badge badge-primary">
                    {selectedTemplate.category}
                  </span>
                  <span className="badge badge-secondary">
                    Plano: {selectedTemplate.minPlan}
                  </span>
                </div>
              </div>

              {/* Casos de Uso */}
              {selectedTemplate.useCases && selectedTemplate.useCases.length > 0 && (
                <div>
                  <h3 className="font-semibold text-primary mb-2">Casos de Uso</h3>
                  <ul className="space-y-2 list-disc list-inside text-text-secondary">
                    {selectedTemplate.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-text-secondary">{useCase}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Prompt */}
              <div>
                <h3 className="font-semibold text-primary mb-2">Prompt Estruturado</h3>
                <div className="bg-gray-50 border border-border rounded-lg p-4 relative">
                  <pre className="text-sm text-text-primary whitespace-pre-wrap break-words font-mono">
                    {selectedTemplate.prompt}
                  </pre>
                  <button
                    onClick={() => handleCopyPrompt(selectedTemplate.prompt)}
                    className="absolute top-2 right-2 p-2 bg-white border border-border rounded-lg hover:bg-gray-50 transition-all"
                  >
                    {copiedId === selectedTemplate.prompt ? (
                      <Check size={18} className="text-success" />
                    ) : (
                      <Copy size={18} className="text-text-secondary" />
                    )}
                  </button>
                </div>
              </div>

              {/* Ação */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <button
                  onClick={() => handleCopyPrompt(selectedTemplate.prompt)}
                  className="btn btn-primary flex-1"
                >
                  {copiedId === selectedTemplate.prompt ? (
                    <>
                      <Check size={18} />
                      Prompt Copiado!
                    </>
                  ) : (
                    <>
                      <Copy size={18} />
                      Copiar Prompt
                    </>
                  )}
                </button>
                <button
                  onClick={() => setSelectedTemplate(null)}
                  className="btn btn-outline flex-1"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
