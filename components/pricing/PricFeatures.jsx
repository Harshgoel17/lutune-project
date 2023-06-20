import React from 'react'
import {FaCheck} from 'react-icons/fa'

const PricFeatures = ({feature}) => {
  return (
    <div className='listok flex gap-3 '>
      <FaCheck className='text-green-300 mt-[3px] text-[18px]'/>
      <p>{feature}</p>
    </div>
  )
}

export default PricFeatures