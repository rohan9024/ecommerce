import React from 'react'
import cart from "../assets/cart.png"
import { motion } from "framer-motion"
const ShoeItem = (props) => {
    const { title, desc, img, price } = props;
    return (
        <motion.div
            className='w-full sm:w-1/4 shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
            <img src={img} alt="img6" className='object-cover' />
            <div className='flex justify-between items-center px-4 pb-5'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold text-lg mt-5'>{title}</h1>
                    <h3 className='text-sm font-normal text-gray-700'>{desc}</h3>
                    <h1>{price}</h1>
                </div>
                <div className='flex justify-center items-center '>
                    <img
                        className='object-contain w-5 h-5'
                        src={cart} alt="cart" />
                </div>
            </div>
        </motion.div>
    )
}

export default ShoeItem