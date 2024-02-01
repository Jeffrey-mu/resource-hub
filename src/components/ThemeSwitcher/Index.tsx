// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  function changeTheme(theme: any) {
    console.log(theme)
  }
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div>
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        value={theme}
        onChange={(e) => changeTheme(e)}
        thumbIcon={({ isSelected, className }) => {
          isSelected ? setTheme('light') : setTheme('dark')
          return isSelected ? (
            <SunIcon className={className} />
          ) : (
            <MoonIcon className={className} />
          )
        }
        }
      >
      </Switch>

    </div>
  )
};
