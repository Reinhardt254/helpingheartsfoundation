import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='w-screen h-full bg-gray-200'>
      <div className='w-full h-full mx-0 bg-white'>
        <div className= "flex flex-col items-center justify-center w-3/4 pt-14 mx-10 space-y-10 md:w-1/4 md:ml-20">
{/* =================Loaction============================= */}
        <div className='w-full space-y-6 mb-14'>   
          <div 
            className='pt-0 border-t-8 border-slate-900'
          />
          <div className='ml-4'>
          <div>  
          <h1 className='text-2xl font-bold text-slate-900'>location</h1>
          <p>Nairobi Kenya</p>
          <p>Nairobi County</p>
          </div>
{/* =================Contact================================ */}
          <div>
            <h1 className='mt-3 text-2xl font-bold text-slate-900'>Contact</h1>
            <p className='font-semibold'>Email:</p><p>helpingheartsfoundation254@gmail.com</p>
            <p className='mt-2 font-semibold'>Phone Number:</p><p>0797928936</p>
          </div>

{/* =====================================socials===================== */}
          <div>
            <div className=''>
            <h1 className='mt-3 text-2xl font-bold text-slate-900'>Socials</h1>
            <div className='flex pb-2'>
            <div className='mt-2 mr-5'>
            <h1 className='font-semibold'>Twitter</h1>
            <Link href="https://chat.whatsapp.com/HWLc2uRKPMiCxtMjZtIuiP">
            <Image 
              src="/assets/photos/wsapp.jpg"
              width={50}
              height={50}
              alt="Twitter"
              className='mt-2 border rounded shadow-xl'
              />
            </Link>
            </div>
            <div className='mt-2 mr-5'>
            <h1 className='font-semibold'>Instagram</h1>
              <Link href="https://instagram.com/helping.hearts.foundation.ke?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  width={50}
                  height={50}
                  alt="instagram"
                  className='mt-2 border rounded shadow-xl'
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
                  className='mt-2 rounded-lg shadow-xl'
                />
              </Link>
            </div>
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