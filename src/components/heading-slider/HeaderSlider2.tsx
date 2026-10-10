import React from "react";
import { headingTexts } from "@/config/marquee";

export default function HeaderSlider2() {
  // Duplicate array 3 times for seamless infinite reverse scroll
  const items = [...headingTexts, ...headingTexts, ...headingTexts];

  return (
    <div className="tz-text-slider2 tz-marquee-container" aria-label="Vesharo Engineering Pillars">
      <div className="tz-marquee-track tz-marquee-track--right">
        {items.map((text, idx) => (
          <div key={idx} className="tz-marquee-item tz-marquee-item--cyan">
            <span className="tz-marquee-bullet tz-marquee-bullet--cyan" aria-hidden="true">✦</span>
            <span className="tz-marquee-text">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
