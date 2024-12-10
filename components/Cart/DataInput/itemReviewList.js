/* eslint-disable @next/next/no-img-element */
"use client";
import { formatCurrencyIDR } from "@/lib/currency";
import { addToCart, deleteFromCart } from "@/redux/slices/productSlice";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

const ItemReviewList = ({ item }) => {
  const dispatch = useDispatch();

  const subTotal = parseInt(item.price * item.qty);
 

  return (
    <div className="flex flex-col mt-3 border-b py-2">
      <div className="flex gap-3">
        <img src={item.photo} className="w-[80px] h-[80px]" />
        <div className="flex w-full px-3 flex-col text-[14px] justify-between text-gray-500">
          <span>
            {item.productName} - {item.name}{" "}
          </span>
          <span>
            {formatCurrencyIDR(item.price)} x {item.qty}
          </span>
          <span>
            {item.price} x {item.qty}
          </span>
          <span className="flex flex-row-reverse w-full font-bold">{formatCurrencyIDR(subTotal)}</span>

          {/* varian */}
          {/* harga */}
          {/* berat */}
        </div>
      </div>
      {/* Jumlah  */}
    </div>
  );
};

export default ItemReviewList;
