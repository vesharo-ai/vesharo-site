"use client";

import React, { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { testimonialSlides } from "../../seeds/Testimonial.seeds";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import type { NavigationOptions, ScrollbarOptions } from "swiper/types";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

function Testimonial1Slider() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  return (
    <div className=" tz-testimonial1__slider">
      <div className="swiper-wrapper">
        <Swiper
          modules={[Autoplay, Navigation, Scrollbar]}
          spaceBetween={0}
          speed={1000}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            reverseDirection: false,
          }}
          loop={true}
          navigation={
            {
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            } as NavigationOptions
          }
          scrollbar={
            {
              el: scrollbarRef.current,
              draggable: true,
            } as ScrollbarOptions
          }
          onSwiper={setSwiper}
          onInit={(swiper) => {
            if (
              swiper.params.navigation &&
              typeof swiper.params.navigation !== "boolean"
            ) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
            if (
              swiper.params.scrollbar &&
              typeof swiper.params.scrollbar !== "boolean"
            ) {
              swiper.params.scrollbar.el = scrollbarRef.current;
              swiper.scrollbar.init();
              swiper.scrollbar.updateSize();
            }
          }}
        >
          {testimonialSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-slide">
                <div className="tz-testimonial1-card">
                  <div className="row g-4 d-flex justify-content-between">
                    <div className="col-sm-5">
                      <div className="tz-testimonial1-card__image">
                        <img src={slide.imageSrc} alt={slide.title} />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="tz-testimonial1-card__info">
                        <p className="tz-testimonial1-card__text tz-text-xl tz-text-neutral6">
                          {slide.text}
                        </p>
                        <h3 className="tz-testimonial1-card__title tz-text-neutral5">
                          {slide.title}
                        </h3>
                        <p className="tz-testimonial1-card__designation tz-text-xl tz-text-neutral6">
                          {slide.designation}
                        </p>
                        <img
                          src="/images/testimonial/testimonial1-quote.svg"
                          alt="shape"
                          className="tz-testimonial1-card__quote"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="tz-testimonial1__slider-bottom">
        <div className="tz-testimonial1__slider-navigation">
          <button
            type="button"
            className="tz-testimonial1__slider-prev tz-slider-nav"
            ref={prevRef}
          >
            <i className="ph ph-caret-left" />
          </button>
          <button
            type="button"
            className="tz-testimonial1__slider-next tz-slider-nav"
            ref={nextRef}
          >
            <i className="ph ph-caret-right" />
          </button>
        </div>
        <div className="swiper-scrollbar" ref={scrollbarRef} />
      </div>
    </div>
  );
}

export default Testimonial1Slider;
