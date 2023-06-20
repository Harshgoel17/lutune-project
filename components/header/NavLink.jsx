import React from 'react'
import Link from 'next/link'
import {BiChevronDown} from 'react-icons/bi'

const NavLink = ({linkText, className,linkTo, showArrow,onclick}) => {
  return (
    <Link onClick={onclick} href={linkTo} className={`p-1 px-3 text-slate-950 dark:text-white 
     cursor-pointer font-medium transition-colors duration-300 hover:text-green-400 hover:font-medium relative flex justify-center items-center group  ${className || ""}`}>
      {/* <div className='group-hover:opacity-100 opacity-0 transition-all duration-700 group-hover:w-full h-full left-0 bg-green-400 z-[-1] w-0 absolute top-0'></div> */}
      <div className='z-[10] flex items-center gap-1 relative'>
        {linkText}
        {showArrow && (<BiChevronDown className='text-lg absolute top-[50%] translate-y-[-50%] right-[-33%]'/>)}
        </div>
    </Link>
  )
}

export default NavLink