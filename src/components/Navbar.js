import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../assets/logo.png"
import search from "../assets/search.png"
import user from "../assets/user.png"
import cart from "../assets/cart.png"
import favorite from "../assets/favorite.png"
import "./Navbar.css"

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return (
        <div className='navbar-container'>
            <div>
                <div className="logo-container">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
            </div>
            <div className={"menu-container"}>
                <ul className={`${clicked && "active"}`}>
                    <div id="mobile" className='w-full'>
                        <div className="close-bar">
                            <div className='transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer tab-hidden'>
                                <img
                                    className='object-contain w-5 h-5 mobile-icons'
                                    src={cart} alt="cart" />
                            </div>
                            <div className='transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer tab-hidden'>
                                <img
                                    className='object-contain w-5 h-5 mobile-icons'
                                    src={favorite} alt="favorite" />
                            </div>
                            <Link to="/login">
                                <div className='transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer tab-hidden'>
                                    <img
                                        className='object-contain w-5 h-5 mobile-icons'
                                        src={user} alt="user" />
                                </div>
                            </Link>
                            <div>
                                <i id="bar" className={"fas fa-times"} onClick={handleClick}></i>
                            </div>
                        </div>
                    </div>
                    <li>
                        <NavLink to="/men" className={"navbar-link"}>Men</NavLink>
                    </li>
                    <li>
                        <NavLink to="/women" className={"navbar-link"}>Women</NavLink>
                    </li>
                    <li>
                        <NavLink to="/kids" className={"navbar-link"}>Kids</NavLink>
                    </li>
                    <li>
                        <NavLink to="/kids" className={"navbar-link"}>Customise</NavLink>
                    </li>
                    <li>
                        <NavLink to="/kids" className={"navbar-link"}>Sale</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shoes" className={"navbar-link"}>Shoes</NavLink>
                    </li>
                </ul>
            </div>
            <div className='extra-icons'>
                <div className='flex justify-center items-center border border-gray-800 py-2 px-4 input-field'>
                    <input type="text" placeholder='What are you looking for?' className='w-64 placeholder-black font-medium outline-none' />
                    <img
                        className='object-contain w-5 h-5'
                        src={search} alt="search" />
                </div>
                <div className='flex justify-around items-center space-x-8 hide-mobile'>
                    <div className='transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer'>
                        <img
                            className='object-contain w-5 h-5'
                            src={cart} alt="cart" />
                    </div>
                    <div className='transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer'>
                        <img
                            className='object-contain w-5 h-5'
                            src={favorite} alt="favorite" />
                    </div>
                    <Link to="/login">
                        <div className='transition hover:duration-150 hover:ease-in-out hover:scale-125 cursor-pointer'>
                            <img
                                className='object-contain w-5 h-5'
                                src={user} alt="user" />
                        </div>
                    </Link>
                </div>
            </div>
            <div id="mobile">
                <i id="bar" className={"fas fa-bars"} onClick={handleClick}></i>
            </div>
        </div >
    )
}

export default Navbar