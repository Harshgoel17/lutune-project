import React from 'react'
import {FaCheck} from 'react-icons/fa'
import PricFeatures from './PricFeatures'
import Link from 'next/link'

const PricCard = ({title,tag,mostPopular,free}) => {
  return (
    <div className='bg-black[0.4] border border-green-500/[0.23] flex flex-col p-9 gap-1 px-10 rounded-lg shadow-pricBox backdrop-blur-md font-rubik items-center cursor-pointer 
    hover:translate-y-[-5px] hover:border-green-500/[0.7] transition-all duration-500 max-w-[400px] group hover:shadow-green-700/[0.5]'>
        {mostPopular && (<span className='text-xs p-[6px] px-[10px] mb-2 font-semibold text-green-100 bg-green-500 rounded-sm'>MOST POPULAR</span>)}
        {free && (<span className='text-xs p-[6px] px-[10px] mb-2 font-semibold text-slate-800 bg-slate-200 rounded-sm'>FREE FOREVER</span>)}

        <h1 className='font-semibold text-3xl group-hover:text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-emerald-300 via-green-500 text-white duration-500 transition-all '>{title}</h1>
        <p className='text-green-200/[0.3] font-thin uppercase'>{tag}</p>
        <h2 className='mt-2 mb-2 font-semibold text-green-100 text-2xl group-hover:text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-emerald-300 via-green-500  duration-500 transition-all  flex items-center'>$ <span className='font-semibold text-green-100 text-6xl group-hover:text-transparent bg-clip-text bg-gradient-to-r to-green-600 from-emerald-300 via-green-500  duration-500 transition-all '> 0</span>.00</h2>

        <div className='flex flex-col pl-4 mt-4 w-full gap-4 text-green-100/[0.8]'>
            <PricFeatures feature={`Access to premium features and integrations`}/>
            <PricFeatures feature="Limited storage"/>
            <PricFeatures feature={`Advanced analytics and reporting`}/>
            <PricFeatures feature={`Dedicated customer support`}/>
            <PricFeatures feature={`Customizable branding and design options`}/>
        </div>

        <Link href="/" className='mt-9 border text-green-200 group-hover:bg-green-500 group-hover:text-green-950 font-medium group-hover:border-green-500/[0] transition-all duration-300 border-green-500/[0.23] px-9 py-4 rounded-full '>Get Started</Link>
    </div>
  )
}

export default PricCard