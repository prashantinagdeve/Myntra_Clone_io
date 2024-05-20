import React from "react";
import Womendata from "../Womenproduct/Womendata";
import Recomenede from "../Menproduct/Recomenede";
import Womenproduct from "../Womenproduct/Womenproduct";

const Women = () => {
  return (
    <div>
      <div className="container mx-auto px-4 py-8  ">
        <div className="flex items-center justify-between mb-6 ">
          <h1 className=" text-xs">
            Home /ClothingWomen/ <span className=" font-bold">Topwear</span>
          </h1>
        </div>
        <div>
          <h1 className=" text-xs  font-semibold">
            Women Topwear -{" "}
            <span className=" text-slate-600">339419 items</span>
          </h1>
        </div>
        <div >
          <Recomenede />
          <Womenproduct/>
        </div>
      </div>
    </div>
  );
};

export default Women;
