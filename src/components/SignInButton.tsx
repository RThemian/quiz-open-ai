"use client";
import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'

type Props = {
    text: string
}

const SignInButton = ({ text }: Props) => {
  return (
    <Button
      className="bg-blue-500 hover:bg-blue-600"
      onClick={() => {
        signIn("google").catch(console.error);
      }}
    >
      {text}
    </Button>
  )
}

export default SignInButton