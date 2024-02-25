"use client"

import React from 'react'
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider as NextThemesProvider, ThemeProvider } from 'next-themes';  
import { type ThemeProviderProps } from 'next-themes/dist/types';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

type Props = {
    children: React.ReactNode 
    // explain children and React.ReactNode
}

const Providers = ({children, ...props}: Props) => {
  return (
    <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute='class' 
    enableSystem
    defaultTheme='system'
    >
   <SessionProvider>
        {children}
    </SessionProvider>
    </ThemeProvider>
 </QueryClientProvider>
  )
}

export default Providers