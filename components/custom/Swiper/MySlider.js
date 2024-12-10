"use client";

import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Tombol Kustom untuk Navigasi
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 left-[80px] transform -translate-y-1/2 border-2 border-white bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <ArrowLeft size={25} />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute top-1/2 right-[80px] transform -translate-y-1/2 border-2 border-white bg-opacity-50 text-white rounded-full w-10 h-10 flex items-center justify-center z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
  >
    <ArrowRight size={25} />
  </button>
);

function MySlider() {
  const [currentSlide, setCurrentSlide] = useState(0); // Menyimpan slide aktif

  const settings = {
    dots: false, // Nonaktifkan dots bawaan react-slick
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1200,
    lazyLoad: "ondemand",
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    beforeChange: (_, next) => setCurrentSlide(next), // Update slide aktif sebelum transisi
  };

  const slides = [
    "https://hijja.sistemtoko.com/img/user/hijja/media/mGMfXL_slide2.jpg",
    "https://hijja.sistemtoko.com/img/user/hijja/media/F3na1Q_slide3.jpg",
    "https://hijja.sistemtoko.com/img/user/hijja/media/nVHxmb_slide1.jpg",
  ];

  return (
    <div className="relative w-full group">
      {/* Slider */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-[600px] object-cover"
            />
          </div>
        ))}
      </Slider>

      {/* Dots Manual */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)} // Navigasi ke slide tertentu
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-black" : "bg-green-400"
            } transition duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default MySlider;
