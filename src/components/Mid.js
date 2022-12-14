import React from 'react'
import { useEffect } from "react"
import banner from "../assets/banner.png"
import banner2 from "../assets/banner2.png"
import { motion , useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import animateText from "./AnimateHomeText"
function Mid() {


    //code to animate heading 
    const control = useAnimation();
    const [ref, inView] = useInView();
  
    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
          control.start("hidden");
        }
      }, [control, inView]);
    
    return (
        <div className='font-dmsans'>
            <div className='object-contain w-full pb-10'>
                <img src={banner} alt="banner" />
            </div>
            <motion.div
                className='flex flex-row space-x-2 justify-center items-center'
                ref={ref}
                variants={animateText}
                initial="hidden"
                animate={control}
                >
                <h1 className='text-black text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold fade-in'>Shopping guides.</h1>
                <h1 className='text-gray-700 text-sm sm:text-xl md:text-2xl lg:text-4xl font-bold fade-in'>Can't decide? Start here. </h1>
            </motion.div>


        </div>
    )
}

export default Mid