"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      style={{ background: "none", border: "none", color: "var(--text2)", cursor: "pointer", fontSize: 16 }}
    >
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}