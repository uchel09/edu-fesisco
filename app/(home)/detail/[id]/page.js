"use client"
import axios from "axios";
import React, { useEffect } from "react";

const DetailProductPage = ({params:{id}}) => {
  useEffect(()=>{
  const getDetailProduct = async()=>{
      try {
        const res = await axios.get(
          `https://sistemtoko.com/public/demo/single/${id}`
        );
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
  }
  getDetailProduct()
  },[id])
  return (
    <>
      <div className="w-[100%] md:mt-[42vh]  mt-[12vh] h-[90vh] overflow-y-auto   lg:mt-[17vh]">
        Product Detail Page {id}
      </div>
      <footer className="bg-green-500">Footer</footer>
    </>
  );
};

export default DetailProductPage;
