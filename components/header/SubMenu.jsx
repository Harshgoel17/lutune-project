import React, { useEffect, useState } from 'react'
import SubLinks from './SubLinks'

const SubMenu = ({className}) => {

    

  return (
    <div className='absolute min-w-[550px] p-8 pb-10 px-7 bg-[var(--navbar-scroll-bg-color)] border rounded-xl right-[365px] border-green-500/[0.07] backdrop-blur-lg top-[94px] flex flex-wrap gap-6 font-rubik items-center justify-center z-[9999] w-[450px]'>
        
        <SubLinks linkTitle="BG Remover"/>           
        <SubLinks linkTitle="Object Remover"/>           
        <SubLinks linkTitle="ChatBot"/>           
        <SubLinks linkTitle="Code Fixer"/>           
        <SubLinks linkTitle="Image Generator"/>  
           
    </div>
  )
}

export default SubMenu