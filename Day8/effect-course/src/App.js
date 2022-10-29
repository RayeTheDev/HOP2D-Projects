import "./App.css";
import { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [doli, setDoli] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [paused, setPaused] = useState(true);
  const [hour, setHour] = useState(0);
  const [stop, setStop] = useState(false);
  function reset() {
    setDoli(0);
    setSeconds(0);
    setMinutes(0);
    setHour(0);
  }
  useEffect(() => {
    if (paused === true) return;
    let interval = null;

    interval = setInterval(() => {
      
      setDoli(doli + 1);
      

      if (doli === 100) {
        setSeconds(seconds + 1);
        setDoli(0);
      }

      if (seconds === 60) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
      if (minutes === 60) {
        setHour(hour + 1);
        setSeconds(0);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [paused, doli]);

  return (
    <div className="MainCont">
      <div className="Container">
        <p>
          {hour > 10 ? hour : `0${hour}`}:
          {minutes > 10 ? minutes : `0${minutes}`}:
          {seconds > 10 ? seconds : `0${seconds}`}:
          {doli > 10 ? doli : `0${doli}`}
        </p>
        <button onClick={() => setPaused(!paused)}>Start</button>
        <button onClick={() => setPaused(!paused)}>Stop</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default StopWatch;
