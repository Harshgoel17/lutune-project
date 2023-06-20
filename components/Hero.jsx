import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import FloatableHero from './JS Functions/FloatableHero';
import { BiBrain, BiSearchAlt } from 'react-icons/bi';
import {BsCardImage} from 'react-icons/bs'
import {FaGamepad} from 'react-icons/fa'

const Hero = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [idleTime, setIdleTime] = useState(0);

  useEffect(() => {
    
    const handleMouseMove = (event) => {
      setIdleTime(0);
      setPosition({
        x: event.pageX,
        y: event.pageY,
      });
    };
    const timer = setInterval(() => {
      setIdleTime((idleTime) => idleTime + 1);
    }, 1000);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(timer);
    };
  }, []);

  return (
    <>
    <div className='flex flex-col items-center justify-center h-[calc(100vh-var(--header-height))] w-[100vw]  md:w-full gap-5 md:px-[22%] text-center relative'>
      <h1 className='font-rubik text-4xl md:text-7xl font-semibold'>All the AIs you'll ever need in 
      <span className='bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-500  to-green-600 text-transparent'> one place</span>.</h1>
      {/* <p className='tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro in expedita eius saepe dolor ipsa possimus, esse, quos quia veniam sunt cumque nobis? Quia, eum.</p> */}
      <Link href="/" className='p-3 px-6 md:p-4 md:px-9 font-semibold shadow-lg border border-green-500/[1] text-green-500 transition-all duration-300 
      rounded-[50px] hover:bg-gradient-to-tl hover:from-teal-300 hover:via-emerald-500  hover:to-green-600 hover:text-white mt-1 md:mt-4' title='Explore AI Solutions'>Explore Now</Link>

      


{/* <FloatableHero style={{
          transform: `translate(${position.x / 100}px, ${position.y / 100}px)`,
        }} position="bottom-32 left-[80px]"/>

      <FloatableHero style={{
          transform: `translate(${-position.x / 100}px, ${-position.y / 100}px)`,
        }} position="bottom-16 left-[450px]"/>

      <FloatableHero style={{
          transform: `translate(${position.x / 100}px, ${-position.y / 100}px)`,
        }} position="bottom-36 left-[800px]"/>

      <FloatableHero style={{
          transform: `translate(${-position.x / 100}px, ${position.y / 100}px)`,
        }} position="bottom-28 left-[1150px]"/>

      <FloatableHero style={{
          transform: `translate(${-position.x / 100}px, ${-position.y / 100}px)`,
        }} position="bottom-44 left-[1550px]"/> */}

    </div>
    </>
  )
}

export default Hero