import React from 'react';
import Header from "../components/Header";
import Footer from './Footer';
import img1 from "../assets/kids/img1.png"
import img2 from "../assets/kids/img2.png"
import img3 from "../assets/kids/img3.png"
import img4 from "../assets/kids/img4.png"
import img5 from "../assets/kids/img5.png"
import img6 from "../assets/kids/img6.png"
import img7 from "../assets/kids/img7.png"
import img8 from "../assets/kids/img8.png"
import img9 from "../assets/kids/img9.png"
import { motion } from "framer-motion"
import ShoeItem from './ShoeItem';
import { data } from '../JsonData/data';

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9]

const kids = data.filter((data) => {
    return data.category.includes("kids")
})

const itemlist =  kids.map((item,i) => {
    return(
        <ShoeItem 
            key={i}
            title={kids[i].title}
            desc={kids[i].desc}
            price={kids[i].price}
            img={images[i]}
        />
    )
})


const Kids = () => {
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
            <Footer />
        </div>
    )
}

export default Kids