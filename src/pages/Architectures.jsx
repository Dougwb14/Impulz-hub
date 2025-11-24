import { useState } from 'react'
import { mockData } from '../data/mockData'
import { Search, X, Zap } from 'lucide-react'

export default function Architectures({ user }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedArchitecture, setSelectedArchitecture] = useState(null)

  const categories = ['all', ...new Set(mockData.architectures.map(a => a.category))]

  const filteredArchitectures = mockData.architectures.filter(arch => {
    const matchesSearch = arch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         arch.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || arch.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
        <h1 className="text-3xl font-bold text-primary mb-2">Arquiteturas de Fluxos</h1>
        <p className="text-text-secondary">Explore {mockData.architectures.length}+ arquiteturas completas de sistemas multi-agente</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-secondary" size={20} />
          <input
            type="text"
            placeholder="Buscar arquiteturas..."
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
              {category === 'all' ? 'Todas' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Architectures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArchitectures.map((arch, index) => (
          <button
            key={index}
            onClick={() => setSelectedArchitecture(arch)}
            className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-all text-left"
          >
            <div className="flex items-start justify-between mb-4">
              <h3 className="font-bold text-primary flex-1">{arch.name}</h3>
              <Zap className="text-secondary" size={20} />
            </div>
            <p className="text-sm text-text-secondary mb-4">{arch.description}</p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs bg-secondary/10 text-secondary px-3 py-1 rounded-full">
                {arch.category}
              </span>
              <span className={`text-xs px-3 py-1 rounded-full ${getDifficultyColor(arch.difficulty)}`}>
                {arch.difficulty}
              </span>
              <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                {arch.agentCount} agentes
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Architecture Detail Modal */}
      {selectedArchitecture && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-primary">{selectedArchitecture.name}</h2>
              <button
                onClick={() => setSelectedArchitecture(null)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-bold text-primary mb-2">Descrição</h3>
                <p className="text-text-secondary">{selectedArchitecture.description}</p>
              </div>

              <div>
                <h3 className="font-bold text-primary mb-2">Componentes da Arquitetura</h3>
                <div className="space-y-3">
                  {selectedArchitecture.components.map((component, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <p className="font-semibold text-primary mb-1">{component}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-primary mb-2">Integrações</h3>
                  <ul className="space-y-2">
                    {selectedArchitecture.integrations.map((integration, index) => (
                      <li key={index} className="text-sm text-text-secondary flex items-start">
                        <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-1.5"></span>
                        {integration}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Detalhes</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-text-secondary">Categoria:</span> <span className="font-semibold text-primary">{selectedArchitecture.category}</span></p>
                    <p><span className="text-text-secondary">Dificuldade:</span> <span className="font-semibold text-primary">{selectedArchitecture.difficulty}</span></p>
                    <p><span className="text-text-secondary">Agentes:</span> <span className="font-semibold text-primary">{selectedArchitecture.agentCount}</span></p>
                    <p><span className="text-text-secondary">Tempo:</span> <span className="font-semibold text-primary">{selectedArchitecture.implementationTime}</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
