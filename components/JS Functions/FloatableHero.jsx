import React from 'react'
import {BiBrain} from 'react-icons/bi'
import {BsCardImage} from 'react-icons/bs'

const FloatableHero = ({style,position,icon,infoText}) => {
  return (
    <div className='group'>
        <div className={`floatable absolute w-16 h-16 rounded-full font-rubik
    bg-black/[0.2] border border-green-500/[0.2] flex items-center justify-center text-2xl text-green-800 cursor-pointer hover:bg-gradient-to-r hover:from-teal-300 hover:via-emerald-500  hover:to-green-600 transition-colors hover:text-white ${position}`}
        style={style}
      >
        {icon}

        

      </div>
      {/* <div className='absolute bottom-8 left-[50%] translate-x-[-50%] text-xl font-mono text-green-400/[0.9] opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:bottom-12'>{infoText}</div> */}
    </div>
    
  )
}

export default FloatableHero