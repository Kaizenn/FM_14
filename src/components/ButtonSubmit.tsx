export default function ButtonSubmit({ text, onClick }: { text: string; onClick: () => void }) {
  return (
    <>
      <button
        className="text-preset4 mb-8 flex h-14 w-full cursor-pointer items-center justify-center rounded-xl bg-[var(--accent-primary)] text-[var(--on-accent)] transition-all hover:scale-102 hover:bg-[var(--accent-primary-hover)] active:scale-98"
        onClick={onClick}
      >
        {text}
      </button>
    </>
  )
}
