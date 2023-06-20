import React from 'react'
import PricCard from './PricCard'

const Pricing = () => {
  return (
    <div className='flex flex-col font-rubik items-center gap-5 my-32 mb-44'>
        <h1 className='font-bold text-6xl'>Pricing - 14 days trial</h1>
        <p className='w-[900px] text-center text-slate-300/[0.7] mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero esse distinctio. Dignissimos, perferendis vero?</p>

        <div className='flex gap-10'>
            <PricCard title="Mild & Free" tag={`FOR BORING PEOPLE`} free={true}/>
            <PricCard title="Flaming Hot" tag={`FOR AI LOVERS`} mostPopular={true}/>
        </div>
    </div>
  )
}

export default Pricing