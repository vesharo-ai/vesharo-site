import React from "react";

interface Header2SlideProps {
  text: string;
}

const Header2Slide: React.FC<Header2SlideProps> = ({ text }) => {
  return (
    <div className=" tz-text-slider__item">
      <img
        src="/images/banner/text-slider-icon2.png"
        alt="icon"
        className="tz-text-slider__icon"
      />
      <h3 className="tz-text-slider__text tz-text-secondary">{text}</h3>
    </div>
  );
};

export default Header2Slide;
