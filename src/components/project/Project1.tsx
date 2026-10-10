"use client";

import React, { useEffect, useRef } from "react";
import Link from "@/components/common/Link";

export interface ProjectCard {
  link: string;
  imageSrc: string;
  year: string;
  title: string;
  categories: string[];
}

function Project1({
  projects,
  backgroundColor = "#0b0f19",
}: {
  projects: ProjectCard[];
  backgroundColor?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // The stacked-card animation is desktop-only, so GSAP is only downloaded there.
    if (window.innerWidth <= 992) return;

    const container = containerRef.current;
    const cards = cardsRef.current;
    if (!container || cards.length === 0) return;

    let cancelled = false;
    let trigger: { kill: () => void } | undefined;

    Promise.all([import("gsap"), import("gsap/dist/ScrollTrigger")]).then(
      ([{ default: gsap }, { default: ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

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
        trigger = ScrollTrigger.create({
          trigger: container.closest(".tz-project1") ?? container,
          start: "top top",
          end: `+=${cards.length * 100}%`,
          pin: container,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self) => {
            const totalCards = cards.length;
            const currentIndex = Math.min(Math.floor(self.progress * totalCards), totalCards - 1);

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
      }
    );

    return () => {
      cancelled = true;
      trigger?.kill();
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
          {projects.map((project, index) => (
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
                  <Link className="tz-button-circle" href={project.link} aria-label={`View ${project.title}`}>
                    <i className="ph ph-arrow-up-right" aria-hidden="true" />
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
