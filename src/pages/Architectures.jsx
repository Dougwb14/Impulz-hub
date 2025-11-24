import { useState } from 'react'
import { mockData } from '../data/mockData'
import { Search, Grid3x3, Zap, Clock, Cpu } from 'lucide-react'

export default function Architectures() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Todas')
  const [selectedArchitecture, setSelectedArchitecture] = useState(null)

  const categories = ['Todas', 'Atendimento', 'Inteligência de Mercado', 'Vendas', 'Marketing', 'Produtividade']

  const filteredArchitectures = mockData.architectures.filter(arch => {
    const matchesSearch = arch.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         arch.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Todas' || arch.category === selectedCategory
    return matchesSearch && matchesCategory
  })

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
        <h1 className="text-3xl font-bold text-primary mb-2">Arquiteturas de Fluxos Multi-Agente</h1>
        <p className="text-text-secondary">Explore {mockData.architectures.length}+ arquiteturas completas de sistemas multi-agente prontas para implementação</p>
      </div>

      {/* Search and Filters */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-text-tertiary" size={20} />
          <input
            type="text"
            placeholder="Buscar arquiteturas..."
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

      {/* Architectures Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArchitectures.map((arch) => (
          <div
            key={arch.id}
            className="card cursor-pointer"
            onClick={() => setSelectedArchitecture(arch)}
          >
            <div className="card-header">
              <div className="flex-1">
                <h3 className="card-title">{arch.name}</h3>
                <p className="card-description mt-2">{arch.description}</p>
              </div>
              <Grid3x3 size={24} className="text-secondary flex-shrink-0 ml-2" />
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className={`badge ${getDifficultyColor(arch.difficulty)}`}>
                {arch.difficulty}
              </span>
              <span className="badge badge-primary">
                {arch.category}
              </span>
              <span className="badge badge-secondary">
                {arch.agentCount} agentes
              </span>
            </div>

            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Clock size={16} />
                {arch.implementationTime}
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedArchitecture(arch)
                }}
                className="btn btn-secondary btn-sm"
              >
                Ver Detalhes
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredArchitectures.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary text-lg">Nenhuma arquitetura encontrada</p>
          <p className="text-text-tertiary mt-2">Tente ajustar seus filtros de busca</p>
        </div>
      )}

      {/* Architecture Detail Modal */}
      {selectedArchitecture && (
        <div className="modal-overlay" onClick={() => setSelectedArchitecture(null)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2 className="modal-title">{selectedArchitecture.name}</h2>
                <p className="text-text-secondary text-sm mt-1">{selectedArchitecture.category}</p>
              </div>
              <button
                onClick={() => setSelectedArchitecture(null)}
                className="modal-close"
              >
                ✕
              </button>
            </div>

            <div className="modal-body space-y-6">
              {/* Descrição */}
              <div>
                <h3 className="font-semibold text-primary mb-2">Descrição Completa</h3>
                <p className="text-text-secondary">{selectedArchitecture.description}</p>
              </div>

              {/* Badges */}
              <div>
                <h3 className="font-semibold text-primary mb-2">Informações Técnicas</h3>
                <div className="flex flex-wrap gap-2">
                  <span className={`badge ${getDifficultyColor(selectedArchitecture.difficulty)}`}>
                    {selectedArchitecture.difficulty}
                  </span>
                  <span className="badge badge-primary">
                    {selectedArchitecture.category}
                  </span>
                  <span className="badge badge-secondary">
                    {selectedArchitecture.agentCount} agentes
                  </span>
                  <span className="badge badge-primary flex items-center gap-1">
                    <Clock size={14} />
                    {selectedArchitecture.implementationTime}
                  </span>
                </div>
              </div>

              {/* Componentes */}
              <div>
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <Cpu size={18} />
                  Componentes da Arquitetura
                </h3>
                <div className="space-y-2">
                  {selectedArchitecture.components.map((component, idx) => (
                    <div key={idx} className="bg-gray-50 border border-border rounded-lg p-3 flex items-start gap-2">
                      <span className="text-secondary font-bold mt-0.5">→</span>
                      <span className="text-text-primary">{component}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Integrações */}
              <div>
                <h3 className="font-semibold text-primary mb-3 flex items-center gap-2">
                  <Zap size={18} />
                  Integrações Necessárias
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedArchitecture.integrations.map((integration, idx) => (
                    <div key={idx} className="bg-blue-100 border border-blue-200 rounded-lg p-2 text-sm text-blue-800">
                      {integration}
                    </div>
                  ))}
                </div>
              </div>

              {/* Ação */}
              <div className="flex gap-3 pt-4 border-t border-border">
                <button
                  onClick={() => setSelectedArchitecture(null)}
                  className="btn btn-secondary flex-1"
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
