// app/components/ThemeSwitcher.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { VisuallyHidden, useSwitch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";
export function ThemeSwitcher(props: any) {
  const [mounted, setMounted] = useState(false)
  const { setTheme } = useTheme()
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps
  } = useSwitch(props);
  useEffect(() => {
    setMounted(true)
  }, [])
  useEffect(() => {
    isSelected ? setTheme('light') : setTheme('dark')
  }, [isSelected])

  if (!mounted) return null

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()} >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
          })}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  )
};
