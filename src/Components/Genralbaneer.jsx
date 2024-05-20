import React from 'react'
import banner from "../Images/banner.jpg";
import one from "../Images/offers/one.png";
import two from "../Images/offers/two.png";
import three from "../Images/offers/three.png";
import four from "../Images/offers/four.png";
import five from "../Images/offers/five.png";
import six from "../Images/offers/six.png";
import seven from "../Images/offers/seven.png";
import eight from "../Images/offers/eight.png";
import nine from "../Images/offers/nine.png";
import ten from "../Images/offers/ten.png";
import eleven from "../Images/offers/eleven.png";
import tweleel from "../Images/offers/tweleel.png";
import cone from "../Images/categories/cone.jpg";
import ctwo from "../Images/categories/ctwo.jpg";
import cthree from "../Images/categories/cthree.jpg";
import cfour from "../Images/categories/cfour.jpg";
import cfive from "../Images/categories/cfive.jpg";
import csix from "../Images/categories/csix.jpg";
import cseven from "../Images/categories/cseven.jpg";
import ceight from "../Images/categories/ceight.jpg";
import cnine from "../Images/categories/cnine.jpg";
import cten from "../Images/categories/cten.jpg";
import Foteer from './Pages/Foteer';

const Genralbaneer = () => {
    return (
        <div className=" m-[25px] ">
          <img src={banner}></img>
    
          <div>
            <div className=" text-slate-800  font-bold text-left text-2xl m-[10px] tracking-wider">
              MEDAL WORTHY BRANDS TO BAG
            </div>
          </div>
    
          <div className=" flex  justify-start   overflow-y-hidden overflow-x-scroll  cursor-pointer no-scrollbar">
            <img src={one}></img>
            <img src={two}></img>
            <img src={three}></img>
            <img src={four}></img>
            <img src={five}></img>
            <img src={six}></img>
            <img src={seven}></img>
            <img src={eight}></img>
            <img src={nine}></img>
            <img src={ten}></img>
            <img src={eleven}></img>
            <img src={tweleel}></img>
          </div>
    
          <div className=" text-slate-800  font-bold text-left text-2xl m-[10px] tracking-wider ">
            SHOP BY CATEGORY
          </div>
          <div className=" flex flex-row flex-wrap justify-center">
            <img src={cone}></img>
            <img src={ctwo}></img>
            <img src={cthree}></img>
            <img src={cfour}></img>
            <img src={cfive}></img>
            <img src={csix}></img>
            <img src={cseven}></img>
            <img src={ceight}></img>
            <img src={cnine}></img>
            <img src={cten}></img>
          </div>
          <div><Foteer/></div>
          </div>
          
          );
        };

export default Genralbaneer