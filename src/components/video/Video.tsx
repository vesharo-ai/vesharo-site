import Link from "@/components/common/Link";
import React from "react";

function Video({ bgColor = "#121212" }: { bgColor?: string }) {
  return (
    <div className="tz-video1" style={{ backgroundColor: bgColor }}>
      <div className="container">
        <div className="tz-video1__wrapper">
          <img
            src="/images/video/video-img1.jpg"
            alt="img"
            className="tz-video1__image"
          />
          <Link
            className="tz-button__ripple popup-video"
            href="https://www.youtube.com/watch?v=MLpWrANjFbI"
          >
            <i className="ph-fill ph-play" />
          </Link>
          <div className="tz-video1__circle">
            <img
              src="/images/video/video-round-text.png"
              alt="img"
              className="tz-video1__circle-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Video;
