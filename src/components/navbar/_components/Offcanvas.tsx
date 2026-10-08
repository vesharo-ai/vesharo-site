import React from "react";
import Nav from "./Nav";
import Link from "@/components/common/Link";
import { brand } from "@/config/brand";
import { headerCta } from "@/seeds/menu";

function Offcanvas({
  showOffcanvas,
  setShowOffcanvas,
  currentPath = "/",
}: {
  showOffcanvas: boolean;
  setShowOffcanvas: React.Dispatch<React.SetStateAction<boolean>>;
  currentPath?: string;
}) {
  return (
    <>
      <div className={`tz-offcanvas ${showOffcanvas ? "opened" : ""}`}>
        <div className="tz-offcanvas__wrapper pt-4">
          {/*  */}
          <div className="tz-offcanvas__top mb-5">
            <div className="row g-0">
              <div className="col-6">
                <Link href="/">
                  <img src="/site-logo.svg" alt={brand.name} />
                </Link>
              </div>
              <div className="col-6 text-end">
                <button
                  className="tz-button d-inline-flex d-xl-none tz-offcanvas-btn tz-offcanvas-close-btn"
                  onClick={() => setShowOffcanvas(false)}
                  aria-label="Close navigation menu"
                >
                  <i className="ph ph-x" />
                </button>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div className="tz-text-neutral5 tz-text-m text-uppercase fw-semibold">Software &amp; IT engineering</div>
          <div className="tz-display-4 tz-text-primary text-uppercase fw-bold">{brand.name}</div>
          <p className="tz-text-neutral5 tz-text-m">{brand.tagline}</p>
          <div className="tz-offcanvas__contact">
            <a href={`mailto:${brand.contact.email}`}>{brand.contact.email}</a>
            <a href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`}>{brand.contact.phoneFormatted}</a>
          </div>
          {/*  */}
          {/*  */}
          <div className="tz-mobile-menu__wrapper pt-4">
            <nav className="tz-mobile-menu">
              <Nav setShowOffcanvas={setShowOffcanvas} currentPath={currentPath} />
            </nav>
          </div>
          {/*  */}
          <div className="tz-offcanvas__bottom mt-4 d-flex align-items-center justify-content-end gap-2">
            <div className="tz-buttons">
              <Link
                href={headerCta.href}
                className="tz-button text-uppercase fw-medium tz-text-m"
              >
                {headerCta.label}
              </Link>
              <Link className="tz-button-circle" href={headerCta.href} aria-label={headerCta.label}>
                <i className="ph ph-arrow-up-right" />
              </Link>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </>
  );
}

export default Offcanvas;
