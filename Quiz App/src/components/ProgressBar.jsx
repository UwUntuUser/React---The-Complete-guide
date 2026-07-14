import { useState, useEffect } from "react";

export default function ProgressBar({ onTimeout, timeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    const timer = setTimeout(onTimeout, timeout);
    return () => clearTimeout(timer);
  }, [onTimeout, timeout]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => prev - 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <progress id="question-time" value={remainingTime} max={timeout}></progress>
  );
}
