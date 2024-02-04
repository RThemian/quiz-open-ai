import React from 'react'
import { SessionProvider } from 'next-auth/react';

type Props = {
    children: React.ReactNode 
    // explain children and React.ReactNode
}

const Providers = ({children}: Props) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Providers