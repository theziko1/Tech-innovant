'use client'
import React from 'react'
import { usePathname, useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';



function Page() {
  const pathname = usePathname()
  const {push}= useRouter()
  if(pathname === "/") push("/pages")
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <Loader2 className='animate-spin' />
    </div>
  )
}

export default Page