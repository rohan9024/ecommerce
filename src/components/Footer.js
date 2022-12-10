import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
    return (
        <div className='flex flex-col bg-black text-gray-300 font-dmsans shadow-t-lg'>
            <div className='flex justify-center items-center bg-gray-200 shadow-b-2xl'>
                <img
                    className='object-contain w-36 h-36 cursor-pointer'
                    src={logo} alt="logo" />
            </div>
            <div className='w-4/5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 text-center'>
                <h1 className='my-2'>ENGLISH(INTL)</h1>
                <h1 className='my-2'>Privacy Policy</h1>
                <h1 className='my-2'>Terms & Conditions</h1>
                <h1 className='my-2'>Newsletter</h1>
                <h1 className='my-2'>Contact</h1>
                <h1 className='my-2'>Stores</h1>
                <h1 className='my-2'>Legal & Privacy</h1>
                <h1 className='my-2'>Jobs</h1>
                <h1 className='my-2'>Follow Us</h1>
                <h1 className='my-2'>Instagram</h1>
                <h1 className='my-2'>Twitter</h1>
                <h1 className='my-2'>Cookies</h1>
            </div>
        </div>
    )
}

export default Footer