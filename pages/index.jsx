import CustomerSay from '@/components/CustomerSay'
import Display from '@/components/Display'
import Feedback from '@/components/Feedback'
import Hero from '@/components/Hero'
import RepoBanner from '@/components/RepoBanner'
import Features from '@/components/Showcase/Features'
import TryNow from '@/components/TryNow'
import FeaturesWrit from '@/components/features/FeaturesWrit'
import Image from 'next/image'


export default function Home() {
  return (
    <div className='relative'>
      <Hero />
      <Display />
      <TryNow />
      <Features />
      <CustomerSay />
      <FeaturesWrit />
      <Feedback />
      <RepoBanner />
    </div>
  )
}
