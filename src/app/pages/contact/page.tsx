'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'

function page() {
  const [formData, setFormData] = useState({
    subject: '',
    email: '',
    message: '',
  });

  return (
    <>
   
    <main className="container grid grid-cols-1 justify-center items-center my-7">
       <h1 className="text-center text-3xl font-medium font-[Kavoon] text-[#00BFA6] m-2">Contact Us</h1>
       <p className='w-full font-bold font-[Inter] text-center p-4'> Reach out to us for any inquiries or collaborations.</p>
      <section className="container rounded-lg w-1/2 bg-[#00BFA6] flex flex-col p-7 gap-4 justify-center items-center">
      <Label htmlFor="email"> Email</Label>
       <Input name="email" value={formData.email} className='w-3/4'/>
       <Label htmlFor="subject">Subject</Label> 
      <Input name="subject" value={formData.subject} className='w-3/4'/>
      <Label htmlFor="message">Message</Label>
      <Textarea name="message" value={formData.message} className='w-3/4'/>
      <Button>Send</Button>
      </section>
    </main>
   
    </>
  )
}

export default page