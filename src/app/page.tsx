'use client'
import React, { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react';
import Home from './pages/page';



function Page() {
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000);

    return () => clearTimeout(timer); 

  }, []); 
  return (
    <div className='flex h-screen w-screen items-center justify-center'>

      { isLoading ? <Loader2 className='animate-spin' /> : (<Home/>)}
      
    </div>
  )
}

export default Page