export default function Logo({
  icon,
  title,
  color,
}: {
  icon: string
  title: string
  color: string
}) {
  return (
    <div className="text-preset4 flex items-center gap-4 text-[var(--fg-primary)]">
      <div className={`flex h-10 w-10 items-center justify-center rounded-md ${color}`}>
        <img className="w-7" src={icon} alt="icon" />
      </div>
      <p>{title}</p>
    </div>
  )
}
