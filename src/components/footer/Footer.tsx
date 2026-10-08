import React from "react";
import Link from "@/components/common/Link";
import FooterSocial from "./FooterSocial";
import { siteConfig } from "@/config/site";

function Footer() {
  return (
    <footer className="tz-footer d-flex align-items-center justify-content-end" role="contentinfo">
      <div className="tz-footer__shape" />
      <img
        src="/images/footer/footer-texture.png"
        alt=""
        aria-hidden="true"
        className="tz-footer__texture"
      />
      <div className="container">
        <div className="tz-footer__wrapper">
          <div className="row g-4 d-flex justify-content-between">
            {/* Logo, tagline, and direct contact details */}
            <div className="col-xl-4 col-lg-5">
              <div className="tz-footer__brand">
                <Link
                  href="/"
                  className="tz-footer__logo tz-mb-30 d-inline-block"
                  aria-label="Vesharo Home"
                >
                  <img src="/brand/logo.svg" alt="Vesharo" width="148" height="34" />
                </Link>
                <p className="tz-footer__tagline tz-text-m tz-text-neutral6 fw-light mb-4">
                  {siteConfig.description}
                </p>

                {/* Verified Contact Details */}
                <div className="d-flex flex-column gap-2 mb-4">
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="d-flex align-items-center gap-2 text-decoration-none text-muted tz-text-s hover-cyan"
                    aria-label={`Email ${siteConfig.contact.email}`}
                  >
                    <i className="ph ph-envelope" style={{ color: "var(--vesharo-electric-accent, #00d2ff)" }} aria-hidden="true" />
                    <span>{siteConfig.contact.email}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="d-flex align-items-center gap-2 text-decoration-none text-muted tz-text-s hover-cyan"
                    aria-label={`Call ${siteConfig.contact.phone}`}
                  >
                    <i className="ph ph-phone" style={{ color: "var(--vesharo-electric-accent, #00d2ff)" }} aria-hidden="true" />
                    <span>{siteConfig.contact.phone}</span>
                  </a>
                  <div className="d-flex align-items-center gap-2 text-muted tz-text-s">
                    <i className="ph ph-map-pin" style={{ color: "var(--vesharo-electric-accent, #00d2ff)" }} aria-hidden="true" />
                    <span>{siteConfig.contact.location}</span>
                  </div>
                  <div className="d-flex align-items-center gap-2 text-muted tz-text-s">
                    <i className="ph ph-clock" style={{ color: "var(--vesharo-electric-accent, #00d2ff)" }} aria-hidden="true" />
                    <span>{siteConfig.contact.hours}</span>
                  </div>
                </div>
              </div>
              <FooterSocial />
            </div>

            {/* Right section with CTA and organized navigation columns */}
            <div className="col-xl-8 col-lg-7">
              <div className="tz-footer-right">
                <img
                  src="/images/footer/shadow-brand-title.png"
                  alt=""
                  aria-hidden="true"
                  className="tz-footer__shadow"
                />
                <div className="tz-footer-right__content">
                  {/* Top Bar / Direct Navigation & CTA */}
                  <div className="tz-footer__nav d-flex flex-wrap align-items-center justify-content-between gap-3">
                    <div className="tz-footer__menu tz-text-l d-flex flex-wrap gap-4">
                      {siteConfig.nav.slice(0, 4).map((item) => (
                        <Link key={item.title} href={item.href} className="tz-footer__menu-link">
                          {item.title.toUpperCase()}
                        </Link>
                      ))}
                    </div>
                    <div className="tz-buttons d-inline-flex align-items-center">
                      <Link
                        href={siteConfig.cta.href}
                        className="tz-button-yellow text-uppercase fw-medium tz-text-m"
                      >
                        {siteConfig.cta.label}
                      </Link>
                      <Link
                        href={siteConfig.cta.href}
                        className="tz-button-yellow-circle"
                        aria-label={siteConfig.cta.label}
                      >
                        <i className="ph ph-arrow-up-right" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  {/* 3 Nav Columns */}
                  <div className="row g-4 tz-pt-30 tz-pt-lg-50 tz-pb-30 tz-pb-lg-50">
                    {/* Services Column (7 core services) */}
                    <div className="col-md-5 col-sm-6">
                      <div className="tz-footer__section">
                        <h3 className="tz-footer__heading">Core Services</h3>
                        <ul className="tz-footer__links list-unstyled d-flex flex-column gap-2 mb-0">
                          {siteConfig.services.map((service) => (
                            <li key={service.id}>
                              <Link
                                href={service.href}
                                className="tz-footer__link tz-text-m text-decoration-none"
                              >
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Company Column */}
                    <div className="col-md-3 col-sm-6">
                      <div className="tz-footer__section">
                        <h3 className="tz-footer__heading">Company</h3>
                        <ul className="tz-footer__links list-unstyled d-flex flex-column gap-2 mb-0">
                          {siteConfig.footerLinks.company.map((link) => (
                            <li key={link.label}>
                              <Link
                                href={link.href}
                                className="tz-footer__link tz-text-m text-decoration-none"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Verified Products & Legal Column */}
                    <div className="col-md-4 col-sm-12">
                      <div className="tz-footer__section">
                        <h3 className="tz-footer__heading">Products &amp; Legal</h3>
                        <ul className="tz-footer__links list-unstyled d-flex flex-column gap-2 mb-3">
                          {siteConfig.portfolio.map((prod) => (
                            <li key={prod.id}>
                              <Link
                                href={prod.href}
                                className="tz-footer__link tz-text-m text-decoration-none"
                              >
                                {prod.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="pt-2 border-top border-secondary border-opacity-25">
                          <ul className="tz-footer__links list-unstyled d-flex flex-column gap-2 mb-0">
                            {siteConfig.footerLinks.legal.map((link) => (
                              <li key={link.label}>
                                <Link
                                  href={link.href}
                                  className="tz-footer__link tz-text-s text-muted text-decoration-none"
                                >
                                  {link.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Copyright row */}
                  <div className="tz-footer__bottom d-flex flex-wrap justify-content-between align-items-center gap-2 pt-3 border-top border-secondary border-opacity-25">
                    <div className="tz-footer__copyright tz-text-m text-muted">
                      Copyright &copy; 2026 Vesharo. All rights reserved.
                    </div>
                    <div className="tz-footer__tagline-right tz-text-s text-muted">
                      Engineered for high performance and intelligent automation.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
