import React from 'react'
import { Link } from 'react-router-dom'
import * as IosIcon from 'react-icons/io5'

import Data from '../database/ChatDatabase.json'


const RecentChats = () => {
  return (
      <div id='slider' className='h-screen bg-slate-200 pt-1 scrollbar-thin scrollbar-track-blue-100 scrollbar-thumb-blue-500 overflow-y-scroll scroll-smooth'>
        <div id='recentChats' className='w-full h-min bg-slate-200 items-center whitespace-nowrap lg:grid lg:grid-cols-2'>
        {Data.map((data, index) => {
          return(
          <Link key={index} to='/chatscreen' className='flex py-2 mx-2 my-2 rounded-3xl bg-blue-50 shadow-md shadow-blue-500/40 select-none'>
            <div className='flex items-center h-[80px] w-[80px]'>
                <img src={data.Image} alt='' 
                  className='object-cover h-[70px] min-w-[70px] border-[#02c8db] border-2 rounded-full'
                />
            </div>
            <div className='flex mx-5 w-full bg-slate-200 rounded-3xl border-blue-500 '>
              <div className='flex flex-col m-2 gap-2'>
                <div className='flex w-min h-min align-center gap-5'>
                  <h2 className='text-[#02c8db] font-semibold'>
                    {data.Surname} {data.Firstname}
                  </h2>
                  <h2 className='my-auto text-[#02c8db]/50'>
                    <IosIcon.IoCloudOfflineSharp/>
                  </h2>
                </div>
                <div>
                  <h2 className='text-blue-900/80 text-[14px] font-serif'>
                    {data['Message-1']}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
          )
        })}
        
      </div>

    </div>
  )
}

export default RecentChats 