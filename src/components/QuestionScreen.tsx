import { useState } from 'react'

import ProgressBar from './ProgressBar'
import ButtonOption from './ButtonOption'
import ButtonSubmit from './ButtonSubmit'
import MissingAnswerNotification from './MissingAnswerNotification'

export default function QuestionScreen({
  id,
  question,
  options,
  answer,
  progression,
  totalQuestion,
  onClickNext,
}: {
  id: number
  question: string
  options: string[]
  answer: string
  progression: number
  totalQuestion: number
  onClickNext: (answer: string) => void
}) {
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)
  const [showChooseAnwserError, setShowChooseAnwserError] = useState(false)

  return (
    <>
      <p className="text-preset6 pb-4 text-[var(--fg-secondary)]">
        Question {id} of {totalQuestion}
      </p>
      <p className="text-preset3 pb-6 text-[var(--fg-primary)]">{question}</p>
      <ProgressBar value={progression} />
      <div className="mb-4 flex flex-col gap-4">
        <ButtonOption
          answer={answer}
          selectedAnswer={setCurrentAnswer}
          showError={setShowChooseAnwserError}
          options={options}
          showAnswer={showAnswer}
          currentAnswer={currentAnswer}
        />
      </div>

      {!showAnswer && (
        <ButtonSubmit
          onClick={() => {
            if (currentAnswer !== '') {
              setShowAnswer(true)
            } else {
              setShowChooseAnwserError(true)
            }
          }}
          text="Submit Answer"
        />
      )}

      {showAnswer && (
        <ButtonSubmit
          onClick={() => {
            onClickNext(currentAnswer)
            setShowAnswer(false)
            setCurrentAnswer('')
          }}
          text="Next Question"
        />
      )}

      {showChooseAnwserError && <MissingAnswerNotification />}
    </>
  )
}
