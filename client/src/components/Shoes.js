import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShoeItem from "./ShoeItem";
import { FaAngleDown } from "react-icons/fa";
import Sort from "./Sort";

function Shoes(props) {
  const [selected, setselected] = useState("");
  const { data, sortValue, setSortValue } = props;
  const [datalist, setDatalist] = useState([]);
  useEffect(() => {
    setDatalist(data);
  }, [data])
  const sorting = () => {
    if (sortValue === 'Name: A-Z') {
      const newSortData = data.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setDatalist(newSortData);
    }
    else if (sortValue === 'Name: Z-A') {
      const newSortData = data.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      setDatalist(newSortData);
    }
    else if (sortValue === 'Price: Low to High') {
      const sortFun = (a, b) => {
        return a.price - b.price;
      }
      const newSortData = data.sort(sortFun);
      setDatalist(newSortData);
    }
    else if (sortValue === 'Price: High to Low') {
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
  }).filter((data) => {
    return data.subCategory.startsWith(selected);
  });

  const itemlist = shoes.map((item, i) => {
    return (
      <ShoeItem
        key={i}
        title={shoes[i].title}
        desc={shoes[i].desc}
        price={shoes[i].price}
        img={shoes[i].imgurl}
        id={shoes[i].id}
      />
    );
  });

  return (
    <>
      <div className="flex justify-between p-4 w-full">
        <div className='group  p-2 cursor-pointer text-center absolute bg-white'>
          <div className="heading flex justify-center items-center">
            <h3 className='font-semibold text-xl'>Filter:</h3>
            <span className='font-normal'> &nbsp;{selected === "" ? " All" : " " + selected[0].toUpperCase() + selected.slice(1)}</span>
            <div className='grid place-items-center ml-3'> <FaAngleDown /></div>
          </div>
          <ul className='hidden group-hover:block pt-4 shadow-2xl'>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("")} id="all">All</li>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("casual")} id="casual">Casual</li>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("formal")} id="formal">Formal</li>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("sports")} id="sports">Sports</li>
          </ul>
        </div>
        <Sort setSortValue={setSortValue} sortValue={sortValue} />
      </div>
      {itemlist.length ? <div className="w-full font-dmsans flex flex-col justify-center items-center my-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-row space-x-2 justify-center items-center"
        >
          <h1 className="text-black text-4xl font-bold mb-12">Find your style.</h1>
        </motion.div>
        <div className="flex flex-wrap justify-center items-center space-x-5 space-y-12">
          {itemlist}
        </div>
      </div> :
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
      }
    </>
  );
}

export default Shoes;
