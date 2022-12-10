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

function Shoes() {
    return (<div>
        <div className='w-screen font-dmsans flex flex-col justify-center items-center space-y-12 my-10'>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-row space-x-2 justify-center items-center'>
                <h1 className='text-black text-4xl font-bold'>Find your fast.</h1>
            </motion.div>
            <div className='flex justify-center items-center space-x-5'>
                <ShoeItem title={"Nike Air Zoom Pegasus 39"} desc={"Men's Road Running Shoes"} price={"₹10,439"} img={img6} />
                <ShoeItem title={"Nike Zoom Fly 5"} desc={"Men's Road Running Shoes"} price={"₹14,995"} img={img7} />
                <ShoeItem title={"Nike Zoom Superfly Elite 2"} desc={"Athletics Sprinting Spikes"} price={"₹13,995"} img={img8} />
            </div>
            <div className='flex justify-center items-center space-x-5'>
                <ShoeItem title={"Nike Pegasus 39"} desc={"Men's Road Running Shoes"} price={"₹10,495"} img={img9} />
                <ShoeItem title={"Air Jordan 7 Retro SE"} desc={"Men's Shoes"} price={"₹19,295"} img={img10} />
                <ShoeItem title={"Nike Air Force 1 Low Retro"} desc={"Men's Shoes"} price={"₹12,795"} img={img11} />
            </div>
            <div className='flex justify-center items-center space-x-5'>
                <ShoeItem title={"BAD BUNNY - LAST FORUM SHOES"} desc={"Originals"} price={"₹15,999"} img={img12} />
                <ShoeItem title={"ULTRABOOST 5 DNA RUNNING SPORTSWEAR LIFESTYLE SHOES"} desc={"Women's Sportwear"} price={"₹17,999"} img={img13} />
                <ShoeItem title={"ADIDAS ADIZERO SL RUNNING SHOES"} desc={"Men's Running Shoes"} price={"₹11,999"} img={img14} />
            </div>

            <div className='flex justify-center items-center space-x-5'>
                <ShoeItem title={"Deviate Nitro Elite Fireglow Running Shoes"} desc={"Men's Running Shoes"} price={"₹17,999"} img={img15} />
                <ShoeItem title={"one8 Virat Kohli Deviate Nitro 2 Men's Running Shoes"} desc={"Men's Running Shoes"} price={"₹16,995"} img={img16} />
                <ShoeItem title={"Magnify NITRO Knit Running Shoes Men"} desc={"Men's Running Shoes"} price={"₹13,999"} img={img17} />
            </div>
            <div className='flex justify-center items-center space-x-5'>
                <ShoeItem title={"PROADAPT ALPHACAT DISC Men's Golf Shoes"} desc={"Men's Golf Shoes"} price={"₹13,999"} img={img18} />
                <ShoeItem title={"ULTRA 1.4 First Mile FG/AG Men Football Boots"} desc={"Men's Football Boots"} price={"₹13,599"} img={img19} />
                <ShoeItem title={"PUMA x FIRST MILE Velocity NITRO 2 Running Shoes Men"} desc={"Men's Running Shoes"} price={"₹12,999"} img={img20} />
            </div>
            <div className='flex justify-center items-center space-x-5'>
                <ShoeItem title={"Blaze of Glory MMQ Sail To Bay Sneakers"} desc={"Men's Sneakers"} price={"₹12,999"} img={img21} />
                <ShoeItem title={"Extent Nitro Ultraviolet Sneakers"} desc={"Men's Sneakers"} price={"₹11,599"} img={img22} />
                <ShoeItem title={"Extent Nitro ADV Sneakers"} desc={"Men's Sneakers"} price={"₹12,999"} img={img23} />
            </div>
        </div>
    </div>);
}

export default Shoes