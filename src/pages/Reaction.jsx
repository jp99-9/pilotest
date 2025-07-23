import { useState } from "react";
import ETestScan from "../tests/E-testScan";

export default function Reaction() {
    const [started, setStarted] = useState(false);
    const [difficulty, setDifficulty] = useState("");

    const testDetails = {
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
    };

    const difficulties = [
        { label: "Fácil", value: "easy" },
        { label: "Medio", value: "medium" },
        { label: "Difícil", value: "hard" },
    ];

    if (started) {
        return <ETestScan difficulty={difficulty} />;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
            <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4 mx-auto max-w-2xl w-full">
                <div className="flex-1 min-w-[120px] max-w-[180px] flex items-center justify-center">
                    <img
                        src={testDetails.image}
                        alt="Lesson"
                        className="rounded-lg w-full object-cover max-h-32"
                    />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                    <div className="flex flex-wrap gap-2 mb-2">
                        {testDetails.tags.map((tag, idx) => (
                            <span key={idx} className={`${tag.color} px-2 py-0.5 rounded-full text-xs font-semibold`}>{tag.label}</span>
                        ))}
                    </div>
                    <h1 className="text-lg md:text-xl font-extrabold mb-1 text-gray-800">
                        {testDetails.title}
                    </h1>
                    <p className="text-gray-600 mb-3 text-sm md:text-base">
                        {testDetails.description}
                    </p>
                    <ul className="mb-4 space-y-2 text-gray-700 text-sm">
                        <li className="flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span>
                            <span>Duración: <span className="font-semibold">{testDetails.duration}</span></span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                            <span>Número de preguntas: <span className="font-semibold">{testDetails.questions}</span></span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                            <span>Respuestas automáticas al instante</span>
                        </li>
                    </ul>
                    <div className="flex gap-4 mb-6">
                        {difficulties.map((d) => (
                            <button
                                key={d.value}
                                onClick={() => setDifficulty(d.value)}
                                className={`px-4 py-2 rounded font-semibold border transition text-base ${difficulty === d.value
                                    ? "bg-purple-500 text-white border-purple-700 shadow"
                                    : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-purple-100"
                                }`}
                                aria-pressed={difficulty === d.value}
                            >
                                {d.label}
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={() => setStarted(true)}
                        className={`start-btn mt-2 px-6 py-3 bg-purple-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-purple-600 transition ${!difficulty ? "opacity-50 cursor-not-allowed" : ""}`}
                        disabled={!difficulty}
                        aria-disabled={!difficulty}
                    >
                        ▶️ Empezar test
                    </button>
                </div>
            </div>
        </div>
    );
}