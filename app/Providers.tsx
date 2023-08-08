'use client'

import { NextIntlClientProvider } from 'next-intl'
import { ThemeProvider } from 'next-themes'
import React, { useEffect, useState } from 'react'

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