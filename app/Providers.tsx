'use client'
import { ThemeProvider } from 'next-themes'
import React from 'react'

interface ProvidersProps {
  children: React.ReactNode
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  
  return (
      
      <ThemeProvider attribute='class' enableSystem={false} defaultTheme={'dark'} >
        {children}
      </ThemeProvider>


  )
}

export default Providers