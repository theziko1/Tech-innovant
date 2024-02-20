import React from 'react'
import Theme from "@/components/theme";
import Link from 'next/link';



function index() {
  return (
    <>
    <header className='w-full h-20 bg-[#00BFA6] dark:bg-gray-500 flex flex-row items-center justify-between'>
        <h1 className="font-['Kavoon'] text-lg ml-16">Tech innovant</h1>
        <ul className=' w-[40%] grid grid-rows-1 text-center cursor-pointer items-center grid-cols-5 gap-5 mr-14'>
          <li className="font-[Inter] hover:text-white">HOME</li>
          <li className="font-[Inter] hover:text-white">PORTFOLIO</li>
          <li className="font-[Inter] hover:text-white">SERVICES</li>
          <li className="font-[Inter] hover:text-white">CONTACT</li>
          <li><Theme/></li>
        </ul>
    </header>
    <main className=' w-full flex flex-row justify-evenly items-center'>
      <div className="w-[40%]  flex flex-col gap-9">
      <h3 className=" w-full font-['Kavoon'] text-5xl ">Building <span className="text-[#00BFA6]">Brands</span> products and experiences</h3>
       <h6 className="font-['ubuntu'] text-md">Let me help you with your projects</h6>
       <Link href="/">
       <button  className="text-left hover:bg-transparent items-start bg-transparent text-[#00BFA4] underline">Contact me {`->`}</button>
       </Link>
     
      </div>
      <div className="w-[40%]">
      <img className="w-[450px] h-[450px]" src="/home.svg" alt="home" />
      </div>
    </main>
    </>
  )
}

export default index