import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Home = () => {
  return (
    <div className='bg-slate-200 h-screen'>
      <div><Navbar/></div>
      <div className='whitespace-nowrap mt-2 mx-auto flex flex-col items-center'>
        <img className='min-w-[480px] h-[350px] object-cover rounded-[50px] border-4 border-[#02c8db] mx-auto md:min-w-[350px] lg:min-w-[250px] lg:h-[200px]' src='../assets/dp_img_2.jpg' alt=''/>
        <div>
          <h2 className='font-bold text-[25px] font-mono text-[#006771]/80 uppercase'>ChoCho Programmer</h2>
        </div>
        <Link to='' className='text-blue-900/80 font-semibold text-[15px] hover:underline rounded-3xl ease-in-out duration-200 px-3 select-none'>Edit Profile</Link>
      </div>

      <div className='flex flex-col min-w-[480px] md:min-w-0 md:mx-auto whitespace-nowrap md:max-w-max items-center select-none'>
        <h2 className='text-2xl text-[#02c8db] font-semibold font-sans underline'>Contacts</h2>
        <div className='flex flex-col items-center'>
          <Link to='' className='text-blue-900/80 w-min hover:underline rounded-3xl ease-in-out duration-200 px-3 pb-1'>
            All Contacts
            <span className='text-blue-800/80 font-bold ml-[5%]'>13</span>
          </Link>
          <Link to='' className='text-blue-900/80 w-min hover:underline rounded-3xl ease-in-out duration-200 px-3 pb-1'>
            Add contacts
          </Link>
          <Link to='' className='text-blue-900/80 w-min hover:underline rounded-3xl ease-in-out duration-200 px-3 pb-1'>
            Blocked contacts
          </Link>
          <Link to='' className='text-blue-900/80 w-min hover:underline rounded-3xl ease-in-out duration-200 px-3 pb-1'>
            Disable Visibility
          </Link>
            <p className='text-[15px] px-3 py-1 whitespace-normal  min-w-[400px] text-slate-500 bg-slate-200 rounded-md sm:min-w-[240px] max-w-max'>
              <span className='font-semibold'>Info: </span>
              Disable name and account info from showing in public search
            </p>
        </div>
      </div>
    </div>
  )
}

export default Home