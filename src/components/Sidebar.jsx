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
      {/* Logo and collapse button */}
      <div className="flex items-center justify-between p-4 border-b">
        <span className={`text-2xl font-serif font-bold text-black`}>
          <span className="text-purple-400">P</span>
          {!collapsed && "ilotTests"}
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
        {navItems.map((item) => {
          const isActive = location.pathname === item.path || isChildActive(item.children);
          if (item.children) {
            return (
              <div key={item.name}>
                <button
                  onClick={() => setTestsOpen((open) => !open)}
                  className={`w-full flex items-center gap-4 px-4 py-3 transition focus:outline-none
                    ${isActive ? "bg-purple-100 text-purple-700 font-semibold" : "text-gray-700 hover:bg-purple-50"}
                  `}
                >
                  <item.icon className="h-6 w-6 text-purple-400" />
                  {!collapsed && <span className="font-medium flex-1 text-left">{item.name}</span>}
                  {!collapsed && (testsOpen ? (
                    <ChevronUpIcon className="h-4 w-4 text-purple-400" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4 text-purple-400" />
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
                            ${isChild ? "bg-purple-200 text-purple-900 font-semibold" : "text-gray-600 hover:bg-purple-50"}
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
                ${isActive ? "bg-purple-100 text-purple-700 font-semibold" : "text-gray-700 hover:bg-purple-50"}
              `}
            >
              <item.icon className="h-6 w-6 text-purple-400" />
              {!collapsed && <span className="font-medium">{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
} 