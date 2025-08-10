import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { tests } from "../data/tests";

export default function Reaction() {
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/test/${id}`);
    };

    // Filter tests to only show reaction tests
    const reactionTests = tests.filter(test => 
        test.tags.some(tag => tag.label === "Reacción")
    );

    // Mock data for stats, ranking, and suggestions
    const stats = {
        completed: 12,
        avgTime: 245,
        bestTime: 189,
        rank: 156
    };

    const ranking = [
        { name: "Piloto Elite", time: 156 },
        { name: "Speed Master", time: 167 },
        { name: "Reflex Pro", time: 178 },
        { name: "Quick Pilot", time: 189 },
        { name: "Reaction King", time: 201 }
    ];

    const suggestions = [
        { title: "E-Test scan - Nivel avanzado" },
        { title: "Reflejos rápidos - Entrenamiento diario" },
        { title: "Coincidencia rápida - Mejora velocidad" }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Contenedor principal */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">

                {/* Columna principal */}
                <div className="lg:col-span-3">
                    {/* Header */}
                    <header className="mb-6">
                        <h1 className="text-3xl font-bold text-gray-800">Tests de Reacción</h1>
                        <p className="text-gray-600 mt-1">
                            Pon a prueba y mejora tu tiempo de respuesta con ejercicios diseñados para pilotos y jugadores competitivos.
                        </p>
                    </header>

                    {/* Filtros */}
                    <div className="flex flex-wrap gap-3 mb-6">
                        {["Todos", "Fácil", "Medio", "Difícil"].map((filter) => (
                            <button
                                key={filter}
                                className="px-3 py-1 rounded-full border hover:bg-gray-100 text-sm"
                            >
                                {filter}
                            </button>
                        ))}
                    </div>

                    {/* Grid de tests */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                        {reactionTests.map((test) => (
                            <div
                                key={test.id}
                                className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col"
                            >
                                <img
                                    src={test.image}
                                    alt={test.title}
                                    className="rounded-md mb-3 object-cover h-40 w-full"
                                />
                                <h2 className="text-lg font-semibold">{test.title}</h2>
                                <p className="text-sm text-gray-600 mb-3">{test.description}</p>
                                <div className="flex flex-wrap gap-2 mb-3">
                                    {test.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className={`px-2 py-1 rounded-full text-xs font-medium ${tag.color}`}
                                        >
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-auto flex justify-between items-center">
                                    <span className="text-sm text-gray-500">{test.duration}</span>
                                    <button 
                                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                                        onClick={() => handleClick(test.id)}
                                    >
                                        Empezar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                    {/* Estadísticas personales */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h3 className="font-semibold text-gray-800 mb-3">Tus estadísticas</h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Tests completados: <span className="font-medium">{stats.completed}</span></li>
                            <li>Tiempo medio: <span className="font-medium">{stats.avgTime} ms</span></li>
                            <li>Mejor tiempo: <span className="font-medium">{stats.bestTime} ms</span></li>
                            <li>Posición global: <span className="font-medium">#{stats.rank}</span></li>
                        </ul>
                    </div>

                    {/* Ranking global */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h3 className="font-semibold text-gray-800 mb-3">Ranking Global</h3>
                        <ol className="space-y-2 text-sm">
                            {ranking.map((player, i) => (
                                <li key={i} className="flex justify-between">
                                    <span>{i + 1}. {player.name}</span>
                                    <span className="font-medium">{player.time} ms</span>
                                </li>
                            ))}
                        </ol>
                    </div>

                    {/* Sugerencias de tests */}
                    <div className="bg-white rounded-lg shadow p-4">
                        <h3 className="font-semibold text-gray-800 mb-3">Tests sugeridos</h3>
                        <ul className="space-y-2 text-sm">
                            {suggestions.map((s, i) => (
                                <li key={i} className="hover:underline cursor-pointer text-blue-600">
                                    {s.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
        </div>
    );
}