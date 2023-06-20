import React, { useState, useEffect } from 'react'
import FloatableHero from './JS Functions/FloatableHero';
import { BiBrain, BiSearchAlt } from 'react-icons/bi';
import {BsCardImage} from 'react-icons/bs'
import {FaGamepad} from 'react-icons/fa'


const Display = () => {
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
    <div className='w-full h-[30vh] relative '>
        <h1 className='aiheading absolute p-0 w-full text-[180px] -top-10 tracking-widest font-bold text-center select-none'>POWER OF AI</h1>

        <FloatableHero style={{
          transform: `translate(${-position.x / 100}px, ${-position.y / 100}px)`,
        }} position="top-20 left-[70px]" icon={<BsCardImage />} infoText="BG Remover"/>


      <FloatableHero style={{
          transform: `translate(${position.x / 100}px, ${position.y / 100}px)`,
        }} position="top-0 left-[450px]" icon={<BiBrain />} infoText="AI Chatbot"/>

      <FloatableHero style={{
          transform: `translate(${-position.x / 100}px, ${position.y / 100}px)`,
        }} position="top-16 left-[800px]" icon={<FaGamepad />} infoText="TBA"/>

      <FloatableHero style={{
          transform: `translate(${position.x / 100}px, ${-position.y / 100}px)`,
        }} position="-top-0 left-[1170px]" icon={<BsCardImage />} infoText="TBA"/>

      <FloatableHero style={{
          transform: `translate(${position.x / 100}px, ${position.y / 100}px)`,
        }} position="top-24 left-[1550px]" icon={<BiSearchAlt />} infoText="TBA"/>
    </div>
  )
}

export default Display