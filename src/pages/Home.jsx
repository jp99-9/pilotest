import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#A7C7E7] via-[#F5F7FA] to-[#FFF9C4] p-8 relative">
      {/* Sun effect */}
      <div className="absolute top-8 left-8 w-24 h-24 bg-[#FFD600] rounded-full shadow-lg border-4 border-[#F5F7FA] flex items-center justify-center z-10">
        <span className="text-yellow-400 text-5xl">☀️</span>
      </div>
      <div className="bg-white rounded-lg shadow p-8 flex flex-col md:flex-row gap-8 z-20">
        <div className="flex-1">
          <img
            src="https://assets-global.website-files.com/5d3e7caab81c1e3c6b3e5c7b/5e4b6e2e7b6e2e1e3c3e3e3e_webflow.png"
            alt="Lesson"
            className="rounded-lg w-full object-cover"
          />
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <span className="text-xs text-[#3498db] font-semibold mb-2">
            WEBFLOW
          </span>
          <h2 className="text-2xl font-bold mb-2 text-[#222]">
            Getting started with Webflow
          </h2>
          <p className="text-[#333] mb-4">
            Quod molestias repellat. Dignissimos soluta deleniti laudantium ab qui sit iste. Veniam debitis ut consequuntur. Nihil quia fugit iure maxime accusantium dolorem recusandae architecto iste.
          </p>
          <button className="self-start px-4 py-2 bg-[#3498db] text-white rounded hover:bg-[#217dbb] transition font-semibold shadow">
            VIEW LESSON
          </button>
        </div>
      </div>
    </div>
  );
} 