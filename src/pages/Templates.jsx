import { useState } from 'react'
import { mockData } from '../data/mockData'
import { Search, Copy, X } from 'lucide-react'

export default function Templates({ user }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [copied, setCopied] = useState(false)

  const categories = ['all', ...new Set(mockData.templates.map(t => t.category))]

  const filteredTemplates = mockData.templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const handleCopyPrompt = (prompt) => {
    navigator.clipboard.writeText(prompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Básico': return 'bg-green-100 text-green-800'
      case 'Intermediário': return 'bg-yellow-100 text-yellow-800'
      case 'Avançado': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Biblioteca de Templates</h1>
        <p className="text-text-secondary">Explore {mockData.templates.length}+ templates profissionais de prompts</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-secondary" size={20} />
          <input
            type="text"
            placeholder="Buscar templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-secondary text-white'
                  : 'bg-gray-100 text-text-primary hover:bg-gray-200'
              }`}
            >
              {category === 'all' ? 'Todos' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template, index) => (
          <button
            key={index}
            onClick={() => setSelectedTemplate(template)}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-left"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-bold text-primary flex-1">{template.name}</h3>
            </div>
            <p className="text-sm text-text-secondary mb-4">{template.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                {template.category}
              </span>
              <span className={`text-xs px-3 py-1 rounded-full ${getDifficultyColor(template.difficulty)}`}>
                {template.difficulty}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Template Detail Modal */}
      {selectedTemplate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary">{selectedTemplate.name}</h2>
              <button
                onClick={() => setSelectedTemplate(null)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-bold text-primary mb-2">Descrição</h3>
                <p className="text-text-secondary">{selectedTemplate.description}</p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Casos de Uso</h3>
                <ul className="space-y-2">
                  {selectedTemplate.useCases.map((useCase, index) => (
                    <li key={index} className="text-sm text-text-secondary flex items-start">
                      <span className="w-2 h-2 bg-secondary rounded-full mr-3 mt-1.5"></span>
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-primary">Prompt</h3>
                  <button
                    onClick={() => handleCopyPrompt(selectedTemplate.prompt)}
                    className="flex items-center gap-2 px-3 py-1 bg-secondary text-white rounded-lg hover:bg-secondary/90 text-sm"
                  >
                    <Copy size={16} />
                    {copied ? 'Copiado!' : 'Copiar'}
                  </button>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-text-primary whitespace-pre-wrap font-mono">
                    {selectedTemplate.prompt}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <p className="text-xs text-text-secondary mb-1">Categoria</p>
                  <p className="font-semibold text-primary">{selectedTemplate.category}</p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary mb-1">Dificuldade</p>
                  <p className="font-semibold text-primary">{selectedTemplate.difficulty}</p>
                </div>
                <div>
                  <p className="text-xs text-text-secondary mb-1">Plano Mínimo</p>
                  <p className="font-semibold text-primary">{selectedTemplate.minPlan}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
