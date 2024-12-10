import React from "react";
import MySlider from "@/components/custom/Swiper/MySlider";
import Banner from "@/components/Products/Banner";
import Breadcrumb from "@/components/custom/Breadcrumb/Breadcrumb";
import ProductsView from "@/components/Products/Products";
import Footer from "@/components/custom/Footer/footer";

const HomePage = () => {
  return (
    <>
      <div className="w-[100%] md:mt-[42vh] mt-[12vh]  lg:mt-[17vh]">
        <MySlider />
        {/* Event Banner */}
        <div className="w-[80%] mx-auto mt-[50px]">
          <Banner />
          <Breadcrumb />
          <ProductsView />
        </div>

        {/* BreadCrumb  */}
        {/* Todo  */}
        {/* products */}
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
