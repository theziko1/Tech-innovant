'use client'
import Theme from '@/components/theme'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaXmark , FaBars } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


function page() {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
   }
  return (
    <>
      <header className="w-full h-20 bg-[#00BFA6] dark:bg-gray-500 flex flex-row justify-around items-center">
    <div className="w-full">
        <Link href="/pages/portfolio"><h1 className="font-['Kavoon'] text-lg ml-16">Tech innovant</h1></Link>
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
    <main className=" container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6 ">
        <Card>
          <CardHeader>
            <CardTitle>Project 1</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content</p>
          </CardContent>
          <CardFooter>
            <p>Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project 2</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content</p>
          </CardContent>
          <CardFooter>
            <p>Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project 3</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Content</p>
          </CardContent>
          <CardFooter>
            <p>Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project 4</CardTitle>
            <CardDescription>Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p> Content</p>
          </CardContent>
          <CardFooter>
            <p> Footer</p>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle> Project 5</CardTitle>
            <CardDescription> Description</CardDescription>
          </CardHeader>
          <CardContent>
            <p> Content</p>
          </CardContent>
          <CardFooter>
            <p> Footer</p>
          </CardFooter>
        </Card>

    </main>
    </>
  )
}

export default page