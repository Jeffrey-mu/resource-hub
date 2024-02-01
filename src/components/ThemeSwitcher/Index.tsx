// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon } from "@/components/svg/MoonIcon";
import { SunIcon } from "@/components/svg/SunIcon";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || 'dark';
    setMounted(true);
    setTheme(storedTheme);
  }, [])
  useEffect(() => {
    localStorage.setItem("theme", theme || "dark")
  }, [theme])

  if (!mounted) return null

  return (
    <div className="flex flex-col gap-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 w-10 h-10 items-center justify-center">
      {
        theme === 'dark' ? <SunIcon onClick={() => setTheme('light')}/> : <MoonIcon onClick={() => setTheme('dark')}/>
      }
    </div>
  )
};
