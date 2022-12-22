import React from 'react'
import { FaAngleDown } from "react-icons/fa";

const Sort = (props) => {
    const { setSortValue, sortValue } = props;
    return (
        <div className='flex justify-end p-4 relative'>
            <div className='group w-72  p-2 cursor-pointer text-center absolute bg-white'>
                <div className="heading flex justify-center items-center">
                    <h3 className='font-semibold text-xl'>Sort By {sortValue && ": "} </h3>
                    <span className='font-normal'>{sortValue}</span>
                    <div className='grid place-items-center ml-3'> <FaAngleDown /></div>
                </div>
                <ul className='hidden group-hover:block pt-4 shadow-2xl'>
                    <li className='pt-3 hover:font-semibold' onClick={() => setSortValue("Price: Low to High")} id="lowest">Price: Low to High</li>
                    <li className='pt-3 hover:font-semibold' onClick={() => setSortValue("Price: High to Low")} id="highest">Price: High to Low</li>
                    <li className='pt-3 hover:font-semibold' onClick={() => setSortValue("Name: A-Z")} id="a-z">Name: A-Z</li>
                    <li className='pt-3 hover:font-semibold' onClick={() => setSortValue("Name: Z-A")} id="z-a">Name: Z-A</li>
                </ul>
            </div>
        </div>
    )
}

export default Sort