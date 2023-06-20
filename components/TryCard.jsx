import React from 'react'

const TryCard = ({title}) => {
  return (
    <>
    {/* <div className='bg-black/[0.2] border border-green-500/[0.2] rounded-lg p-7 px-9 font-medium cursor-pointer transition-all duration-500 hover:bg-green-500/[0.9] hover:scale-105'>
        Background Remover
    </div> */}
    <div className='w-72 h-28 relative rounded-lg group overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-pricBox hover:shadow-green-600/[0.4]'>
      <div className='card-bord absolute w-[150%] h-[300%] group-hover:bg-gradient-to-tr group-hover:opacity-60 top-[-100%] left-[-25%] opacity-20 group-hover:from-lime-300 group-hover:animate-rotating-border group-hover:via-emerald-500 bg-green-500 transition-all duration-300 group-hover:to-green-950 rounded-lg'></div>

      <div className='card-cont absolute w-[calc(100%-2px)] h-[calc(100%-2px)] m-[1px] bg-black/[1] rounded-lg font-rubik tracking-widest font-[100] text-lg flex justify-center items-center   cursor-pointer transition-all duration-300'>
        <h1 className='text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:to-green-600 group-hover:from-emerald-300 group-hover:via-green-500 uppercase '>{title}</h1>
      </div>
    </div>
    </>
  )
}

export default TryCard