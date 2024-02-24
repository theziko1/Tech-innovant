'use client'
import React, { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react';
import Home from './pages/page';
import Link from 'next/link';
import Image from 'next/image';


function Page() {
  const [isLoading,setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 1000);

    return () => clearTimeout(timer); 

  }, []); 
  return (
    <div className='flex w-full h-full items-center justify-center'>

      { isLoading ? 
      <div className="bg-[#00BFA6] w-1/5 h-full rounded-xl border border-black my-40  p-8 m-8 text-white font-extrabold flex flex-col justify-center items-center">
        <Loader2 className='animate-spin' />
        <h4>Loading ...</h4>
      </div> : (

      <main className="container w-full  flex flex-col-reverse md:grid md:grid-cols-2 my-6 gap-16 ">
        <div className="w-full p-4 md:p-0 justify-center items-center md:items-start flex flex-col gap-9">
               <h3 className=" w-full font-['Kavoon'] text-5xl">Building <span className="text-[#00BFA6]">Brands</span> products and experiences</h3>
                <h6 className="font-['ubuntu'] text-md">Let me help you with your projects</h6>
                <Link href="/">
                  <button  className="text-left hover:bg-transparent items-start bg-transparent text-[#00BFA4] underline">Contact me {`->`}</button>
                </Link>

        </div>
        <div className="w-full justify-center items-center md:items-start flex flex-col gap-9" >
          <Image width={450} height={450} src="/home.svg" alt="home" />
        </div>
      </main>
      )}
      
    </div>
  )
}

export default Page
