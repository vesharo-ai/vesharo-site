"use client";

import React from "react";
import Header2Slide from "./Header2Slide";
import { headingTexts } from "../../seeds/HeadingSlider1.seeds";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function HeaderSlider2() {
  return (
    <>
      <div className="tz-text-slider2 ">
        <div className="swiper-wrapper">
          <Swiper
            className="tz-brand2-slider"
            modules={[Autoplay]}
            spaceBetween={0}
            speed={4000}
            slidesPerView={3}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            loop={true}
            freeMode={true}
            breakpoints={{
              320: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 2,
              },
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              992: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 7,
              },
            }}
          >
            {headingTexts.map((text, index) => (
              <SwiperSlide key={index}>
                <Header2Slide text={text} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default HeaderSlider2;
