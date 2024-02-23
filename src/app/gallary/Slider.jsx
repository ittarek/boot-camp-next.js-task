"use client"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "./slider.css";

// import required modules
import { EffectCoverflow,Autoplay } from 'swiper/modules';
import Image from 'next/image';


const Slider = () => {
    return (
      <div className="mx-auto ">
        {" "}
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmV3cyUyMHBhcGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1607031767660-1685ab36ec8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1585282263861-f55e341878f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1593789198777-f29bc259780e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1453873623425-04e3561289aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80"
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1585282263861-f55e341878f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1557804506-e969d7b32a4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1445&q=80"
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1585282263861-f55e341878f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt="Picture of the author"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={500}
              height={500}
              src="https://images.unsplash.com/photo-1502772066658-3006ff41449b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1593&q=80"
              alt="Picture of the author"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Slider;