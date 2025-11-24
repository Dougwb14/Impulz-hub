import { useNavigate, useLocation } from 'react-router-dom'
import { supabase } from '../supabaseClient'
import { Menu, X, LogOut, Home, BookOpen, Grid3x3, CheckSquare } from 'lucide-react'
import { useState } from 'react'

export default function Layout({ children, user }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
  }

  const isActive = (path) => location.pathname === path

  const menuItems = [
    { path: '/dashboard', label: 'Dashboard', icon: Home },
    { path: '/templates', label: 'Templates', icon: BookOpen },
    { path: '/architectures', label: 'Arquiteturas', icon: Grid3x3 },
    { path: '/diagnostic', label: 'Diagnóstico', icon: CheckSquare },
  ]

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div
        className={`${
          sidebarOpen ? 'w-64' : 'w-20'
        } bg-primary text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-6 flex items-center justify-between">
          {sidebarOpen && (
            <div>
              <h1 className="text-2xl font-bold">Impulz HUB</h1>
              <p className="text-xs text-secondary">Arquitetura de IA</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-primary/80 rounded-lg transition-colors"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2">
          {menuItems.map(({ path, label, icon: Icon }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(path)
                  ? 'bg-secondary text-primary'
                  : 'text-white hover:bg-primary/80'
              }`}
            >
              <Icon size={20} />
              {sidebarOpen && <span>{label}</span>}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-primary/30">
          <div className={`${sidebarOpen ? 'mb-4' : 'mb-2'} text-xs text-secondary`}>
            {sidebarOpen && (
              <div>
                <p className="font-semibold">Usuário</p>
                <p className="truncate">{user?.email}</p>
              </div>
            )}
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-2 rounded-lg bg-red-500/20 text-red-200 hover:bg-red-500/30 transition-colors"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Sair</span>}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-primary">
            {menuItems.find(item => isActive(item.path))?.label || 'Dashboard'}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm font-medium text-text-primary">{user?.email}</p>
              <p className="text-xs text-text-secondary">Plano Premium</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          <div className="p-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
