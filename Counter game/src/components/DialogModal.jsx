export default function DialogModal({
  targetTime,
  remainingTime,
  ref,
  onCloseDialog,
}) {
  return (
    <dialog ref={ref} className="result-modal">
      <h2>
        {remainingTime <= 0
          ? "You lost"
          : `Your score was ${Math.round(((targetTime - remainingTime) / targetTime) * 100)}`}
      </h2>
      <div>
        Your target time was <strong>{targetTime / 1000} seconds</strong>
      </div>
      <div>
        You stopped the timer with{" "}
        <strong>{(remainingTime / 1000).toFixed(2)} seconds left</strong>{" "}
      </div>
      <form method="dialog">
        <button onClick={onCloseDialog} type="submit">
          Cerrar
        </button>
      </form>
    </dialog>
  );
}
