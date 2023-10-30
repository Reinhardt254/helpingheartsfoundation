"use client"

import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const HelpDonate = () => {

   const [switchOn, setSwitchedOn] = useState(false)

   useEffect(() => {
      setTimeout(()=>{
         setSwitchedOn(true)
      }, 3000)
   }, [])

   if(!switchOn){
      return(
         null
      )
   }

  return (
   <div className='flex items-center justify-center w-screen h-screen bg-black bg-opacity-80'>
    <div className='mx-2 w-96 md:w-[400px] px-1 mr-2'>
      <div className='relative'>
           <XMarkIcon 
             className="absolute top-0 right-0 w-8 h-8 text-bLack hover:text-red-600" 
             onClick={()=>setSwitchedOn(false)}
            />
         </div>
      <div className="flex items-center justify-center bg-gray-300 rounded md:h- md:py-10 md:mt-0">
      <div>
        <Image 
          src="/assets/photos/Donate.jpg"
          alt="donate"
          width={300}
          height={300}
          className="p-0 px-1 rounded"
        />
      </div>
      <div className="flex flex-col items-start justify-center px-2 pl-3 md:items-center">
        <p className="text-xl font-bold text-slate-900">Make someone smile today</p>
        <Link href="/Donate"
        className="pt-5"
        >
       <h1 className='p-2 font-bold text-center text-white bg-red-600 border-2 rounded md:ml-5 border-slate-900 w-28 hover:text-white hover:opacity-70 hover:border-black'>Donate</h1>
      </Link>
      </div>
    </div>
    </div>
    </div>
  )
}

export default HelpDonate