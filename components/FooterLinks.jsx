import Link from 'next/link'
import React from 'react'

const FooterLinks = ({ heading, links }) => {
  return (
    <div className='flex flex-col font-semibold text-2xl p-4 px-6 items-start gap-3 rounded-lg'>
      <h2>{heading}</h2>
      <div className='flex flex-col font-normal text-[18px] transition-all'>
        {links.map((link, index) => (
            <Link key={index} href={link.url}>
            <p className='dark:hover:text-green-400 hover:text-green-600 transition-all text-[15px]'>{link.label}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default FooterLinks