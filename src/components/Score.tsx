import Logo from './Logo'

export default function Score({
  icon,
  title,
  color,
  correctAnswers,
  totalQuestions,
}: {
  icon: string
  title: string
  color: string
  correctAnswers: number
  totalQuestions: number
}) {
  return (
    <div className="mb-4 flex flex-col items-center gap-4 rounded-xl bg-[var(--bg-surface)] p-8">
      <Logo icon={icon} title={title} color={color} />
      <p className="text-preset1 text-[var(--fg-primary)]">{correctAnswers}</p>
      <p className="text-preset4 text-[var(--fg-secondary)]">out of {totalQuestions}</p>
    </div>
  )
}
