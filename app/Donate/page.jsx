import React from 'react'

const Donate = () => {
  return (
    <div className='h-screen bg-gray-300 shadow-xl'>
      <div className='flex items-center justify-center h-full mx-5 mb-2 bg-white'>
        <div className='flex flex-col items-start justify-center p-5 bg-green-700 rounded h-96'>
          <div className='flex flex-row items-center justify-center'>
            <h1 className='mr-2 text-2xl font-bold text-white '>Paybill:</h1>
            <h1 className='text-xl font-bold text-gray-200'>890890</h1>   
          </div>
          <div className='mt-4 '>
            <h1 className='text-2xl font-bold text-white'>Clothes and Material donations</h1>
            <p className='text-lg font-semibold text-gray-200'>Contact Chair @: 0757928936</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Donate