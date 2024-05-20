import React, { useContext , useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useCart } from 'react-use-cart'
import Womendata from './Womendata'


const WomenDeatail = () => {

    const{addItem}=useCart();

  const {id} = useParams();
  console.log(id)
  const searchedProduct = Womendata.filter((prod) => {
      return prod.id == id;
  })

  console.log(searchedProduct)

  return (

    <>
    <div className=" bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow sm:rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex justify-center items-center h-64 md:h-96 lg:h-auto">
                
              </div>
              
              <div className="grid grid-rows-2 grid-flow-col gap-y-1 gap-x-1">
              {searchedProduct.length > 0 && searchedProduct[0].images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`${searchedProduct[0].name} ${index}`}
                    className="rounded-md cursor-pointer"
                />
            ))}
              </div>
            </div>
            <div className="col-span-1">
              <div className="px-4 py-5 sm:p-6">
                <h1 className="text-3xl font-semibold text-gray-900">{searchedProduct[0].name}</h1>
                <p className="text-lg text-gray-700">{searchedProduct[0].brand}</p>
               <div className='flex items-center  mb-2'>
               <p className="text-2xl font-semibold mt-2 mr-5">Rs.{searchedProduct[0].price}</p>
               <p className="text-sm font-medium text-gray-600 line-through mr-5"> MRP{searchedProduct[0].orgPrice}</p>
               <p className="text-xl font-semibold mt-2">{searchedProduct[0].discount}</p>
               </div>
                <p className="mt-4 text-gray-600">(Rs.){searchedProduct[0].description}</p>
                {/* Implement size selection, color selection, etc. */}
                <div className="mt-4">
                  <div className="mb-2">
                    <label htmlFor="size" className="block text-sm font-medium text-gray-700 ">
                      Size
                    </label>
                    <select id="size" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md outline outline-offset-1 outline-1">
                      {searchedProduct[0].sizes.map((size, index) => (
                        <option key={index} value={size}>
                          {size}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-2">
                    <label htmlFor="color" className="block text-sm font-medium text-gray-700">
                      Color
                    </label>
                    <select id="color" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md outline outline-offset-1 outline-1  ">
                      {searchedProduct[0].colors.map((color, index) => (
                        <option key={index} value={color}>
                          {color}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-4">

                  <button className="bg-pink-500 text-white py-2 px-4 rounded-md" onClick={()=>addItem(searchedProduct[0])}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>

  )
}

export default WomenDeatail