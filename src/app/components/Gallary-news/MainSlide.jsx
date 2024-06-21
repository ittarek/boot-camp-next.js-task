"use client"
import "./AllSlideStyle.css";
import React, { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";

const MainSlide = () => {
  //  useEffect(() => {
  //    new Swiper("#js-swiper-hotels", {
  //      speed: 900,
  //      loop: true,
  //      pagination: {
  //        el: ".swiper-pagination",
  //        clickable: true,
  //      },
  //      navigation: {
  //        nextEl: ".swiper-button-next",
  //        prevEl: ".swiper-button-prev",
  //      },
  //    });
  //  }, []);

  return (
  
      <Swiper  modules={[Navigation, Pagination]}
    
      navigation
      pagination={{ clickable: true }}
     
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}>

<SwiperSlide>  <div className="swiper-slide">
          <div className="c-swiper__text">
            <div className="c-swiper__title">Sweet Pc Desk</div>
            <a href="#" className="c-swiper__link">
              View Details
            </a>
          </div>
          <img
            className="h-100"
            src="https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        </SwiperSlide>
        
<SwiperSlide>   
  
  
  <div className="swiper-slide">
          <div className="c-swiper__text">
            <div className="c-swiper__title">Sony Bluetooth HeadPhone</div>
            <a href="#" className="c-swiper__link">
              View Details
            </a>
          </div>
          <img
            className="h-100"
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div></SwiperSlide>
        <SwiperSlide> <div className="swiper-slide">
          <div className="c-swiper__text">
            <div className="c-swiper__title">Brad Board</div>
            <a href="#" className="c-swiper__link">
              View Details
            </a>
          </div>
          <img
            className="h-100"
            src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
</SwiperSlide>
<SwiperSlide> <div className="swiper-slide">
          <div className="c-swiper__text">
            <div className="c-swiper__title">Sweet Technology</div>
            <a href="#" className="c-swiper__link">
              View Details
            </a>
          </div>
          <img
            className="h-100"
            src="https://plus.unsplash.com/premium_photo-1661304671477-37c77d0c6930?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
  
</SwiperSlide>
      </Swiper>
    
  );
};

export default MainSlide;
