import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-screen h-screen bg-gray-200'>
      <div className='w-full h-full mx-4 bg-white'>
        <div className= "flex flex-col items-center justify-center w-3/4 pt-20 mx-20 space-y-10 md:w-1/4">
{/* =================Loaction============================= */}
        <div className='w-full space-y-6'>   
          <div 
            className='pt-8 border-t-8 border-slate-900'
          />
          <div>  
          <h1 className='text-2xl font-bold text-slate-900'>location</h1>
          <p>Eldoret Kenya</p>
          <p>Uasingishu County</p>
          </div>
{/* =================Contact================================ */}
          <div>
            <h1 className='text-2xl font-bold text-slate-900'>Contact</h1>
            <p className='font-semibold'>Email:</p><p>heartsfoundation@gmail.com</p>
            <p className='font-semibold'>Phone Number:</p><p>0797928936</p>
          </div>

{/* =====================================socials====================== */}
          <div>
            <div className=''>
            <h1 className='text-2xl font-bold text-slate-900'>Socials</h1>
            <div className='flex'>
            <div className='mt-2 mr-5'>
            <h1 className='font-semibold'>Instagram</h1>
              <Link href="www.instagram.com">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  width={50}
                  height={50}
                  alt="instagram"
                />
              </Link>
            </div>
            <div className='mt-2'>
            <h1 className='font-semibold'>Twitter</h1>
            <Link href="www.twitter.com">
                <Image 
                  src="/assets/photos/x.png"
                  width={50}
                  height={50}
                  alt="Twitter"
                  className='rounded'
                />
              </Link>
            </div>
            </div>
            </div>
          </div>
          <div 
            className='border-b-8 border-slate-900'
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Contact