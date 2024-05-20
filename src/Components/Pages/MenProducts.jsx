import React from "react";

import Recomenede from "../Menproduct/Recomenede";
import Allproduct from "../Menproduct/Allproduct";

const MenProducts = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8  ">
        <div className="flex items-center justify-between mb-6 ">
          <h1 className=" text-xs">
            Home /ClothingMen/ <span className=" font-bold">Topwear</span>
          </h1>
        </div>
        <div>
          <h1 className=" text-xs  font-semibold">
            Men Topwear - <span className=" text-slate-600">339419 items</span>
          </h1>
        </div>
        <div className="">
          <Recomenede />
          <Allproduct />
        </div>
      </div>
    </div>
  );
};

export default MenProducts;
