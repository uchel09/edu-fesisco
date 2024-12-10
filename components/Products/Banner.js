"use client";
import React from "react";
import BannerCard from "../custom/Card/BannerCard";

const Banner = () => {
  const eventImages = [
    "https://hijja.sistemtoko.com/img/user/hijja/media/88jcpq_banner3.jpg",
    "https://hijja.sistemtoko.com/img/user/hijja/media/bsHxJs_banner2.jpg",
    "https://hijja.sistemtoko.com/img/user/hijja/media/u8DEdD_banner1.jpg",
  ];
  return (
    <div className="w-full gap-10 flex items-center justify-between">
      {eventImages.map((item, index) => {
        return <BannerCard key={index} imageBanner={item} />;
      })}
    </div>
  );
};

export default Banner;
