"use client";

import React, { useEffect, useState } from "react";

const ScrollTop = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`scroll-top-btn ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="-1 -1 42 42"
        className="scroll-top-progress"
      >
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="#777 "
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="20"
          cy="20"
          r="18"
          stroke="#fff"
          strokeWidth="2"
          fill="none"
          strokeDasharray={`${scrollProgress * 1.13}, 200`}
          transform="rotate(-90 20 20)"
        />
        <path
          d="M20 25V15M15 20L20 15L25 20"
          stroke="#000"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    </button>
  );
};

export default ScrollTop;
