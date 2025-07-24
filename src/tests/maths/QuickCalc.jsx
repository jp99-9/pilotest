import { useState, useEffect } from "react";

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default function QuickCalc() {
  const [level, setLevel] = useState(1);
  const [question, setQuestion] = useState({});
  const [results, setResults] = useState([]);
  const [startTime, setStartTime] = useState(null);
  const [selected, setSelected] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  useEffect(() => {
    const q = generateEquation(level);
    setQuestion(q);
    setStartTime(Date.now());
    setSelected(null);
    setShowFeedback(false);
  }, [level]);

  function handleAnswer(value) {
    if (selected !== null) return; // Prevent multiple answers
    const reactionTime = Date.now() - startTime;
    const isCorrect = value === question.correct;
    setSelected(value);
    setShowFeedback(true);
    setResults(prev => [
      ...prev,
      {
        question: question.question,
        selected: value,
        correct: question.correct,
        isCorrect,
        reactionTime
      }
    ]);
  }

  function handleNext() {
    if ((results.length) % 5 === 0 && level < 5) {
      setLevel(level + 1);
    } else {
      // Just trigger useEffect to get a new question
      setQuestion(generateEquation(level));
      setStartTime(Date.now());
      setSelected(null);
      setShowFeedback(false);
    }
  }

  function generateEquation(level) {
    if (level === 1) {
      const a = rand(1, 20), b = rand(1, 20);
      const answer = a + b;
      return {
        question: `${a} + ${b}`,
        correct: answer,
        options: shuffle([answer, answer + 1, answer - 1, answer + 2])
      };
    }
    if (level === 2) {
      const a = rand(1, 20), b = rand(1, 10), c = rand(1, 5);
      const question = `${a} + ${b} × ${c}`;
      const answer = a + (b * c);
      return {
        question,
        correct: answer,
        options: shuffle([answer, answer + 3, answer - 2, answer + 1])
      };
    }
    if (level === 3) {
      const a = rand(10, 20), b = rand(1, 10), c = rand(1, 5);
      const question = `(${a} - ${b}) × ${c}`;
      const answer = (a - b) * c;
      return {
        question,
        correct: answer,
        options: shuffle([answer, answer + 4, answer - 4, answer + 1])
      };
    }
    // Si el nivel es mayor que 3, retorna null para indicar que terminó
    return null;
  }

  // Estado para mostrar el popup final
  const [showSummary, setShowSummary] = useState(false);

  // Cuando el nivel supera el máximo, muestra el resumen
  useEffect(() => {
    if (level > 3) {
      setShowSummary(true);
    }
  }, [level]);

  // Calcular estadísticas
  const total = results.length;
  const correct = results.filter(r => r.isCorrect).length;
  const errors = total - correct;
  const avgTime = total > 0 ? (results.reduce((acc, r) => acc + r.reactionTime, 0) / total / 1000).toFixed(2) : 0;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      {showSummary ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-purple-700">¡Test finalizado!</h2>
            <div className="mb-2 text-lg">Total preguntas: {total}</div>
            <div className="mb-2 text-green-600">Aciertos: {correct}</div>
            <div className="mb-2 text-red-600">Errores: {errors}</div>
            <div className="mb-2 text-blue-600">Tiempo promedio de respuesta: {avgTime} s</div>
            <button
              className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded shadow transition-colors duration-200"
              onClick={() => { setLevel(1); setResults([]); setShowSummary(false); }}
            >
              Reiniciar
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">QuickCalc - Agilidad numérica</h2>
          <div className="mb-6 text-lg font-semibold text-gray-800">{question && question.question}</div>
          <div className="grid grid-cols-2 gap-4 mb-6 w-full">
            {question && question.options?.map((opt, i) => {
              let btnClass = "px-4 py-2 rounded-lg font-bold text-lg border transition-all duration-150 ";
              if (selected !== null) {
                if (opt === question.correct) {
                  btnClass += " bg-green-500 text-white border-green-700";
                } else if (opt === selected) {
                  btnClass += " bg-red-500 text-white border-red-700";
                } else {
                  btnClass += " bg-gray-100 text-gray-400 border-gray-200";
                }
              } else {
                btnClass += " bg-purple-100 hover:bg-purple-200 text-purple-700 border-purple-300";
              }
              return (
                <button
                  key={i}
                  className={btnClass}
                  onClick={() => handleAnswer(Number(opt))}
                  disabled={selected !== null}
                >
                  {opt}
                </button>
              );
            })}
          </div>
          {selected !== null && (
            <div className="mb-4 w-full text-center">
              {selected === question?.correct ? (
                <span className="text-green-600 font-semibold">¡Correcto!</span>
              ) : (
                <span className="text-red-600 font-semibold">Incorrecto. Respuesta correcta: {question?.correct}</span>
              )}
            </div>
          )}
          {selected !== null && (
            <button
              className="mt-2 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded shadow transition-colors duration-200"
              onClick={handleNext}
              autoFocus
            >
              Siguiente
            </button>
          )}
          <div className="mt-6 text-sm text-gray-500">Pregunta #{results.length + 1} &nbsp;|&nbsp; Nivel {level}</div>
        </div>
      )}
    </div>
  );
}