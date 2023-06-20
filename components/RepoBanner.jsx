import React from 'react'
import Link from 'next/link'
import Marquee from "react-fast-marquee";
import RepoTag from './RepoTags';

const RepoBanner = () => {
  return (
    <div className='mb-32'>
        <div className=' bg-gradient-to-r from-teal-600 via-emerald-600  to-green-600 rounded-2xl pt-24 flex flex-col gap-5 items-center justify-center overflow-hidden'>

             <h1 className='text-5xl font-bold'>Looking to start your business?</h1>
            <p>or just to automate your business, Lutune AI is for you!</p>
            <Link href="/" className='border border-[#b5ddb8] p-4 px-9 rounded-[50px] text-[#b5ddb8] font-semibold hover:bg-[#b5ddb8] transition-all duration-300 hover:text-green-700'>Check Lutune</Link>
           

            <div className='flex mt-12 mb-6  w-full'>
                <Marquee gradient={false} speed={10} direction='right' className='rotate-1'>
                    
                    <RepoTag title="Newsletter Generator"/>
                    <RepoTag title="Lutune Bot"/>
                    <RepoTag title="Social Media"/>
                    <RepoTag title="Email Marketing"/>
                    <RepoTag title="Accounting"/>
                    <RepoTag title="Analytics"/>
                    <RepoTag title="Ads Creation"/>
                    <RepoTag title="Business Presentations"/>
                    <RepoTag title="Branding"/>
                    <RepoTag title="Lead Generator"/>
                    <RepoTag title="Automation"/>
                    <RepoTag title="Affordable"/>
                </Marquee>
            </div>

        </div>
    </div>
  )
}

export default RepoBanner