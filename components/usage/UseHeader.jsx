import React, { useState,useEffect } from 'react'
import UseLinks from './UseLinks'


const UseHeader = ({onLinkClick}) => {

  const [activeLink, setActiveLink] = useState('BG Remover');

  const handleLinkClick = (linkTitle) => {
    onLinkClick(linkTitle);
    setActiveLink(linkTitle);
    window.scrollTo(0,0);
  };

  return (
    <div className='flex gap-4 justify-center  sticky top-[103px] z-[40]'>
            <UseLinks linkTitle={`BG Remover`} active={activeLink === 'BG Remover'}
            onClick={() => handleLinkClick('BG Remover')}/>

            <UseLinks linkTitle={`Object Remover`} active={activeLink === 'Object Remover'}
            onClick={() => handleLinkClick('Object Remover')} />

            <UseLinks linkTitle={`AI chatbot`} active={activeLink === 'AI chatbot'}
            onClick={() => handleLinkClick('AI chatbot')}/>

            <UseLinks linkTitle={`Code Fixer`} active={activeLink === 'Code Fixer'}
           onClick={() => handleLinkClick('Code Fixer')}/>

            
    </div>
  )
}

export default UseHeader




{/* <UseLinks linkTitle={`Image Generator`} active={activeLink === 'Image Generator'}
            onClick={() => handleLinkClick('Image Generator')}/>

            <UseLinks linkTitle={`Friend`} active={activeLink === 'Friend'}
           onClick={() => handleLinkClick('Friend')}/>

            <UseLinks linkTitle={`TBA`} active={activeLink === 'TBA'}
           onClick={() => handleLinkClick('TBA')}/>       */}