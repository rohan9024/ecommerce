import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShoeItem from "./ShoeItem";
import { FaAngleDown } from "react-icons/fa";

import "./Navbar.css";
import Sort from "./Sort";

const Men = (props) => {
  const [selected, setselected] = useState("");
  const { data, sortValue, setSortValue, cartItems, setCartItems } = props;
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

  const men = datalist.filter((data) => {
    return data.category.startsWith("men");
  })
    .filter((data) => {
      return data.subCategory.startsWith(selected);
    });

  const itemlist = men.map((item, i) => {
    return (
      <ShoeItem
        key={i}
        title={men[i].title}
        desc={men[i].desc}
        price={men[i].price}
        img={men[i].imgurl}
        id={men[i].id}
      />
    );
  });


  return (
    <>
      <div className="flex justify-between p-4 w-full">
      <div className='group  p-2 cursor-pointer text-center absolute bg-white' style={{padding:"0px", marginTop:"3px", marginLeft:"2px"}}>
          <div className="heading flex justify-center items-center" style={{padding:"0px", margin:"8px"}}>
            <h3 className='font-semibold text-xl' style={{marginBottom:"5px"}}>Filter:</h3>
            <span className='font-normal' style={{marginBottom:"5px"}}> &nbsp;{selected === "" ? " All" : " " + selected[0].toUpperCase() + selected.slice(1)}</span>
            <div className='grid place-items-center ml-3' style={{marginBottom:"5px"}}> <FaAngleDown /></div>
          </div>
          <ul className='sort_css hidden group-hover:block pt-4'>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("")} id="all">All</li>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("shirt")} id="shirt">Shirts</li>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("tshirt")} id="tshirt">T-shirts</li>
            <li className='pt-3 hover:font-semibold' onClick={() => setselected("pant")} id="pant">Pants</li>
          </ul>
        </div>
        <Sort setSortValue={setSortValue} sortValue={sortValue} />
      </div>
      {itemlist.length ?
        <div className="w-full font-dmsans flex flex-col justify-center items-center my-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-row space-x-2 justify-center items-center"
          >
            <h1 className="text-black text-4xl font-bold mb-12">Find your style.</h1>
          </motion.div>
          <div className="grid lg:grid-cols-3 grid-cols-2 md:gap-[40px] gap-[20px] md:w-[80%] w-[90%]">
            {itemlist}
          </div>
        </div>
        :
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
};

export default Men;
