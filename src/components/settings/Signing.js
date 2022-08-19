import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const Signing = () => {
  const [btntoggle, setBtntoggle] = useState(true)

  const Signup = () =>{
    setBtntoggle(false)
  }
  const Signin = () =>{
    setBtntoggle(true)
  }

  return (
    <div className='absolute left-0 w-full h-full bg-[#ecf0f3] m-0 p-0'>
      <div className='relative z-1 w-[420px] h-[550px] mx-auto bg-[#ecf0f3] my-10 py-10 px-5 overflow-hidden rounded-[20px] shadow-outer2xl ease-in-out duration-500 flex flex-col items-center'>
          <div className='relative bg-[#cbced1] rounded-3xl flex justify-around w-[220px] mx-auto shadow-outerxl select-none z-auto'>
              <div id='btn' style={{left: btntoggle? '0' : '110px'}} className='absolute h-full w-[110px] bg-[#02c8db] left-0 rounded-3xl ease-in-out duration-500'></div>
              <button type='button' onClick={Signin} className='bg-hidden z-10 text-[20px] text-[#fff] font-semibold p-1 outline-none'>Sign In</button>
              <button type='button' onClick={Signup} className='bg-hidden z-10 text-[20px] text-[#fff] font-semibold p-1 outline-none'>Sign Up</button>
          </div>
          <form style={{left: btntoggle? '45px' : '450px'}} className='absolute top-[100px] w-[330px] mx-auto mt-10 ease-in-out duration-500'>
              <input type='email' className='Input' placeholder='Email' required/>
              <input type='password' className='Input select-none' placeholder='Enter Password' required/>
              <p className='p-tag w-min select-none my-2'>
              <input type='checkbox' className='mr-[10px]'/>Remember Password
              </p>
              <button type='submit' className='submit-btn w-full mx-auto h-10 font-bold text-white bg-[#02c8db] my-5 rounded-3xl shadow-outerxl select-none'><Link to='/'>Sign In</Link></button>
              <p className='text-[14px] text-black/50 mx-8 select-none'>You don't have an account? 
              <Link onClick={Signup} to='' className='font-semibold text-slate-500 hover:underline'> Sign up</Link> now</p>
          </form>
          <form style={{left: btntoggle? '450px' : '45px'}} className='left-[450px] absolute top-[80px] h-full w-[330px] mx-auto mt-5 ease-in-out duration-500'>
              <input type='text' className='Input' placeholder='First Name' required/>
              <input type='text' className='Input' placeholder='Last Name' required/>
              <input type='email' className='Input' placeholder='Email' required/>
              <input type='password' className='Input select-none' placeholder='Enter Password' required/>
              <input type='password' className='Input select-none' placeholder='Confirm Password' required/>
              
              <p className='p-tag w-min whitespace-nowrap select-none'>
                <input type='checkbox' className='mr-[10px] select-none' required/>I agree to the 
                <Link to='' className='font-semibold hover:underline select-none'> terms and conditions
                </Link>
              </p>
              <button type='submit' className='submit-btn w-full mx-auto h-10 font-bold text-white bg-[#02c8db] my-5 rounded-3xl shadow-outerxl select-none select-none' ><Link to='/'>Sign Up</Link></button>
              <p className='text-[14px] text-black/50 mx-5 select-none'>You already have an account? <Link onClick={Signin} to='' className='font-semibold text-slate-500 hover:underline select-none'>Sign in</Link> instead</p>
          </form>
      </div>
    </div>
  )
}

export default Signing