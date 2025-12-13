export type QuizState = 'menu' | 'quiz' | 'score'

export type MenuData = {
  id: number
  title: string
  icon: string
  color: string
}

export type QuizzesData = {
  id: number
  question: string
  options: string[]
  answer: string
}
