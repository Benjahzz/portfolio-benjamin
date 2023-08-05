'use client'

import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)

  }, [])
  if (!mounted) {
    return null
  }
  return (
      
      <ThemeProvider attribute='class'>
        {children}
      </ThemeProvider>


  )
}

export default Providers