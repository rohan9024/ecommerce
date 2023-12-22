import React from 'react'
import img1 from "../assets/men/img1.png"
import bin from "../assets/bin.png"
import bag from "../assets/bag.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const WishCard = ({title,price,imgurl,desc,wishItems,setWishItems,id, cartItems, setCartItems}) => {
  
  const handleDelete=()=>{
    const index=wishItems.indexOf(id);
    if(index>-1) {
      wishItems.splice(index,1);
      
    }
  }
  const notify = () => toast.success('Item added to Bag!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
});
  const handleClick = () => {
    console.log(cartItems);

    if (cartItems.includes(id) === false) {
        setCartItems(cartItems.concat(id));
        setTimeout(()=>{
          notify();
        console.log("Added to cart " + id);
        console.log(cartItems);
        },100)
        
        
    }
    else {
        console.log("Already present " + id);
        
    }
}
  return (
    
   
     
        <div className='w-[25%] m-4 rounded-md hover:scale-[100.2%] bg-blue-gray-50 mb-20 shadow-lg shadow-blue-gray-400'>
          <img src={imgurl} className=' rounded-t-md  cursor-pointer hover:opacity-95 '/>
          <div className='rounded-b-md'>
          <img onClick={handleDelete} src={bin} className='h-9 float-right m-3 hover:scale-110 cursor-pointer p-1'/>
           <p className='text-lg font-medium mt-1 mx-2 mb-0'>{title}</p>
           <p className='text-lg font-medium mb-1 mx-2'>Price: Rs {price}</p>
           <p className='text-lg font-medium mt-2 mx-2'>Member Price: Rs #,###</p>
           <p className='text-[17px] mx-2 font-medium'><i>{desc}</i></p>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg focus:ring-blue-500 focus:border-blue-500 block w-[98%] mx-auto  p-2.5 mt-4 " >
  <option selected>Select Size</option>
  <option value="US">XS</option>
  <option value="CA">S</option>
  <option value="FR">M</option>
  <option value="DE">XL</option>
</select>
<button onClick={handleClick} className='p-2.5 bg-black text-xl text-white w-[98%] mx-auto block mt-2'><p className='inline-block'>Add to Bag</p> </button>
          </div>
        </div>
      
   
  )
}

export default WishCard
