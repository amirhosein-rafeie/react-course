import React, { useEffect, useState } from "react";
import "./App.css";

const Timer = () => {
  const [time, setTime] = useState(3661);
  const [isRunning, setIsRunnig] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);
    const second = time % 60;

    return `${String(hour).padStart(2, "0")}:${String(minute).padStart(
      2,
      "0"
    )}:${String(second).padStart(2, "0")}`;
  };

  const handleStart = () => {
    setIsRunnig(true);
  };
  const handlePause = () => {
    setIsRunnig(false);
  };
  const handleReset = () => {
    setTime(3661);
    setIsRunnig(false);
  };

  return (
    <div className="timer-container">
      <h1 className="timer-display">{formatTime(time)}</h1>
      <div className="timer-buttons">
        <button className="start-button" onClick={handleStart}>
          Start
        </button>
        <button className="pause-button" onClick={handlePause}>
          Pause
        </button>
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
