"use client";

import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
import "./AllSlideStyle.css";

const SideSlide1 = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
    
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cars"
          className="img-fluid h-80"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cars"
          className="h-80 img-fluid"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.unsplash.com/photo-1537151377170-9c19a791bbea?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Cars"
          className="h-80 img-fluid"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SideSlide1;
