import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div>
       <div className="mt-3 bg-slate-900"> 
      <div className="flex-col justify-around pb-3 mx-10 my-3 border-b bg-slate-900 sm:flex-row md:flex">
        <div className="pt-2">
          <h1 className="font-bold text-white">Contact Us</h1>
          <p className="text-white">0797983330</p>
          <p className="text-white">heartsfoundation@gmail.com</p>
        </div>
        <div className="pt-2">
          <h1 className="font-bold text-white">Location</h1>
          <h1 className="text-white">Eldoret Kenya</h1>
          <h1 className="text-white">Uasingishu county</h1>
        </div>
        <div className="pt-2">
          <h1 className="font-bold text-white">Socials</h1>
          <div className='flex mt-3 space-x-3'>
           <Link href="www.instagram.com">
                <Image 
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  width={30}
                  height={30}
                  alt="instagram"
                />
            </Link>
            <Link href="www.twitter.com">
                <Image 
                  src="/assets/photos/x.png"
                  width={30}
                  height={30}
                  alt="Twitter"
                  className='rounded'
                />
              </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pb-4 bg-slate-900">
        <h1 className="text-xs text-white ">Made by Reinhardt Lagat</h1>
        <h1 className="ml-5 text-xs text-white">Ⓒ2023</h1>
        <h1 className="ml-5 text-xs text-white">Twitter @_chirchirkip</h1>
      </div>
      </div>
    </div>
  )
}

export default Footer