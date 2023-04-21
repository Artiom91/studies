import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);
  const counterIdRef = useRef(null);

  useEffect(() => {
    const userCount = localStorage.getItem('count');
    if (userCount) setCount(+userCount);
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  const handleReset = () => {
    setCount(0);
    setIsCounting(false);
    clearInterval(counterIdRef.current);
  };

  const handleStart = () => {
    setIsCounting(true);
    counterIdRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(counterIdRef.current);
    setIsCounting(false);
  };

  useEffect(() => {
    return () => {
      clearInterval(counterIdRef.current);
    };
  }, []);

  return (
    <div className="Timer">
      <h1>React Timer</h1>
      <h3>{count}</h3>
      {!isCounting ? (
        <button onClick={handleStart}>Start</button>
      ) : (
        <button onClick={handleStop}>Stop</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer;
