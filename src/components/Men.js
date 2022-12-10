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
                <div className='flex justify-center items-center space-x-5'>
                    <ShoeItem title={"Manyavar"} desc={"Men White & Blue Floral Print Nehru Jacket"} price={"₹2,999"} img={img1} />
                    <ShoeItem title={"Anouk"} desc={"Men White & Navy Blue Self Striped Straight Kurta"} price={"₹479"} img={img2} />
                    <ShoeItem title={"Manyavar"} desc={"Men Blue Ethnic Motifs Woven Design Kurta with Churidar"} price={"₹3,999"} img={img3} />
                </div>
                <div className='flex justify-center items-center space-x-5'>
                    <ShoeItem title={"Anouk"} desc={"Men Grey & White Solid Pure Cotton Kurta with Salwar & Printed Jacked"} price={"₹1,319"} img={img4} />
                    <ShoeItem title={"Roadster"} desc={"Men Maroon & Black Checked Pure Cotton Sustainable Casual Shirt"} price={"₹649"} img={img5} />
                    <ShoeItem title={"HIGHLANDER"} desc={"Men Green & White Slim Fit Printed Casual Shirt"} price={"₹367"} img={img6} />
                </div>
                <div className='flex justify-center items-center space-x-5'>
                    <ShoeItem title={"Dennis Lingo"} desc={"Men Blue Slim Fit Windowpane Checked Casual Shirt"} price={"₹749"} img={img7} />
                    <ShoeItem title={"Roadster"} desc={"Men Blue Denim Washed Casual Sustainable Shirt"} price={"₹899"} img={img8} />
                    <ShoeItem title={"HERE&NOW"} desc={"Men Black Slim Fit Printed Casual Shirt"} price={"₹664"} img={img9} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Men