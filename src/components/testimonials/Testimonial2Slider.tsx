"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { testimonial2Items } from "../../seeds/Testimonial.seeds";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

function Testimonial2Slider() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);

  return (
    <div className="tz-testimonial2__slider swiper overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Scrollbar]}
        spaceBetween={0}
        speed={1000}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        loop={true}
        navigation={{
          enabled: true,
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        scrollbar={{
          el: scrollbarRef.current,
          draggable: true,
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {testimonial2Items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="tz-testimonial2__card">
              <div className="row g-4">
                <div className="col-xl-3">
                  <div className="tz-testimonial2-trustpoint">
                    <div className="tz-testimonial2-trustpoint__top">
                      <img
                        className="svg tz-testimonial2-trustpoint__shape1"
                        src="/images/testimonial/trust.svg"
                        alt=""
                      />
                      <span className="tz-testimonial2-trustpoint__label">
                        Trustpilot
                      </span>
                    </div>
                    <div className="tz-testimonial2-trustpoint__star">
                      <i className="ph-fill ph-star" />
                      <i className="ph-fill ph-star" />
                      <i className="ph-fill ph-star" />
                      <i className="ph-fill ph-star" />
                      <i className="ph-fill ph-star-half" />
                    </div>
                    <p className="tz-testimonial2-trustpoint__desc tz-text-m">
                      Reviews 25,575
                    </p>
                    <div className="tz-total-review-chip">
                      <img src="/images/testimonial/clients-1.png" alt="" />
                      <img src="/images/testimonial/clients-2.png" alt="" />
                      <img src="/images/testimonial/clients-3.png" alt="" />
                      <img src="/images/testimonial/clients-2.png" alt="" />
                      <div className="tz-total-review-chip__total tz-text-m">
                        40k
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9">
                  <div className="tz-testimonial2-review">
                    <div className="tz-testimonial2-review__image">
                      <img
                        src={item.reviewImageSrc}
                        alt="client review image"
                      />
                    </div>
                    <div className="tz-testimonial2-review__body">
                      <div className="tz-testimonial2-review__body-star">
                        <i className="ph-fill ph-star" />
                        <i className="ph-fill ph-star" />
                        <i className="ph-fill ph-star" />
                        <i className="ph-fill ph-star" />
                        <i className="ph-fill ph-star-half" />
                      </div>
                      <p className="tz-testimonial2-review__body-desc tz-text-l">
                        {item.description}
                      </p>
                      <div className="tz-testimonial2-review__body-author">
                        <h4 className="tz-testimonial2-review__name">
                          {item.name}
                        </h4>
                        <p className="tz-text-m tz-testimonial2-review__location">
                          {item.date}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="tz-testimonial2__slider-bottom">
        <div className="swiper-scrollbar" ref={scrollbarRef} />
        <div className="tz-testimonial2__slider-navigation">
          <div
            className="tz-testimonial2__slider-prev tz-slider-nav"
            ref={prevRef}
          >
            <i className="ph ph-caret-left" />
          </div>
          <div
            className="tz-testimonial2__slider-next tz-slider-nav"
            ref={nextRef}
          >
            <i className="ph ph-caret-right" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial2Slider;
