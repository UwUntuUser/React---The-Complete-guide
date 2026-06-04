import { useState, useRef } from "react";
import DialogModal from "./DialogModal";

export default function Game({ level, time }) {
  const [remainingTime, setRemainingTime] = useState(time); // miliseconds
  const timerRef = useRef(time);
  const dialogRef = useRef();

  const isTimerActive = remainingTime > 0 && remainingTime < time;

  if (remainingTime <= 0) {
    dialogRef.current.showModal();
    clearInterval(timerRef.current);
  }

  function handleStartClick() {
    timerRef.current = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 10);
    }, 10);
  }

  function handleStopClick() {
    dialogRef.current.showModal();
    clearInterval(timerRef.current);
  }

  function restartTimer() {
    setRemainingTime(time);
  }

  return (
    <>
      <DialogModal
        targetTime={time}
        remainingTime={remainingTime}
        ref={dialogRef}
        onCloseDialog={restartTimer}
      ></DialogModal>
      <div className="challenge">
        <h2>{level}</h2>
        <p className="challenge-time">
          {time / 1000} second{time > 1 ? "s" : ""}
        </p>
        <button onClick={isTimerActive ? handleStopClick : handleStartClick}>
          {isTimerActive ? "Stop timer" : "Start timer"}
        </button>
        <p>{isTimerActive ? "Timer running..." : "Timer stopped"}</p>
      </div>
    </>
  );
}
