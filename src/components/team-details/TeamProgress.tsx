"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface SkillItem {
  name: string;
  percentage: number;
}

interface TeamProgressProps {
  title: string;
  description: string;
  skills: SkillItem[];
}

function TeamProgress({ title, description, skills }: TeamProgressProps) {
  const progressBarsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    progressBarsRef.current.forEach((bar, index) => {
      gsap.fromTo(
        bar,
        { width: "0%" },
        {
          width: `${skills[index].percentage}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [skills]);

  return (
    <div className="col-md-5">
      <h2 className="tz-team-details__title tz-text-neutral5 text-uppercase">
        {title}
      </h2>
      <p className="tz-team-details__desc tz-text-neutral6 tz-text-l fw-light">
        {description}
      </p>
      <div className="tz-team-details-skill">
        {skills.map((skill, index) => (
          <div key={index} className="tz-team-details-skill__item">
            <h5 className="tz-team-details-skill__label">
              <span>{skill.name}</span>
              <span>{skill.percentage}%</span>
            </h5>
            <div className="progress">
              <div
                className="progress-bar"
                ref={(el) => {
                  if (el) progressBarsRef.current[index] = el;
                }}
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamProgress;
