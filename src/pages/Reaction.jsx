import { useState } from "react";
import TestCard from "../components/TestCard";


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
            image: "/images/imagenReactionTest.png",
        },
        // Puedes agregar más tests aquí
    ];

    function handleStart(test) {
    // Navega a la página del test E-Test scan usando react-router
    if (test.id === 1) {
        window.location.href = "/tests/reaction/eTestScan";
        return;
    }
    if(test.id === 2) {
        window.location.href = "/tests/test";
        return;
    }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#A7C7E7] via-[#F5F7FA] to-[#FFF9C4] p-4">
            <div className="flex flex-col items-center w-full max-w-4xl space-y-8">
                {tests.map((test) => (
                    <TestCard key={test.id} test={test} onStart={handleStart} />
                ))}
            </div>
        </div>
    );
}