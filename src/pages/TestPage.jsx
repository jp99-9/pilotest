
import React from "react";

const test = {
  id: 1,
  title: "E-Test scan",
  description:
    "En este test tendrás que saber qué puntos de la imagen se encuentran en el mismo lugar.",
  duration: "2 minutos",
  questions: 10,
  instantFeedback: true,
  tags: [
    { label: "Ecutting", color: "bg-purple-100 text-purple-700" },
    { label: "Lufthansa", color: "bg-blue-100 text-blue-700" },
    { label: "Delta", color: "bg-green-100 text-green-700" },
  ],
  image:
    "https://assets-global.website-files.com/5d3e7caab81c1e3c6b3e5c7b/5e4b6e2e7b6e2e1e3c3e3e3e_webflow.png",
};

export function TestPage(){
    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-600">Categoría del Test</h2>
            <h1 className="text-3xl font-bold">{test.title}</h1>
            <div className="flex flex-wrap gap-2">
              {test.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${tag.color}`}
                >
                  {tag.label}
                </span>
              ))}
            </div>
          </div>
    
          {/* Preview */}
          <div className="w-full border rounded-lg p-4 bg-gray-50 flex flex-col md:flex-row gap-4 items-center">
            <img
              src={test.image}
              alt="Preview"
              className="w-full md:w-1/2 rounded-md object-cover"
            />
            <div className="text-gray-700 text-base md:w-1/2">
              <p>{test.description}</p>
              <ul className="mt-2 text-sm text-gray-500 space-y-1">
                <li>Duración: {test.duration}</li>
                <li>Preguntas: {test.questions}</li>
                <li>
                  Feedback Instantáneo: {test.instantFeedback ? "Sí" : "No"}
                </li>
              </ul>
            </div>
          </div>
    
          {/* Dificultad */}
          <div className="flex gap-4">
            {['Easy', 'Medium', 'Hard'].map((level) => (
              <button
                key={level}
                className={`px-4 py-2 rounded-md border text-sm font-medium hover:bg-gray-100 ${
                  level === 'Medium' ? 'bg-gray-200 border-gray-400' : 'border-gray-300'
                }`}
              >
                {level}
              </button>
            ))}
          </div>
    
          {/* Placeholder botones extra */}
          <div className="flex flex-col gap-2">
            <button className="w-full text-left text-blue-600 hover:underline">Guide ▼</button>
            <button className="w-full text-left text-blue-600 hover:underline">Stats ▼</button>
          </div>
    
          {/* Start button */}
          <div className="text-center">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Empezar Test
            </button>
          </div>
        </div>
      );
}