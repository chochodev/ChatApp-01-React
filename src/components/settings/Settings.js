import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
import Privacy from './Privacy'
import Signing from './Signing'

const Settings = () => {
  return (
    <div className='pb-5 select-none bg-slate-200'>
      <div><Navbar/></div>
      <div className='flex flex-col max-w-[80vw] mt-5 h-full mx-auto items-center md:grid md:grid-cols-2 lg:grid-cols-3 md:max-w-[99vw]'>
        <div className='flex flex-col mx-10 my-2 min-w-[70vw] border-b-2 border-slate-900/40 pb-10 md:min-w-[45vw] md:mx-2 lg:min-w-[30vw] md:h-full'>
          <div className='flex flex-col gap-2'>
              <h2 className='text-2xl text-[#02c8db] font-semibold font-sans underline'>
                  Active Status
              </h2>
              <p className='text-[15px] px-3 py-1 text-slate-500 bg-slate-200 rounded-md'>
                  <span className='font-semibold'>Info: </span>
                  Let's your contacts know when you are online
              </p>
              <p className='text-[15px] px-3 pt-1 text-slate-500 bg-slate-200 rounded-md'>
                  Active status is off. Check the box to activate
              </p>
          </div>
          <div className=''>
            <input className='shadow-slate-200 shadow-sm' type='checkbox'/>
          </div>
        </div>

        <div className='flex flex-col mx-10 my-2 gap-2 min-w-[70vw] border-b-2 border-slate-900/40 pb-10 md:min-w-[45vw] md:mx-2 lg:min-w-[30vw] md:h-full'>
            <h2 className='text-2xl text-[#02c8db] font-semibold font-sans underline'>Dark Theme</h2>
            <p className='text-[15px] px-3 py-1 text-slate-500 bg-slate-200 rounded-md'>
                Activate dark theme to experience another trill and conserve battery life
            </p>
            <button type='reset' className='bg-slate-500 text-blue-100 rounded-md hover:bg-slate-500/80 transition ease-in-out delay-50 font-semibold shadow-md shadow-black/30'>
                Activate
            </button>
        </div>

        <div className='flex flex-col mx-10 my-2 gap-2 min-w-[70vw] border-b-2 border-slate-900/40 pb-10 md:min-w-[45vw] md:mx-2 lg:min-w-[30vw] md:h-full'>
            <h2 className='text-2xl text-[#02c8db] font-semibold font-sans underline'>Report Account</h2>
            <input type='text' placeholder="Enter contact's name" className='h-8 border-b-2 border-black/20 outline-none bg-transparent px-2 text-[15px] '/>
            <h2 className='text-blue-900/90 text-[18px] font-semibold mx-auto'>
                Reason for report
            </h2>
            <div>
                <div className='flex justify-between'>
                    <label className='text-blue-900/70 text-[15px]'>Piracy</label>
                    <input type='checkbox'/>
                </div>
                <div className='flex justify-between'>
                    <label className='text-blue-900/70 text-[15px]'>Abuse / Harrasment</label>
                    <input type='checkbox'/>
                </div>
                <div className='flex justify-between'>
                    <label className='text-blue-900/70 text-[15px]'>Others....</label>
                    <input type='checkbox'/>
                </div>
            </div>
            <button className='bg-orange-600 text-white rounded-md hover:bg-orange-600/80 transition ease-in-out delay-50 font-semibold shadow-md shadow-black/30'>
                Report
            </button>
        </div>
        <div className='flex flex-col mx-10 my-2 gap-1 min-w-[70vw] border-b-2 border-slate-900/40 pb-10 md:min-w-[45vw] md:mx-2 lg:min-w-[30vw] md:h-full'>
          <h2 className='text-2xl text-[#02c8db] font-semibold font-sans underline'>
            Password and Security
          </h2>
          <div className='flex flex-col gap-1'>
            <Link to='' className='text-blue-900/50 font-semibold hover:underline rounded-3xl ease-in-out duration-200 px-3 pb-1'>Change Password</Link>
            <Link to='' className='text-blue-900/50 font-semibold hover:underline rounded-3xl ease-in-out duration-200 px-3 pb-1'>Temporary Lock</Link>
              <p className='text-[15px] px-3 py-1 text-slate-500 bg-slate-200 rounded-md'>
                <span className='font-semibold'>Info: </span>
                Lock account for a small period of time to prevent theft
              </p>
          </div>
        </div>
    
        <div className='flex flex-col mx-10 my-2 gap-2 min-w-[70vw] border-b-2 border-slate-900/40 pb-10 md:min-w-[45vw] md:mx-2 lg:min-w-[30vw] md:h-full'>
          <h2 className='text-2xl text-[#02c8db] font-semibold font-sans underline'>
            Delete Account
          </h2>
          <button className='bg-slate-500 hover:bg-red-400 text-blue-100 hover:text-orange-100 rounded-md font-semibold shadow-md shadow-black/30'>Delete Account
          </button>
          <p className='text-[15px] px-3 py-1 text-slate-500 bg-slate-200 rounded-md'>
            <span className='font-semibold'>Info: </span>
            Permanently delete your account.
            <span className='font-semibold text-red-800'> Warning!! </span>
            This action cannot be reversed
          </p>
        </div>

        <div className='flex flex-col mx-10 my-2 gap-2 min-w-[70vw] border-b-2 border-slate-900/40 pb-10 md:min-w-[45vw] md:mx-2 lg:min-w-[30vw] md:h-full'>
            <h2 className='text-2xl text-[#02c8db] font-semibold font-sans underline'>Contact Us</h2>
            <div className='flex flex-col -gap-1'>
                <h2 className='text-blue-900/80 font-semibold'>Email:</h2>
                <Link to='' className='text-[17px] font-semibold text-blue-800 underline mx-auto]'>chochoprogrammer@gmail.com</Link>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-blue-900/80 font-semibold'>Hotline:</h2>
                <Link to='' className='text-[16px] text-blue-800 font-semibold'>
                    +2348114222755
                </Link>
            </div>
          </div>
      </div>
      <div className='flex flex-col mt-5 mx-auto my-2 gap-2 max-w-[70vw] md:max-w-[30vw] md:items-center lg:min-w-[30vw] md:h-full'>
        <button className='bg-red-400 w-full text-orange-100 font-semibold rounded-md hover:bg-red-400/90 shadow-md shadow-black/30'><Link to='/signing'>Sign Out</Link>
        </button>
      </div>
      <div><Footer/></div>
    </div>
  )
}

export default Settings