import React from 'react'
import Navbar from '../Navbar'
import OnlineChats from './OnlineChats'
import RecentChats from './RecentChats'


const Chats = () => {
  return (
    <div id='slider' className='flex flex-col scrollbar-thin scrollbar-track-blue-100 scrollbar-thumb-blue-500 overflow-y-scroll scroll-smooth'>
        <div><Navbar className=''/></div>
        <div className='flex flex-col md:flex-row'>
          <div><OnlineChats className=''/></div>
          <div className='flex-1'>
            <div><RecentChats/></div>
          </div>
        </div>
    </div>
  )
}

export default Chats