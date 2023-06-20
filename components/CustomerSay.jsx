import React from 'react'
import CustomerCard from './CustomerCard'
import Marquee from "react-fast-marquee";

const CustomerSay = () => {
  return (
    <div className='flex flex-col font-rubik items-center gap-5 my-56 mt-56'>
        <h1 className='font-bold text-6xl'>Our Community</h1>
        <p className='w-[900px] text-center text-slate-300/[0.7] mb-8'>What they have to say about us! Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, totam!</p>
        <div className='flex flex-col gap-10 w-screen'>
        <Marquee gradient={false} speed={12} pauseOnHover={true} className=' '>
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            
        </Marquee>
        </div>
    </div>
  )
}

export default CustomerSay