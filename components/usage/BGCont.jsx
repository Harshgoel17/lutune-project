
import Link from 'next/link'
import React, { useState,useEffect } from 'react'
import BGSec1 from '../usageComp/BGSec1'

const BGCont = () => {
  return (
    <div className='my-24 relative w-full flex flex-col items-center py-4 pb-10'>
        <BGSec1 />
        <Link href="/pricing" className='sticky shadow-lg bottom-8 p-4 text-xl z-30 px-11 bg-gradient-to-br from-emerald-500 via-green-500 to-teal-500 rounded-md font-medium transition-all duration-[0.3s] ease-newTime hover:-translate-y-2'>Let's dive in!</Link>
    </div>
  )
}

export default BGCont