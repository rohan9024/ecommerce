import React from 'react'
import { motion } from "framer-motion";
import successIcon from '../assets/success-icon.svg'
import { Link } from 'react-router-dom';

const Success = () => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <div className=''>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="my-12 flex flex-col justify-center items-center gap-6"
            >
                <img src={successIcon} alt="" className='w-24' />
                <h2 className="text-gray-800 text-4xl ">Success !!! </h2>
            </motion.div>
            <h3 className="text-gray-600 text-2xl w-96 text-center">Order placed.</h3>
            <h3 className="text-gray-600 text-lg my-6 w-96 text-center">Your items will be delivered to your doorstep within the next 5-7 business days.</h3>
            <Link to="/">
                <button className='outline-none py-2 px-10 bg-[#ff3f6c] my-12 cursor-pointer text-white flex justify-center items-center mb-24'>
                    Go to HOMEPAGE
                </button>
            </Link>
        </div>
    )
}

export default Success