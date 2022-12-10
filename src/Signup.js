import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./assets/logo.png"
const Signup = () => {
    return (
        <div className='font-dmsans'>
            <div className='flex flex-col justify-center items-center w-screen h-[640px] space-y-5'>
                <img
                    className='object-contain w-28 h-28 cursor-pointer'
                    src={logo} alt="logo" />
                <h1 className='font-bold'>YOUR ACCOUNT FOR EVERYTHING BLACKBERRY </h1>
                <h1 className='font-bold'>Create your account</h1>
                <input type="" placeholder="Full Name" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                <input type="" placeholder="Email address" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                <input type="" placeholder="Password" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                <input type="" placeholder="Phone number" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                <div className='flex justify-center items-center w-72 bg-black text-white py-2'>
                    <button>Register</button>
                </div>
                <div className='flex justify-center items-center space-x-1'>
                    <h1 className='text-gray-500'>Already registered?</h1>
                    <h1 className='underline'> <Link to="/login">Login</Link></h1>
                </div>
            </div>
        </div>
    )
}

export default Signup