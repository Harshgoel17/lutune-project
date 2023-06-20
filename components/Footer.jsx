import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import {BsTwitter, BsInstagram, BsFacebook, BsLinkedin} from 'react-icons/bs'
import FooterLinks from './FooterLinks'

const Footer = () => {
  return (
    <div className='relative group text-slate-950 dark:text-white'>

    <div className='w-full md:h-[320px] bg-[var(--footer-bg-color-light)] dark:bg-[var(--footer-bg-color)] grid grid-cols-1 md:flex md:px-40 py-7 md:py-2 md:items-center md:justify-between md:backdrop-blur-xl border-t border-green-900/[0.25]'>


    <FooterLinks
        heading="TWJ Group"
        links={[
          { url: "/about", label: "About Us" },
          { url: "/contact", label: "Contact Us" },
          { url: "/faq", label: "FAQ" },
          { url: "/privacy", label: "Privacy Policy" },
        ]}
      />
    <FooterLinks
        heading="Legal Links"
        links={[
          { url: "/about", label: "About Us" },
          { url: "/contact", label: "Contact Us" },
          { url: "/faq", label: "FAQ" },
          { url: "/privacy", label: "Privacy Policy" },
        ]}
    />

<div className='flex  flex-col font-semibold text-2xl p-4 px-6 items-center gap-3 rounded-lg relative group cursor-pointer transition-all'>
        <Image src="/public-logo.png" height={130} width={130} alt="" 
        className='opacity-[0.9] top-[50%] block group-hover: transition-all duration-300 
        md:h-[130px] md:w-[130px] w-[80px]' />
    </div>

    <FooterLinks
        heading="Quick Links"
        links={[
          { url: "/about", label: "About Us" },
          { url: "/contact", label: "Contact Us" },
          { url: "/faq", label: "FAQ" },
          { url: "/privacy", label: "Privacy Policy" },
        ]}
      />
    
    <div className='flex ml-24 flex-col font-semibold text-2xl p-4 px-6 items-center gap-3 rounded-lg h-full'>
        <div className='flex md:flex-col items-center justify-center font-normal text-[30px] transition-all gap-6 text-3xl h-full'>
          <Link href="/"><BsFacebook className='transition-all duration-500 hover:scale-125 dark:hover:text-green-300 hover:text-green-700 '/></Link>
          <Link href="/"><BsInstagram className='transition-all hover:scale-125 dark:hover:text-green-300 hover:text-green-700 duration-500'/></Link>
          <Link href="/"><BsLinkedin className='transition-all hover:scale-125 dark:hover:text-green-300 hover:text-green-700 duration-500'/></Link>
          <Link href="/"><BsTwitter className='transition-all hover:scale-125 dark:hover:text-green-300 hover:text-green-700 duration-500'/></Link>
        </div>
      </div>
    
    
    </div>















      <div className='md:h-8  bg-[#00000001] border-t dark:border-t-white/[0.03] border-t-slate-950/[0.03] flex md:flex-row flex-col items-center justify-around text-sm gap-1 py-3 md:py-0 md:gap-0 text-slate-950/[0.8] dark:text-white/[0.6]'>
        <p>&#169; Lutune AI, all rights reserved to TWJ Group.</p>
        <span className='flex gap-2 text-[12px] uppercase cursor-default'>
          <p className='hover:text-slate-950 dark:hover:text-white transition-all duration-500'>TERMS OF SERVICE</p>
          |
          <p className='hover:text-slate-950 dark:hover:text-white transition-all duration-500'>PRIVACY POLICY</p>
        </span>
      </div>
    </div>
  )
}

export default Footer