import React from "react";
import { useCart } from "react-use-cart";

const Cart = () => {
  const {
    removeItem,
    items,
    updateItemQuantity,
    ProductData,
    cartTotal,
    totalItems,
    totalUniqueItems,
  } = useCart();

  return (
    <div className=" ">
      {items.map((cval) => {
        return (
          <div className="bg-white rounded-lg p-4 shadow-md border-2 ">
            <div className=" flex  justify-evenly mt-5 items-center bg-rose-100">
              <img src={cval.cover} alt="" className=" h-24" />
              <h2>{cval.brand}</h2>
              <h2>{cval.price}</h2>
              <div>
                <button
                  className="bg-pink-500 text-white py-2 px-4 rounded-md"
                  onClick={() => updateItemQuantity(cval.id, cval.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div>{cval.quantity}</div>
              <div>
                <button
                  className=" bg-slate-500 text-white py-2 px-4 rounded-md"
                  onClick={() => updateItemQuantity(cval.id, cval.quantity - 1)}
                >
                  -
                </button>
              </div>
              <div>
                <button
                  className="bg-red-600 text-white py-2 px-4 rounded-md"
                  onClick={() => removeItem(cval.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <div className=" outline outline-2 outline-offset-2 w-40  mt-4 ml-96">
        <h1 className=" text-xl text-center  font-semibold ">
          Total = {cartTotal}
        </h1>
      </div>
    </div>
  );
};

export default Cart;
