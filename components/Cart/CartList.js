"use client";
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import CartCardList from "./CartCardList";
import { ShoppingCartIcon } from "lucide-react";
import { setCartSpin } from "@/redux/slices/globalSlice";

const CartList = () => {
  const { cart } = useSelector((state) => state.product, shallowEqual);
  const dispatch = useDispatch()


  return (
    <div className="flex flex-col gap-3 p-1">
      {cart &&
        cart.length > 0 &&
        cart.map((item, index) => <CartCardList key={index} item={item} />)}
      <div className="flex flex-row-reverse">
        <button onClick={()=>{dispatch(setCartSpin(2))}} className="flex bg-blue-500 text-white items-center gap-2 hover:bg-blue-700 px-3 py-2 rounded">
          <span>Next</span> <ShoppingCartIcon size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartList;
