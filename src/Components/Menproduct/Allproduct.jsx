import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ProductData from "./ProductData";

const Allproduct = () => {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  // Function to toggle selected brands
  const toggleBrand = (brand) => {
    const updatedBrands = selectedBrands.includes(brand)
      ? selectedBrands.filter((item) => item !== brand)
      : [...selectedBrands, brand];
    setSelectedBrands(updatedBrands);
  };

  // Filtered products based on selected brands and price range
  const filteredProducts =
    selectedBrands.length > 0
      ? ProductData.filter((product) => selectedBrands.includes(product.brand))
      : ProductData;

  const filteredByPrice =
    minPrice && maxPrice
      ? filteredProducts.filter(
          (product) =>
            parseFloat(product.price) >= parseFloat(minPrice) &&
            parseFloat(product.price) <= parseFloat(maxPrice)
        )
      : filteredProducts;

  return (
    <div className="container mx-auto py-6 fixed">
      <div className="text-xs">
        {/* Brand filter */}
        <div className="w-[12%] fixed h-[100%] border-r border-stone-600 flex flex-col ml-2  mt-14 ">
          <label className="block text-gray-700 font-bold mb-2">
            Filter by Brand:
          </label>
          {/* Checkboxes for each brand */}
          {[...new Set(ProductData.map((product) => product.brand))].map(
            (brand, index) => (
              <div key={index} className="mb-2">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="form-checkbox h-5 w-5 text-indigo-600"
                  />
                  <span className="ml-2">{brand}</span>
                </label>
              </div>
            )
          )}
          {/* Price filter */}
          <div className="mt-5 ">
            <label className="block text-gray-700 font-bold mb-2">
              Filter by Price:
            </label>
            <div className="flex  ">
              <input
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                className="form-input h-8 w-24 mr-1 border border-gray-600 rounded-md text-center text-sm"
              />
              <input
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
                className="form-input h-8 w-24 border border-gray-600 rounded-md text-center text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ml-64  h-[70vh]  overflow-scroll mt-16 no-scrollbar">
        {filteredByPrice.map((product) => (
          <NavLink key={product.id} to={`/productdetail/${product.id}`}>
            <div className="bg-white shadow-md rounded-md p-4 relative">
              <img
                src={product.cover}
                alt={product.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
              <div className="flex items-center justify-between mb-2">
                <div className="text-sm font-medium text-gray-800">
                  {product.brand}
                </div>
                <div className="text-sm font-medium text-gray-600 line-through">
                  Rs. {product.orgPrice}
                </div>
              </div>
              <div className="text-lg font-medium text-gray-800 mb-2">
                Rs. {product.price}
              </div>
              <div className="text-sm font-medium text-gray-600">
                Rs. {product.discount} OFF
              </div>
              <div className="text-sm font-medium text-gray-600 mt-4">
                {product.rating} ★ ({product.ratingCount} ratings)
              </div>
              <div className="absolute top-0 right-0 bg-red-500 text-white rounded-tl-md rounded-bl-md py-1 px-2 text-xs">
                Only Few Left!
              </div>
              <button className="bg-pink-600 text-white py-2 px-4 flex items-center rounded-lg mt-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
                <h1 className="ml-2">Wishlist</h1>
              </button>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Allproduct;
