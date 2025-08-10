import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { tests } from "../data/tests";

export function TestPage() {
  const [showGuide, setShowGuide] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showTest, setShowTest] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  // Debug: Log the current state
  console.log('TestPage State:', { showTest, isCompleted, showGuide, showSidebar });

  const { id } = useParams();
  const test = tests.find((t) => t.id === parseInt(id));
  
  if (!test) return <p>Test no encontrado</p>;
  
  const TestComponent = test.component;

  const startTest = () => {
    setIsCompleted(false);
    setShowTest(true);
  };

  const completeTest = () => {
    setIsCompleted(true);
    setShowTest(false);
  };

  const restartTest = () => {
    setIsCompleted(false);
    setShowTest(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-full mx-auto p-6 space-y-6">
        {/* Cabecera */}
        <header className="space-y-3">
          <h1 className="text-3xl font-bold">{test.title}</h1>
          <div className="flex gap-2 flex-wrap">
            {test.tags.map((tag, i) => (
              <span
                key={i}
                className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
              >
                {tag.label}
              </span>
            ))}
          </div>
          <p className="text-gray-600">{test.description}</p>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setShowGuide(!showGuide)}
              className="text-blue-600 hover:underline"
            >
              {showGuide ? "Ocultar guía ▲" : "Ver guía ▼"}
            </button>
            <button
              onClick={() => setShowSidebar(!showSidebar)}
              className="text-blue-600 hover:underline"
            >
              {showSidebar ? "Mostrar panel lateral ▶" : "Ocultar panel lateral ◀"}
            </button>
          </div>
          {showGuide && (
            <div className="p-4 bg-gray-50 rounded-lg text-sm">
              <p>Este test te ayudará a mejorar tus habilidades de {test.title.toLowerCase()}. 
              Lee las instrucciones cuidadosamente y responde de la manera más precisa posible.</p>
            </div>
          )}
        </header>

        {/* Zona principal */}
        <main className={`grid gap-6 ${showSidebar ? 'grid-cols-1 lg:grid-cols-4' : 'grid-cols-1'}`}>
          <div className={`bg-white border rounded-lg p-4 min-h-[400px] ${showSidebar ? 'lg:col-span-3' : 'lg:col-span-1'}`}>
            {showTest ? (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Test en progreso</h3>
                  <button
                    onClick={completeTest}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                  >
                    Finalizar Test
                  </button>
                </div>
                <TestComponent />
              </div>
                         ) : isCompleted ? (
               <div className="flex flex-col items-center justify-center min-h-[300px] w-full space-y-4">
                 <p className="text-center text-gray-500 text-lg">El test ha finalizado</p>
                 <button
                   onClick={restartTest}
                   className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 text-lg font-semibold shadow-lg"
                 >
                   Hacer Test Nuevamente
                 </button>
               </div>
             ) : (
               <div className="flex flex-col items-center justify-center min-h-[300px] w-full space-y-4">
                 <button
                   onClick={startTest}
                   className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 text-lg font-semibold shadow-lg"
                 >
                   Empezar Test
                 </button>
               </div>
             )}
          </div>

          {/* Panel lateral */}
          {showSidebar && (
            <aside className="bg-gray-50 p-4 rounded-lg border space-y-4 h-fit">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">Panel de Control</h3>
                <button
                  onClick={() => setShowSidebar(false)}
                  className="text-blue-600 hover:underline text-sm"
                >
                  ◀ Ocultar
                </button>
              </div>
              <div>
                <h3 className="font-semibold">Dificultad</h3>
                <div className="flex gap-2 mt-2">
                  {["Easy", "Medium", "Hard"].map((level) => (
                    <button
                      key={level}
                      className="px-3 py-1 rounded-md border text-sm hover:bg-gray-100"
                    >
                      {level}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold">Información</h3>
                <ul className="text-sm text-gray-600 mt-2 space-y-1">
                  <li>Duración: {test.duration}</li>
                  <li>Preguntas: {test.questions}</li>
                  <li>
                    Feedback: {test.instantFeedback ? "Sí" : "No"}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Consejo rápido</h3>
                <p className="text-sm text-gray-600">
                  Concéntrate en la precisión más que en la velocidad al inicio.
                </p>
              </div>
            </aside>
          )}
        </main>

        {/* Resultados y sugerencias */}
        {isCompleted && (
          <section className="space-y-6">
            <div className="bg-white p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-4">Resultados</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">85%</div>
                  <div className="text-sm text-gray-600">Precisión</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">2.3s</div>
                  <div className="text-sm text-gray-600">Tiempo promedio</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">8/10</div>
                  <div className="text-sm text-gray-600">Preguntas correctas</div>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-2">Tips para mejorar</h2>
              <p className="text-sm text-gray-700">
                Practica 5 minutos al día para mejorar tu tiempo de reacción.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border">
              <h2 className="text-xl font-bold mb-2">Tests sugeridos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                  <h4 className="font-semibold">Test de Memoria</h4>
                  <p className="text-sm text-gray-600">Mejora tu capacidad de retención</p>
                </div>
                <div className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow cursor-pointer">
                  <h4 className="font-semibold">Test de Velocidad</h4>
                  <p className="text-sm text-gray-600">Aumenta tu velocidad de respuesta</p>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}