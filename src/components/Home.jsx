import React from "react";

export default function Home() {
  return (
    <div className="bg-white rounded-lg shadow p-8 flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <img
          src="https://assets-global.website-files.com/5d3e7caab81c1e3c6b3e5c7b/5e4b6e2e7b6e2e1e3c3e3e3e_webflow.png"
          alt="Lesson"
          className="rounded-lg w-full object-cover"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <span className="text-xs text-purple-400 font-semibold mb-2">
          WEBFLOW
        </span>
        <h2 className="text-2xl font-bold mb-2">
          Getting started with Webflow
        </h2>
        <p className="text-gray-600 mb-4">
          Quod molestias repellat. Dignissimos soluta deleniti laudantium ab qui sit iste. Veniam debitis ut consequuntur. Nihil quia fugit iure maxime accusantium dolorem recusandae architecto iste.
        </p>
        <button className="self-start px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition">
          VIEW LESSON
        </button>
      </div>
    </div>
  );
} 