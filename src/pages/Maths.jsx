import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Maths() {
  const tests = [
    {
      id: 1,
      image: "https://via.placeholder.com/150",
      title: "Matemáticas Básicas",
      description: "Aprende matemáticas con nuestros ejercicios y problemas.",
      duration: "30 minutos",
      questions: 10,
      tags: [{ label: "Matemáticas", color: "bg-purple-400" }],
    },
    {
      id: 2,
      image: "https://via.placeholder.com/150/0000FF/808080?text=Álgebra",
      title: "Álgebra",
      description: "Resuelve ecuaciones y problemas de álgebra.",
      duration: "25 minutos",
      questions: 8,
      tags: [{ label: "Álgebra", color: "bg-blue-400" }],
    },
    {
      id: 3,
      image: "https://via.placeholder.com/150/FF0000/FFFFFF?text=QuickCalc",
      title: "QuickCalc",
      description: "Resuelve operaciones matemáticas lo más rápido posible.",
      duration: "5 minutos",
      questions: 20,
      tags: [{ label: "Cálculo rápido", color: "bg-red-400" }],
    },
    // Puedes agregar más tests aquí
  ];

  const navigate = useNavigate();

  function handleStart(test) {
    if (test.title === "QuickCalc") {
      navigate("/tests/maths/quickcalc");
    } else {
      navigate(`/tests/maths/${test.id}`);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        {tests.map((test) => (
          <div key={test.id} className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4 w-full">
            <div className="flex-1 min-w-[120px] max-w-[180px] flex items-center justify-center">
              <img src={test.image} alt="Lesson" className="rounded-lg w-full object-cover max-h-32" />
            </div>
            <div className="flex-1 flex flex-col justify-between gap-2">
              <h2 className="text-2xl font-bold text-purple-700">{test.title}</h2>
              <p className="text-gray-600 mb-2">{test.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {test.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-1 rounded text-xs font-semibold text-white ${tag.color}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm text-gray-500">
                <span>⏱️ {test.duration}</span>
                <span>❓ {test.questions} preguntas</span>
              </div>
              <button
                className="mt-4 px-6 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded shadow transition-colors duration-200 self-center"
                onClick={() => handleStart(test)}
              >
                Comenzar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}