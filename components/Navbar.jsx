 "use client"
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'
import Image from 'next/image'

const Navbar = () => {

  const [toggleDropDown, setToggleDropDown] = useState(false)
  
  return (
    <div className='flex justify-between flex-center'>
      <Link className="flex justify-center pl-5 text-lg font-bold text-gray-950"
      href="/"
      >
        <div>
          <Image 
            src="/assets/photos/logo.jpg"
            alt="logo"
            width={60}
            height={60}
          />
        </div>
      </Link>
      
      <div className='absolute pt-3 right-3 md:hidden'> 
      <div
       onClick={()=> setToggleDropDown((prev)=>!prev)}
      > 
      
      <Bars3Icon className="w-8 h-8 text-bLack" />
      </div>
      </div>
     
      {/* ================Large devices================ */}
      <div className='flex flex-row items-center justify-center px-3 max-sm:hidden max-md:hidden' > 
      <Link 
      href="/About"
      className='flex items-center justify-center w-24 h-10 mx-8 border-2 rounded-sm border-slate-900 hover:bg-black hover:border-hidden'
      >
       <h1 className='flex items-center justify-center font-bold text-center text-black hover:text-white'>About Us</h1>
      </Link>
      <Link 
      href="/Contact"
      className='flex items-center justify-center w-24 h-10 mx-8 border-2 rounded-sm border-slate-900 hover:bg-black hover:border-hidden'
      >
       <h1 className='justify-center font-bold text-center text-black flex-center hover:text-white'>Contact Us</h1>
      </Link>
      <Link href="/Donate"
       className='flex items-center justify-center w-24 h-10 mx-8 border-2 rounded-sm border-slate-900 hover:bg-black hover:border-hidden'
       >
       <h1 className='justify-center font-bold text-center text-black flex-center hover:text-white'>Donate</h1>
      </Link>
      </div>
      {toggleDropDown && (
       <div className='absolute flex w-screen'>
        <div>
        <div className='z-10 flex flex-row w-screen h-screen'>
          <div className='w-1/2 h-screen bg-black opacity-50' />          
          <div className='flex-col w-2/3 h-full mt-2 bg-white bg-opacity-100'>
          <div className='absolute top-0 right-0 pt-1 pr-6'> 
           <div
            onClick={()=> setToggleDropDown((prev)=>!prev)}
           > 
      
           <XMarkIcon className="w-8 h-8 text-bLack" />
           </div>
           </div> 
            <div className='p-3 font-bold text-start mt-7'> 
           <Link href="/About"
           className=''
           onClick={() => setToggleDropDown(false)}
           >
            About Us
          </Link>
          </div>
          <div className='p-3 font-bold text-start'> 
          <Link href="/Contact"
          className=''
          onClick={() => setToggleDropDown(false)}
          >
            Contact Us
          </Link>
          </div>
          <div className='p-3 font-bold text-start'> 
          <Link href="/Donate"
          className=''
          onClick={() => setToggleDropDown(false)}
          >
            Donate
          </Link>
          </div>
          </div>
        </div>
        </div>
        </div>
      )}
    </div>
     
  )
}

export default Navbar
