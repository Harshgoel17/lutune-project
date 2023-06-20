import RepoBanner from '@/components/RepoBanner'
import TryNow from '@/components/TryNow'
import Pricing from '@/components/pricing/Pricing'
import React from 'react'

const pricing = () => {
  return (
    <div>
        <Pricing />
        <TryNow />
        <RepoBanner />
    </div>
  )
}

export default pricing