import React from 'react'
import { Link } from 'react-router-dom'
import * as IosIcon from 'react-icons/io5'

import Data from '../database/ChatDatabase.json'
import Navbar from '../Navbar'


const ChatScreen = () => { 
  const ShowMessage = () => {
    let textarea = document.querySelector('#textarea')
    let input = textarea.value
    let display = document.querySelector('#text-message')
    let chatscreen = document.querySelector('#chatscreen')
    
    let p = document.createElement('p')
    p.setAttribute('class', 'text-indigo-900 bg-[#02c8db]/30 p-4 m-2 rounded-2xl max-w-[500px] shadow-sm shadow-black mx-auto even:mr-[3%] odd:ml-[3%]')
    let nullmessage = document.createElement('div')
    nullmessage.setAttribute('class', 'fixed top-[200px] mx-auto opacity-70 bg-slate-500 px-2 rounded-3xl text-blue-50 ease duration-1000 shadow-black shadow-md md:px-4 md:text-[25px]')

    p.innerText = input
    nullmessage.innerText = 'Warning: Enter text before sending!!'
    if(input === '' ){
      chatscreen.appendChild(nullmessage)
      setTimeout(() =>{
        nullmessage.style.opacity = '0'
      }, 3000)
    }else{
      display.appendChild(p)
    }
  }
  
  return (
    <div className='bg-slate-200'>
    <Navbar/>
    <div className='h-full w-[480px] mx-auto my-2 flex flex-col whitespace-wrap my-1 bg-[#02c8db] rounded-2xl select-none shadow-outer2xl'>
      <div id='chatscreen' className='flex justify-center'>
        
      </div>
      {Data.slice(0, 1).map((data, index) => {

        return(
          <>
          <div key={index} className='flex w-full justify-between p-5 bg-[#02c8db] rounded-t-2xl shadow-slate-400 shadow-md drop-shadow-md'>
            <div className='relative last:border-black last:border-2'>
              <img className='object-cover min-w-[40px] h-[40px] rounded-[8px] shadow-sm shadow-white' src={data.Image} alt=''/>
              <IosIcon.IoEllipseSharp className='absolute top-[27px] left-7 text-white'/>
            </div>
            <h2 className='text-2xl font-semibold text-blue-50'>
              {data.Firstname}
            </h2>
            <Link to='/chat'>
              <IosIcon.IoExitOutline className='h-[40px] w-[40px] p-1 rounded-xl text-blue-200 shadow-black shadow-sm hover:text-white hover:cursor-pointer transition ease-in-out delay-100'/>
            </Link>           
          </div>

          <div id='text-message' className='flex flex-col h-[430px] bg-slate-200 py-1 overflow-y-auto scroll-smooth slider'>
            <p className='text-indigo-900 bg-[#02c8db]/30 p-4 m-2 rounded-2xl max-w-[500px] shadow-sm shadow-black mx-auto even:mr-[3%] odd:ml-[3%]'>
              {data['Message-1']}
            </p>
            <p className='text-indigo-900 bg-[#02c8db]/30 p-4 m-2 rounded-2xl max-w-[500px] shadow-sm shadow-black mx-auto even:mr-[3%] odd:ml-[3%]'>
              {data['Message-2']}
            </p>
            <p className='text-indigo-900 bg-[#02c8db]/30 p-4 m-2 rounded-2xl max-w-[500px] shadow-sm shadow-black mx-auto even:mr-[3%] odd:ml-[3%]'>
              {data['Message-3']}
            </p>
          </div>
          
          <div className='flex px-2 pb-4 rounded-b-2xl gap-[5%] bg-slate-200'>
            <textarea id='textarea' type='text' placeholder='Message' className='slider p-2 text-slate-800 gap-1 min-w-[60%] h-[50px] resize-none rounded-2xl scroll-smooth outline-none shadow-sm shadow-slate-900'/>
            <div className='flex w-full justify-evenly lg:w-[70%]'>
              <button id='send' type='submit' onClick={ShowMessage} className='flex items-center justify-center my-auto w-[75px] h-[46px] p-2 bg-[#02c8db]/60 rounded-2xl shadow-sm shadow-slate-500'>
                <h2 className='text-[18px] text-blue-900/80 font-semibold'>
                  Send
                </h2>
                <IosIcon.IoShareOutline className='w-[20px] h-[20px] text-blue-900/80'/>
              </button>
              <button id='call' type='submit' className='flex gap-1 items-center justify-center my-auto w-[75px] h-[46px] p-2 bg-[#02c8db]/60 rounded-2xl shadow-sm shadow-slate-500'>
                <h2 className='text-[18px] text-blue-900/80 font-semibold'>Call</h2>
                <IosIcon.IoCallOutline className='w-[20px] h-[20px] text-blue-900/80'/>
              </button>
            </div>
          </div>
          </>
        )
      })}

      
    </div>
    </div>

  )
}

export default ChatScreen