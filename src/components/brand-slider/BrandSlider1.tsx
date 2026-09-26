"use client";

import React from "react";
import { brandImages } from "../../seeds/Brand.seeds";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function BrandSlider1() {
  return (
    <>
      <div className="tz-testimonial1-brands tz-pt-lg-120 tz-pt-60">
        <p className="tz-testimonial1-brands__title tz-text-xl tz-text-neutral5 text-uppercase">
          TRUSTED BY <br />
          EXCEPTIONAL BRANDS
        </p>
        <div className="tz-testimonial1-brands__slider">
          <div className="brand-carousel">
            <div className="swiper-wrapper d-flex align-items-center">
              <Swiper
                modules={[Autoplay]}
                spaceBetween={0}
                speed={4000}
                slidesPerView={3}
                autoplay={{
                  delay: 0,
                  disableOnInteraction: false,
                  reverseDirection: false,
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
                {brandImages.map((brand, index) => (
                  <SwiperSlide key={index}>
                    <div key={index} className="swiper-slide">
                      <img
                        src={brand.imageSrc}
                        alt="Brand Logo"
                        className="tz-testimonial1-brands__slider-img"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BrandSlider1;
