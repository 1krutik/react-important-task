import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const [time, setTimer] = useState(0);
  const id = useRef(null);

  const StartBtn = () => {
    id.current = setInterval(() => {
      setTimer((time) => time + 1);
    }, 500);
  };

  


  const StopBtn = () => {
    clearInterval(id.current);
  };
  const ResetBtn = () => {
    setTimer(0);
   
  };
  return (
    <div className="timer2">
      <h1>Timer {time}</h1>

      <button className="btn btn-primary" onClick={StartBtn}>
        Start
      </button>
      <button className="btn btn-primary" onClick={StopBtn}>
        stop
      </button>
      <button className="btn btn-primary" onClick={ResetBtn}>
        Reset
      </button>
    </div>
  );
};

export default Timer;
