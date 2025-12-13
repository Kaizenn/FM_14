export default function ButtonWithIcon({
  title,
  icon,
  color,
  onClick,
}: {
  title: string
  icon: string
  color: string
  onClick: () => void
}) {
  return (
    <button
      className={`text-preset4 flex h-18 cursor-pointer items-center gap-4 rounded-xl bg-[var(--bg-control)] p-4 text-[var(--fg-primary)] transition-all hover:scale-102 active:scale-98`}
      onClick={onClick}
    >
      <div className={`flex h-10 w-10 items-center justify-center rounded-md ${color}`}>
        <img className="w-7" src={icon} alt="icon" />
      </div>
      <p>{title}</p>
    </button>
  )
}
