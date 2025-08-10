import { useEffect, useState, useRef } from "react";

const SHAPES = [
  { name: "E", src: "/images/E.png" },
  { name: "F", src: "/images/letter-f-svgrepo-com.svg" },
];

const DOT_COLORS = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f"];
const TRIALS = 40; // You can make this configurable
const STIMULUS_INTERVAL = 1300; // ms, can randomize between 1000-1500 if desired

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateStimulus() {
  const shape = SHAPES[getRandomInt(0, SHAPES.length - 1)];
  const dots = getRandomInt(1, 4);
  return {
    shape,
    dots,
    correct: shape.name === "E" && dots === 3,
  };
}

export default function ETestScan() {
  const [stimulus, setStimulus] = useState(generateStimulus());
  const [trial, setTrial] = useState(1);
  const [results, setResults] = useState([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState("");
  const timerRef = useRef();

  useEffect(() => {
    if (trial > TRIALS) return;
    timerRef.current = setTimeout(() => {
      nextTrial(null); // No response
    }, STIMULUS_INTERVAL);
    return () => clearTimeout(timerRef.current);
  }, [stimulus, trial]);

  function nextTrial(response) {
    clearTimeout(timerRef.current);
    if (trial > TRIALS) return;
    if (response !== null) {
      const isCorrect = (response === "yes" && stimulus.correct) || (response === "no" && !stimulus.correct);
      setResults((r) => [...r, { ...stimulus, response, isCorrect }]);
      setFeedback(isCorrect ? "Correct!" : "Incorrect");
      setShowFeedback(true);
      setTimeout(() => {
        setShowFeedback(false);
        setStimulus(generateStimulus());
        setTrial((t) => t + 1);
      }, 400);
    } else {
      setResults((r) => [...r, { ...stimulus, response: "timeout", isCorrect: false }]);
      setStimulus(generateStimulus());
      setTrial((t) => t + 1);
    }
  }

  function handleResponse(ans) {
    nextTrial(ans);
  }

  // Randomize dot positions around the image
  function renderDots(n) {
    const dots = [];
    for (let i = 0; i < n; i++) {
      const top = getRandomInt(60, 120); // px, adjust as needed
      const left = getRandomInt(120, 180); // px, adjust as needed
      dots.push(
        <div
          key={i}
          style={{
            position: "absolute",
            top: `${top}px`,
            left: `${left + i * 20}px`,
            width: 18,
            height: 18,
            borderRadius: "50%",
            background: DOT_COLORS[i % DOT_COLORS.length],
            border: "2px solid #333",
          }}
        />
      );
    }
    return dots;
  }

  if (trial > TRIALS) {
    return (
      <div>
        <h1>Test Complete</h1>
        <p>Score: {results.filter((r) => r.isCorrect).length} / {TRIALS}</p>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center", marginTop: 40 }}>
      <h1>E-Test Scan</h1>
      <p>Trial {trial} / {TRIALS}</p>
      <div style={{ position: "relative", display: "inline-block", width: 300, height: 200, margin: 20 }}>
        <img
          src={stimulus.shape.src}
          alt={stimulus.shape.name}
          style={{ width: 120, height: 120, marginTop: 30 }}
        />
        {renderDots(stimulus.dots)}
      </div>
      <div>
        <button onClick={() => handleResponse("yes")} style={{ margin: 10, fontSize: 18 }}>Yes</button>
        <button onClick={() => handleResponse("no")} style={{ margin: 10, fontSize: 18 }}>No</button>
      </div>
      {showFeedback && <div style={{ fontSize: 22, margin: 10 }}>{feedback}</div>}
    </div>
  );
}