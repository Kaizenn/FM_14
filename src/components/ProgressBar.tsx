export default function ProgressBar({ value }: { value: number }) {
  return (
    <div className="mb-10 flex h-4 w-full rounded-2xl border-4 border-[var(--progress-border)] bg-[var(--progress-track)]">
      <div
        className="h-full rounded-2xl bg-[var(--progress-fill)] transition-all"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
