"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import img03 from "@/assets/images/03.jpg";
import img02 from '@/assets/images/02.jpg'

const Home = () => {
  return (
    <div className="swiper-block h-[700px]">
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation, Keyboard]}
        className="mySwiper h-full"
      >
        <SwiperSlide className="">
          <Image
            src={img02}
            className="w-full h-full object-cover"
            alt="Picture of the author"
          />
        </SwiperSlide>
        <SwiperSlide className="">
          <Image
            src={img03}
            className="w-full h-full object-cover"
            alt="Picture of the author"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
