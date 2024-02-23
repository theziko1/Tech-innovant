'use client'
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';



function Home() {
  
  return (
    <>
  
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
    </>
  )
}

export default Home