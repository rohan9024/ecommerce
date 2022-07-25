import React from 'react'
import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import img1 from "../assets/img1.webp"
import img2 from "../assets/img2.webp"
import img3 from "../assets/img3.webp"
import img4 from "../assets/img4.webp"
import img5 from "../assets/img5.webp"
import cart from "../assets/cart.png"
import { motion } from "framer-motion"

function Second() {


    return (
        <div className='w-screen  h-screen  font-dmsans  flex flex-col justify-center items-center space-y-12'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-row space-x-2 justify-center items-center'>
                <h1 className='text-black text-4xl font-bold'>Trending Products</h1>
            </motion.div>
            <div className='flex justify-center items-center space-x-5'>
                <motion.div
                    className='shadow-sm border border-gray-300 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <img src={img1} alt="" className='h-[450px] w-[358px] object-cover' />
                    <div className='flex justify-between items-center w-[358px] h-[130px] px-4 pb-5'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-bold text-lg mt-5'>Ethnix by Raymond</h1>
                            <h3 className='text-sm font-medium'>Medium Green Kurtas</h3>
                            <h1>₹1137</h1>
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
                    <img src={img2} alt="img2" className='h-[450px] w-[358px] object-cover' />
                    <div className='flex justify-between items-center w-[358px] h-[130px] px-4 pb-5'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-bold text-lg mt-5'>Ethnix by Raymond</h1>
                            <h3 className='text-sm font-medium'>BEIGE Kurtas</h3>
                            <h1>₹1137</h1>
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
                    <img src={img3} alt="img4" className='h-[450px] w-[358px] object-cover' />
                    <div className='flex justify-between items-center w-[358px] h-[130px] px-4 pb-5'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-bold text-lg mt-5'>Ethnix by Raymond</h1>
                            <h3 className='text-sm font-medium'>Medium Blue Kurtas</h3>
                            <h1>₹1337</h1>
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
                    <img src={img5} alt="img5" className='h-[450px] w-[358px] object-cover' />
                    <div className='flex justify-between items-center w-[358px] h-[130px] px-4 pb-5'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-bold text-lg mt-5'>Ethnix by Raymond</h1>
                            <h3 className='text-sm font-medium'>Light Yellow Bundi</h3>
                            <h1>₹1999</h1>
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

export default Second