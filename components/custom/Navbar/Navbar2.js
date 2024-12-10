"use client";
import React from "react";
import Image from "next/image";
import { Search, ShoppingCart, AlignJustify } from "lucide-react";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import MenuLink from "../SideBar/MenuLink";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { setOpenCart, setOpenMenuLink } from "@/redux/slices/globalSlice";
import MenuCart from "../SideBar/Cart";
import { useRouter } from "next/navigation";

const Navbar2 = () => {
  const [scrolling, setScrolling] = useState(false);

  const dispatch = useDispatch();
  const navigate = useRouter();

  const handleOpenMenuLink = async () => {
    await dispatch(setOpenCart(false));
    await dispatch(setOpenMenuLink(true));
  };
  const handleOpenCart = async () => {
    await dispatch(setOpenMenuLink(false));
    await dispatch(setOpenCart(true));
  };

  // Mengatur ukuran gambar berdasarkan posisi scroll
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`flex  w-[100%] lg:hidden justify-center  bg-white transition-all h-[40px] ${
        scrolling ? "md:h-[90px]" : "md:h-[300px]"
      } duration-300 fixed  z-[99]`}
    >
      <AlignJustify
        className="fixed z-[99] top-2 left-[30px] md:hidden"
        cursor={"pointer"}
        onClick={handleOpenMenuLink}
      />
      <div className="flex md:flex-col flex-row justify-between items-center md:items-start  md:justify-normal  w-[75%] h-full mx-auto  ">
        <div
          onClick={() => navigate.push("/")}
          className={`pl-4 block w-[80px] md:w-full  mt-2 md:mt-0 ${
            scrolling ? "md:hidden" : "md:flex"
          }  py-10 mr-4   items-center justify-center`}
        >
          <Image src={"/logo.jpg"} alt="logo" width={300} height={300} />
        </div>
        <div
          className={`flex w-[100px] h-[40px]  md:w-full  items-start  justify-between border-b-2`}
        >
          <h1
            className={`text-[20px] hidden md:block tracking-tighter font-bold`}
          >
            𝐻𝒾𝒿𝒿𝒶 𝐼𝓃𝒹𝑜𝓃𝑒𝓈𝒾𝒶
          </h1>
          <div className="flex w-[80px] justify-between items-center h-[50px] pb-2 ">
            <Search size={25} cursor="pointer" />
            <div className="h-[60%] w-[1px] bg-gray-200" />
            <ShoppingCart size={25} cursor="pointer" onClick={handleOpenCart} />
          </div>
        </div>
        <div className={`bg-white hidden md:flex items-start py-2 `}>
          <ul className="flex gap-10">
            <p className="text-[#d09f44]">Home</p>
            <p>Brand</p>
            <p>Information</p>
            <p>Blog</p>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
