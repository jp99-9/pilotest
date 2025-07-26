import React from "react";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reaction from "./pages/Reaction";
import Maths from "./pages/Maths";
import QuickCalc from "./tests/maths/QuickCalc";
import ETestScan from "./tests/reaction/E-testScan";
import ReactionTest from "./tests/reaction/ReactionTest";

// Simple placeholder components
function Assignments() { return <div className="p-8">Assignments Page</div>; }
function News() { return <div className="p-8">News Page</div>; }
function Ask() { return <div className="p-8">Ask a Question Page</div>; }
function MemoryTest() { return <div className="p-8">Memory Test Page</div>; }

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <header className="flex items-center justify-between px-8 py-4 border-b bg-white">
            <h1 className="text-lg font-semibold text-gray-800">Recent</h1>
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-200"
              />
              {/* Consider making this SVG a component if reused */}
              <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
              </svg>
            </div>
          </header>
          <main className="flex-1 p-8 overflow-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tests/reaction" element={<Reaction />} />
              <Route path="/tests/maths" element={<Maths />} />
              <Route path="/tests/maths/quickcalc" element={<QuickCalc />} />
              <Route path="/tests/reaction/eTestScan" element={<ETestScan />} />
              <Route path="/tests/reaction/ReactionTest" element={<ReactionTest />} />
              <Route path="/tests/memory" element={<MemoryTest />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/news" element={<News />} />
              <Route path="/ask" element={<Ask />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}