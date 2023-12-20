import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShoeItem from "./ShoeItem";
import CardBanner from './CardBanner';
import { FaAngleDown } from "react-icons/fa";
import "./Navbar.css";
import Sort from "./Sort";
import img1 from '../assets/women/womenB1.jpg';
import img2 from '../assets/women/womenB2.jpg';
import img3 from '../assets/women/womenB3.jpg';
import img4 from '../assets/women/womenB4.jpg';
import img5 from '../assets/women/womenB5.jpg';

const Women = (props) => {
  const bannerData = [
    {
      title: "Elegance Redefined",
      description: 'Discover timeless elegance with our latest collection, designed to make every woman feel confident and beautiful.',
      image: img1,
    },
    {
      title: 'Casual Chic Vibes',
      description: 'Embrace laid-back sophistication with our chic and comfortable casual wear. Effortless style for every day.',
      image: img2,
    },
    {
      title: 'Bold and Beautiful',
      description: 'Unleash your bold and beautiful side with our fashion-forward pieces. Make a statement with every step you take.',
      image: img3,
    },
    {
      title: 'Feminine Florals',
      description: 'Step into a garden of style with our feminine floral prints. Blossom with grace and charm in our latest floral collection.',
      image: img4,
    },
    {
      title: 'Powerful in Pastels',
      description: 'Radiate strength and grace in our collection of pastel hues. Soft tones, powerful impact – perfect for the modern woman.',
      image: img5,
    },
  ];
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


  const women = datalist
    .filter((data) => {
      return data.category.includes("women");
    })
    .filter((data) => {
      return data.subCategory.startsWith(selected);
    });

  const itemlist = women.map((item, i) => {
    return (
      <ShoeItem
        key={i}
        title={women[i].title}
        desc={women[i].desc}
        price={women[i].price}
        img={women[i].imgurl}
        id={women[i].id}
      />
    );
  });
  return (
    <>
    <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            // className="flex flex-row justify-center items-center"
          >
        <CardBanner data={bannerData} />
      </motion.div>
      <div className="flex justify-between p-4 w-full">
      <div className='group  p-2 cursor-pointer text-center absolute bg-white' style={{padding:"0px", marginTop:"3px", marginLeft:"2px"}}>
          <div className="heading flex justify-center items-center" style={{padding:"0px", margin:"6px"}}>
            <h3 className='font-semibold text-xl' style={{marginBottom:"4px"}}>Filter:</h3>
            <span className='font-normal' style={{marginBottom:"4px"}}> &nbsp;{selected === "" ? " All" : " " + selected[0].toUpperCase() + selected.slice(1)}</span>
            <div className='grid place-items-center ml-3' style={{marginBottom:"4px"}}> <FaAngleDown /></div>
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
};

export default Women;
