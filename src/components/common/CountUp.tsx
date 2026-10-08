"use client";

import React, { useEffect, useState } from "react";

/**
 * Animates a number up to `end` when it scrolls into view.
 * Respects prefers-reduced-motion by rendering the final value immediately.
 */
const CountUp = ({
  end,
  enableScrollSpy = false,
}: {
  end: number;
  enableScrollSpy?: boolean;
}) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setValue(end);
      return;
    }

    let frame = 0;
    let observer: IntersectionObserver | undefined;

    const run = () => {
      const start = performance.now();
      const duration = 1200;
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(end * eased));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    if (enableScrollSpy && typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            run();
            observer?.disconnect();
          }
        },
        { threshold: 0.4 },
      );
      const target = document.getElementById(`countup-${end}`) ?? document.body;
      observer.observe(target);
    } else {
      run();
    }

    return () => {
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [end, enableScrollSpy]);

  return (
    <span id={`countup-${end}`} className="tz-countup">
      {value}
    </span>
  );
};

export default CountUp;