'use client'
import Theme from '@/components/theme'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaXmark , FaBars } from "react-icons/fa6";


function page() {
  const [isMenuOpen,setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   }
  return (
    <>
      <header className="w-full h-20 bg-[#00BFA6] dark:bg-gray-500 flex flex-row justify-around items-center">
    <div className="w-full">
        <Link href="/pages/services"><h1 className="font-['Kavoon'] text-lg ml-16">Tech innovant</h1></Link>
    </div>    
        <ul className="w-full lg:grid grid-rows-1  text-center hidden cursor-pointer items-center grid-cols-5 gap-5 mr-5">
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
         <div className={`${isMenuOpen ? "absolute top-[80px] p-2 list-none left-0 right-0 text-center  block bg-gray-400" : "hidden"}`}>
         <Link href="/pages"><li className="font-[Inter] p-1 hover:text-white">HOME</li></Link>
         <Link href="/pages/portfolio"><li className="font-[Inter] p-1 hover:text-white">PORTFOLIO</li></Link>
          <Link href="/pages/services"><li className="font-[Inter] p-1 hover:text-white">SERVICES</li></Link>
          <li className="font-[Inter] p-1 hover:text-white">EQUIPE</li>
          <li className="font-[Inter] p-1 hover:text-white">CONTACT</li>

          
          </div>
    </header>
    <main className="container md:grid md:grid-cols-2 grid grid-cols-1 justify-between gap-5 p-4 items-center mt-5">
      <div className="w-full  my-2 justify-center items-center flex flex-row gap-9">
        <Image  width={450} height={450} src="/box.svg" alt="box" />
      </div>
      <div className="w-full justify-center items-center  flex flex-col gap-9">
          <h1 className="font-['Kavoon'] text-[#00BFA6] text-xl">We Provide</h1>
          <p className=" flex justify-center text-justify mr-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus nemo non distinctio quisquam beatae alias facere, qui impedit atque fugiat eos tenetur ut ipsa ab assumenda labore quae exercitationem.
          Nulla earum et eos? Maxime eius repudiandae aut quod. Recusandae saepe provident laudantium, ipsa nam suscipit dolores aperiam consequatur eaque similique. Asperiores provident iusto hic saepe harum eius alias quod.
          Corrupti perferendis itaque nobis harum, vitae a eum consequuntur tenetur officiis, necessitatibus fugit beatae deserunt eligendi similique, at eaque nulla vero! Magni repellendus minus perferendis tempore ipsum. Repellendus, eum nostrum.</p>
      </div>
      
      
    </main>
    <main className="container md:grid md:grid-cols-2 flex flex-col-reverse justify-between items-center gap-5 mt-2 p-4">
     
      <div className="w-full justify-center items-center flex flex-col gap-9">
          <h1 className="font-['Kavoon'] text-[#00BFA6] text-xl">We Provide</h1>
          <p className=" flex justify-center text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus nemo non distinctio quisquam beatae alias facere, qui impedit atque fugiat eos tenetur ut ipsa ab assumenda labore quae exercitationem.
          Nulla earum et eos? Maxime eius repudiandae aut quod. Recusandae saepe provident laudantium, ipsa nam suscipit dolores aperiam consequatur eaque similique. Asperiores provident iusto hic saepe harum eius alias quod.
          Corrupti perferendis itaque nobis harum, vitae a eum consequuntur tenetur officiis, necessitatibus fugit beatae deserunt eligendi similique, at eaque nulla vero! Magni repellendus minus perferendis tempore ipsum. Repellendus, eum nostrum.</p>
      </div>

      <div className="w-full justify-center items-center flex flex-row gap-9">
      <Image width={450} height={450} src="/box.svg" alt="box" />
      </div>
      
      
    </main>
    </>
  )
}

export default page