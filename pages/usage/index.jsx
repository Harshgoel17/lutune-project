import BGCont from '@/components/usage/BGCont'
import ChatCont from '@/components/usage/ChatCont'
import CodeCont from '@/components/usage/CodeCont'
import ObjCont from '@/components/usage/ObjCont'
import UseHeader from '@/components/usage/UseHeader'
import UseLinks from '@/components/usage/useLinks'
import React,{useState} from 'react'

const Usage = () => {

    const [activeContent, setActiveContent] = useState('BG Remover');
  
    const handleLinkClick = (contentTitle) => {
      setActiveContent(contentTitle);
    };
  
  return (
    <div className='w-full font-rubik'>
        <div className='flex flex-col items-center gap-2 mt-32'>
            <h1 className='font-bold text-6xl'>Usage - how we use it?</h1>
            <p className='w-[900px] text-center text-slate-300/[0.7] mb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa vero esse distinctio. Dignissimos, perferendis vero?</p>
        </div>
        <UseHeader onLinkClick={handleLinkClick}/>
        {activeContent === 'BG Remover' && <BGCont />}
        {activeContent === 'Object Remover' && <ObjCont />}
        {activeContent === 'AI chatbot' && <ChatCont />}
        {activeContent === 'Code Fixer' && <CodeCont />}
    </div>
  )
}

export default Usage