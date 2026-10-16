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
    // Check user accessibility preference for reduced motion
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // The stacked-card animation is desktop-only and disabled for reduced motion
    if (window.innerWidth <= 992 || prefersReducedMotion) return;

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
    <section className="tz-project1" style={{ backgroundColor }} aria-label="Featured Case Studies">
      <div className="container">
        <div className="tz-section-top tz-section-top--centered mb-4 mb-lg-5">
          <div className="tz-section-subtitle mb-2">
            <span className="tz-section-subtitle__line" />
            <h2 className="tz-text-primary fw-semibold" style={{ fontSize: "0.85rem", letterSpacing: "0.05em" }}>
              Featured case studies
            </h2>
          </div>
          <div className="tz-section-title tz-display-2" style={{ fontFamily: "var(--font-family-heading)", letterSpacing: "-0.02em" }}>
            Real products engineered for production scale
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
                    className="tz-button fw-semibold tz-text-m"
                  >
                    Read case study
                  </Link>
                  <Link className="tz-button-circle" href={project.link} aria-label={`Read case study: ${project.title}`}>
                    <i className="ph ph-arrow-up-right" aria-hidden="true" />
                  </Link>
                </div>
                <div className="tz-project1-card__image-wrapper">
                  <img src={project.imageSrc} alt={`${project.title} product screen mockup`} className="img-fluid w-100 rounded" width={600} height={380} loading="lazy" decoding="async" />
                  <span className="tz-project1-card__tag-date tz-text-m">
                    {project.year}
                    <span className="tz-project1-card__line" />
                  </span>
                </div>
                <div className="tz-project1-card__meta">
                  <h3 className="tz-project1-card__title tz-text-neutral5 fw-bold" style={{ fontFamily: "var(--font-family-heading)" }}>
                    {project.title}
                  </h3>
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
            href="/portfolio"
            className="tz-button fw-semibold tz-text-m"
          >
            View all case studies
          </Link>
          <Link className="tz-button-circle" href="/portfolio" aria-label="View all case studies">
            <i className="ph ph-arrow-up-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Project1;
