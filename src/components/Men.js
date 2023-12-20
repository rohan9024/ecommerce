import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ShoeItem from "./ShoeItem";
import { FaAngleDown } from "react-icons/fa";
import CardBanner from './CardBanner';
import "./Navbar.css";
import Sort from "./Sort";
import img1 from '../assets/men/menB1.jpg';
import img2 from '../assets/men/menB2.jpg';
import img3 from '../assets/men/menB3.jpg';
import img4 from '../assets/men/menB4.jpg';
import img5 from '../assets/men/menB5.jpg';
const Men = (props) => {
  const bannerData = [
    {
      title: "Urban Explorer Essentials",
      description: 'Navigate the city streets in style. Our urban collection blends comfort and trend-setting fashion effortlessly.',
      image: img1,
    },
    {
      title: 'Bold Statements, Subtle Hues',
      description: 'Make a statement without saying a word. Discover our collection of menswear in muted tones and powerful designs.',
      image: img2,
    },
    {
      title: 'Athleisure Revolution',
      description: 'From the gym to the street, redefine comfort with our athleisure wear. Performance meets style for the modern man.',
      image: img3,
    },
    {
      title: 'Weekend Warrior Attire',
      description: 'Conquer the weekend in style. Our weekend warrior collection is your go-to for casual, yet refined, looks.',
      image: img4,
    },
    {
      title: 'Monochrome Mastery',
      description: 'Explore the power of monochrome. Elevate your wardrobe with our meticulously curated collection of black and white fashion.',
      image: img5,
    },
  ];
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
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            // className="flex flex-row justify-center items-center"
          >
        <div className="text-center">
          <h1 className="text-black text-4xl font-bold mb-12 mt-10">Find your style.</h1>
        </div>
      <CardBanner data={bannerData} />
      </motion.div>
      <div className="flex justify-between p-4 w-full">
      <div className='group  p-2 cursor-pointer text-center absolute bg-white' style={{padding:"0px", marginTop:"3px", marginLeft:"2px"}}>
          <div className="heading flex justify-center items-center" style={{padding:"0px", margin:"6px"}}>
            <h3 className='font-semibold text-xl' style={{marginBottom:"4px"}}>Filter:</h3>
            <span className='font-normal' style={{marginBottom:"4px"}}> &nbsp;{selected === "" ? " All" : " " + selected[0].toUpperCase() + selected.slice(1)}</span>
            <div className='grid place-items-center ml-3' style={{marginBottom:"4px"}}> <FaAngleDown /></div>
          </div>
          <ul className='sort_css hidden group-hover:block pt-2 '>
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
