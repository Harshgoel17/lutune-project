import React from 'react'

const UseLinks = ({linkTitle,active,onClick}) => {
  return (
      <div className={` p-4 px-8 border-2 border-green-500/[0.23] rounded-[50px] cursor-pointer transition-all duration-300 shadow-md hover:border-green-500/[0.6] bg-black/[0.7] backdrop-blur-sm hover:-translate-y-1 hover:text-green-400 hover:shadow-pricBox hover:shadow-green-500/[0.6] font-medium 
      ${active ? '-translate-y-1 border-green-500/[0.6] text-green-400 shadow-pricBox shadow-green-500/[0.6]':''}`} onClick={onClick}>
        {linkTitle}
      </div>
  )
}

export default UseLinks