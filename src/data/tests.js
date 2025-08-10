// src/data/tests.js
import ETestScan from "../tests/reaction/ETestScan";
import ReactionTest from "../tests/reaction/ReactionTest";
import QuickMatch from "../tests/reaction/QuickMatch";
import QuickCalc from "../tests/maths/QuickCalc";

export const tests = [
  {
    id: 1,
    title: "E-Test scan",
    description: "Test para detectar puntos idénticos en la imagen.",
    duration: "2 minutos",
    questions: 10,
    instantFeedback: true,
    component: ETestScan,
    tags: [
      { label: "Reacción", color: "bg-orange-100 text-orange-700" },
      { label: "Ecutting", color: "bg-purple-100 text-purple-700" },
      { label: "Lufthansa", color: "bg-blue-100 text-blue-700" },
    ],
    image: "https://assets-global.website-files.com/...webflow.png",
  },
  {
    id: 2,
    title: "Reflejos rápidos",
    description: "Pon a prueba tus reflejos con este test rápido.",
    duration: "1 minuto",
    questions: 8,
    instantFeedback: false,
    component: ReactionTest,
    tags: [
      { label: "Reacción", color: "bg-orange-100 text-orange-700" },
      { label: "Reflejos", color: "bg-yellow-100 text-yellow-700" }
    ],
    image: "/images/imagenReactionTest.png",
  },
  {
    id: 3,
    title: "Coincidencia rápida",
    description: "Encuentra las coincidencias lo más rápido posible.",
    duration: "1.5 minutos",
    questions: 12,
    instantFeedback: true,
    component: QuickMatch,
    tags: [
      { label: "Reacción", color: "bg-orange-100 text-orange-700" },
      { label: "Reflejos", color: "bg-yellow-100 text-yellow-700" },
      { label: "Velocidad", color: "bg-green-100 text-green-700" }
    ],
    image: "/images/imagenReactionTest.png",
  },
  {
    id: 4,
    title: "Cálculo rápido",
    description: "Resuelve operaciones matemáticas básicas con rapidez.",
    duration: "2 minutos",
    questions: 15,
    instantFeedback: true,
    component: QuickCalc,
    tags: [
      { label: "Matemáticas", color: "bg-red-100 text-red-700" },
      { label: "Velocidad", color: "bg-green-100 text-green-700" }
    ],
    image: "/images/imagenReactionTest.png",
  }
];
