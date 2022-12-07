import React from 'react';
import Header from "../components/Header";
import Footer from './Footer';
import img6 from "../assets/img6.webp"
import img7 from "../assets/img7.webp"
import img8 from "../assets/img8.webp"
import img9 from "../assets/img9.webp"
import img10 from "../assets/img10.webp"
import img11 from "../assets/img11.webp"
import img12 from "../assets/img12.webp"
import img13 from "../assets/img13.webp"
import img14 from "../assets/img14.jpg"
import cart from "../assets/cart.png"
import { motion } from "framer-motion"

function Shoes() {
  return (<div>
    <Header/>
    <div className='w-screen font-dmsans flex flex-col justify-center items-center space-y-12'>
      <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='flex flex-row space-x-2 justify-center items-center'>
                <h1 className='text-black text-4xl font-bold'>Find your fast.</h1>
      </motion.div>
      <div className='flex justify-center items-center space-x-5'>
        <motion.div
            className='shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
            <img src={img6} alt="img6" className='h-[450px] w-[408px] object-cover' />
            <div className='flex justify-between items-center w-[408px] h-[130px] px-4 pb-5'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold text-lg mt-5'>Nike Air Zoom Pegasus 39</h1>
                    <h3 className='text-sm font-normal text-gray-700'>Men's Road Running Shoes</h3>
                    <h1>₹10,439</h1>
                </div>
                <div className='flex justify-center items-center '>
                    <img
                        className='object-contain w-5 h-5'
                        src={cart} alt="cart" />
                </div>
            </div>
        </motion.div>
        <motion.div
            className='shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
            <img src={img7} alt="img7" className='h-[450px] w-[408px] object-cover' />
            <div className='flex justify-between items-center w-[408px] h-[130px] px-4 pb-5'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold text-lg mt-5'>Nike Zoom Fly 5</h1>
                    <h3 className='text-sm font-normal text-gray-600'>Men's Road Running Shoes</h3>
                    <h1>₹14,995</h1>
                </div>
                <div className='flex justify-center items-center '>
                    <img
                        className='object-contain w-5 h-5'
                        src={cart} alt="cart" />
                </div>
            </div>
        </motion.div>
        <motion.div
            className='shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
            <img src={img8} alt="img8" className='h-[450px] w-[408px] object-cover' />
            <div className='flex justify-between items-center w-[408px] h-[130px] px-4 pb-5'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold text-lg mt-5'>Nike Zoom Superfly Elite 2</h1>
                    <h3 className='text-sm font-normal text-gray-600'>Athletics Sprinting Spikes</h3>
                    <h1>₹13,995</h1>
                </div>
                <div className='flex justify-center items-center '>
                    <img
                        className='object-contain w-5 h-5'
                        src={cart} alt="cart" />
                </div>
            </div>
        </motion.div>

      </div>
      <div className='flex justify-center items-center space-x-5'>
        <motion.div
            className='shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
            <img src={img9} alt="img9" className='h-[450px] w-[408px] object-cover' />
            <div className='flex justify-between items-center w-[408px] h-[130px] px-4 pb-5'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold text-lg mt-5'>Nike Pegasus 39</h1>
                    <h3 className='text-sm font-normal text-gray-700'>Men's Road Running Shoes</h3>
                    <h1>₹10,495</h1>
                </div>
                <div className='flex justify-center items-center '>
                    <img
                        className='object-contain w-5 h-5'
                        src={cart} alt="cart" />
                </div>
            </div>
        </motion.div>
        <motion.div
            className='shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
            <img src={img10} alt="img10" className='h-[450px] w-[408px] object-cover' />
            <div className='flex justify-between items-center w-[408px] h-[130px] px-4 pb-5'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold text-lg mt-5'>Air Jordan 7 Retro SE</h1>
                    <h3 className='text-sm font-normal text-gray-600'>Men's Shoes</h3>
                    <h1>₹19,295</h1>
                </div>
                <div className='flex justify-center items-center '>
                    <img
                        className='object-contain w-5 h-5'
                        src={cart} alt="cart" />
                </div>
            </div>
        </motion.div>
        <motion.div
            className='shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
            <img src={img11} alt="img11" className='h-[450px] w-[408px] object-cover' />
            <div className='flex justify-between items-center w-[408px] h-[130px] px-4 pb-5'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold text-lg mt-5'>Nike Air Force 1 Low Retro</h1>
                    <h3 className='text-sm font-normal text-gray-600'>Men's shoes</h3>
                    <h1>₹12,795</h1>
                </div>
                <div className='flex justify-center items-center '>
                    <img
                        className='object-contain w-5 h-5'
                        src={cart} alt="cart" />
                </div>
            </div>
        </motion.div>

      </div>
      <div className='flex justify-center items-center space-x-5'>
        <motion.div
            className='shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
            <img src={img12} alt="img12" className='h-[450px] w-[408px] object-cover' />
            <div className='flex justify-between items-center w-[408px] h-[130px] px-4 pb-5'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold text-lg mt-5'>BAD BUNNY - LAST FORUM SHOES</h1>
                    <h3 className='text-sm font-normal text-gray-700'>Originals</h3>
                    <h1>₹15,999</h1>
                </div>
                <div className='flex justify-center items-center '>
                    <img
                        className='object-contain w-5 h-5'
                        src={cart} alt="cart" />
                </div>
            </div>
        </motion.div>
        <motion.div
            className='shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
            <img src={img13} alt="img13" className='h-[450px] w-[408px] object-cover' />
            <div className='flex justify-between items-center w-[408px] h-[130px] px-4 pb-5'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold text-lg mt-5'>ULTRABOOST 5 DNA RUNNING SPORTSWEAR LIFESTYLE SHOES</h1>
                    <h3 className='text-sm font-normal text-gray-600'>Women's Sportwear</h3>
                    <h1>₹17,999</h1>
                </div>
                <div className='flex justify-center items-center '>
                    <img
                        className='object-contain w-5 h-5'
                        src={cart} alt="cart" />
                </div>
            </div>
        </motion.div>
        <motion.div
            className='shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer'>
            <img src={img14} alt="img14" className='h-[450px] w-[408px] object-cover' />
            <div className='flex justify-between items-center w-[408px] h-[130px] px-4 pb-5'>
                <div className='flex flex-col space-y-3'>
                    <h1 className='font-bold text-lg mt-5'>ADIDAS ADIZERO SL RUNNING SHOES</h1>
                    <h3 className='text-sm font-normal text-gray-600'>Men's Running Shoes</h3>
                    <h1>₹11,999</h1>
                </div>
                <div className='flex justify-center items-center '>
                    <img
                        className='object-contain w-5 h-5'
                        src={cart} alt="cart" />
                </div>
            </div>
        </motion.div>

      </div>
    </div>
    <Footer/>
  </div>);
}

export default Shoes