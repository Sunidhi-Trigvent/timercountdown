import React, { useState } from "react";

function Countertimer() {
  const [time, setTime] = useState(0);

  function handleInput(event) {
    setTime(parseInt(event.target.value) * 60);
  }

  const formatTime = () => {
    const min = String(Math.floor(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, "0");

    return `${min} : ${sec}`;
  };

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
        <button>start</button>
        <button>pause</button>
        <button>reset</button>
      </div>
    </>
  );
}

export default Countertimer;
