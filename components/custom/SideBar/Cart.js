"use client";
import React from "react";
import { motion } from "framer-motion";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { setCartSpin, setOpenCart } from "@/redux/slices/globalSlice";
import CartList from "@/components/Cart/CartList";
import CustomerDataInput from "@/components/Cart/CustomerDataInput";
import ReviewOrder from "@/components/Cart/DataInput/ReviewOrder";

const MenuCart = () => {
  const dispatch = useDispatch();
  const { cartSpin } = useSelector((state) => state.global, shallowEqual);

  const handleCloseMenu = async () => {
    await dispatch(setOpenCart(false));
  };

  return (
    <motion.div
      initial={{ opacity: 1, x: "100%" }} // Atur posisi awal dan opasitas
      animate={{ opacity: 1, x: 0 }} // Atur posisi akhir dan opasitas saat komponen dimount
      exit={{ opacity: 1, x: "100%" }} // Atur posisi dan opasitas saat komponen di-unmount
      transition={{ duration: 0.5 }}
      className="fixed z-[999] right-0  h-[100vh] w-[340px] bg-[white] overflow-y-auto flex flex-col rounded-l-[10px] border-l-2"
    >
      <div className="bg-[#eaeaea] w-full h-[50px] p-2 text-gray-600 rounded-tl-[10px] flex justify-between items-center">
        {cartSpin === 1 && <span>Daftar Belanja</span>}
        {cartSpin === 2 && (
          <span
            className="cursor-pointer text-[12px]"
            onClick={() => {
              dispatch(setCartSpin(1));
            }}
          >
            back to Cart
          </span>
        )}
        {cartSpin === 3 && (
          <span
            className="cursor-pointer text-[12px]"
            onClick={() => {
              dispatch(setCartSpin(2));
            }}
          >
            back
          </span>
        )}
        <div
          className="   bg-red-500  top-2 w-8 h-8 cursor-pointer rounded-[3px] text-black flex items-center justify-center"
          onClick={handleCloseMenu}
        >
          <span className="text-[20px] mb-1 opacity-80 text-white">x</span>
        </div>
      </div>
      {/* Cart List  */}
      {cartSpin === 1 && <CartList />}
      {cartSpin === 2 && <CustomerDataInput />}
      {cartSpin === 3 && <ReviewOrder />}
    </motion.div>
  );
};

export default MenuCart;
