"use client";

import React, { useEffect, useState, useRef } from "react";
import { siteConfig } from "@/config/site";
import useWindowWidth from "@/hooks/useWindowWidth";
import Link from "@/components/common/Link";

export default function Nav({
  setShowOffcanvas,
}: {
  setShowOffcanvas?: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const windowWidth = useWindowWidth();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const navRef = useRef<HTMLElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Graceful hover handlers with 180ms bridge to prevent flickering
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    if (windowWidth >= 1200) {
      setServicesOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (windowWidth >= 1200) {
      closeTimeoutRef.current = setTimeout(() => {
        setServicesOpen(false);
      }, 180);
    }
  };

  // Close dropdown on Esc key or click outside
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const handleServiceClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setServicesOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setServicesOpen(false);
    setShowOffcanvas?.(false);
  };

  return (
    <nav ref={navRef} className="tz-nav-links d-flex tz-main-menu" aria-label="Main Navigation">
      <ul className="d-inline-flex tz-ml-auto position-relative align-items-center mb-0 list-unstyled">
        {siteConfig.nav.map((item) => {
          const isActive = currentPath === item.href;

          if (item.hasDropdown && item.title === "Services") {
            return (
              <li
                key={item.title}
                className={`tz-services-nav ${servicesOpen ? "is-open" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  type="button"
                  className={`tz-services-trigger ${isActive ? "active" : ""}`}
                  aria-expanded={servicesOpen}
                  aria-controls="services-mega-menu"
                  onClick={handleServiceClick}
                >
                  <span>Services</span>
                  <i className="ph ph-caret-down" aria-hidden="true" />
                </button>

                <div
                  id="services-mega-menu"
                  className="tz-mega"
                  role="region"
                  aria-label="Services"
                  hidden={!servicesOpen}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="tz-mega__main">
                    <div className="tz-mega__head">
                      <div>
                        <p className="tz-mega__eyebrow">What we build</p>
                        <p className="tz-mega__lead">
                          {siteConfig.services.length} core capabilities, delivered by senior engineers.
                        </p>
                      </div>
                      <Link href="/service-details" className="tz-mega__all" onClick={closeMenu}>
                        All services <i className="ph ph-arrow-right" aria-hidden="true" />
                      </Link>
                    </div>

                    <ul className="tz-mega__grid">
                      {siteConfig.services.map((service) => (
                        <li key={service.id}>
                          <Link href={service.href} className="tz-mega__service" onClick={closeMenu}>
                            <span className="tz-mega__icon" aria-hidden="true">
                              <i className={`ph ${service.icon}`} />
                            </span>
                            <span className="tz-mega__text">
                              <span className="tz-mega__title">{service.title}</span>
                              <span className="tz-mega__desc">{service.shortDescription}</span>
                            </span>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href="/contact" className="tz-mega__service tz-mega__service--custom" onClick={closeMenu}>
                          <span className="tz-mega__icon" aria-hidden="true">
                            <i className="ph ph-plus" />
                          </span>
                          <span className="tz-mega__text">
                            <span className="tz-mega__title">Something custom?</span>
                            <span className="tz-mega__desc">Tell us the problem — we’ll scope the right build.</span>
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <aside className="tz-mega__side">
                    <p className="tz-mega__eyebrow">Our products</p>
                    <ul className="tz-mega__products">
                      {siteConfig.portfolio.map((item) => (
                        <li key={item.id}>
                          <Link href={item.href} className="tz-mega__product" onClick={closeMenu}>
                            <span className="tz-mega__text">
                              <span className="tz-mega__title">{item.title}</span>
                              <span className="tz-mega__desc">{item.tagline}</span>
                            </span>
                            <i className="ph ph-arrow-up-right" aria-hidden="true" />
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <div className="tz-mega__cta">
                      <p className="tz-mega__cta-text">Free 30-minute scoping call with our engineering leads.</p>
                      <Link href="/contact" className="tz-mega__cta-btn" onClick={closeMenu}>
                        Book a free call <i className="ph ph-arrow-right" aria-hidden="true" />
                      </Link>
                    </div>
                  </aside>
                </div>
              </li>
            );
          }

          return (
            <li key={item.title}>
              <Link
                href={item.href}
                className={isActive ? "active" : ""}
                aria-current={isActive ? "page" : undefined}
                onClick={closeMenu}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
