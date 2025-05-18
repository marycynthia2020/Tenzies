import React from 'react'

const Grid = () => {
  return (
    <div className='grid grid-cols-12 grid-rows-12 h-[90vh] w-3/5 gap-4'>
        <div className='bg-red-400 col-span-3 row-span-5'></div>
        <div className='bg-gray-800 col-span-6 row-span-4'></div>
        <div className='bg-green-600 col-span-3 row-span-8'></div>
      
        <div className='bg-blue-500 col-span-3 row-span-4'></div>
        <div className='bg-purple-600 col-span-3 row-span-4'></div>
        <div className='bg-yellow-300 col-span-3 row-span-7'></div>
        <div className='bg-red-950 col-span-3 row-span-4'></div>
        <div className='bg-green-300 col-span-6 row-span-4'></div>
    </div>
  )
}

export default Grid