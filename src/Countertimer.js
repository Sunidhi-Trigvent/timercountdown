import React, { useEffect, useRef, useState } from "react";

function Countertimer() {
  const [time, setTime] = useState(0);
  const [isActive, setActive] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const intervalRef = useRef(null);

  function handleInput(event) {
    setTime(parseInt(event.target.value) * 60);
  }

  const formatTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, "0");

    return `${min} : ${sec}`;
  };

  const handleStart = () => {
    setActive(true);
    setIsPause(false);
  };

  const handlePause = () => {
    setIsPause(!isPause);
  };

  const handleReset = () => {
    clearInterval(intervalRef.clear);
    setActive(false);
    setIsPause(false);
    setTime(0);
  };

  useEffect(() => {
    if (isActive && !isPause && time > 0) {
      intervalRef.current = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    } else if (time == 0) {
      clearInterval(intervalRef.current);
      setActive(false);
      alert("Time is up");
    }
    return () => clearInterval(intervalRef.current);
  }, [isActive, isPause, time]);

  return (
    <>
      <h1>CountDown Timer</h1>
      <input
        type="number"
        placeholder="Enter times in minutes"
        onChange={handleInput}
      ></input>
      <div>{formatTime()}</div>
      <br />
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        <button onClick={handleStart} disabled={isActive && !isPause}>
          start
        </button>
        <button onClick={handlePause} disabled={!isActive}>
          {" "}
          {isPause ? "Resume" : "Pause"}
        </button>
        <button onClick={handleReset}>reset</button>
      </div>
    </>
  );
}

export default Countertimer;
