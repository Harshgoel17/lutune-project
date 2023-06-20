import React from 'react'

const RepoTag = ({title}) => {
  return (
    <div className='bg-[#b5ddb8] opacity-70 p-2 px-5 text-green-700 font-semibold animate-marquee mr-3 hover:opacity-100 select-none transition-opacity duration-500 cursor-default rounded-md'>
        {title}
    </div>
  )
}

export default RepoTag