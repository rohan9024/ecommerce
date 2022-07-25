import React from 'react'
import mac1 from "../assets/mac-1.jpg"
import mac2 from "../assets/mac-2.jpg"
import { motion } from "framer-motion"

function First() {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }
    return (
        <div className='w-screen  h-[600px] flex justify-center items-center space-x-24 font-dmsans mt-10 mb-20'>
            <motion.div
             animate={{
                scale: [0.5, 1],
                duration: 0.1
            }}
                className=' pt-8 pr-8 pl-8 rounded-2xl shadow-sm border border-gray-300 hover:scale-150 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                <h1 className='text-black font-bold text-3xl absolute mt-7 ml-4'>Which mac is right for you?</h1>
                <img src={mac1} alt="" className='rounded-2xl' />
            </motion.div>
            <motion.div
                animate={{
                    scale: [0.5, 1],
                    duration: 0.1
                }}
                className='pt-8 pr-8 pl-8 rounded-2xl shadow-sm border border-gray-300  hover:scale-125 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
                <h1 className='text-black font-bold text-3xl absolute mt-7 ml-4'>Shop one on one with a </h1>
                <h1 className='text-black font-bold text-3xl absolute mt-16 ml-4 '> Mac Specialist</h1>
                <img src={mac2} alt="" className='' />
            </motion.div>
        </div >
    )
}

export default First