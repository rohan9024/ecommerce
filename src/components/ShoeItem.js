import React from "react";
import cart from "../assets/cart.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const ShoeItem = (props) => {
  const { title, desc, img, price, id } = props;
  return (
    <motion.div className="shadow-sm border border-gray-200 transition hover:scale-105 hover:ease-in-out hover:duration-500 hover:delay-125 hover:shadow-lg cursor-pointer">
      <Link to={"/product/" + id}>
        <div className="w-full">
          <img className="object-contain w-full h-full" src={img} alt="shoe" />
        </div>
        <div className="flex justify-between items-center px-4 pb-5">
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-lg mt-5">{title}</h1>
            <h3 className="text-sm font-normal text-gray-700">{desc}</h3>
            <div className="flex justify-start items-center gap-x-2 ">
              <div className="w-3 h-3 rounded-full bg-black shadow-[0_3px_10px_rgb(0,0,0,0.2)]"></div>
              <div className="w-3 h-3 rounded-full bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"></div>
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-500 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"></div>
            </div>
            <h1>₹{price}</h1>
          </div>
          <div className="flex justify-center items-center ">
            <img className="object-contain w-5 h-5" src={cart} alt="cart" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ShoeItem;
