import React from "react";

const TestCard = ({ test, onStart }) => (
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-8 w-full max-w-3xl">
    <div className="flex-shrink-0 flex items-center justify-center w-full md:w-72">
      <img
        src={test.image}
        alt={test.title}
        className="rounded-xl w-full h-48 object-cover shadow-md"
      />
    </div>
    <div className="flex-1 flex flex-col justify-between">
      <div>
        <div className="flex flex-wrap gap-2 mb-3">
          {test.tags.map((tag, idx) => (
            <span key={idx} className="bg-[#FFD600] text-[#222] px-3 py-1 rounded-full text-xs font-semibold">{tag.label}</span>
          ))}
        </div>
        <h1 className="text-2xl font-extrabold mb-2 text-[#222]">{test.title}</h1>
        <p className="text-[#333] mb-4 text-base">{test.description}</p>
        <ul className="mb-6 space-y-2 text-[#333] text-base">
          <li className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-[#3498db] rounded-full"></span>
            <span><span role="img" aria-label="clock">⏱️</span> <b>Duración:</b> {test.duration}</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-block w-3 h-3 bg-blue-400 rounded-full"></span>
            <span><span role="img" aria-label="questions">❓</span> <b>Preguntas:</b> {test.questions}</span>
          </li>
          {test.instantFeedback && (
            <li className="flex items-center gap-3">
              <span className="inline-block w-3 h-3 bg-[#FFD600] rounded-full"></span>
              <span>Respuestas automáticas al instante</span>
            </li>
          )}
        </ul>
      </div>
      <button
        onClick={() => onStart(test.id)}
        className="w-full mt-2 px-8 py-4 bg-[#3498db] text-white rounded-xl text-xl font-bold shadow hover:bg-[#217dbb] transition"
      >
        ▶️ Comenzar
      </button>
    </div>
  </div>
);

export default TestCard; 