"use client";
/* eslint-disable @next/next/no-img-element */

import { formatCurrencyIDR } from "@/lib/currency";
import { setOpenCart } from "@/redux/slices/globalSlice";
import { addToCart } from "@/redux/slices/productSlice";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const [selectedProduct, setSelectedProduct] = useState({
    id: "",
    name: "",
    stock: 0,
  });
  const dispatch = useDispatch();
  const navigate = useRouter()

  // Set default varian saat komponen pertama kali dirender
  useEffect(() => {
    if (product.plain_varian?.[0]) {
      setSelectedProduct({
        id: product.plain_varian[0].id,
        name: product.plain_varian[0].value,
        stock: product.stock || 0,
      });
    }
  }, [product]);

  const handleChange = (event) => {
    const [id, name, stock] = event.target.value.split(",");
    setSelectedProduct({ id, name, stock: parseInt(stock, 10) });
  };

  const handleAddToCart = () => {
    const { id, name, stock } = selectedProduct;

    if (stock <= 0) {
      alert("Stok barang habis! Silakan pilih varian lain.");
      return;
    }

    dispatch(
      addToCart({
        id,
        weight:product.weight,
        productName: product.name,
        name,
        qty: 1,
        productId: product.id,
        photo: product.photo,
        price:product.plain_price
      })
    );
    dispatch(setOpenCart(true));
  };

  return (
    <div className="w-[270px] flex items-center gap-3 text-[15px] justify-center flex-col mb-3">
      <img
        src={product.photo}
        alt={product.name || "Product Image"}
        className="cursor-pointer"
        onClick={()=>{navigate.push(`/detail/${product.id}`)}}
      />
      <span className="uppercase">{product.name}</span>
      <span>{formatCurrencyIDR(product.plain_price)}</span>
      <div>
        <select
          id="product-select"
          value={`${selectedProduct.id},${selectedProduct.name},${selectedProduct.stock}`}
          onChange={handleChange}
          className="border rounded p-2"
        >
          {/* Opsi varian default */}
          {product.plain_varian?.[0] && (
            <option
              value={`${product.plain_varian[0].id},${
                product.plain_varian[0].value
              },${product.stock || 0}`}
            >
              {product.plain_varian[0].value} ({product.stock || 0})
            </option>
          )}
          {/* Opsi varian anak */}
          {product.childs?.map(
            (child) =>
              child.plain_varian?.[0] && (
                <option
                  key={child.plain_varian[0].id}
                  value={`${child.plain_varian[0].id},${
                    child.plain_varian[0].value
                  },${child.stock || 0}`}
                >
                  {child.plain_varian[0].value} ({child.stock || 0})
                </option>
              )
          )}
        </select>
      </div>
      <button
        onClick={handleAddToCart}
        className="w-[120px] h-[45px] text-[12px] font-serif mt-3 rounded hover:bg-[#c99947] bg-black text-white"
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default ProductCard;
