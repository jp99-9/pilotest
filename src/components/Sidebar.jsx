import React, { useState } from "react";
import {
  HomeIcon,
  BookOpenIcon,
  ClipboardDocumentListIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

export const navItems = [
  { name: "Home", icon: HomeIcon, path: "/" },
  {
    name: "Tests",
    icon: BookOpenIcon,
    path: "/tests",
    children: [
      { name: "Reaction Test", path: "/tests/reaction" },
      { name: "Maths Test", path: "/tests/maths" },
      { name: "Memory Test", path: "/tests/memory" },
    ],
  },
  { name: "Assignments", icon: ClipboardDocumentListIcon, path: "/assignments" },
  { name: "News", icon: NewspaperIcon, path: "/news" },
  { name: "Ask a question", icon: QuestionMarkCircleIcon, path: "/ask" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [testsOpen, setTestsOpen] = useState(false);
  const location = useLocation();

  // Helper to check if any child is active
  const isChildActive = (children) =>
    children?.some((child) => location.pathname === child.path);

  return (
    <div
      className={`flex flex-col bg-white border-r transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      {/* Logo and collapse button with sun effect */}
      <div className="flex items-center justify-between p-4 border-b bg-transparent relative">
        <span className={`text-2xl font-serif font-bold text-[#222] flex items-center gap-2`}>
          <span className="w-8 h-8 rounded-full bg-[#FFD600] shadow-inner border-2 border-[#F5F7FA] flex items-center justify-center">
            <span className="text-yellow-400 text-2xl">☀️</span>
          </span>
          {!collapsed && <span className="ml-1">PilotTests</span>}
        </span>
        <button
          className="p-1 rounded hover:bg-[#e3f0fa]"
          onClick={() => setCollapsed((c) => !c)}
        >
          {collapsed ? (
            <ChevronRightIcon className="h-6 w-6 text-[#3498db]" />
          ) : (
            <ChevronLeftIcon className="h-6 w-6 text-[#3498db]" />
          )}
        </button>
      </div>
      {/* Nav */}
      <nav className="flex-1 py-4">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || isChildActive(item.children);
          if (item.children) {
            return (
              <div key={item.name}>
                <button
                  onClick={() => setTestsOpen((open) => !open)}
                  className={`w-full flex items-center gap-4 px-4 py-3 transition focus:outline-none
                    ${isActive ? "bg-[#e3f0fa] text-[#222] font-semibold" : "text-[#222] hover:bg-[#e3f0fa]"}
                  `}
                >
                  <item.icon className="h-6 w-6 text-[#3498db]" />
                  {!collapsed && <span className="font-medium flex-1 text-left">{item.name}</span>}
                  {!collapsed && (testsOpen ? (
                    <ChevronUpIcon className="h-4 w-4 text-[#3498db]" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4 text-[#3498db]" />
                  ))}
                </button>
                {/* Dropdown */}
                {!collapsed && testsOpen && (
                  <div className="ml-10">
                    {item.children.map((child) => {
                      const isChild = location.pathname === child.path;
                      return (
                        <Link
                          key={child.name}
                          to={child.path}
                          className={`block px-2 py-2 rounded transition text-sm
                            ${isChild ? "bg-[#3498db] text-white font-semibold" : "text-[#222] hover:bg-[#e3f0fa]"}
                          `}
                        >
                          {child.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          }
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-4 px-4 py-3 transition
                ${isActive ? "bg-[#e3f0fa] text-[#222] font-semibold" : "text-[#222] hover:bg-[#e3f0fa]"}
              `}
            >
              <item.icon className="h-6 w-6 text-[#3498db]" />
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
} 