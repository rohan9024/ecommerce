import React from 'react';
import Header from "../components/Header";
import Footer from './Footer';
import img1 from "../assets/women/img1.png"
import img2 from "../assets/women/img2.png"
import img3 from "../assets/women/img3.png"
import img4 from "../assets/women/img4.png"
import img5 from "../assets/women/img5.png"
import img6 from "../assets/women/img6.png"
import img7 from "../assets/women/img7.png"
import img8 from "../assets/women/img8.png"
import img9 from "../assets/women/img9.png"

import { motion } from "framer-motion"
import ShoeItem from './ShoeItem';

const Women = () => {
    return (
        <div>
            <Header />
            <div className='w-screen font-dmsans flex flex-col justify-center items-center space-y-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='flex flex-row space-x-2 justify-center items-center'>
                    <h1 className='text-black text-4xl font-bold'>Find your style.</h1>
                </motion.div>
                <div className='flex justify-center items-center space-x-5'>
                    <ShoeItem title={"Libas"} desc={"Women Pink Floral Printed Panelled Pure Cotton Kurta with Palazzos & With Dupatta"} price={"₹1,399"} img={img1} />
                    <ShoeItem title={"KALINI"} desc={"Women Pink Floral Printed Kurta with Trousers & With Dupatta"} price={"₹874"} img={img2} />
                    <ShoeItem title={"Shae by SASSAFRAS"} desc={"Women Blue & Off-White Printed Anarkali Kurta"} price={"₹594"} img={img3} />
                </div>
                <div className='flex justify-center items-center space-x-5'>
                    <ShoeItem title={"Mitera"} desc={"Cream-Coloured & Red Floral Silk Blend Saree"} price={"₹2,942"} img={img4} />
                    <ShoeItem title={"KALINI"} desc={"White & Gold-Toned Zari Saree"} price={"₹599"} img={img5} />
                    <ShoeItem title={"Tokyo Talkies"} desc={"Navy Blue Polka Dots Printed Shirt Dress"} price={"₹462"} img={img6} />
                </div>
                <div className='flex justify-center items-center space-x-5'>
                    <ShoeItem title={"KALINI"} desc={"Maroon & Gold Ethnic Motifs Zari Silk Blend Banarasi Saree"} price={"₹587"} img={img7} />
                    <ShoeItem title={"Antheaa"} desc={"Black & Rust Orange Floral Print Tiered Midi Fit & Flare Dress with Ruffles"} price={"₹983"} img={img8} />
                    <ShoeItem title={"SASSAFRAS"} desc={"Rose Self Design Dobby Weave Wrap Dress & Belt"} price={"₹469"} img={img9} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Women