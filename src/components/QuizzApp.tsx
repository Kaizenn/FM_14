import { useState, useEffect } from 'react'
import { ThemeToggle } from './ThemeToggle'

import Logo from './Logo'
import StartScreen from './StartScreen'
import QuestionScreen from './QuestionScreen'
import ScoreScreen from './ScoreScreen'

import data from '../data/data.json'

import type { MenuData } from '../types'
import type { QuizzesData } from '../types'
import type { QuizState } from '../types'

const QUIZ_COLORS = ['bg-orange-50', 'bg-green-100', 'bg-blue-50', 'bg-purple-100']

export default function QuizzApp() {
  // Quizz State
  const [quizState, setQuizState] = useState<QuizState>('menu')

  // Menu
  const [menuData, setMenuData] = useState<MenuData[]>([])

  // Quiz
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [currentQuestions, setCurrentQuestions] = useState<QuizzesData[]>([])
  const [currentQuizId, setCurrentQuizId] = useState(0)
  const [currentQuestionId, setCurrentQuestionId] = useState(0)
  const currentQuestion = currentQuestions[currentQuestionId]
  const quizTotalQuestions = currentQuestions.length
  const quizProgression = (currentQuestionId / (quizTotalQuestions - 1)) * 100

  // Set menu quiz data
  useEffect(() => {
    const menuData = data.quizzes.map((item, index) => ({
      id: index,
      title: item.title,
      icon: item.icon,
      color: QUIZ_COLORS[index],
    }))
    setMenuData(menuData)
  }, [])

  // Start Quiz
  function handleStartQuiz(id: number) {
    setCurrentQuizId(id)
    setCurrentQuestionId(0)
    setCorrectAnswers(0)

    const questions = data.quizzes[id].questions.map((question, index) => ({
      id: index,
      question: question.question,
      options: question.options,
      answer: question.answer,
    }))

    setCurrentQuestions(questions)
    setQuizState('quiz')
  }

  // Next question / Finish quiz
  function handleNextQuestion(answer: string) {
    if (answer === currentQuestion.answer) setCorrectAnswers((prev) => prev + 1)
    setCurrentQuestionId((prev) => {
      const next = prev + 1
      const isLast = next >= quizTotalQuestions

      if (isLast) {
        setQuizState('score')
        return prev
      }

      return next
    })
  }

  return (
    <div className="flex min-h-screen flex-col bg-[var(--bg-page)] bg-[url('/assets/images/pattern-background-mobile-light.svg')] bg-cover bg-top bg-no-repeat md:bg-[url('/assets/images/pattern-background-tablet-light.svg')] lg:bg-[url('/assets/images/pattern-background-desktop-light.svg')] dark:bg-[url('/assets/images/pattern-background-mobile-dark.svg')] dark:md:bg-[url('/assets/images/pattern-background-tablet-dark.svg')] dark:lg:bg-[url('/assets/images/pattern-background-desktop-dark.svg')]">
      <header>
        <div className="flex items-center p-4">
          {(quizState === 'quiz' || quizState === 'score') && (
            <Logo
              icon={menuData[currentQuizId].icon}
              title={menuData[currentQuizId].title}
              color={menuData[currentQuizId].color}
            />
          )}
          <ThemeToggle />
        </div>
      </header>
      <main className="p-6 pt-8 xl:m-auto xl:min-w-290">
        {quizState === 'menu' && (
          <StartScreen quizzesMenu={menuData} onSelectQuiz={handleStartQuiz} />
        )}
        {quizState === 'quiz' && (
          <QuestionScreen
            id={currentQuestionId + 1}
            question={currentQuestion.question}
            options={currentQuestion.options}
            answer={currentQuestion.answer}
            progression={quizProgression}
            totalQuestion={quizTotalQuestions}
            onClickNext={handleNextQuestion}
          />
        )}
        {quizState === 'score' && (
          <ScoreScreen
            icon={menuData[currentQuizId].icon}
            title={menuData[currentQuizId].title}
            color={menuData[currentQuizId].color}
            correctAnswers={correctAnswers}
            totalQuestions={quizTotalQuestions}
            onClick={() => setQuizState('menu')}
          />
        )}
      </main>
    </div>
  )
}
