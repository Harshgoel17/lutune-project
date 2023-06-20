import React from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import {IoMdMail, IoMdPerson} from 'react-icons/io'
import {VscFeedback} from 'react-icons/vsc'

const Feedback = () => {
  return (
    <div className='flex flex-col font-rubik items-center gap-5 my-56 mt-56'>
        <h1 className='font-bold text-6xl'>We love Feedback</h1>
        <p className='w-[900px] text-center text-slate-300/[0.7] mb-8'>Please give us your valuable feedback captain! It helps us improve our AI tools AND it only takes 2 minutes! (ok maybe 5 minutes if you are a slow typer)</p>
            <form action="" className='flex flex-col bg-black/[0.5] border border-green-500/[.2] w-[60%]  rounded-xl px-12 justify-center gap-7 py-10'>
                <div className='flex gap-9'>
                    <div className='flex flex-col gap-1 w-[50%]'>
                        <label htmlFor="email" className='ml-1 text-slate-300/[0.9]'>Email*</label>
                        <div className='flex items-center relative'>
                            <input type="email" autoComplete='disable' name='email' required className='bg-green-950/[0.13] border border-green-500/[.2] w-[100%]  rounded-xl p-3 px-6 pr-12 placeholder:text-green-200/[0.2] text-slate-300 focus:border focus:border-green-500/[0.8] focus:outline-none focus:placeholder:text-green-400/[0.1] group' placeholder='johndoe@gmail.com'/>
                            <HiOutlineMail className='group-focus:text-green-500/[0.9] text-2xl absolute right-4 text-green-500/[0.6]'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-1 w-[50%]'>
                        <label htmlFor="Name" className='ml-1 text-slate-300/[0.9]'>Name</label>
                        <div className='flex items-center relative'>
                            <input type="text" name='name' required className='bg-green-950/[0.13] border border-green-500/[.2] w-[100%]  rounded-xl p-3 px-6 pr-12 placeholder:text-green-200/[0.2] text-slate-300 focus:border focus:border-green-500/[0.8] focus:outline-none focus:placeholder:text-green-400/[0.1]' placeholder='John Doe'/>
                            <IoMdPerson className='group-focus:text-green-500/[0.9] text-2xl absolute right-4 text-green-500/[0.6]'/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-1 w-[100%]'>
                    <label htmlFor="feedbackarea" className='ml-1 text-slate-300/[0.9]'>Your Feedback*</label>
                    <div className='flex items-center relative'>
                        <textarea name="feedbackarea" id="" cols="30" rows="10" placeholder='Give your feedback here...' className='bg-green-950/[0.13] border border-green-500/[.2] w-[100%]  rounded-xl p-3 px-6 placeholder:text-green-200/[0.2] text-slate-300 resize-none focus:border focus:border-green-500/[0.8] focus:outline-none focus:placeholder:text-green-300/[0.1]' required>
                        </textarea>
                        <VscFeedback className='group-focus:text-green-500/[0.9] text-2xl absolute right-4 bottom-4 text-green-500/[0.6]'/>
                    </div>

                </div>
            </form>  
    </div>
  )
}

export default Feedback