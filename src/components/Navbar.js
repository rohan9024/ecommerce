import React, { useMemo, useState } from 'react'
// import { Link, NavLink } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import search from "../assets/search.png"
import user from "../assets/user.png"
import cart from "../assets/cart.png"
import favorite from "../assets/favorite.png"
import "./Navbar.css"
import { HashLink as Link } from 'react-router-hash-link';
import {motion} from 'framer-motion'



const Navbar = ({ searchChange }) => {
    const [hovered,setHovered]=useState('')
    const [hoveredCategories,setHoveredCategories]=useState([])
    const links = [
        {
          label: "Men",
          to: "/men",
          categories: [
            {
              category: "Clothes",
              subcategories: ["T-Shirts", "Shirts", "Jeans", "Jackets"],
              url:"/men#40",
            },
            {
              category: "Shoes",
              subcategories: ["Athletic Shoes", "Casual Shoes", "Formal Shoes"],
              url:"/shoes#3",
            },
            {
              category: "Accessories",
              subcategories: ["Hats", "Watches", "Belts"],
              url:"/sales#100",
            },
            {
              category: "Outerwear",
              subcategories: ["Coats", "Jackets", "Vests"],
              url:"/men#36",
            },
            {
              category: "Sports",
              subcategories: ["Sportswear", "Running Gear", "Training Gear"],
              url:"/men#44",
            },
          ],
        },
        {
          label: "Women",
          to: "/women",
          categories: [
            {
              category: "Clothes",
              subcategories: ["Dresses", "Blouses", "Skirts", "Coats"],
              url:"/women#18",
            },
            {
              category: "Shoes",
              subcategories: ["Heels", "Flats", "Boots"],
              url:"/shoes#1",
            },
            {
              category: "Accessories",
              subcategories: ["Handbags", "Jewelry", "Scarves"],
              url:"/sales#71",
            },
            {
              category: "Activewear",
              subcategories: ["Yoga Wear", "Running Gear", "Sports Bras"],
              url:"/women#25",
            },
            {
              category: "Swimwear",
              subcategories: ["Bikinis", "One-Piece Swimsuits", "Cover-Ups"],
              url:"/women#63",
            },
          ],
        },
        {
          label: "Kids",
          to: "/kids",
          categories: [
            {
              category: "Clothes",
              subcategories: ["T-Shirts", "Pants", "Dresses", "Jackets"],
              url:"/kids#54",
            },
            {
              category: "Shoes",
              subcategories: ["Sneakers", "Sandals", "Boots"],
              url:"/shoes",
            },
            {
              category: "Toys",
              subcategories: ["Educational Toys", "Outdoor Toys", "Stuffed Animals"],
              url:"/sales",
            },
            {
              category: "School Gear",
              subcategories: ["Backpacks", "Uniforms", "Stationery"],
              url:"/kids#66",
            },
            {
              category: "Sleepwear",
              subcategories: ["Pajamas", "Robes", "Slippers"],
              url:"/kids#11",
            },
          ],
        },
        {
          label: "Sale",
          to: "/sales",
          categories: [
            {
              category: "Clothes",
              subcategories: ["Sale T-Shirts", "Sale Dresses", "Sale Jeans"],
              url:"/sales#36",
            },
            {
              category: "Shoes",
              subcategories: ["Sale Shoes"],
              url:"/sales#8",
            },
            {
              category: "Accessories",
              subcategories: ["Sale Hats", "Sale Jewelry", "Sale Scarves"],
              url:"/sales",
            },
            {
              category: "Clearance",
              subcategories: ["Last Chance Deals", "Final Markdowns"],
              url:"/sales#52",
            },
            {
              category: "Electronics",
              subcategories: ["Tech Deals", "Gadget Clearance"],
              url:"/sales#65",
            },
          ],
        },
        {
          label: "Shoes",
          to: "/shoes",
          categories: [
            {
              category: "Athletic Shoes",
              subcategories: ["Running Shoes", "Basketball Shoes", "Training Shoes"],
              url:"/shoes#8",
            },
            {
              category: "Casual Shoes",
              subcategories: ["Sneakers", "Loafers", "Slip-Ons"],
              url:"/shoes#1",
            },
            {
              category: "Boots",
              subcategories: ["Ankle Boots", "Knee-High Boots", "Snow Boots"],
              url:"/shoes#0",
            },
            {
              category: "Sandals",
              subcategories: ["Flip-Flops", "Slides", "Strappy Sandals"],
              url:"/shoes#68",
            },
            {
              category: "Formal Shoes",
              subcategories: ["Oxfords", "Derbies", "Dress Loafers"],
              url:"/shoes#2",
            },
          ],
        },
      ];      
    const updateCategories=useMemo(()=>{
        let selected=links.find(link=>link.label===hovered)
        if(selected){
            setHoveredCategories(selected.categories)
        }
    },[hovered])

    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
      <div>
        <div className="navbar-container">
          <div>
            <div className="logo-container">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className={"menu-container"}>
            <ul className={`${clicked && "active"}`}>
              <div id="mobile" className="w-full">
                <div className="close-bar">
                  <div className="transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer tab-hidden">
                    <img
                      className="object-contain w-5 h-5 mobile-icons"
                      src={cart}
                      alt="cart"
                    />
                  </div>
                  <Link to="/list">
                  <div className="transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer tab-hidden">
                    <img
                      className="object-contain w-5 h-5 mobile-icons"
                      src={favorite}
                      alt="favorite"
                    />
                  </div>
                  </Link>
                  
                  <Link to="/login">
                    <div className="transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer tab-hidden">
                      <img
                        className="object-contain w-5 h-5 mobile-icons"
                        src={user}
                        alt="user"
                      />
                    </div>
                  </Link>
                  <div>
                    <i
                      id="bar"
                      className={"fas fa-times"}
                      onClick={handleClick}
                    ></i>
                  </div>
                </div>
              </div>
              <div onMouseLeave={()=>setHovered("")} className="max-[1200px]:hidden">
                <div className='flex'>

                  {links.map((link, index) => (
                  <NavItem
                    key={index}
                    setHovered={setHovered}
                    hovered={hovered}
                    setClicked={setClicked}
                    to={link.to}
                    label={link.label}
                    categories={hoveredCategories}
                  />
                  ))}
                  </div>
                  {hovered.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.2 }}
            className="w-screen z-10 left-0 absolute bg-white py-10"
          >
            <div className="flex mx-auto justify-between w-full max-w-4xl">
              {hoveredCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-xl font-bold">
                    <Link to={category.url}> {category.category}</Link>
                  </div>
                  <div>
                    {category.subcategories.map((subcategory, index) => (
                      <p>{subcategory}</p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
              </div>
              <div className="max-[1200px]:flex flex-col gap-5 navbar-link hidden">
                {links.map((link, index) => {
                    return(
                  <NavLink
                  to={link.to}
                  className={`navbar-link`}
                  onClick={() => setClicked(false)}
                >
                  {link.label}
                </NavLink>)
                })}
              </div>
              {/* <li>
                        <NavLink to="/men" className={"navbar-link"} onClick={() => setClicked(false)}>Men</NavLink>
                    </li>
                    <li>
                        <NavLink to="/women"  className={"navbar-link"} onClick={() => setClicked(false)}>Women</NavLink>
                    </li>
                    <li>
                        <NavLink to="/kids"  className={"navbar-link"} onClick={() => setClicked(false)}>Kids</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sales" className={"navbar-link"} onClick={() => setClicked(false)}>Sale</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shoes" className={"navbar-link"} onClick={() => setClicked(false)}>Shoes</NavLink>
                    </li> */}
            </ul>
          </div>
          <div className="extra-icons">
            <div className="flex justify-center items-center border border-gray-800 py-2 px-4 input-field rounded-full">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="w-64 placeholder-black font-medium outline-none"
                onChange={searchChange}
              />
              <img
                className="object-contain w-5 h-5 search_image_800px"
                src={search}
                alt="search"
              />
            </div>
            <div className="flex justify-around items-center space-x-8 hide-mobile">
              <NavLink to="/cart" onClick={() => setClicked(false)}>
                <div className="transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer">
                  <img
                    className="object-contain w-5 h-5"
                    src={cart}
                    alt="cart"
                  />
                </div>
              </NavLink>
              <NavLink to="/list">
              <div className="transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer">
                <img
                  className="object-contain w-5 h-5"
                  src={favorite}
                  alt="favorite"
                />
              </div>
              </NavLink>
              <Link to="/profile">
                <div className="transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer">
                  <img
                    className="object-contain w-5 h-5"
                    src={user}
                    alt="user"
                  />
                </div>
              </Link>
            </div>
          </div>
          <div id="mobile">
            <i id="bar" className={"fas fa-bars"} onClick={handleClick}></i>
          </div>
        </div>
        
      </div>
    );
}

function NavItem({to,label,setHovered,hovered}){
    return (
      <li
        onMouseEnter={() => setHovered(label)}
        className={` ${
          hovered === label ? "border-b-2 border-solid border-black":""
        }`}
      >
        <NavLink
          to={to}
          className={`navbar-link`}
        >
          {label}
        </NavLink>
        
      </li>
    );
}

export default Navbar