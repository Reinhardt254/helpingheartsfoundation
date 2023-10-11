import Image from 'next/image'
import React from 'react'

const Donate = () => {
  return (
    <div className='h-full bg-white shadow-xl w-full'>
      <div className='h-full mb-2 bg-white mx-5  md:w-1/3'>
      <div 
            className='mt-8 border-t-8 border-slate-900'
          />
      <div className='flex items-center justify-start h-full pt-10 pb-10'>
        <div className='flex flex-col items-start justify-center p-5  rounded h-96 ml-10 bg-slate-900'>
          <div className='flex space-x-4'>
            <div>
              <Image 
                src="/assets/photos/pesa.png"
                alt="mpesa"
                width={60}
                height={60}
              />
            </div>
          <div className='flex flex-row items-center justify-center mt-2'>
            <h1 className='mr-2 text-2xl font-bold text-white '>Paybill:</h1>
            <h1 className='text-xl font-bold text-gray-200'>890890</h1>   
          </div>
          </div>

          <div className='flex space-x-4 mt-8'>
          <div>
              <Image 
                src="/assets/photos/location.jpg"
                alt="mpesa"
                width={60}
                height={60}
                className='rounded'
              />
          </div>
          <div className=''>
            <h1 className='text-2xl font-bold text-white'>Clothes and Material donations</h1>
            <p className='text-lg font-semibold text-gray-200'>Location: Nairobi</p>
          </div>
          </div>
        </div>
      </div>
      <div 
            className='pt-8 border-t-8 border-slate-900'
          />
      </div>
    </div>
  )
}

export default Donate