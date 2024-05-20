import React from "react";
import myntra_logo from "../Images/myntra_logo.webp";
import { Link } from "react-router-dom";
import Foteer from "./Pages/Foteer";

const Header = () => {
  return (
    <div className=" h-[80px] flex justify-evenly shadow-md shadow-slate-400 ">
      <div className=" flex justify-center items-center">
        <Link to="/">
          {" "}
          <img className=" h-[40px]" src={myntra_logo}></img>
        </Link>
      </div>
      <div className=" w-[40%] flex flex-row items-center justify-evenly font-bold cursor-pointer text-base ">
        <div className=" px-[10px] ">
          <Link to="/men">
            <a href="#">MEN</a>
          </Link>
        </div>
       <Link to="/show"> <div className=" px-[10px]">
       <a href="#">WOMEN</a>
     </div></Link>
        <div className=" px-[10px]">
          <a href="#">KIDS</a>
        </div>
        <div className=" px-[10px]">
          <a href="#">HOME & LIVING</a>
        </div>
        <div className=" px-[10px]">
          <a href="#">BEAUTY</a>
        </div>
        <div className=" px-[10px]">
          <a href="#">
            STUDIO <sup className=" text-pink-500 font-semibold">NEW</sup>
          </a>
        </div>
      </div>

      <div className=" w-[30%]  flex items-center ">
        <div className=" absolute  pl-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
        <input
          type="text"
          className="block w-full rounded-md border-0 py-1.5  pl-10 pr-20 text-gray-900 ring-1 ring-inset ring-gray-500 placeholder:text-gray-400  sm:text-sm sm:leading-6"
          placeholder="Search for product"
        />
      </div>
      <div className=" w-[15%] flex flex-row justify-between items-center  pl-3 cursor-pointer  pr-5  text-xs">
        <div className=" ">
          <div className=" flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>
          <div>
            <Link to="/login">
              <p>Profile</p>
            </Link>
          </div>
        </div>
        <div>
          <div className="  flex justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <div>
            <p>Wishlist</p>
          </div>
        </div>
        <Link to="/cart">
          <div>
            <div className=" flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
            </div>
            <div className=" flex justify-center">
              <p>Bag</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
