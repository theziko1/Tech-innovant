'use client'
import Theme from '@/components/theme'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FaXmark , FaBars } from "react-icons/fa6";
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { sendEmail } from "@/lib/mail";
 


function page() {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    }
    const formSchema = z.object({
        email: z.string().min(8).max(50),
        subject: z.string().min(8).max(50),
        message: z.string().min(8).max(50),
      })
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          email: "",
          subject: "",
          message: "",
        },
      })  
      
     
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
          <Link href="/pages/équipe"><li className="font-[Inter] hover:text-white">EQUIPE</li></Link>
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
    <main className="container grid grid-cols-1 justify-center items-center my-6">
       <h1 className="text-center text-3xl font-medium font-[Kavoon] text-[#00BFA6]">Contact Us</h1>
       <Form {...form}>
      <form  className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display email.
              </FormDescription>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Subject" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
            
          )}
        />
        <Button type="submit" className="bg-[#00bfa6] w-[150px]">Send</Button>
      </form>
    </Form>
    </main>
   
    </>
  )
}

export default page