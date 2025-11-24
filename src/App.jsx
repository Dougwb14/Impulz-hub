import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { supabase } from './supabaseClient'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Templates from './pages/Templates'
import Architectures from './pages/Architectures'
import Diagnostic from './pages/Diagnostic'
import Layout from './components/Layout'
import './App.css'

function ProtectedRoute({ children, user, loading }) {
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-secondary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-text-secondary">Carregando...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/" replace />
  }

  return children
}

export default function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession()
        setUser(session?.user || null)
      } catch (error) {
        console.error('Erro ao verificar sessão:', error)
      } finally {
        setLoading(false)
      }
    }

    checkUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null)
      }
    )

    return () => subscription?.unsubscribe()
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user} loading={loading}>
              <Layout user={user}>
                <Dashboard user={user} />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/templates"
          element={
            <ProtectedRoute user={user} loading={loading}>
              <Layout user={user}>
                <Templates user={user} />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/architectures"
          element={
            <ProtectedRoute user={user} loading={loading}>
              <Layout user={user}>
                <Architectures user={user} />
              </Layout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/diagnostic"
          element={
            <ProtectedRoute user={user} loading={loading}>
              <Layout user={user}>
                <Diagnostic user={user} />
              </Layout>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  )
}
