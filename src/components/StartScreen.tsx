import ButtonWithIcon from './ButtonWithIcon'
import type { MenuData } from '../types'

export default function StartScreen({
  quizzesMenu,
  onSelectQuiz,
}: {
  quizzesMenu: MenuData[]
  onSelectQuiz: (id: number) => void
}) {
  return (
    <div className="m-auto flex w-full flex-col gap-10 xl:w-auto xl:flex-row xl:justify-between">
      <div className="flex-1">
        <h1 className="text-preset2-light pb-4 text-[var(--fg-primary)]">
          Welcome to the <br /> <span className="text-preset2">Frontend Quiz!</span>
        </h1>
        <p className="text-preset6 text-[var(--fg-secondary)]">Pick a subject to get started.</p>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        {quizzesMenu.map((item) => (
          <ButtonWithIcon
            key={item.id}
            title={item.title}
            icon={item.icon}
            color={item.color}
            onClick={() => onSelectQuiz(item.id)}
          />
        ))}
      </div>
    </div>
  )
}
