import React from 'react'
import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import men from "../assets/men.webp"
import women from "../assets/women.webp"
import kids from "../assets/kids.webp"
import cart from "../assets/cart.png"
import { motion } from "framer-motion"

function Fourth() {


    return (
        <div className='w-screen h-screen font-dmsans flex flex-col justify-center items-center space-y-12'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-row space-x-2 justify-center items-center'>
                <h1 className='text-black text-4xl font-bold'>Explore Categories</h1>
            </motion.div>
            <div className='flex justify-center items-center space-x-5'>

                <motion.div
                    className='shadow-sm border border-gray-200 cursor-pointer'>
                    <img src={men} alt="men" className='h-[593px] w-[467px] object-cover' />
                    <div className='flex justify-center items-center p-5'>
                        <h1 className='font-bold text-4xl text-center'>Men</h1>
                    </div>
                </motion.div>
                <motion.div
                    className='shadow-sm border border-gray-200 cursor-pointer'>
                    <img src={women} alt="women" className='h-[593px] w-[467px] object-cover ' />
                    <div className='flex justify-center items-center p-5'>
                        <h1 className='font-bold text-4xl text-center'>Women</h1>
                    </div>
                </motion.div>
                <motion.div
                    className='shadow-sm border border-gray-200 cursor-pointer'>
                    <img src={kids} alt="kids" className='h-[593px] w-[467px] object-cover' />
                    <div className='flex justify-center items-center p-5'>
                        <h1 className='font-bold text-4xl text-center'>Kids</h1>
                    </div>
                </motion.div>


            </div>
        </div>

    )
}

export default Fourth