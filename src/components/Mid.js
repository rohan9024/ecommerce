import React from 'react'
import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import { motion } from "framer-motion"

function Mid() {


    return (
        <div className='font-dmsans'>
            <div className='object-contain w-screen h-screen'>
                <img src={banner} alt="banner" />
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            className='flex flex-row space-x-2 justify-center items-center'>
                <h1 className='text-black text-4xl font-bold'>Shopping guides.</h1>
                <h1 className='text-gray-700 text-4xl font-bold'>Can't decide? Start here. </h1>
            </motion.div>


        </div>
    )
}

export default Mid