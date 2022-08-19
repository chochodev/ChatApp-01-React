import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='w-full flex flex-col -mb-2 sm:mt-5'>
        <div className='flex flex-col mx-auto justify-evenly sm:gap-5 items-center sm:flex-row'>
            <Link to='/privacy' className='text-[15px] text-blue-900/80 font-semibold hover:underline'>Terms of Services</Link>
            <Link to='/privacy' className='text-[15px] text-blue-900/80 font-semibold hover:underline'>Policy</Link>
            <Link to='/privacy' className='text-[15px] text-blue-900/80 font-semibold hover:underline'>Cookies</Link>
        </div>
        <div className='mx-auto'>
            <Link to='' className='text-[14px] text-blue-900/80 font-mono'>ChatApp Copyright &copy; 2022</Link>
        </div>
    </div>
  )
}

export default Footer