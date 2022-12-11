import React from 'react';
import Header from "../components/Header";
import Footer from './Footer';
import img1 from "../assets/men/img1.png"
import img2 from "../assets/men/img2.png"
import img3 from "../assets/men/img3.png"
import img4 from "../assets/men/img4.png"
import img5 from "../assets/men/img5.png"
import img6 from "../assets/men/img6.png"
import img7 from "../assets/men/img7.png"
import img8 from "../assets/men/img8.png"
import img9 from "../assets/men/img9.png"
import { motion } from "framer-motion"
import ShoeItem from './ShoeItem';
import { data } from '../JsonData/data';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

const men = data.filter((data) => {
    return data.category.startsWith("men")
})

const itemlist =  men.map((item,i) => {
    return(
        <ShoeItem 
            key={i}
            title={men[i].title}
            desc={men[i].desc}
            price={men[i].price}
            img={images[i]}
        />
    )
})

const Men = () => {
    return (
        <div>
            <div className='w-screen font-dmsans flex flex-col justify-center items-center space-y-12 my-10'>

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

export default Men