/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect } from "react";

const BannerCard = ({imageBanner}) => {


  return <div className=" cursor-pointer">
     <img src={imageBanner}  alt="image-banner"/>
  </div>;
};

export default BannerCard;
