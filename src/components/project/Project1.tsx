"use client";

import React, { useLayoutEffect, useRef } from "react";
import { projectCards } from "@/seeds/Project.seeds";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Link from "@/components/common/Link";

function Project1({ backgroundColor = "#121212" }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    // Only run GSAP/ScrollTrigger if screen is greater than 992px
    if (window.innerWidth <= 992) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    const cards = cardsRef.current;

    if (!container || cards.length === 0) return;

    // Initial state for all cards
    gsap.set(cards, {
      autoAlpha: 0,
      y: 100,
      scale: 0.95,
      filter: "blur(5px)",
    });

    // Show first card immediately with smooth animation
    gsap.to(cards[0], {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.3,
      ease: "power1.out",
    });

    // Create scroll-triggered animations
    ScrollTrigger.create({
      trigger: ".tz-project1",
      start: "top top",
      end: `+=${cards.length * 100}%`,
      pin: ".tz-project1__slides-sticky",
      pinSpacing: true,
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const totalCards = cards.length;
        const currentIndex = Math.floor(progress * totalCards);

        cards.forEach((card, index) => {
          if (index === currentIndex) {
            gsap.to(card, {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              filter: "blur(0px)",
              duration: 0.5,
              ease: "power2.out",
            });
          } else {
            gsap.to(card, {
              autoAlpha: 0,
              y: index < currentIndex ? -100 : 100,
              scale: 0.95,
              filter: "blur(5px)",
              duration: 0.5,
              ease: "power2.inOut",
            });
          }
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="tz-project1" style={{ backgroundColor }}>
      <div className="container">
        <div className="tz-section-top tz-section-top--centered">
          <div className="tz-section-subtitle">
            <span className="tz-section-subtitle__line" />
            <h4 className="text-uppercase tz-text-primary">SELECTED WORKS</h4>
          </div>
          <div className="tz-section-title tz-display-2 text-uppercase">
            Our finished projects
          </div>
        </div>
        <div className="tz-project1__slides-sticky" ref={containerRef}>
          {projectCards.map((project, index) => (
            <div
              className="tz-project1__sticky-card"
              key={index}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
            >
              <div className="tz-project1-card">
                <div className="tz-buttons d-flex justify-content-start justify-content-md-end">
                  <Link
                    href={project.link}
                    className="tz-button text-uppercase fw-medium tz-text-m"
                  >
                    View More
                  </Link>
                  <Link className="tz-button-circle" href={project.link}>
                    <i className="ph ph-arrow-up-right" />
                  </Link>
                </div>
                <div className="tz-project1-card__image-wrapper">
                  <img src={project.imageSrc} alt={project.title} className="img-fluid w-100 rounded" />
                  <span className="tz-project1-card__tag-date tz-text-m">
                    {project.year}
                    <span className="tz-project1-card__line" />
                  </span>
                </div>
                <div className="tz-project1-card__meta">
                  <h2 className="tz-project1-card__title tz-text-neutral5 text-uppercase">
                    {project.title}
                  </h2>
                  <div className="tz-project1-card__category">
                    {project.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className="tz-project1-card__tag tz-text-m"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="tz-buttons d-flex justify-content-center mt-5 mt-lg-0">
          <Link
            href="/portfolio-details"
            className="tz-button text-uppercase fw-medium tz-text-m"
          >
            VIEW ALL PROJECTS
          </Link>
          <Link className="tz-button-circle" href="/portfolio-details" aria-label="View All Projects">
            <i className="ph ph-arrow-up-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Project1;
