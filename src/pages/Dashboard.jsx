import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import { mockData } from '../data/mockData'
import { BookOpen, Grid3x3, CheckSquare, TrendingUp } from 'lucide-react'

export default function Dashboard({ user }) {
  const navigate = useNavigate()
  const [stats, setStats] = useState({
    templates: 0,
    architectures: 0,
    diagnostics: 0,
    userPlan: 'Premium'
  })

  useEffect(() => {
    setStats({
      templates: mockData.templates.length,
      architectures: mockData.architectures.length,
      diagnostics: 5,
      userPlan: 'Premium'
    })
  }, [])

  const quickActions = [
    {
      title: 'Explorar Templates',
      description: 'Acesse nossa biblioteca de 50+ templates de prompts profissionais',
      icon: BookOpen,
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
      action: () => navigate('/templates')
    },
    {
      title: 'Ver Arquiteturas',
      description: 'Descubra 15+ arquiteturas completas de fluxos multi-agente',
      icon: Grid3x3,
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
      action: () => navigate('/architectures')
    },
    {
      title: 'Fazer Diagnóstico',
      description: 'Avalie a maturidade da sua empresa em IA agêntica',
      icon: CheckSquare,
      color: 'bg-green-50',
      iconColor: 'text-green-600',
      action: () => navigate('/diagnostic')
    }
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8">
        <h1 className="text-4xl font-bold mb-2">Bem-vindo à Impulz HUB</h1>
        <p className="text-lg opacity-90">
          Sua plataforma completa para arquitetura e estratégia de agentes de IA
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-text-secondary text-sm font-medium">Templates</h3>
            <BookOpen className="text-secondary" size={24} />
          </div>
          <p className="text-3xl font-bold text-primary">{stats.templates}</p>
          <p className="text-xs text-text-secondary mt-2">Prompts profissionais</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-text-secondary text-sm font-medium">Arquiteturas</h3>
            <Grid3x3 className="text-secondary" size={24} />
          </div>
          <p className="text-3xl font-bold text-primary">{stats.architectures}</p>
          <p className="text-xs text-text-secondary mt-2">Sistemas completos</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-text-secondary text-sm font-medium">Diagnósticos</h3>
            <CheckSquare className="text-secondary" size={24} />
          </div>
          <p className="text-3xl font-bold text-primary">{stats.diagnostics}</p>
          <p className="text-xs text-text-secondary mt-2">Realizados</p>
        </div>

        <div className="bg-white rounded-lg p-6 border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-text-secondary text-sm font-medium">Seu Plano</h3>
            <TrendingUp className="text-secondary" size={24} />
          </div>
          <p className="text-3xl font-bold text-primary">{stats.userPlan}</p>
          <p className="text-xs text-text-secondary mt-2">Acesso completo</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">Comece por aqui</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon
            return (
              <button
                key={index}
                onClick={action.action}
                className={`${action.color} rounded-lg p-6 text-left hover:shadow-lg transition-all transform hover:scale-105`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold text-text-primary">{action.title}</h3>
                  <Icon className={`${action.iconColor}`} size={28} />
                </div>
                <p className="text-sm text-text-secondary">{action.description}</p>
              </button>
            )
          })}
        </div>
      </div>

      {/* Featured Resources */}
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">Recursos em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-primary mb-2">Últimos Templates</h3>
            <ul className="space-y-2">
              {mockData.templates.slice(0, 3).map((template, index) => (
                <li key={index} className="text-sm text-text-secondary flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  {template.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-primary mb-2">Arquiteturas Populares</h3>
            <ul className="space-y-2">
              {mockData.architectures.slice(0, 3).map((arch, index) => (
                <li key={index} className="text-sm text-text-secondary flex items-center">
                  <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                  {arch.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
