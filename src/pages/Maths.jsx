import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestCard from "../components/TestCard";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#A7C7E7] via-[#F5F7FA] to-[#FFF9C4] p-4">
      <div className="flex flex-col items-center w-full max-w-4xl space-y-8">
        {tests.map((test) => (
          <TestCard key={test.id} test={test} onStart={handleStart} />
        ))}
      </div>
    </div>
  );
}