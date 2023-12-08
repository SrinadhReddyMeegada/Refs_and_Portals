import { useRef, useState } from "react";
import ResultModal from "./ResultsModal";

export default function TimeChallenge({ title, targettime }) {
  const timer = useRef();
  const dialog = useRef();
  const [remainingTime, setRemainingTime] = useState(targettime * 1000);
  const timeIsActive = remainingTime > 0 && remainingTime < targettime * 1000;
  const handleStart = () => {
    timer.current = setInterval(() => {
      setRemainingTime((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  };
  if (remainingTime <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  const handleReset = () => {
    setRemainingTime(targettime * 1000);
  };
  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };
  return (
    <>
      <ResultModal
        ref={dialog}
        targettime={targettime}
        timeRemaining={remainingTime}
        onReset={handleReset}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targettime} second{targettime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timeIsActive ? handleStop : handleStart}>
            {timeIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timeIsActive ? "active" : undefined}>
          {timeIsActive ? "Time is running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
