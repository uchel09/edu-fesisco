"use client"
import Navbar from "@/components/custom/Navbar/Navbar";
import Navbar2 from "@/components/custom/Navbar/Navbar2";
import MenuCart from "@/components/custom/SideBar/Cart";
import MenuLink from "@/components/custom/SideBar/MenuLink";
import { AnimatePresence } from "framer-motion";

import { useSelector,shallowEqual, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { initializeCart } from "@/redux/slices/productSlice";

const BasicLayout = ({ children }) => {
  const dispatch = useDispatch()
  useEffect(()=>{
   const initializeItemCart = async()=>{
    await dispatch(initializeCart())
   }

   initializeItemCart()
  },[])

    const { openMenuLink, openCart } = useSelector(
      (state) => state.global,
      shallowEqual
    );
  return (
    <>
      <Navbar />
      <Navbar2 />
      <AnimatePresence>
        {openMenuLink && <MenuLink />}
        {openCart && <MenuCart />}
      </AnimatePresence>

      <main className="w-full flex-1s h-[100vh] bg-white">{children}</main>
      
    </>
  );
};

export default BasicLayout;
