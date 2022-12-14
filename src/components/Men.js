import React from "react";
import { motion } from "framer-motion";
import ShoeItem from "./ShoeItem";

const Men = ({ data }) => {
  const men = data.filter((data) => {
    return data.category.startsWith("men");
  });

  const itemlist = men.map((item, i) => {
    return (
      <ShoeItem
        key={i}
        title={men[i].title}
        desc={men[i].desc}
        price={men[i].price}
        img={men[i].img}
      />
    );
  });

  return itemlist.length ? (
    <div>
      <div className="w-full font-dmsans flex flex-col justify-center items-center my-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row space-x-2 justify-center items-center"
        >
          <h1 className="text-black text-4xl font-bold">Find your style.</h1>
        </motion.div>
        <div className="w-4/5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-10">
          {itemlist}
        </div>
      </div>
    </div>
  ) : (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-row space-x-2 justify-center items-center my-10"
    >
      <h1 className="text-black text-4xl font-bold space-10">
        Sorry, Couldn't Find your Item
      </h1>
    </motion.div>
  );
};

export default Men;
