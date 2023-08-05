'use client'

import { Sun, Moon } from "lucide-react"
import { useCallback, useState, useEffect } from "react"
import { useTheme } from 'next-themes'

const ToggleTheme = () => {
  const { theme, setTheme } = useTheme()


  const onToggle = useCallback(() => {

    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }

  }, [setTheme, theme])
  return (
    <div className={` bg-white w-28 h-8 rounded-full  border-[2px]  justify-between dark:border-secondary px-2 items-center relative cursor-pointer hidden sm:flex`} onClick={() => onToggle()}>
      <Sun className={` transition-colors  h-5 w-5 z-10 text-white dark:text-secondary`} />
      <Moon className={` transition-colors  h-5 w-5  z-10`} />
      <div className={`transition-all duration-300 absolute top-0 w-3/6 h-full  dark:left-2/4 dark:rounded-r-full dark:rounded-l-none dark:bg-primary left-0 rounded-l-full bg-tertiary`} />


    </div>
  )
}

export default ToggleTheme