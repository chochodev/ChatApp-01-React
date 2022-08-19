import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import * as IonIcons from 'react-icons/io5'

const Navbar = () => {
    const [nav, setNav] = useState(true)
    const toggleNav = () => setNav(!nav)
  return (
    <div className='w-full h-[70px] z-20 relative bg-[#02c8db] drop-shadow-3xl md:h-[80px] select-none transition ease-in-out delay-500'>
        <div className='flex justify-between w-full h-full items-center '>
            <div className='flex mx-2 items-center md:items-start'>
                <h1 className='text-4xl font-bold text-white md:text-5xl'>CHATAPP.</h1>
                <div className='m-2'>
                    <IonIcons.IoChatbubblesSharp className='h-8 w-8 text-slate-900/30 sm:h-10 sm:w-10'/>
                </div>
            </div>
            <ul className='hidden px-4 h-full w-[500px] items-center justify-between md:flex md:w-[500px] md:mr-4 lg:mr-8 xl:mr-10 transition ease-in-out delay-500'>
                <li className=' text-white'><Link onClick={toggleNav} className='hover:text-slate-600 focus:underline' to='/'>Home</Link></li>
                <li className=' text-white'><Link onClick={toggleNav} className='hover:text-slate-600 focus:underline' to='/chat'>Chats</Link></li>
                <li className=' text-white'><Link onClick={toggleNav} className='hover:text-slate-600 focus:underline' to='/settings'>Settings</Link></li>
                <li className=' text-white'><Link onClick={toggleNav} className='hover:text-slate-600 focus:underline' to='/privacy'>About Us</Link></li>
            </ul>

            {nav ? 
            <div onClick={toggleNav} className='flex flex-col w-8 h-4 md:hidden transition ease-in-out delay-500'>
                <div  style={{transition: '.5s'}} className='bg-white  -translate-y-1 w-5 h-1 rounded-sm'></div>
                <div  style={{transition: '.5s'}} className='bg-white   w-6 h-1 rounded-sm'></div>
                <div  style={{transition: '.5s'}} className='bg-white   translate-y-1 w-4 h-1 rounded-sm'></div>
            </div> 
            :
            <div onClick={toggleNav} style={{transition: '.5s'}} className='flex flex-col w-8 h-4 mr-1 md:hidden transition ease-in-out delay-500'>
                <div  style={{transition: '.5s'}} className=' bg-white   rotate-45 translate-y-[4px] w-7 h-1 rounded-sm'></div>
                <div className='hidden '></div>
                <div  style={{transition: '.5s'}} className=' bg-white   -rotate-45 w-7 h-1 rounded-sm'></div>
            </div>
            }
        </div>
        <ul className= {nav ? 'hidden' : 'flex flex-col transition ease-in-out delay-500 h-[250px] px-8 w-full pb-12 pt-6 rounded-b-3xl justify-between bg-slate-300 md:hidden'}>
            <li className=' text-[#00a4b3] px-2 text-[18px] border-zinc-400/80 border-b-2 pb-1'><Link onClick={toggleNav} className='hover:text-[#02c8db]' to='/'>Home</Link></li>
            <li className=' text-[#00a4b3] px-2 text-[18px] border-zinc-400/80 border-b-2 pb-1'><Link onClick={toggleNav} className='hover:text-[#02c8db]' to='/chat'>Chats</Link></li>
            <li className=' text-[#00a4b3] px-2 text-[18px] border-zinc-400/80 border-b-2 pb-1'><Link onClick={toggleNav} className='hover:text-[#02c8db]' to='/settings'>Settings</Link></li>
            <li className=' text-[#00a4b3] px-2 text-[18px] border-zinc-400/80 border-b-2 pb-1'><Link onClick={toggleNav} className='hover:text-[#02c8db]' to='/privacy'>About Us</Link></li>
        </ul>
    </div>
  )
}

export default Navbar