import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShoeItem from "./ShoeItem";
import Sort from "./Sort";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Kids = (props) => {
  const [selected, setselected] = useState("");
  const { data, sortValue, setSortValue } = props;
  const [datalist, setDatalist] = useState([]);
  useEffect(() => {
    setDatalist(data);
  }, [data]);
  const sorting = () => {
    if (sortValue === "Name: A-Z") {
      const newSortData = data.sort((a, b) => {
        return a.title.localeCompare(b.title);
      });
      setDatalist(newSortData);
    } else if (sortValue === "Name: Z-A") {
      const newSortData = data.sort((a, b) => {
        return b.title.localeCompare(a.title);
      });
      setDatalist(newSortData);
    } else if (sortValue === "Price: Low to High") {
      const sortFun = (a, b) => {
        return a.price - b.price;
      };
      const newSortData = data.sort(sortFun);
      setDatalist(newSortData);
    } else if (sortValue === "Price: High to Low") {
      const sortFun = (a, b) => {
        return b.price - a.price;
      };
      const newSortData = data.sort(sortFun);
      setDatalist(newSortData);
    }
  };
  useEffect(() => {
    sorting();
  }, [sortValue]);

  const kids = datalist
    .filter((data) => {
      return data.category.includes("kids");
    })
    .filter((data) => {
      return data.subCategory.startsWith(selected);
    });

  const itemlist = kids.map((item, i) => {
    return (
      <ShoeItem
        key={i}
        title={kids[i].title}
        desc={kids[i].desc}
        price={kids[i].price}
        img={kids[i].imgurl}
      />
    );
  });

  return itemlist.length ? (
    <>
      <div className="navbar-container">
        <div className={"menu-container"}>
          <ul>
            <li>
              <NavLink onClick={() => setselected("")}>All</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setselected("shirt")}>Shirt</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setselected("tshirt")}>Tshirt</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setselected("pant")}>Pants</NavLink>
            </li>
            <li>
              <NavLink onClick={() => setselected("skirt")}>Skirt</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Sort setSortValue={setSortValue} sortValue={sortValue} />
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
    </>
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

export default Kids;
