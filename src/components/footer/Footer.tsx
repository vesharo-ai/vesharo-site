import React from "react";
import Link from "@/components/common/Link";
import FooterSocial from "./FooterSocial";
import { site } from "@/config/site";
import { headerCta } from "@/seeds/menu";
import { serviceCards } from "@/seeds/Service.seeds";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="tz-footer tz-bg-neutral2 tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120">
      <div className="container">
        {/* Primary action repeated once, at the natural end of the journey. */}
        <div className="tz-footer__cta">
          <div>
            <h2 className="tz-footer__cta-heading tz-display-3 text-uppercase">
              Have a project in mind?
            </h2>
            <p className="tz-footer__cta-desc tz-text-l tz-text-neutral6 mb-0">
              Send us the problem and the constraint you are working against. An
              engineer will reply within {site.contact.supportResponseTime
                .toLowerCase()
                .replace("within ", "")}
              .
            </p>
          </div>
          <div className="tz-buttons">
            <Link
              href={headerCta.href}
              className="tz-button text-uppercase fw-medium tz-text-m"
            >
              {headerCta.label}
            </Link>
            <Link
              href={headerCta.href}
              className="tz-button-circle"
              aria-label={headerCta.label}
            >
              <i className="ph ph-arrow-up-right" />
            </Link>
          </div>
        </div>

        <div className="row g-4 tz-footer__cols">
          <div className="col-xl-4">
            <div className="tz-footer__brand">
              <Link href="/" className="tz-footer__logo">
                <img src="/site-logo.svg" alt={site.name} />
              </Link>
              <p className="tz-footer__tagline tz-text-l tz-text-neutral6">
                {site.tagline} Custom web applications, mobile apps, cloud
                platforms and data &amp; AI products — designed, built and
                operated by a senior engineering team.
              </p>
              <FooterSocial />
            </div>
          </div>

          <div className="col-xl-2 col-md-4">
            <div className="tz-footer__section">
              <h3 className="tz-footer__heading">Services</h3>
              <ul className="tz-footer__links">
                {serviceCards.map((s) => (
                  <li key={s.id}>
                    <Link href={`/services/${s.id}`} className="tz-footer__link">
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-md-4">
            <div className="tz-footer__section">
              <h3 className="tz-footer__heading">Company</h3>
              <ul className="tz-footer__links">
                <li>
                  <Link href="/about" className="tz-footer__link">About Vesharo</Link>
                </li>
                <li>
                  <Link href="/portfolio" className="tz-footer__link">Work &amp; Engagements</Link>
                </li>
                <li>
                  <Link href="/contact" className="tz-footer__link text-primary fw-medium">Get a Free Quote</Link>
                </li>
                <li>
                  <Link href="/blog" className="tz-footer__link">Engineering Blog</Link>
                </li>
                <li>
                  <Link href="/faq" className="tz-footer__link">FAQs</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xl-3 col-md-4">
            <div className="tz-footer__section">
              <h3 className="tz-footer__heading">Talk to us</h3>
              <ul className="tz-footer__links tz-footer__contact">
                <li>
                  <a href={`mailto:${site.contact.email}`} className="tz-footer__link d-inline-flex align-items-center gap-2">
                    <i className="ph ph-envelope-simple text-primary" aria-hidden="true" />
                    <span>{site.contact.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${site.contact.phoneRaw}`}
                    className="tz-footer__link d-inline-flex align-items-center gap-2"
                  >
                    <i className="ph ph-phone text-primary" aria-hidden="true" />
                    <span>{site.contact.phoneFormatted}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={site.contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tz-footer__link d-inline-flex align-items-center gap-2"
                  >
                    <i className="ph ph-whatsapp-logo text-success" aria-hidden="true" />
                    <span>WhatsApp Chat</span>
                  </a>
                </li>
                <li className="tz-footer__static d-inline-flex align-items-center gap-2">
                  <i className="ph ph-map-pin text-primary" aria-hidden="true" />
                  <span>{site.contact.address}</span>
                </li>
                <li className="tz-footer__static d-inline-flex align-items-center gap-2">
                  <i className="ph ph-clock text-primary" aria-hidden="true" />
                  <span>{site.contact.hours}</span>
                </li>
              </ul>
              <ul className="tz-footer__links tz-footer__legal mt-3 pt-3 border-top border-secondary border-opacity-25">
                <li>
                  <Link href="/privacy" className="tz-footer__link">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms" className="tz-footer__link">Terms of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tz-footer__bottom">
          <div className="tz-footer__copyright">
            Copyright &copy; {year} {site.legalName}. All rights reserved.
          </div>
          <div className="tz-footer__credits">
            Built in {site.contact.city}, India
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;