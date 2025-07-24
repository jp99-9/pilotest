import { useState } from "react";

export default function Reaction() {
    const tests = [
        {
            id: 1,
            title: "E-Test scan",
            description: "En este test tendrás que saber que puntos de la imagen se encuentran en el mismo lugar.",
            duration: "2 minutos",
            questions: 10,
            instantFeedback: true,
            tags: [
                { label: "Ecutting", color: "bg-purple-100 text-purple-700" },
                { label: "Lufthansa", color: "bg-blue-100 text-blue-700" },
                { label: "Delta", color: "bg-green-100 text-green-700" },
            ],
            image: "https://assets-global.website-files.com/5d3e7caab81c1e3c6b3e5c7b/5e4b6e2e7b6e2e1e3c3e3e3e_webflow.png",
        },
        {
            id: 2,
            title: "Reflejos Rápidos",
            description: "Pon a prueba tus reflejos con este test de reacción rápida.",
            duration: "1 minuto",
            questions: 8,
            instantFeedback: false,
            tags: [
                { label: "Reflejos", color: "bg-yellow-100 text-yellow-700" },
            ],
            image: "https://via.placeholder.com/150/FFFF00/000000?text=Reflejos",
        },
        // Puedes agregar más tests aquí
    ];

    function handleStart(test) {
        alert(`Comenzando test: ${test.title}`);
        // Aquí puedes navegar o mostrar el test real
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
                {tests.map((test) => (
                    <div key={test.id} className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4 w-full">
                        <div className="flex-1 min-w-[120px] max-w-[180px] flex items-center justify-center">
                            <img
                                src={test.image}
                                alt="Lesson"
                                className="rounded-lg w-full object-cover max-h-32"
                            />
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="flex flex-wrap gap-2 mb-2">
                                {test.tags.map((tag, idx) => (
                                    <span key={idx} className={`${tag.color} px-2 py-0.5 rounded-full text-xs font-semibold`}>{tag.label}</span>
                                ))}
                            </div>
                            <h1 className="text-lg md:text-xl font-extrabold mb-1 text-gray-800">
                                {test.title}
                            </h1>
                            <p className="text-gray-600 mb-3 text-sm md:text-base">
                                {test.description}
                            </p>
                            <ul className="mb-4 space-y-2 text-gray-700 text-sm">
                                <li className="flex items-center gap-2">
                                    <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span>
                                    <span>Duración: <span className="font-semibold">{test.duration}</span></span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                                    <span>Número de preguntas: <span className="font-semibold">{test.questions}</span></span>
                                </li>
                                {test.instantFeedback && (
                                    <li className="flex items-center gap-2">
                                        <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                                        <span>Respuestas automáticas al instante</span>
                                    </li>
                                )}
                            </ul>
                            <button
                                onClick={() => handleStart(test)}
                                className="mt-2 px-6 py-3 bg-purple-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-purple-600 transition self-center"
                            >
                                ▶️ Comenzar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}