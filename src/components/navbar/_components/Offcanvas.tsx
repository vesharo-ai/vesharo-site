"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/config/site";
import Link from "@/components/common/Link";

export default function Offcanvas({
  showOffcanvas,
  setShowOffcanvas,
}: {
  showOffcanvas: boolean;
  setShowOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const offcanvasRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  // Lock body scroll when offcanvas is active
  useEffect(() => {
    if (showOffcanvas) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOffcanvas]);

  // Manage focus trap and restore focus on close
  useEffect(() => {
    if (showOffcanvas) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      // Focus first focusable element
      setTimeout(() => {
        const closeBtn = offcanvasRef.current?.querySelector<HTMLElement>(".tz-offcanvas-close-btn");
        if (closeBtn) {
          closeBtn.focus();
        }
      }, 50);
    } else {
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    }
  }, [showOffcanvas]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setShowOffcanvas(false);
      return;
    }
    if (e.key === "Tab") {
      const focusables = offcanvasRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  };

  const closeMenu = () => {
    setShowOffcanvas(false);
  };

  return (
    <div
      ref={offcanvasRef}
      id="mobile-offcanvas-menu"
      className={`tz-offcanvas ${showOffcanvas ? "opened" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      onKeyDown={handleKeyDown}
      style={{
        visibility: showOffcanvas ? "visible" : "hidden",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="tz-offcanvas__wrapper pt-4 d-flex flex-column justify-content-between h-100">
        <div>
          {/* Top Bar */}
          <div className="tz-offcanvas__top mb-4 d-flex align-items-center justify-content-between">
            <Link href="/" onClick={closeMenu} aria-label="Vesharo Home">
              <img src="/brand/logo.svg" alt="Vesharo" width="138" height="32" />
            </Link>
            <button
              type="button"
              className="tz-button d-inline-flex tz-offcanvas-btn tz-offcanvas-close-btn"
              onClick={closeMenu}
              aria-label="Close menu"
              style={{ minWidth: "44px", minHeight: "44px" }}
            >
              <i className="ph ph-x" style={{ fontSize: "20px" }} />
            </button>
          </div>

          <div className="mb-4">
            <span
              className="text-uppercase fw-semibold"
              style={{ fontSize: "11px", letterSpacing: "0.08em", color: "var(--vesharo-electric-accent, #00d2ff)" }}
            >
              {siteConfig.tagline}
            </span>
            <p className="text-muted tz-text-s mt-1 mb-0">
              Custom software engineering, intelligent AI automation, and cloud platforms.
            </p>
          </div>

          {/* Navigation Links with minimum 44px tap targets */}
          <nav aria-label="Mobile Menu Links" className="tz-mobile-nav">
            <ul className="list-unstyled mb-0 d-flex flex-column gap-1">
              <li>
                <Link
                  href="/"
                  className="d-flex align-items-center text-white text-decoration-none fw-medium py-2 px-1"
                  style={{ minHeight: "44px", fontSize: "16px" }}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>

              {/* Services Accordion */}
              <li>
                <button
                  type="button"
                  className="w-100 d-flex align-items-center justify-content-between bg-transparent border-0 text-white text-decoration-none fw-medium py-2 px-1 text-start"
                  style={{ minHeight: "44px", fontSize: "16px" }}
                  onClick={() => setServicesExpanded(!servicesExpanded)}
                  aria-expanded={servicesExpanded}
                >
                  <span>Services (7)</span>
                  <i
                    className={`ph ph-caret-down transition-transform ${servicesExpanded ? "rotate-180" : ""}`}
                    style={{ fontSize: "16px" }}
                  />
                </button>
                {servicesExpanded && (
                  <ul className="list-unstyled ps-3 my-2 d-flex flex-column gap-1 border-start border-secondary border-opacity-25">
                    {siteConfig.services.map((svc) => (
                      <li key={svc.id}>
                        <Link
                          href={svc.href}
                          className="d-flex align-items-center gap-2 text-decoration-none py-2 text-muted hover-cyan"
                          style={{ minHeight: "44px", fontSize: "14px" }}
                          onClick={closeMenu}
                        >
                          <i className={`ph ${svc.icon}`} style={{ fontSize: "16px", color: "var(--vesharo-electric-accent, #00d2ff)" }} />
                          <span>{svc.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/portfolio-details"
                  className="d-flex align-items-center text-white text-decoration-none fw-medium py-2 px-1"
                  style={{ minHeight: "44px", fontSize: "16px" }}
                  onClick={closeMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="d-flex align-items-center text-white text-decoration-none fw-medium py-2 px-1"
                  style={{ minHeight: "44px", fontSize: "16px" }}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="d-flex align-items-center text-white text-decoration-none fw-medium py-2 px-1"
                  style={{ minHeight: "44px", fontSize: "16px" }}
                  onClick={closeMenu}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="d-flex align-items-center text-white text-decoration-none fw-medium py-2 px-1"
                  style={{ minHeight: "44px", fontSize: "16px" }}
                  onClick={closeMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="d-flex align-items-center text-white text-decoration-none fw-medium py-2 px-1"
                  style={{ minHeight: "44px", fontSize: "16px" }}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Contact & Action */}
        <div className="pt-4 border-top border-secondary border-opacity-25 mt-4">
          <div className="mb-3 d-flex flex-column gap-2">
            <a
              href={`mailto:${siteConfig.contact.email}`}
              className="d-flex align-items-center gap-2 text-decoration-none"
              style={{ minHeight: "44px", fontSize: "14px" }}
            >
              <i className="ph ph-envelope" style={{ fontSize: "18px", color: "#00d2ff" }} />
              <span className="text-white fw-medium">{siteConfig.contact.email}</span>
            </a>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
              className="d-flex align-items-center gap-2 text-decoration-none"
              style={{ minHeight: "44px", fontSize: "14px" }}
            >
              <i className="ph ph-phone" style={{ fontSize: "18px", color: "#00d2ff" }} />
              <span className="text-white fw-medium">{siteConfig.contact.phone}</span>
            </a>
          </div>

          <div className="d-flex align-items-center gap-3 mb-4">
            {siteConfig.socials.map((soc) => (
              <a
                key={soc.name}
                href={soc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-flex align-items-center justify-content-center text-white rounded-circle border border-secondary border-opacity-25"
                style={{ width: "44px", height: "44px", textDecoration: "none" }}
                aria-label={soc.name}
              >
                <i className={`ph ${soc.icon}`} style={{ fontSize: "18px" }} />
              </a>
            ))}
          </div>

          <Link
            href="/contact"
            className="tz-button text-uppercase fw-medium text-center d-flex align-items-center justify-content-center w-100"
            style={{ minHeight: "48px", fontSize: "14px" }}
            onClick={closeMenu}
          >
            Book a free call
          </Link>
        </div>
      </div>
    </div>
  );
}
