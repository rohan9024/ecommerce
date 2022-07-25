import React from 'react'
import logo from "../assets/logo.png"

function Footer() {
    return (
        <div className='flex flex-col bg-black text-gray-300 h-[300px] font-dmsans shadow-t-lg'>
            <div className='flex justify-center items-center bg-gray-200 shadow-b-2xl'>
                <img
                    className='object-contain w-36 h-36 cursor-pointer'
                    src={logo} alt="logo" />
            </div>
            <div className='w-screen h-[1px] bg-gray-800' />
            <div className='flex flex-1 justify-center items-center space-x-12 font-normal text-lg mt-10 '>
                <h1>ENGLISH(INTL)</h1>
                <h1>Newsletter</h1>
                <h1>Contact</h1>
                <h1>Stores</h1>
                <h1>Legal & Privacy</h1>
                <h1>Jobs</h1>
                <h1>Follow Us</h1>
                <h1>Cookies</h1>
            </div>
        </div>
    )
}

export default Footer