 "use client"
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useState } from 'react'

const Navbar = () => {

  const [toggleDropDown, setToggleDropDown] = useState(false)
  
  return (
    <div className='flex justify-between flex-center'>
      <Link className="flex justify-center pt-3 pl-5 text-lg font-bold text-gray-950"
      href=""
      >
        HelpingHeartsFoundation
      </Link>
      
      <div className='absolute pt-3 right-3 md:hidden'> 
      <Link href=""
       className=''
       onClick={()=> setToggleDropDown((prev)=>!prev)}
      > 
      
      <Bars3Icon className="w-8 h-8 text-bLack" />
      </Link>
      </div>
     
      {/* ================Large devices================ */}
      <div className='flex justify-end px-3 py-1.5 max-sm:hidden max-md:hidden' > 
      <Link 
      href=""
      className='flex items-center justify-center w-24 h-10 mx-8 border-2 border-slate-900 hover:bg-black hover:border-hidden'
      >
       <h1 className='justify-center font-bold text-center text-black flex-center hover:text-white'>About Us</h1>
      </Link>
      <Link 
      href=""
      className='flex items-center justify-center w-24 h-10 mx-8 border-2 border-slate-900 hover:bg-black hover:border-hidden '
      >
       <h1 className='font-bold text-center text-black pjustify-center flex-center hover:text-white'>Contact Us</h1>
      </Link>
      <Link href=""
       className='flex items-center justify-center w-24 h-10 mx-8 border-2 border-slate-900 hover:bg-black hover:border-hidden '
       >
       <h1 className='pt-2 font-bold text-center text-black pjustify-center flex-center hover:text-white'>Donate</h1>
      </Link>
      </div>
      {toggleDropDown && (
        <div className='z-10 flex-col w-64 h-screen mt-16 mr-2'>
          <div className='flex-col pt-3 bg-white rounded h-1/4'> 
          <div className='p-3 font-bold text-start'> 
          <Link href=""
          className=''
          onClick={() => setToggleDropDown(false)}
          >
            About Us
          </Link>
          </div>
          <div className='p-3 font-bold text-start'> 
          <Link href=""
          className=''
          onClick={() => setToggleDropDown(false)}
          >
            Contact Us
          </Link>
          </div>
          <div className='p-3 font-bold text-start'> 
          <Link href=""
          className=''
          onClick={() => setToggleDropDown(false)}
          >
            Donate
          </Link>
          </div>
          </div>
        </div>
      )}
    </div>
     
  )
}

export default Navbar

























