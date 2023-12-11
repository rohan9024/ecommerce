import React from 'react'
import logo from "../assets/logo.png"
import { Link, } from 'react-router-dom';

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
                <Link to='/newsletter'>
                <h1 className='my-2'>Newsletter</h1>
                </Link>
                <Link to='/stores'>
                <h1 className='my-2'>Stores</h1>
                </Link>
                <Link to='/jobs'>
                <h1 className='my-2'>Jobs</h1>
                </Link>
                <Link to='/contact'>
                <h1 className='my-2'>Contact</h1>
                </Link>
                <Link to='/followus'>
                <h1 className='my-2'>Follow Us</h1>
                </Link>
                <h1 className='my-2'><a href='https://www.instagram.com'>Instagram</a></h1>
                <h1 className='my-2'><a href='https://www.twitter.com'>Twitter</a></h1>
                <Link to='/cookies'>
                <h1 className='my-2'>Cookies</h1>
                </Link>
                <Link to='/privacypolicy'>
                <h1 className='my-2'>Privacy Policy</h1>
                </Link>
                <Link to='/termsconditions'>
                <h1 className='my-2'>Terms & Conditions</h1>
                </Link>
            </div>
        </div>
    )
}

export default Footer