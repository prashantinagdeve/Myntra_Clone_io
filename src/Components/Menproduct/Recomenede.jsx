import React from 'react'
import { useState } from "react";

const Recomenede = () => {
  const [selectedBundle, setSelectedBundle] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedSize, setSelectedSize] = useState("all");
  const [sortBy, setSortBy] = useState("recommended");

  const handleBundleChange = (e) => {
    setSelectedBundle(e.target.value);
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
  };

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <div>
      <div className=" flex  mt-5 border-b-2 border-slate-500 justify-evenly fixed z-30  w-[90%] bg-white">
        <div className=" w-[15%]   flex items-center font-semibold text-xl  text-center">
          <h1 className=" text-center">FILTERS</h1>
        </div>

        <div className=" w-[50%]  flex  items-center  gap-3">
          <div className="flex items-center  text-xs font-medium">
            <select
              className="border p-1 rounded"
              value={selectedBundle}
              onChange={handleBundleChange}
            >
              <option value="all">Bundle</option>
              <option value="bundle1">Single Styles</option>
            </select>
          </div>
          <div className="flex items-center  text-xs font-medium">
            <select
              className="border p-1 rounded"
              value={selectedCountry}
              onChange={handleCountryChange}
            >
              <option value="Country of Origin">Country of Origin</option>
              <option value="all">All Countris</option>
              <option value="india">India</option>
            </select>
          </div>
          <div className="flex items-center mb-2 mt-2 text-xs font-medium">
            <select
              className="border p-1 rounded"
              value={selectedSize}
              onChange={handleSizeChange}
            >
              <option value="Size">Size</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>
        </div>

        <div className=" w-[40%] flex justify-end  ">
        <div className="mb- flex justify-center items-center text-xs font-medium">
        <label className="mr-2">Sort by:</label>
        <select
          className="border p-1 rounded"
          value={sortBy}
          onChange={handleSortByChange}
        >
          <option value="recommended">Recommended</option>
          <option value="price-low">Price (Low to High)</option>
          <option value="price-high">Price (High to Low)</option>
        </select>
      </div>
        
        
        </div>
      </div>
    </div>
  );
};

export default Recomenede;