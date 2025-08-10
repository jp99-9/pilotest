import { useState, useEffect } from 'react';

export default function QuickMatch() {
  const [stimulus, setStimulus] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [results, setResults] = useState([]);
  const symbols = ['▲', '■', '●'];

  useEffect(() => {
    const interval = setInterval(() => {
      const random = symbols[Math.floor(Math.random() * symbols.length)];
      setStimulus(random);
      setStartTime(Date.now());
    }, 2000); // cada 2 segundos nuevo símbolo

    return () => clearInterval(interval);
  }, []);

  const handleClick = (symbol) => {
    const reactionTime = Date.now() - startTime;
    const correct = symbol === stimulus;

    setResults([...results, { reactionTime, correct }]);
    setStimulus(null); // reset estímulo
  };

  return (
    <div className="test-container">
    <h2>Test de Reacción CUT-E</h2>
    {stimulus && <div className="stimulus">{stimulus}</div>}
  
    <div className="button-group">
      {symbols.map((s, idx) => (
        <button key={idx} onClick={() => handleClick(s)}>
          {s}
        </button>
      ))}
    </div>
  
    <div className="results">
      <h3>Resultados</h3>
      <ul>
        {results.map((res, i) => (
          <li key={i}>
            {res.correct ? '✔️' : '❌'} {res.reactionTime} ms
          </li>
        ))}
      </ul>
    </div>
  </div>
  
  );
}
