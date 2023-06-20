import Image from 'next/image'
import React from 'react'
import {BsFillPersonFill} from 'react-icons/bs'

const CustomerCard = ({opacity}) => {
  return (
    <div className={`w-[350px] rounded-xl border border-green-500/[0.2] bg-black/[0.5] h-[400px] mr-5 animate-marquee flex flex-col items-center justify-center gap-5 p-5 ${opacity}
    group  transition-all duration-300 hover:border-green-500/[0.6]`}>
        <div className="img rounded-full border border-green-500/[0.4] w-28 h-28 overflow-hidden flex items-center text-green-400/[0.6] group-hover:text-green-400/[0.8] group-hover:border-green-500/[0.8] transition-all duration-300 justify-center text-[80px]">
            <BsFillPersonFill />
        </div>
        <h1 className='font-rubik text-2xl font-semibold m-0'>Person Name</h1>
        <p className='italic text-slate-300/[0.7] text-center line-clamp-4'>" Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit sequi ipsa, enim voluptate quae. "</p>
    </div>
  )
}

export default CustomerCard