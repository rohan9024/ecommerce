import React from 'react';
import img1 from "../assets/women/img1.png"
import img2 from "../assets/women/img2.png"
import img3 from "../assets/women/img3.png"
import img4 from "../assets/women/img4.png"
import img5 from "../assets/women/img5.png"
import img6 from "../assets/women/img6.png"
import img7 from "../assets/women/img7.png"
import img8 from "../assets/women/img8.png"
import img9 from "../assets/women/img9.png"
import { data } from '../JsonData/data';
import { motion } from "framer-motion"
import ShoeItem from './ShoeItem';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

const women = data.filter((data) => {
    return data.category.includes("Women")
})

const itemlist =  women.map((item,i) => {
    return(
        <ShoeItem 
            key={i}
            title={women[i].title}
            desc={women[i].desc}
            price={women[i].price}
            img={images[i]}
        />
    )
})


const Women = () => {
    return (
        <div>
            <div className='w-full font-dmsans flex flex-col justify-center items-center my-10'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='flex flex-row space-x-2 justify-center items-center'>
                    <h1 className='text-black text-4xl font-bold'>Find your style.</h1>
                </motion.div>
                <div className='flex flex-wrap justify-center items-center space-x-5 space-y-3'>
                    {itemlist}
                </div>
            </div>
        </div>
    )
}

export default Women