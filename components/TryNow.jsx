import React from 'react'
import TryCard from './TryCard'
import Cards from './TestCard'
import App from './TestCard'
import TestCard from './TestCard'

const TryNow = () => {
  return (
    <div className='flex flex-col font-rubik items-center gap-5 my-32'>
        <h1 className='font-bold text-6xl'>Try Now - its free!</h1>
        <p className='w-[900px] text-center text-slate-300/[0.7] mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero esse distinctio. Dignissimos, perferendis vero? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, quod!</p>
        <div className='w-full gap-6 justify-center px-[220px] flex flex-wrap mt-6'>
            <TryCard title="bg remover"/>
            <TryCard title="object remover"/>
            <TryCard title="ChatBot"/>
            <TryCard title="Code Fixer"/>
            <TryCard title="Image Generator"/>
            <TryCard title="Friend"/>
            <TryCard title="TBA"/>
        </div>
        {/* <TestCard /> */}
    </div>
  )
}

export default TryNow