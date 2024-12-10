"use client";
import React from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import {  setOpenMenuLink } from "@/redux/slices/globalSlice";

const MenuLink = () => {
  const dispatch = useDispatch();
  const handleCloseMenu = async () => {
    await dispatch(setOpenMenuLink(false));
  };

  return (
    <motion.div
      initial={{ opacity: 1, x: "-100%" }} // Atur posisi awal dan opasitas
      animate={{ opacity: 1, x: 0 }} // Atur posisi akhir dan opasitas saat komponen dimount
      exit={{ opacity: 1, x: "-100%" }} // Atur posisi dan opasitas saat komponen di-unmount
      transition={{ duration: 0.5 }}
      className="fixed left-0  z-[999] h-screen w-[100%] bg-[rgba(0,0,0,0.9)] opacity-70 md:hidden flex flex-col"
    >
      <div
        className="absolute right-4 top-4 w-8 h-8 border cursor-pointer border-gray-600 text-white flex items-center justify-center"
        onClick={handleCloseMenu}
      >
        <span className="text-[20px] mb-1 opacity-80 text-gray-400">x</span>
      </div>
      {/* Menu Link  */}
      <div className="text-white mt-[70px] px-5 w-full h-full overflow-y-auto">
        <ul className="flex flex-col gap-7 text-[15px]">
          <p className="py-2 border-b border-gray-600 cursor-pointer">Home</p>
          <p className="py-2 border-b border-gray-600 cursor-pointer">Brand</p>
          <p className="py-2 border-b border-gray-600 cursor-pointer">Information</p>
          <p className="py-2 border-b border-gray-600 cursor-pointer">Blog</p>
        </ul>
      </div>
    </motion.div>
  );
};

export default MenuLink;
