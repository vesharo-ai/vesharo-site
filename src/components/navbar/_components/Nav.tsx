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

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, []);

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
    };
  }, []);

  return (
    <nav ref={navRef} className="tz-nav-links d-flex tz-main-menu" aria-label="Main Navigation">
      <ul className="d-inline-flex tz-ml-auto position-relative align-items-center mb-0 list-unstyled">
        {siteConfig.nav.map((item) => {
          const isActive = currentPath === item.href;

          if (item.hasDropdown && item.title === "Services") {
            return (
              <li
                key={item.title}
                className={`has-dropdown position-relative ${servicesOpen ? "dropdown-open" : ""}`}
                onMouseEnter={() => windowWidth >= 1200 && setServicesOpen(true)}
                onMouseLeave={() => windowWidth >= 1200 && setServicesOpen(false)}
              >
                <button
                  type="button"
                  className={`tz-nav-link-btn d-inline-flex align-items-center gap-1 ${
                    isActive ? "active" : ""
                  }`}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  aria-controls="services-mega-menu"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setServicesOpen(!servicesOpen);
                    }
                  }}
                >
                  <span>Services</span>
                  <i
                    className="ph ph-caret-down"
                    style={{
                      fontSize: "14px",
                      transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                    aria-hidden="true"
                  />
                </button>

                {/* Services Mega Menu */}
                <div
                  id="services-mega-menu"
                  className={`tz-submenu submenu tz-mega-menu tz-services-mega-menu ${
                    servicesOpen ? "visible opacity-100" : ""
                  }`}
                  role="region"
                  aria-label="Services Menu"
                  style={{
                    display: servicesOpen ? "block" : "none",
                    background: "rgba(11, 15, 25, 0.98)",
                    border: "1px solid rgba(0, 102, 255, 0.25)",
                    borderRadius: "12px",
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.75)",
                    backdropFilter: "blur(16px)",
                    zIndex: 1050,
                  }}
                >
                  <div className="tz-mega-wrapper p-4">
                    <div className="row g-3">
                      <div className="col-12 col-xl-8">
                        <div className="d-flex align-items-center justify-content-between mb-3 pb-2 border-bottom border-secondary border-opacity-25">
                          <span
                            className="text-uppercase fw-semibold"
                            style={{ fontSize: "12px", color: "var(--vesharo-electric-accent, #00d2ff)" }}
                          >
                            Core Capabilities (7)
                          </span>
                          <Link
                            href="/service-details"
                            style={{ fontSize: "12px", color: "#94a3b8", textDecoration: "none" }}
                            onClick={() => {
                              setServicesOpen(false);
                              setShowOffcanvas?.(false);
                            }}
                          >
                            View Details &rarr;
                          </Link>
                        </div>
                        <div className="row g-2">
                          {siteConfig.services.map((service) => (
                            <div key={service.id} className="col-12 col-md-6">
                              <Link
                                href={service.href}
                                className="tz-mega-service-card d-flex align-items-start gap-2 p-2 rounded text-decoration-none"
                                onClick={() => {
                                  setServicesOpen(false);
                                  setShowOffcanvas?.(false);
                                }}
                              >
                                <div
                                  className="tz-service-icon-box p-2 rounded"
                                  style={{
                                    background: "rgba(0, 102, 255, 0.12)",
                                    color: "var(--vesharo-electric-accent, #00d2ff)",
                                  }}
                                >
                                  <i className={`ph ${service.icon}`} style={{ fontSize: "18px" }} />
                                </div>
                                <div>
                                  <div className="fw-semibold text-white" style={{ fontSize: "14px" }}>
                                    {service.title}
                                  </div>
                                  <p
                                    className="mb-0"
                                    style={{ fontSize: "12px", color: "#94a3b8", lineHeight: "1.3" }}
                                  >
                                    {service.shortDescription}
                                  </p>
                                </div>
                              </Link>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Showcase Column */}
                      <div className="col-12 col-xl-4 border-start border-secondary border-opacity-25 ps-xl-4 d-none d-xl-flex flex-column justify-content-between">
                        <div>
                          <span
                            className="text-uppercase fw-semibold d-block mb-3 pb-2 border-bottom border-secondary border-opacity-25"
                            style={{ fontSize: "12px", color: "var(--vesharo-electric-accent, #00d2ff)" }}
                          >
                            Real Products
                          </span>
                          <div className="d-flex flex-column gap-2">
                            {siteConfig.portfolio.map((item) => (
                              <Link
                                key={item.id}
                                href={item.href}
                                className="p-2 rounded text-decoration-none border border-secondary border-opacity-25"
                                style={{ background: "rgba(17, 24, 39, 0.6)" }}
                                onClick={() => setServicesOpen(false)}
                              >
                                <div className="fw-semibold text-white" style={{ fontSize: "13px" }}>
                                  {item.title}
                                </div>
                                <div
                                  style={{
                                    fontSize: "11px",
                                    color: "#94a3b8",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                  }}
                                >
                                  {item.tagline}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                        <div
                          className="mt-3 p-3 rounded text-center border"
                          style={{
                            background: "rgba(0, 102, 255, 0.08)",
                            borderColor: "rgba(0, 102, 255, 0.2)",
                          }}
                        >
                          <p style={{ fontSize: "12px", color: "#94a3b8", marginBottom: "8px" }}>
                            Need custom AI or software engineering?
                          </p>
                          <Link
                            href="/contact"
                            className="tz-button text-uppercase fw-medium text-center d-inline-block w-100"
                            style={{ padding: "8px 16px", fontSize: "12px" }}
                            onClick={() => setServicesOpen(false)}
                          >
                            Book a free call
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
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
                onClick={() => setShowOffcanvas?.(false)}
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
