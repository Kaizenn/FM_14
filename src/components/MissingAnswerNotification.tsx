export default function MissingAnswerNotification() {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/images/icon-error.svg" />
        <p className="text-[var(--on-state-error)]">Please select an answer</p>
      </div>
    </>
  )
}
