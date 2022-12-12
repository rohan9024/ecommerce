import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import logo from "./assets/logo.png"
import { auth, signInWithEmailAndPassword } from "./firebase";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
          alert("Invalid email or password");
        }
      });
  }

  return (
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
            <h1 className='font-normal text-sm text-right ml-24 text-gray-500'>Forgot your Password?</h1>
          </div>
          <div className='flex justify-center items-center w-72 bg-black text-white py-2'>
            <button type='submit' onClick={signIn}>Sign In</button>
          </div>
          <div className='flex justify-center items-center space-x-1'>
            <h1 className='text-gray-500'>Not a member?</h1>
            <h1 className='underline'> <Link to="/signup">Join us</Link></h1>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login