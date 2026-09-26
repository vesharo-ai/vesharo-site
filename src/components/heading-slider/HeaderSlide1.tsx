import React from "react";

interface HeaderSlide1Props {
  text: string;
}

const HeaderSlide1: React.FC<HeaderSlide1Props> = ({ text }) => {
  return (
    <div className=" tz-text-slider__item">
      <img
        src="/images/banner/text-slider-icon1.png"
        alt="icon"
        className="tz-text-slider__icon"
      />
      <h3 className="tz-text-slider__text tz-text-neutral4">{text}</h3>
    </div>
  );
};

export default HeaderSlide1;
