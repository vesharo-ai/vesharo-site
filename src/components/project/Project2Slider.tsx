"use client";

import React from "react";
import { project2SliderData } from "../../seeds/Project.seeds";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "@/components/common/Link";

function Project2Slider() {
  return (
    <div className="tz-project2__slider2 swiper">
      <div className="swiper-wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={10}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          loop={true}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
            1680: {
              slidesPerView: 4,
            },
          }}
          className="project2__slider2"
        >
          {project2SliderData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="tz-project2-card">
                <img
                  className="tz-project2-card__image"
                  src={item.projectSrc}
                  alt={item.title}
                />
                <div className="tz-project2-card__content">
                  <div className="tz-project2-card__category">
                    {item.category.map((cat, catIndex) => (
                      <span
                        key={catIndex}
                        className="tz-project2-card__tag tz-text-s text-uppercase"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <Link href="/project-details">
                    <img
                      src="/images/project/project2-arrow.jpg"
                      alt="arrow"
                      className="tz-project2-card__arrow"
                    />
                  </Link>
                  <h2 className="tz-project2-card__title text-uppercase tz-text-neutral1">
                    {item.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Project2Slider;
