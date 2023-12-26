import React from 'react'
import { motion } from "framer-motion";
import img1 from "../assets/men/img6.png"
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import Login from '../Login';
const Cart = (props) => {
    const user = useSelector(selectUser);
    const { data, items } = props;

    const products = data.filter(item => {
        return items.includes(item.id.toString());
    })
    let total = 0;
    let curr_price = 0;

    return  (
            <div className='flex flex-col mb-12'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-row space-x-2 justify-center items-center"
                >
                    <h1 className="text-black text-4xl font-bold my-12">Your cart</h1>
                </motion.div>

                {products.length ? <>
                    <div className='flex flex-col gap-4'>
                        {products.map((item, index) => {
                            const original = Math.round(1.2 * item.price);
                            total += original;
                            curr_price += item.price;
                            return (
                                <div className='flex mx-auto shadow-lg border rounded-md w-[40rem]' key={index}>
                                    <img src={item.imgurl} alt="img6" className='h-48' />
                                    <div className='flex p-5'>
                                        <div className='flex flex-col gap-2'>
                                            <div>
                                                <h1 className='font-bold text-xl '>{item.title}</h1>
                                                <h3 className='text-lg font-normal text-gray-700'>{item.desc}</h3>
                                                <h3 className='text-xs font-normal text-gray-400'>Sold by: RetailNet</h3>
                                            </div>
                                            <div className='flex gap-4'>
                                                <div className='group bg-gray-200 px-2 py-0.5 select-none '>
                                                    <label htmlFor="size">Size: </label>
                                                    <select name="size" id="size" className='outline-none bg-gray-200'>
                                                        <option value="XS">XS</option>
                                                        <option value="S">S</option>
                                                        <option value="M">M</option>
                                                        <option value="L">L</option>
                                                        <option value="XL">XL</option>
                                                    </select>
                                                </div>
                                                <div className='bg-gray-200 px-2 py-0.5 select-none '>
                                                    <label htmlFor="qty">Qty: </label>
                                                    <select name="qty" id="qty" className='outline-none bg-gray-200'>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className='flex gap-2'>
                                                <h1 className='font-semibold'>₹{item.price}</h1>
                                                <h1 className='line-through text-gray-600'>₹{original}</h1>
                                                <h1 className='text-red-400'>20% off</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        }
                    </div>
                    <div className='mx-auto w-96 border mt-20 p-5 flex flex-col gap-2'>
                        <h2 className='font-bold uppercase text-sm text-gray-600 mb-4'>Price details (4 items)</h2>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-gray-700 font-normal'>Total MRP</h3>
                            <h3 className='text-gray-700 font-normal'>₹{total}</h3>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-gray-700 font-normal'>Discount on MRP</h3>
                            <h3 className='text-green-500 font-normal'>-₹{total - curr_price}</h3>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-gray-700 font-normal'>Convenience Fee</h3>
                            <h3 className='text-gray-700 font-normal'>₹300</h3>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-gray-700 font-normal'>Delivery Charge</h3>
                            <h3 className='text-gray-700 font-normal'>₹52</h3>
                        </div>
                        <div className='bg-gray-300 w-full h-[1.5px] my-2'></div>
                        <div className='flex justify-between items-center'>
                            <h3 className='text-gray-700 text-lg font-bold'>Total Amount</h3>
                            <h3 className='text-gray-700 text-lg font-bold'>₹{curr_price + 352}</h3>
                        </div>
                        <button className='outline-none bg-[#ff3f6c] p-2 my-2 cursor-pointer text-white'>PLACE ORDER</button>
                    </div>
                </> :
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-row space-x-2 justify-center items-center"
                    >
                        <h2 className="text-gray-600 text-xl my-12">Your cart is empty. Checkout our products to add something to your cart.</h2>
                    </motion.div>
                }
            </div >
        )
}

export default Cart