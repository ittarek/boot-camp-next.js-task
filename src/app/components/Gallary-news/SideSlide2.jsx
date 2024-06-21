"use client"
import React from "react";
import { useEffect } from "react";
import Swiper, { Navigation, Pagination } from "swiper";
// import "./AllSlideStyle.css";
const SideSlide2 = () => {
  useEffect(() => {
    new Swiper(".mySwiper2", {
      speed: 900,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }, []);
  return (
    <section>
      <div class="swiper mySwiper2" style={{height: "300px"}}>
        <div class="swiper-wrapper">
          <div class="swiper-slides">
            <img
              src="https://plus.unsplash.com/premium_photo-1683134474265-7bf3848ffbd9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cars"
              class="img-fluid"
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://images.unsplash.com/photo-1511737561643-649a082cd8a2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cars"
              class="img-fluid "
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://images.unsplash.com/photo-1640349292911-7c1c4d9dd4e1?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cars"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="swiper-pagination"></div>

        <div class="swiper-button-prev" aria-label="previous slide"></div>
        <div class="swiper-button-next" aria-label="next slide"></div>
      </div>
    </section>
  );
};

export default SideSlide2;
