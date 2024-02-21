'use client'
import React, { useState } from 'react'
import Theme from "@/components/theme";
import Link from 'next/link';
import { FaXmark , FaBars } from "react-icons/fa6";
import Image from 'next/image';



function index() {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   }
  return (
    <>
    <header className="w-full h-20 bg-[#00BFA6] dark:bg-gray-500 flex flex-row justify-around items-center">
    <div className="w-full">
        <Link href="/pages"><h1 className="font-['Kavoon'] text-lg ml-16">Tech innovant</h1></Link>
    </div>    
        <ul className="w-full lg:grid grid-rows-1 text-center hidden cursor-pointer items-center grid-cols-5 gap-5 mr-5">
          <Link href="/pages"><li className="font-[Inter] hover:text-white">HOME</li></Link>
          <Link href="/pages/portfolio"><li className="font-[Inter] hover:text-white">PORTFOLIO</li></Link>
          <Link href="/pages/services"><li className="font-[Inter] hover:text-white">SERVICES</li></Link>
          <Link href="/pages"><li className="font-[Inter] hover:text-white">EQUIPE</li></Link>
          <Link href="/pages"><li className="font-[Inter] hover:text-white">CONTACT</li></Link>
        </ul>
        <div className="w-1/5">
            <Theme/>
        </div>
        <div className="lg:hidden mr-5">
                     <button onClick={toggleMenu} className="text-black focus:outline-none focus:text-gray-500">
                        {
                            isMenuOpen ? (<FaXmark className="h-6 w-6 "/>) : (<FaBars className="h-6 w-6 "/>)
                        }
                     </button>
         </div>
         <div className={`${isMenuOpen ? "absolute top-[80px] list-none p-2 left-0 right-0 text-center  block bg-gray-400" : "hidden"}`}>
         <Link href="/pages"><li className="font-[Inter] p-1 hover:text-white">HOME</li></Link>
         <Link href="/pages/portfolio"><li className="font-[Inter] p-1 hover:text-white">PORTFOLIO</li></Link>
          <Link href="/pages/services"><li className="font-[Inter] p-1 hover:text-white">SERVICES</li></Link>
          <li className="font-[Inter] p-1 hover:text-white">EQUIPE</li>
          <li className="font-[Inter] p-1 hover:text-white">CONTACT</li>

          
          </div>
    </header>
    <main className="container w-full flex flex-col-reverse md:grid md:grid-cols-2 mt-6 gap-16 ">
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

export default index