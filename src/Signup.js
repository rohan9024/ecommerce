import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "./assets/logo.png"
import { auth, createUserWithEmailAndPassword } from "./firebase";

const Signup = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    let navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential);
                const user = userCredential.user;
                console.log(user);
                navigate("/profile");
            })
            .catch((error) => {
                if (error.code === "auth/email-already-in-use") {
                    alert("Email already in use. Sign In to your account");
                }
                else {
                    alert("Please enter a valid email address");
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
                <h1 className='font-bold'>Create your account</h1>
                <form className='flex flex-col justify-center items-center space-y-5'>
                    <input type="text" placeholder="Full Name" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                    <input ref={emailRef} type="email" placeholder="Email address" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                    <input ref={passwordRef} type="password" placeholder="Password (Min 5 characters)" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                    <input type="text" placeholder="Phone number" className='placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72' />
                    <div className='flex justify-center items-center w-72 bg-black text-white py-2'>
                        <button type='submit' onClick={register}>Register</button>
                    </div>
                    <div className='flex justify-center items-center space-x-1'>
                        <h1 className='text-gray-500'>Already registered?</h1>
                        <h1 className='underline'> <Link to="/login">Login</Link></h1>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup