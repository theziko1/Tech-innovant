"use client"
import Theme from '@/components/theme'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaXmark , FaBars } from "react-icons/fa6";

function Navbar() {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    }
   
  return (
    <header className="w-full h-20 bg-[#00BFA6] dark:bg-gray-500 flex flex-row justify-around items-center">
    <div className="w-full">
        <h1 className="font-['Kavoon'] cursor-pointer text-lg ml-16">Tech innovant</h1>
    </div>    
        <ul className="w-full lg:grid grid-rows-1  text-center hidden cursor-pointer items-center grid-cols-5 gap-5 mr-5">
          <Link href="/pages"><li className="font-[Inter] hover:text-white">HOME</li></Link>
          <Link href="/pages/portfolio"><li className="font-[Inter] hover:text-white">PORTFOLIO</li></Link>
          <Link href="/pages/services"><li className="font-[Inter] hover:text-white">SERVICES</li></Link>
          <Link href="/pages/equipe"><li className="font-[Inter] hover:text-white">EQUIPE</li></Link>
          <Link href="/pages/contact"><li className="font-[Inter] hover:text-white">CONTACT</li></Link>
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
         <div className={`${isMenuOpen ? "absolute top-[80px] p-2 list-none left-0 right-0 text-center  block bg-gray-400" : "hidden"}`}>
         <Link href="/pages"><li className="font-[Inter] p-1 hover:text-white">HOME</li></Link>
         <Link href="/pages/portfolio"><li className="font-[Inter] p-1 hover:text-white">PORTFOLIO</li></Link>
          <Link href="/pages/services"><li className="font-[Inter] p-1 hover:text-white">SERVICES</li></Link>
          <Link href="/pages/équipe"><li className="font-[Inter] p-1 hover:text-white">EQUIPE</li></Link>
          <Link href="/pages/contact"><li className="font-[Inter] p-1 hover:text-white">CONTACT</li></Link>
          </div>
    </header>
  )
}

export default Navbar