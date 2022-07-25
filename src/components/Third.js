import React from 'react'
import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import m1 from "../assets/m1.jpg"
import m2 from "../assets/m2.jpg"
import m3 from "../assets/m3.jpg"
import m4 from "../assets/m4.jpg"
import cart from "../assets/cart.png"
import { motion } from "framer-motion"

function Third() {


    return (
        <div className='w-screen h-screen font-dmsans flex flex-col justify-center items-center space-y-12'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-row space-x-2 justify-center items-center'>
                <h1 className='text-black text-4xl font-bold'>All models.</h1>
                <h1 className='text-gray-700 text-4xl font-bold'>Take your pick.</h1>
            </motion.div>
            <div className='flex justify-center items-center space-x-5'>

                <motion.div
                    className='shadow-sm border border-gray-300 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <img src={m2} alt="m2" className='h-[450px] w-[358px] object-contain' />
                    <div className='flex justify-between items-center w-[358px] h-[100px] px-4 pb-5'>
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-lg mt-5'>MacBook Air with M2 chip</h1>
                            <h1>₹119900.00</h1>
                        </div>
                        <div className='flex justify-center items-center '>
                            <img
                                className='object-contain w-5 h-5'
                                src={cart} alt="cart" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='shadow-sm border border-gray-300 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <img src={m3} alt="m3" className='h-[450px] w-[358px] object-contain' />
                    <div className='flex justify-between items-center w-[358px] h-[100px] px-4 pb-5'>
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-lg mt-5'>MacBook Pro 13”</h1>
                            <h1>₹129900.00</h1>
                        </div>
                        <div className='flex justify-center items-center '>
                            <img
                                className='object-contain w-5 h-5'
                                src={cart} alt="cart" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='shadow-sm border border-gray-300 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <img src={m4} alt="m4" className='h-[450px] w-[358px] object-contain' />
                    <div className='flex justify-between items-center w-[358px] h-[100px] px-4 pb-5'>
                        <div className='flex flex-col '>
                            <h1 className='font-bold text-lg mt-5'>MacBook Pro 14” and 16”</h1>
                            <h1>₹194900.00</h1>
                        </div>
                        <div className='flex justify-center items-center '>
                            <img
                                className='object-contain w-5 h-5'
                                src={cart} alt="cart" />
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>

    )
}

export default Third