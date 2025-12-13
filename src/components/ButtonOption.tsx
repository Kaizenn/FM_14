const letters = ['a', 'b', 'c', 'd']

export default function ButtonOption({
  answer,
  options,
  showAnswer,
  currentAnswer,
  selectedAnswer,
  showError,
}: {
  answer: string
  options: string[]
  showAnswer: boolean
  currentAnswer: string
  selectedAnswer: (answer: string) => void
  showError: (boolean: boolean) => void
}) {
  return (
    <>
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            if (!showAnswer) selectedAnswer(option)
            showError(false)
          }}
          className={`text-preset4 flex h-18 cursor-pointer items-center gap-4 rounded-xl bg-[var(--bg-control)] p-4 text-left text-[var(--fg-primary)] transition-transform active:scale-98 ${!showAnswer && currentAnswer === option ? 'border-3 border-[var(--control-border-selected)]' : ''} ${showAnswer && answer === option && currentAnswer === answer ? 'border-3 border-[var(--control-border-result-success)]' : ''} ${showAnswer && answer !== option && currentAnswer === option ? 'border-3 border-[var(--control-border-result-error)]' : ''}`}
        >
          <div
            className={`flex h-10 min-w-10 items-center justify-center rounded-md bg-[var(--bg-control-subtle)] text-[var(--fg-control-subtle)] ${!showAnswer && currentAnswer === option ? 'bg-[var(--control-subtle-selected)] text-[var(--on-accent)]' : ''}`}
          >
            <p className="uppercase">{letters[index]}</p>
          </div>
          {option}
          <div className="ml-auto">
            {showAnswer && answer === option && <img src="./assets/images/icon-correct.svg" />}
            {showAnswer && answer !== option && currentAnswer === option && (
              <img src="./assets/images/icon-error.svg" />
            )}
          </div>
        </button>
      ))}
    </>
  )
}
