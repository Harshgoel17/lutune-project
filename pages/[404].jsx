import Link from 'next/link'
import React from 'react'

const fourohfour = () => {
  return (
    <div className='flex flex-col w-full font-rubik justify-center items-center h-[75vh] text-green-50 gap-3'>
        <h1 className='text-7xl font-bold'>404</h1>
        <h1 className='text-4xl'>PAGE NOT FOUND</h1>
        <div className='flex gap-2'>
            <Link href={`/`} className='p-3 hover:text-green-400 transition-all'>Go to Home</Link>
            <Link href={`/products`} className='p-3 hover:text-green-400 transition-all'>View Products</Link>
        </div>
    </div>
  )
}

export default fourohfour