import { useState } from "react";
import ReactionTest from "../tests/ReactionTest";

export default function Reaction() {
    const [started, setStarted] = useState(false);

    if (started) {
        return <ReactionTest />;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-4">
            <div className="bg-white rounded-xl shadow-lg p-8 max-w-lg w-full flex flex-col items-center">
                {/* /tests/spatial-orientation */}
                <h1 className="text-3xl font-bold mb-4 text-purple-700 text-center">Orientación espacial: Plegado de dados</h1>

                <p className="mb-6 text-gray-700 text-center">En este test tendrás que identificar qué dado plegado corresponde con el patrón desplegado.</p>

                <ul className="mb-8 text-gray-600 list-disc list-inside space-y-1 text-left w-full max-w-xs mx-auto">
                    <li>Duración: 2 minutos</li>
                    <li>Número de preguntas: 10</li>
                    <li>Respuestas automáticas al instante</li>
                </ul>

                <button
                    onClick={() => setStarted(true)}
                    className="start-btn mt-4 px-6 py-3 bg-purple-500 text-white rounded-lg text-lg font-semibold shadow hover:bg-purple-600 transition"
                >
                    ▶️ Empezar test
                </button>
            </div>
        </div>
    );
}