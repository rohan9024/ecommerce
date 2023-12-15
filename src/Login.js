import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from "./assets/logo.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const notifySuccess = () => toast.success('Logged in successfully', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  const notifyError = () => toast.error('Invalid email or password', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });


  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className='font-dmsans'>
        <div className='flex flex-col justify-center items-center w-screen h-[640px] space-y-5'>
          <img
            className='object-contain w-28 h-28 cursor-pointer'
            src={logo} alt="logo" />
          <h1 className='font-bold'>YOUR ACCOUNT FOR EVERYTHING BLACKBERRY </h1>
          <form className='flex flex-col justify-center items-center space-y-5'>
            <input ref={emailRef} type="email" placeholder="Email address" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
            <input ref={passwordRef} type="password" placeholder="Password" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
            <div className='flex justify-between items-center'>
              <h1 className='font-normal text-sm text-right text-gray-500'>Forgot your Password?</h1>
            </div>
            <div className='flex justify-center items-center w-72 bg-black text-white py-2'>
              <button type='submit'>Sign In</button>
            </div>
            <div className='flex justify-center items-center space-x-1'>
              <h1 className='text-gray-500'>Not a member?</h1>
              <h1 className='underline'> <Link to="/signup">Join us</Link></h1>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Login