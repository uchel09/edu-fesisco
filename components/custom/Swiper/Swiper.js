/* eslint-disable @next/next/no-img-element */
"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import "./slider.css";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Slider2 = () => {
  const images = [
    {
      image:
        "https://hijja.sistemtoko.com/img/user/hijja/media/mGMfXL_slide2.jpg",
    },
    {
      image:
        "https://hijja.sistemtoko.com/img/user/hijja/media/F3na1Q_slide3.jpg",
    },
    {
      image:
        "https://hijja.sistemtoko.com/img/user/hijja/media/nVHxmb_slide1.jpg",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % images.length;
    setActiveIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(prevIndex);
  };

  return (
    <section className="w-full h-[70vh]">
      <div className="w-full h-[70vh]">
        <Carousel
          className="carousel"
          interval={3000}
          autoPlay

          infiniteLoop
          //   centerSlidePercentage={55}
          showThumbs={false}
          showStatus={false}
          showArrows={true}
          selectedItem={activeIndex}
          transitionTime={800}
          width={"100%"}
        >
          {images.map((item, index) => (
            <div key={index} className="carousel-item">
              <img
                src={item.image}
                alt={`Slide ${index + 1}`}
                className="carousel-image"
                style={{ width: index === activeIndex ? "100%" : "100%" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Slider2;
