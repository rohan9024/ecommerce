import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShoeItem from "./ShoeItem";

function Shoes(props) {
  const { data, sortValue } = props;
  const [datalist, setDatalist] = useState([]);
  useEffect(() => {
    setDatalist(data);
  }, [data])
  const sorting = () => {
    if (sortValue === 'a-z') {
      const newSortData = data.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setDatalist(newSortData);
    }
    else if (sortValue === 'z-a') {
      const newSortData = data.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      setDatalist(newSortData);
    }
    else if (sortValue === 'lowest') {
      const sortFun = (a, b) => {
        return a.price - b.price;
      }
      const newSortData = data.sort(sortFun);
      setDatalist(newSortData);
    }
    else if (sortValue === 'highest') {
      const sortFun = (a, b) => {
        return b.price - a.price;
      }
      const newSortData = data.sort(sortFun);
      setDatalist(newSortData);
    }
  };
  useEffect(() => {
    sorting();
  }, [sortValue])
  const shoes = datalist.filter((data) => {
    return data.category.includes("shoes");
  });

  const itemlist = shoes.map((item, i) => {
    return (
      <ShoeItem
        key={i}
        title={shoes[i].title}
        desc={shoes[i].desc}
        price={shoes[i].price}
        img={shoes[i].imgurl}

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
        <div className="flex flex-wrap justify-center items-center space-x-5 space-y-3">
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
}

export default Shoes;
