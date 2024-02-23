'use client'
import React from 'react'
import { Loader2 } from 'lucide-react';


function Page() {

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <Loader2 className='animate-spin' />
    </div>
  )
}

export default Page
