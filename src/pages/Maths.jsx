import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TestCard from "../components/TestCard";
import { tests } from "../data/tests";

export default function Maths() {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/test/${id}`);
  };

  // Filter tests to only show maths tests
  const mathsTests = tests.filter(test => 
    test.tags.some(tag => tag.label === "Matemáticas")
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#A7C7E7] via-[#F5F7FA] to-[#FFF9C4] p-4">
      <div className="flex flex-col items-center w-full max-w-4xl space-y-8">
        {mathsTests.map((test) => (
          <TestCard key={test.id} test={test} onStart={handleClick} />
        ))}
      </div>
    </div>
  );
}