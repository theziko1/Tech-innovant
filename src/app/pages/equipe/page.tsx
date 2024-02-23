import Image from 'next/image'
import React from 'react'

function Page() {
  return (
    <>
   
      <section className="w-3/4 float-left border-black border rounded-lg bg-[#00BFA6] flex items-center justify-center gap-5 m-5">
        <Image src="/picture.svg" width={50} height={50} alt="profile"/>
        <div className="flex flex-col">
          <h1 className="text-center text-3xl font-medium font-[Kavoon] text-white m-2">Name</h1>
          <p className='w-full font-bold font-[Inter] text-center p-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
    
    <section className=" w-3/4 border-black float-right border rounded-lg bg-[#00BFA6] flex items-center justify-center gap-5 m-5">
       <div className="flex flex-col">
        <h1 className="text-center text-3xl font-medium font-[Kavoon] text-white m-2">Name</h1>
        <p className='w-full font-bold font-[Inter] text-center p-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
       <Image src="/picture-2.svg" width={50} height={50} alt="profile"/>
    </section>
    <section className="container w-3/4 float-left border-black border rounded-lg bg-[#00BFA6] flex items-center justify-center gap-5 m-5">
       <Image src="/picture.svg" width={50} height={50} alt="profile"/>
       <div className="flex flex-col">
        <h1 className="text-center text-3xl font-medium font-[Kavoon] text-white m-2">Name</h1>
        <p className='w-full font-bold font-[Inter] text-center p-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
    </section>
    <section className="container w-3/4 float-right border-black border rounded-lg bg-[#00BFA6] flex items-center justify-center gap-5 m-5">
       
       <div className="flex flex-col">
        <h1 className="text-center text-3xl font-medium font-[Kavoon] text-white m-2">Name</h1>
        <p className='w-full font-bold font-[Inter] text-center p-4'> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>
       <Image src="/picture-2.svg" width={50} height={50} alt="profile" />
    </section>
   
    </>
  )
}

export default Page