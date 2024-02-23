"use client"

import Image from 'next/image'
import React from 'react'



function Page() {
 
  return (
    <>
      
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

export default Page