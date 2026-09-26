"use client";

import React from "react";
import { project2Cards } from "../../seeds/Project.seeds";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "@/components/common/Link";

function Project2Slider1() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1}
      spaceBetween={10}
      speed={4000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: false,
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
      className="project2__slider"
    >
      {project2Cards.map((card, index) => (
        <SwiperSlide key={index}>
          <div className="tz-project2-card">
            <img
              className="tz-project2-card__image"
              src={card.image}
              alt={card.title}
            />
            <div className="tz-project2-card__content">
              <div className="tz-project2-card__category">
                {card.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="tz-project2-card__tag tz-text-s text-uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link href={card.link}>
                <img
                  src="/images/project/project2-arrow.jpg"
                  alt="arrow"
                  className="tz-project2-card__arrow"
                />
              </Link>
              <h2 className="tz-project2-card__title text-uppercase tz-text-neutral1">
                {card.title}
              </h2>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Project2Slider1;
