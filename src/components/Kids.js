import React from 'react';
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

const Kids = () => {
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
                <div className='w-4/5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5'>
                    <ShoeItem title={"Gini and Jony"} desc={"Boys Red & Navy Blue Cotton Tartan Checks Hooded Casual Shirt"} price={"₹909"} img={img1} />
                    <ShoeItem title={"KIDZ Clothing"} desc={"Boys Blue & Green Emroidered Pure Cotton Kurta with Dhoti Pants"} price={"₹1,019"} img={img2} />
                    <ShoeItem title={"Cutiekins"} desc={"Boys Blue & Red Solid Sweatshirt with Joggers"} price={"₹839"} img={img3} />
                    <ShoeItem title={"DKGF FASHION"} desc={"Boys Purple & Black Printed T-shirt with Jeans & Blazer"} price={"₹1,419"} img={img4} />
                    <ShoeItem title={"De Moza"} desc={"Girls Blue & Pink Printed Top"} price={"₹269"} img={img5} />
                    <ShoeItem title={"H&M"} desc={"Girls Pink Printed Jersey Top"} price={"₹1,399"} img={img6} />
                    <ShoeItem title={"H&M"} desc={"Kids Boys Cotton jersey top"} price={"₹399"} img={img7} />
                    <ShoeItem title={"H&M"} desc={"Boys White Easy-Iron Shirt"} price={"₹799"} img={img8} />
                    <ShoeItem title={"Pepe Jeans"} desc={"Boys Red & Navy Blue Tartan Checks Opaque Cotton Casual Shirt"} price={"₹799"} img={img9} />
                </div>
            </div>
        </div>
    )
}

export default Kids