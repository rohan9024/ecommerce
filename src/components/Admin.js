import React, { useState } from "react";
import Select from "react-select";
import ClipLoader from "react-spinners/ClipLoader";

const categories = [
  { value: "mens", label: "Mens" },
  { value: "womens", label: "Womens" },
  { value: "shoes", label: "Shoes" },
  { value: "kids", label: "Kids" },
];

const subcategories = [
  { value: "shirt", label: "Shirt" },
  { value: "tshirt", label: "T-shirt" },
  { value: "shoes", label: "Shoes" },
  { value: "pants", label: "Pant" },
  { value: "skirt", label: "Skirt" },
  { value: "casual", label: "Casual" },
  { value: "sports", label: "Sports" },
  { value: "formal", label: "Formal" },
];

export const Admin = () => {
  const [title, settitle] = useState(null);
  const [desc, setdesc] = useState(null);
  const [price, setprice] = useState(null);
  const [selectedCategory, setselectedCategory] = useState(null);
  const [selectedSubCategory, setselectedSubCategory] = useState(null);
  const [imgUpload, setimgUpload] = useState(null);
  const [loading, setloading] = useState(false);



  return (
    <div
      className="flex flex-col justify-center items-center space-y-5"
      style={{ margin: 20 }}
    >
      <ClipLoader loading={loading} />
      <input
        className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
        onChange={(e) => settitle(e.target.value)}
        placeholder="Name of the Product"
        type="text"
        name="title"
        required
      />
      <input
        className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
        onChange={(e) => setdesc(e.target.value)}
        placeholder="Enter Description of the project"
        type="text"
        name="desc"
        required
      />
      <input
        className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
        onChange={(e) => setprice(e.target.value)}
        placeholder="Enter Price"
        type="number"
        name="price"
        required
      />
      <input
        className="placeholder:text-gray-800 px-5 py-2  outline-none border border-gray-800 w-72"
        onChange={(e) => setimgUpload(e.target.files[0])}
        placeholder="Enter Price"
        type="file"
        accept="image/*"
        name="image"
        required
      />
      <Select
        className="placeholder:text-gray-800 px-5 py-1  w-80"
        options={categories}
        isClearable={true}
        name="category"
        defaultValue={selectedCategory}
        onChange={setselectedCategory}
        placeholder="Category"
        required
      />
      <Select
        className="placeholder:text-gray-800 px-5 py-1  w-80"
        options={subcategories}
        isClearable={true}
        name="sub-category"
        defaultValue={selectedSubCategory}
        onChange={setselectedSubCategory}
        placeholder="Sub - Category"
        required
      />

      <div className="flex justify-center items-center w-72 bg-black text-white py-2">
        <button >Add Product</button>
      </div>
    </div>
  );
};
