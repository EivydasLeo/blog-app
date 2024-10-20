"use client";
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { PhotoType, SlideType } from "@/types/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProfileSlider = ({ slides }: SlideType) => {
  return (
    <Swiper
      modules={[Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide: PhotoType) => (
        <SwiperSlide key={slide._id}>
          <Image
            src={slide.image.asset.url}
            alt={slide.alt}
            width={500}
            height={600}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProfileSlider;