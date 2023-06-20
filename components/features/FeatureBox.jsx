import React from 'react'
import {SiFastlane} from 'react-icons/si'

const FeatureBox = () => {
  return (
    <div className='w-[80%] border rounded-lg border-green-500/[0.23] shadow-xl 
    bg-black/[0.34] flex items-center justify-center py-16 font-rubik pr-20
    max-h-[400px]'>
        <div className='flex-1 flex items-center justify-center text-[200px]'>
          <SiFastlane />
        </div>
        <div className='flex-[1.5] flex flex-col gap-6'>
            <h1 className='font-semibold text-4xl'>Stop the hastle of visiting so many sites.</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe voluptates vero, laudantium nisi possimus nihil minus illo quas voluptatibus soluta aliquam voluptatum molestias fugiat fuga laborum iste cupiditate quia culpa? Eius ipsa architecto iure quam unde iste beatae exercitationem adipisci harum nulla sunt id sit qui perferendis corporis atque molestias, mollitia earum, a illum voluptatem. Quasi quisquam nesciunt dolorum mollitia quidem laboriosam in. Nihil, omnis? Voluptates ipsa eligendi voluptatem eum.</p>
        </div>
    </div>
  )
}

export default FeatureBox