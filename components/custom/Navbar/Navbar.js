"use client";
import { AnimatePresence } from "framer-motion";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { setOpenCart, setOpenMenuLink } from "@/redux/slices/globalSlice";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useState, useEffect } from "react";
import MenuCart from "../SideBar/Cart";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const { openCart } = useSelector((state) => state.global, shallowEqual);
  const navigate = useRouter()

  const dispatch = useDispatch();
  // Mengatur ukuran gambar berdasarkan posisi scroll
  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  const handleOpenCart = async () => {
    await dispatch(setOpenMenuLink(false));
    await dispatch(setOpenCart(true));
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`hidden w-[100%] lg:flex justify-center items-center  bg-white transition-all duration-300  ${
        scrolling ? "h-[60px]" : "h-[120px]"
      }   fixed z-[99]`}
    >
      
      <div className="flex flex-row  items-center  w-[75%] h-full mx-auto bg-white">
        <div onClick={()=> navigate.push("/")} className="pl-4 w-[250px] mr-4 cursor-pointer flex items-center justify-center">
          <Image
            src={"/logo.jpg"}
            alt="logo"
            width={scrolling ? 80 : 200} // Gambar mengecil saat scroll
            height={scrolling ? 80 : 200} // Gambar mengecil saat scroll
          />
        </div>
        <div
          className={`w-full h-full flex  ${
            scrolling ? "flex-row-reverse" : "flex-col"
          } justify-between ml-3`}
        >
          <div
            className={`flex  w-full h-full items-center ${
              scrolling && "w-[70px] flex-row-reverse mr-10"
            }  justify-between`}
          >
            <h1
              className={`${
                scrolling && "hidden"
              } text-[20px] tracking-tighter font-bold`}
            >
              𝐻𝒾𝒿𝒿𝒶 𝐼𝓃𝒹𝑜𝓃𝑒𝓈𝒾𝒶
            </h1>
            <div className="flex w-[80px] justify-between items-center h-[50px] ">
              <Search size={25} cursor="pointer" />
              <div className="h-[70%] w-[1px] bg-gray-200" />
              <ShoppingCart
                size={25}
                cursor="pointer"
                onClick={handleOpenCart}
              />
            </div>
          </div>
          <div
            className={`bg-white flex items-center border-t-2 ${
              !scrolling && "h-[120px]"
            }`}
          >
            <ul className="flex gap-10 font-serif">
              <p className="text-[#d09f44]">Home</p>
              <p>Brand</p>
              <p>Information</p>
              <p>Blog</p>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
