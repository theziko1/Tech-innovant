'use client'
import { sendEmail } from '@/action/mail'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React, { useState } from 'react'



function Page() {
  const [formData, setFormData] = useState({
    name : '',
    from: '',
    subject: '',
    body: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    sendEmail(formData)
  };

  return (
    <>
   
    <main className="container grid grid-cols-1 justify-center items-center my-7">
       <h1 className="text-center text-3xl font-medium font-[Kavoon] text-[#00BFA6] m-2">Contact Us</h1>
       <p className='w-full font-bold font-[Inter] text-center p-4'> Reach out to us for any inquiries or collaborations.</p>
      <section className="container rounded-lg w-full md:w-3/5 bg-[#00BFA6] flex flex-col p-7 gap-4 justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 items-center justify-center">
        <Label htmlFor="name"> Name</Label>
       <Input name="name" type="text" value={formData.name} onChange={handleChange} className='w-3/4'/>    
      <Label htmlFor="email"> From</Label>
       <Input name="from" type="from" value={formData.from} onChange={handleChange} className='w-3/4'/>
       <Label htmlFor="subject">Subject</Label> 
      <Input name="subject" type="text" value={formData.subject} onChange={handleChange} className='w-3/4'/>
      <Label htmlFor="body">Body</Label>
      <Textarea name="body" value={formData.body} onChange={handleChange} className='w-3/4'/>
      <Button >Send</Button>
      </form>
      </section>
    </main>
   
    </>
  )
}

export default Page 