import React from 'react'
import * as IosIcon from 'react-icons/io5'

import Data from '../database/OnlineDatabase.json'
import Navbar from '../Navbar'

function OnlineChats(){
    let slider = document.querySelector('#slider')
    const scrollRight = () =>{
        slider.scrollLeft = slider.scrollLeft + 500
    }
    const scrollLeft = () =>{
        slider.scrollLeft = slider.scrollLeft - 500
    }

    return(
        <div className='bg-slate-200'>
        <div className='flex bg-[#02c8db] rounded-b-3xl items-center shadow-blue-500 md:hidden'>
            <div className='flex items-center h-[40px] w-min border-2 rounded-xl hover:border-slate-500'>
                <IosIcon.IoChevronBackSharp onClick={scrollLeft} className='mx-auto h-40 w-6 text-white hover:text-slate-500 ease-in-out duration-300'/>
            </div>
            <div id='slider' className='flex overflow-x-auto scroll-smooth'>
            {Data.database.map((data, index) => {
                if(data.Status === 'online'){
                    data.Status = <IosIcon.IoCloudSharp/>
                }else if(data.Status === 'offline'){
                    data.Status = <IosIcon.IoCloudOfflineSharp/>
                }
                return(
                    <>
                    <div className='flex flex-col w-min h-min my-3 cursor-pointer' key={index}>
                        <div className='flex justify-center w-[100px] h-[85px] items-center'>
                            <img className='mx-auto min-w-[80px] h-[80px] object-cover rounded-full border-4  ease-in-out duration-200 hover:w-[83px] hover:border-2' src={data.Image} alt=''/>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='font-semibold text-white hover:text-indigo-200'>{data.Firstname}</h2>
                            <div className='text-white'>{data.Status}</div>
                        </div>
                    </div>
                    </>
                )
            })}
            </div>
            <div className='flex items-center h-[40px] w-min border-2 rounded-xl hover:border-slate-500'>
                <IosIcon.IoChevronForwardSharp onClick={scrollRight} className='mx-auto h-40 w-6 text-white hover:text-slate-500 ease-in-out duration-300'/>
            </div>
        </div>

        <div id='slider' className='hidden h-screen flex-col w-min bg-[#02c8db] items-center scrollbar-thin scrollbar-track-blue-100 scrollbar-thumb-blue-500 overflow-y-scroll md:scroll-smooth md:flex'>
        {Data.database.map((data, index) => {
            if(data.Status === 'online'){
                data.Status = <IosIcon.IoCloudSharp/>
            }else if(data.Status === 'offline'){
                data.Status = <IosIcon.IoCloudOfflineSharp/>
            }
            return(
                <>
                <div key={index} className='flex flex-col w-min h-min my-3 cursor-pointer'>
                    <div className='flex justify-center w-[115px] h-[95px] items-center'>
                        <img className='mx-auto min-w-[85px] h-[85px] object-cover rounded-full border-4  ease-in-out duration-200 hover:w-[83px] hover:border-2' src={data.Image} alt=''/>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='font-semibold text-white hover:text-indigo-200'>{data.Firstname}</h2>
                        <div className='text-white h-2'>{data.Status}</div>
                    </div>
                </div>
                </>
            )
        })}
        </div>

        </div>
    )
}

export default OnlineChats