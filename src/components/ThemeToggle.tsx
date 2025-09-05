"use client";
import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react"; // or any icons

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  // use resolvedTheme to handle system fallback
  const active = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle theme"
      className="rounded-full p-2 hover:bg-white/10"
      onClick={() => setTheme(active ? "light" : "dark")}
    >
      {active ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
