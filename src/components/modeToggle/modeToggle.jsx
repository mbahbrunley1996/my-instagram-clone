"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  )
}