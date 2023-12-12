import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";

const Signup = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);
  const phoneNoRef = useRef(null);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      navigate("/");
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    } else {
      newErrors.name = "";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    } else {
      newErrors.email = "";
    }

    if (formData.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters";
      isValid = false;
    } else {
      newErrors.password = "";
    }

    if (!formData.phoneNo.trim()) {
      newErrors.phoneNo = "Phone number is required";
      isValid = false;
    } else if (!isValidMobile(formData.phoneNo)) {
      newErrors.phoneNo = "Phone number is notValid";
      isValid = false;
    } else {
      newErrors.phoneNo = "";
    }

    setErrors(newErrors);
    return isValid;
  };
  const isValidMobile = (phoneNumber) => {
    console.log("check");
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="font-dmsans">
      <div className="flex flex-col justify-center items-center w-screen h-[640px] space-y-5">
        <img
          className="object-contain w-28 h-28 cursor-pointer"
          src={logo}
          alt="logo"
        />
        <h1 className="font-bold">YOUR ACCOUNT FOR EVERYTHING BLACKBERRY</h1>
        <h1 className="font-bold">Create your account</h1>
        <form
          className="flex flex-col justify-center items-center space-y-5"
          onSubmit={handleSubmit}
        >
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
            ref={nameRef}
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}
          <input
            name="email"
            type="email"
            placeholder="Email address"
            className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
            ref={emailRef}
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <input
            name="password"
            type="password"
            placeholder="Password (Min 5 characters)"
            className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
            ref={passwordRef}
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <input
            name="phoneNo"
            type="text"
            placeholder="Phone number"
            className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
            ref={phoneNoRef}
            value={formData.phoneNo}
            onChange={handleInputChange}
          />
          {errors.phoneNo && <p className="text-red-500">{errors.phoneNo}</p>}
          <div className="flex justify-center items-center w-72 bg-black text-white py-2">
            <button type="submit">Register</button>
          </div>
          <div className="flex justify-center items-center space-x-1">
            <h1 className="text-gray-500">Already registered?</h1>
            <h1 className="underline">
              {" "}
              <Link to="/login">Login</Link>
            </h1>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
