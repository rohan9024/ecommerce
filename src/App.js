import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Shoes from "./components/Shoes.js";
import Men from "./components/Men.js";
import Women from "./components/Women.js";
import Kids from "./components/Kids.js";
import { Admin } from "./components/Admin";
import ProductDescription from "./pages/ProductDescription";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from "./components/Navbar";
import Signup from "./Signup";
import Footer from "./components/Footer";
import { data } from "./JsonData/data";
import Search from "./components/Search";
import ScrollToTop from "./ScrollToTop";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import { login, logout } from "./features/userSlice";
import Profile from "./components/Profile";
import Contributor_data from "./components/Contributor_data";

import SmoothScroll from './components/SmoothScroll'
import ProtectedRoute from "./components/ProtectedRoute";
import Cart from "./components/Cart";




function App() {
  const [searchfield, setsearchfield] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [usermail, setUsermail] = useState("");
  const [cartItems, setCartItems] = useState([]);
  const onSearchChange = (e) => {
    setsearchfield(e.target.value);
  };

  const [products, setproducts] = useState([]);

  const finaldata = data.concat(products);
  const newData = finaldata.map((el, index) => {
    const oldPrice = el.price.substring(1);
    const newPrice = parseInt(oldPrice.replace(/,/g, ""));
    const newObject = { ...el, price: newPrice, id: index };
    return newObject;
  });

  const filtereditems = newData.filter((data) => {
    return searchfield
      ? data.title.toLowerCase().includes(searchfield.toLowerCase())
      : {};
  });



  return (
    <BrowserRouter>
      <SmoothScroll />
      <ScrollToTop />
      <Navbar searchChange={onSearchChange} />
      {/* <Sort setSortValue={setSortValue} /> */}
      <Routes>
        {!searchfield ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="/" element={<Search data={filtereditems} />} />
        )}
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/shoes"
          element={
            <Shoes
              data={filtereditems}
              sortValue={sortValue}
              setSortValue={setSortValue}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="/men"
          element={
            <Men
              data={filtereditems}
              sortValue={sortValue}
              setSortValue={setSortValue}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="/women"
          element={
            <Women
              data={filtereditems}
              sortValue={sortValue}
              setSortValue={setSortValue}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route
          path="/kids"
          element={
            <Kids
              data={filtereditems}
              sortValue={sortValue}
              setSortValue={setSortValue}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          }
        />
        <Route path="/contributors" element={<Contributor_data />} />
        <Route path="/product/:id" element={<ProductDescription data={filtereditems} cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cart data={filtereditems} items={cartItems} />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Admin />} path="/admin" />
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
