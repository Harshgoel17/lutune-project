import React, { useCallback,useState } from "react";
import Link from 'next/link'
import {
  ReactCompareSlider,
  ReactCompareSliderHandle,
  ReactCompareSliderImage
} from "react-compare-slider";


const BGSec1 = ({ style, ...props }) => {

  const [position, setPosition] = useState(50);

  const handlePositionChange = newPosition => {
    setPosition(newPosition);
  };

  const handleMouseLeave = () => {
    setPosition(50);
  };

  return (
    <div className='h-[200vh] flex flex-col items-start w-full gap-2'>
        <h1 className='font-medium text-4xl'>Background Remover</h1>
        <p className=' text-center text-slate-300/[0.7] mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero esse distinctio. Dignissimos, perferendis vero?</p>

        <div className='w-full flex justify-center'>
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="/img1.jpeg" alt="Image one" />}
            itemTwo={<ReactCompareSliderImage src="/img2.webp" alt="Image two" />}
            boundsPadding={2}
            changePositionOnHover={true}
            onPositionChange={handlePositionChange}
            {...props}
            position={position}
            onMouseLeave={handleMouseLeave}
            handle={
              <ReactCompareSliderHandle
                buttonStyle={{
                  backdropFilter: undefined,
                  background: "#22C55E",
                  border: 0,
                  color: "#F0FDF4"
                }}

                linesStyle={{
                  background: "#22C55E",
                  width: '3px'
                }}
              />
            }/>

        </div>
    </div>  
  )
}

export default BGSec1