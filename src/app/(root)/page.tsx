"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import img02 from "/public/images/02.jpg";
import img03 from "/public/images/03.jpg";

// export const metadata = {
//   title: "Home",
// };

const Home = () => {
  return (
    <div className="swiper-block h-[700px] relative">
      <Swiper
        pagination={true}
        modules={[Pagination, Navigation, Keyboard]}
        className="mySwiper h-full"
      >
        <SwiperSlide className="swiperSlide">
          <Image
            src={img02}
            className="w-full h-full object-cover"
            alt="Picture of the author"
          />
          <div className="overlay"></div>
        </SwiperSlide>
        <SwiperSlide className="swiperSlide">
          <Image
            src={img03}
            className="w-full h-full object-cover"
            alt="Picture of the author"
          />
          <div className="overlay"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
