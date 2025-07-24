import React, { useState, useRef } from "react";

export default function ReactionTest() {
  const [status, setStatus] = useState("waiting"); // waiting, ready, now, result
  const [message, setMessage] = useState("Click start to begin the reaction test.");
  const [reactionTime, setReactionTime] = useState(null);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  const startTest = () => {
    setStatus("ready");
    setMessage("Wait for green, then click as fast as you can!");
    const randomDelay = Math.floor(Math.random() * 2000) + 1000; // 1-3 seconds
    timerRef.current = setTimeout(() => {
      setStatus("now");
      setMessage("CLICK NOW!");
      startTimeRef.current = Date.now();
    }, randomDelay);
  };

  const handleClick = () => {
    if (status === "waiting") {
      startTest();
    } else if (status === "ready") {
      // Clicked too soon
      clearTimeout(timerRef.current);
      setStatus("waiting");
      setMessage("Too soon! Click start to try again.");
    } else if (status === "now") {
      const endTime = Date.now();
      const reaction = endTime - startTimeRef.current;
      setReactionTime(reaction);
      setStatus("result");
      setMessage(`Your reaction time: ${reaction} ms`);
    } else if (status === "result") {
      setReactionTime(null);
      setStatus("waiting");
      setMessage("Click start to begin the reaction test.");
    }
  };

  const handleReset = () => {
    clearTimeout(timerRef.current);
    setReactionTime(null);
    setStatus("waiting");
    setMessage("Click start to begin the reaction test.");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full gap-6">
      <h2 className="text-2xl font-bold mb-4">Reaction Test</h2>
      <div
        className={`w-80 h-40 flex items-center justify-center rounded-lg shadow-lg cursor-pointer select-none transition-all
          ${status === "now" ? "bg-green-400" : status === "ready" ? "bg-yellow-200" : "bg-gray-100"}
        `}
        onClick={handleClick}
      >
        <span className="text-lg font-semibold text-gray-800 text-center px-4">{message}</span>
      </div>
      {status === "result" && (
        <button
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
          onClick={handleReset}
        >
          Reset
        </button>
      )}
      {status === "waiting" && (
        <button
          className="mt-4 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition"
          onClick={handleClick}
        >
          Start
        </button>
      )}
    </div>
  );
} 