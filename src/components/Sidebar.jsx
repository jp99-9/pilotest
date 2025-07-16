import React, { useState } from "react";
import {
  HomeIcon,
  BookOpenIcon,
  ClipboardListIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export const navItems = [
  { name: "Home", icon: HomeIcon, path: "/" },
  { name: "Lessons", icon: BookOpenIcon, path: "/lessons" },
  { name: "Assignments", icon: ClipboardListIcon, path: "/assignments" },
  { name: "News", icon: NewspaperIcon, path: "/news" },
  { name: "Ask a question", icon: QuestionMarkCircleIcon, path: "/ask" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
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
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-purple-50 transition"
          >
            <item.icon className="h-6 w-6 text-purple-400" />
            {!collapsed && <span className="font-medium">{item.name}</span>}
          </Link>
        ))}
      </nav>
    </div>
  );
} 