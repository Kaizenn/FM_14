import Score from './Score'
import ButtonSubmit from './ButtonSubmit'

export default function ScoreScreen({
  icon,
  title,
  color,
  onClick,
  correctAnswers,
  totalQuestions,
}: {
  icon: string
  title: string
  color: string
  onClick: () => void
  correctAnswers: number
  totalQuestions: number
}) {
  return (
    <div className="m-auto flex w-full flex-col gap-10 xl:w-auto xl:flex-row xl:justify-between">
      <div className="flex flex-1 flex-col text-[var(--fg-primary)]">
        <p className="text-preset2-light">Quiz completed</p>
        <p className="text-preset2">You scored...</p>
      </div>
      <div className="flex-1">
        <Score
          icon={icon}
          title={title}
          color={color}
          correctAnswers={correctAnswers}
          totalQuestions={totalQuestions}
        />
        <ButtonSubmit onClick={onClick} text="Play Again" />
      </div>
    </div>
  )
}
