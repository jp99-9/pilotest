import { useState } from "react";
import ReactionTest from "../tests/ReactionTest";
import ETestScan from "../tests/E-testScan";

export default function Reaction() {
    const [started, setStarted] = useState(false);

    if (started) {
        return <ETestScan />;
    }

    return (
        <>
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

                <div className="bg-white rounded-lg shadow p-4 flex flex-col md:flex-row gap-4 mt-10 mx-auto max-w-2xl w-full">
                    <div className="flex-1 min-w-[120px] max-w-[180px] flex items-center justify-center">
                        <img
                            src="https://assets-global.website-files.com/5d3e7caab81c1e3c6b3e5c7b/5e4b6e2e7b6e2e1e3c3e3e3e_webflow.png"
                            alt="Lesson"
                            className="rounded-lg w-full object-cover max-h-32"
                        />
                    </div>
                    <div className="flex-1 flex flex-col justify-center">
                        {/* Info tags */}
                        <div className="flex flex-wrap gap-2 mb-2">
                            <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-semibold">Ecutting</span>
                            <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-semibold">Usado por: Lufthansa</span>
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-semibold">Usado por: Delta</span>
                        </div>
                        <h2 className="text-lg md:text-xl font-extrabold mb-1 text-gray-800">
                            E-Test scan
                        </h2>
                        <p className="text-gray-600 mb-3 text-sm md:text-base">
                            En este test tendrás que identificar qué dado plegado corresponde con el patrón desplegado.
                        </p>

                        <ul className="mb-4 space-y-2 text-gray-700 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-purple-400 rounded-full"></span>
                                <span>Duración: <span className="font-semibold">2 minutos</span></span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-blue-400 rounded-full"></span>
                                <span>Número de preguntas: <span className="font-semibold">10</span></span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="inline-block w-2 h-2 bg-green-400 rounded-full"></span>
                                <span>Respuestas automáticas al instante</span>
                            </li>
                        </ul>
                        <button onClick={() => setStarted(true)} className="self-start px-3 py-1.5 bg-black text-white rounded hover:bg-gray-800 transition text-sm font-semibold">
                            ▶️ Empezar test
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
}