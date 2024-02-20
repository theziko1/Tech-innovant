'use client'
import React from 'react'
import Theme from "@/components/theme";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';



function Page() {
  const pathname = usePathname()
  const {push}= useRouter()
  if(pathname === "/") push("/pages/index.tsx")
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <Loader2 className='animate-spin' />
   
    </div>
  )
}

export default Page