import React, { useState } from "react";
import {
  HomeIcon,
  BookOpenIcon,
  
  NewspaperIcon,
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "Home", icon: HomeIcon },
  { name: "Lessons", icon: BookOpenIcon },
 
  { name: "News", icon: NewspaperIcon },
  { name: "Ask a question", icon: QuestionMarkCircleIcon },
];

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div
        className={`flex flex-col bg-white border-r transition-all duration-300 ${
          collapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Logo and collapse button */}
        <div className="flex items-center justify-between p-4 border-b">
          <span className={`text-2xl font-serif font-bold text-black`}>
            <span className="text-purple-400">E</span>
            {!collapsed && "ducare"}
          </span>
          <button
            className="p-1 rounded hover:bg-gray-100"
            onClick={() => setCollapsed((c) => !c)}
          >
            {collapsed ? (
              <ChevronRightIcon className="h-6 w-6 text-purple-400" />
            ) : (
              <ChevronLeftIcon className="h-6 w-6 text-purple-400" />
            )}
          </button>
        </div>
        {/* Nav */}
        <nav className="flex-1 py-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href="#"
              className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-purple-50 transition"
            >
              <item.icon className="h-6 w-6 text-purple-400" />
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </a>
          ))}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-8 py-4 border-b bg-white">
          <h1 className="text-lg font-semibold text-gray-800">Recent</h1>
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-purple-200"
            />
            <svg
              className="h-6 w-6 text-purple-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </div>
        </header>
        {/* Content */}
        <main className="flex-1 p-8 overflow-auto">
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
        </main>
      </div>
    </div>
  );
}