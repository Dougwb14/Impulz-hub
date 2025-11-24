import { useState } from 'react'
import { mockData } from '../data/mockData'
import { ChevronRight, ChevronLeft } from 'lucide-react'

export default function Diagnostic({ user }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [showResults, setShowResults] = useState(false)

  const questions = mockData.diagnosticQuestions

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const calculateScore = () => {
    let score = 0
    let maxScore = 0

    questions.forEach(question => {
      const answer = answers[question.id]
      if (answer) {
        const option = question.options.find(opt => opt.value === answer)
        if (option) {
          score += option.score || 0
        }
      }
      maxScore += Math.max(...question.options.map(opt => opt.score || 0))
    })

    return { score, maxScore, percentage: Math.round((score / maxScore) * 100) }
  }

  const getMaturityLevel = (percentage) => {
    if (percentage < 25) return { level: 'Iniciante', color: 'bg-red-100 text-red-800' }
    if (percentage < 50) return { level: 'Em Desenvolvimento', color: 'bg-yellow-100 text-yellow-800' }
    if (percentage < 75) return { level: 'Intermediário', color: 'bg-blue-100 text-blue-800' }
    return { level: 'Avançado', color: 'bg-green-100 text-green-800' }
  }

  const question = questions[currentQuestion]
  const { score, maxScore, percentage } = calculateScore()
  const maturityLevel = getMaturityLevel(percentage)

  if (showResults) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-primary mb-2">Resultado do Diagnóstico</h1>
          <p className="text-text-secondary">Sua avaliação de maturidade em IA agêntica</p>
        </div>

        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-lg p-8">
          <div className="text-center">
            <p className="text-sm opacity-90 mb-2">Seu Score</p>
            <p className="text-6xl font-bold mb-4">{percentage}%</p>
            <div className={`inline-block px-6 py-2 rounded-full font-bold ${maturityLevel.color}`}>
              {maturityLevel.level}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-primary mb-4">Pontuação Detalhada</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-text-secondary mb-1">Pontos Obtidos</p>
                <p className="text-2xl font-bold text-primary">{score}</p>
              </div>
              <div>
                <p className="text-sm text-text-secondary mb-1">Pontos Máximos</p>
                <p className="text-2xl font-bold text-primary">{maxScore}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-primary mb-4">Próximos Passos</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-1.5"></span>
                Explore templates relevantes
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-1.5"></span>
                Estude as arquiteturas
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-1.5"></span>
                Implemente gradualmente
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="font-bold text-primary mb-4">Recomendações</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-1.5"></span>
                Consulte nossos especialistas
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-1.5"></span>
                Participe de webinars
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 mt-1.5"></span>
                Acesse a documentação
              </li>
            </ul>
          </div>
        </div>

        <button
          onClick={() => {
            setCurrentQuestion(0)
            setAnswers({})
            setShowResults(false)
          }}
          className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Fazer Novo Diagnóstico
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-primary mb-2">Diagnóstico de Maturidade em IA</h1>
        <p className="text-text-secondary">Avalie o nível de maturidade da sua empresa em IA agêntica</p>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <p className="text-sm font-medium text-text-primary">
            Pergunta {currentQuestion + 1} de {questions.length}
          </p>
          <p className="text-sm font-medium text-secondary">
            {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
          </p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="bg-white rounded-lg p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-primary mb-6">{question.question}</h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(question.id, option.value)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                answers[question.id] === option.value
                  ? 'border-secondary bg-secondary/10'
                  : 'border-gray-200 hover:border-secondary/50'
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                    answers[question.id] === option.value
                      ? 'border-secondary bg-secondary'
                      : 'border-gray-300'
                  }`}
                >
                  {answers[question.id] === option.value && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <span className="font-medium text-text-primary">{option.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex gap-4">
        <button
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg font-medium text-text-primary hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft size={20} />
          Anterior
        </button>
        <button
          onClick={handleNext}
          disabled={!answers[question.id]}
          className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Próxima'}
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
