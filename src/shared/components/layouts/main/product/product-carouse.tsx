"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import React from "react";
import Image from "next/image";
import img02 from "/public/images/02.jpg";
import img03 from "/public/images/03.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/ui/carousel";
import { Card, CardContent } from "@/shared/ui/card";

const ProductCarousel = () => {
  return (
    // <div className="swiper-block h-[400px] w-full relative mb-10">
    //   <Swiper
    //     pagination={true}
    //     navigation={true}
    //     keyboard={true}
    //     modules={[Pagination, Navigation, Keyboard]}
    //     className="w-full h-full"
    //   >
    //     <SwiperSlide className="swiperSlide relative ">
    //       <Image
    //         fill
    //         src={img02}
    //         className=" object-cover"
    //         alt="Picture of the author"
    //       />
    //       <div className="overlay"></div>
    //     </SwiperSlide>
    //     <SwiperSlide className="swiperSlide relative ">
    //       <Image
    //         fill
    //         src={img03}
    //         className="  object-cover"
    //         alt="Picture of the author"
    //       />
    //       <div className="overlay"></div>
    //     </SwiperSlide>
    //   </Swiper>
    // </div>
    <Carousel className="w-full max-w-xs mb-4">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
