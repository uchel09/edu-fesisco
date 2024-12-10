/* eslint-disable @next/next/no-img-element */
"use client";
import { formatCurrencyIDR } from "@/lib/currency";
import { addToCart, deleteFromCart } from "@/redux/slices/productSlice";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

const CartCardList = ({ item }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (qty) => {
    
    dispatch(
      addToCart({
        id:item.id,
        weight: item.weight,
        productName: item.name,
        name: item.name,
        qty: qty,
        productId: item.id,
        photo: item.photo,
        price: item.plain_price,
      })
    );
  };
  const deleteItemFromCart = () =>{

    dispatch(deleteFromCart(item.id))
  }

  return (
    <div className="flex flex-col mt-3 border-b py-2">
      <div className="flex gap-3">
        <img src={item.photo} className="w-[80px] h-[80px]" />
        <div className="flex flex-col text-[14px] justify-between text-gray-500">
          <span>{item.productName}</span>
          <span>{item.name}</span>
          <span>{formatCurrencyIDR(item.price)}</span>
          <span>{item.weight} gr</span>
          {/* varian */}
          {/* harga */}
          {/* berat */}
        </div>
      </div>
      {/* Jumlah  */}
      <div className="flex flex-col">
        <span>Jumlah :</span>
        <div className="flex">
          <button
            onClick={() => handleAddToCart(-1)}
            className="text-[18px] w-[35px] border-black border"
          >
            -
          </button>
          <span className="px-4 bg-gray-300">{item.qty}</span>
          <button onClick={()=>handleAddToCart(1)} className="text-[18px] w-[35px] border-black border">
            +
          </button>
        </div>
        {/* delete */}
        <div className="flex flex-row-reverse">
          <button onClick={deleteItemFromCart}>
            <Trash2 size={20} className="text-red-500 cursor-pointer" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCardList;
