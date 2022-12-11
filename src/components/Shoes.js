import React from 'react';
import img6 from "../assets/img6.webp"
import img7 from "../assets/img7.webp"
import img8 from "../assets/img8.webp"
import img9 from "../assets/img9.webp"
import img10 from "../assets/img10.webp"
import img11 from "../assets/img11.webp"
import img12 from "../assets/img12.webp"
import img13 from "../assets/img13.webp"
import img14 from "../assets/img14.jpg"
import img15 from "../assets/img15.webp"
import img16 from "../assets/img16.webp"
import img17 from "../assets/img17.jfif"
import img18 from "../assets/img18.webp"
import img19 from "../assets/img19.webp"
import img20 from "../assets/img20.webp"
import img21 from "../assets/img21.webp"
import img22 from "../assets/img22.webp"
import img23 from "../assets/img23.webp"
import { motion } from "framer-motion"
import ShoeItem from './ShoeItem';
import { data } from '../JsonData/data';


const images = [img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23]

const shoes = data.filter((data) => {
    return data.category.includes("shoes")
})

const itemlist =  shoes.map((item,i) => {
    return(
        <ShoeItem 
            key={i}
            title={shoes[i].title}
            desc={shoes[i].desc}
            price={shoes[i].price}
            img={images[i]}
        />
    )
})


function Shoes() {
    return (<div>
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
    </div>);
}

export default Shoes