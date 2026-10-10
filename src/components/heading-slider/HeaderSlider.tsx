import React from "react";
import { headingTexts } from "@/config/marquee";

export default function HeaderSlider() {
  // Duplicate array 3 times to ensure smooth, seamless infinite scrolling on ultrawide displays
  const items = [...headingTexts, ...headingTexts, ...headingTexts];

  return (
    <div className="tz-text-slider tz-marquee-container" aria-label="Vesharo Specializations">
      <div className="tz-marquee-track tz-marquee-track--left">
        {items.map((text, idx) => (
          <div key={idx} className="tz-marquee-item">
            <span className="tz-marquee-bullet" aria-hidden="true">✦</span>
            <span className="tz-marquee-text">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
