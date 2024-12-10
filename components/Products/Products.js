"use client";

import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductCard from "../custom/Card/ProductCard";

const ProductsView = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const result = await axios.get(
          "https://sistemtoko.com/public/demo/product?page=1&sorting=Lates&categories=all&search_name=none"
        );
        setProducts(result.data.aaData); // Simpan data produk.
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProduct();
  }, []); 



  return (
    <div className="w-full flex flex-wrap gap-5 md:gap-2 lg:gap-5 justify-center md:justify-between mt-10">
      {products ? (
        <>
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductsView;
