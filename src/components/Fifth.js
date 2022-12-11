import React from 'react'
import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import img6 from "../assets/img6.webp"
import img7 from "../assets/img7.webp"
import img8 from "../assets/img8.webp"
import cart from "../assets/cart.png"
import { motion } from "framer-motion"
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice'

function Fifth() {

    const dispatch=useDispatch();
    const addItemsToBasket=()=>{
        const product={
       
        }
        dispatch(addToBasket(product));
    }
    return (
        <div className='w-full mx-auto font-dmsans flex flex-col justify-center items-center my-10'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-row space-x-2 justify-center items-center'>
                <h1 className='text-black text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold'>Find your fast.</h1>
            </motion.div>
            <div className='w-4/5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5'>
                <motion.div
                    className='w-4/5 sm:w-full mx-auto shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <img src={img6} alt="img6" className='object-cover' />
                    <div className='p-5 flex justify-between items-center'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-bold text-lg mt-5'>Nike Air Zoom Pegasus 39</h1>
                            <h3 className='text-sm font-normal text-gray-700'>Men's Road Running Shoes</h3>
                            <h1>₹10,439</h1>
                        </div>
                        <div className='flex justify-center items-center '>
                            <img
                            onClick={addItemsToBasket}
                                className='object-contain w-5 h-5'
                                src={cart} alt="cart" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='w-4/5 sm:w-full mx-auto shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <img src={img7} alt="img7" className='object-cover' />
                    <div className='p-5 flex justify-between items-center'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-bold text-lg mt-5'>Nike Zoom Fly 5</h1>
                            <h3 className='text-sm font-normal text-gray-600'>Men's Road Running Shoes</h3>
                            <h1>₹14,995</h1>
                        </div>
                        <div className='flex justify-center items-center '>
                            <img
                            onClick={addItemsToBasket}
                                className='object-contain w-5 h-5'
                                src={cart} alt="cart" />
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='w-4/5 sm:w-full mx-auto shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                    <img src={img8} alt="img8" className='object-cover' />
                    <div className='p-5 flex justify-between items-center'>
                        <div className='flex flex-col space-y-3'>
                            <h1 className='font-bold text-lg mt-5'>Nike Zoom Superfly Elite 2</h1>
                            <h3 className='text-sm font-normal text-gray-600'>Athletics Sprinting Spikes</h3>
                            <h1>₹13,995</h1>
                        </div>
                        <div className='flex justify-center items-center '>
                            <img
                            onClick={addItemsToBasket}
                                className='object-contain w-5 h-5'
                                src={cart} alt="cart" />
                        </div>
                    </div>
                </motion.div>


            </div>
        </div>

    )
}

export default Fifth
