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
    <div className="layout-container">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          {sidebarOpen && (
            <div className="sidebar-brand">
              <h1>Impulz HUB</h1>
              <p>Arquitetura de IA</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="sidebar-toggle"
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map(({ path, label, icon: Icon }) => (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`nav-item ${isActive(path) ? 'active' : ''}`}
            >
              <Icon size={20} />
              {sidebarOpen && <span>{label}</span>}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          {sidebarOpen && (
            <div className="user-info">
              <p className="user-label">Usuário</p>
              <p className="user-email">{user?.email}</p>
            </div>
          )}
          <button
            onClick={handleLogout}
            className="logout-btn"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Sair</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <h2 className="header-title">
            {menuItems.find(item => isActive(item.path))?.label || 'Dashboard'}
          </h2>
          <div className="header-user">
            <div className="user-details">
              <p className="user-email-header">{user?.email}</p>
              <p className="user-plan">Plano Premium</p>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="content-area">
          {children}
        </div>
      </main>
    </div>
  )
}
