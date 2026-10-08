"use client";

import React from "react";
import Offcanvas from "./_components/Offcanvas";
import Nav from "./_components/Nav";
import Link from "@/components/common/Link";
import { headerCta } from "@/seeds/menu";

function Navbar({ currentPath = "/" }: { currentPath?: string }) {
  const [showOffcanvas, setShowOffcanvas] = React.useState(false);
  const [isSticky, setIsSticky] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div>
        <Offcanvas
          showOffcanvas={showOffcanvas}
          setShowOffcanvas={setShowOffcanvas}
          currentPath={currentPath}
        />
        <div className={`tz-header1${isSticky ? " sticky" : ""}`}>
          <div className="container">
            <div className="tz-header1__wrapper">
              <div className="row">
                <div className="col-4 col-lg-2">
                  <Link href="/" className="tz-header1__logo">
                    <img src="/site-logo.svg" alt="Vesharo logo" />
                  </Link>
                </div>
                <div className="col-8 col-lg-10 text-end d-flex align-items-center justify-content-end justify-content-xl-center"><div className="tz-header__desktop d-none d-xl-block tz-ml-auto tz-mr-auto">
                      <Nav currentPath={currentPath} />
                    </div>
                  <div className="d-none d-md-flex align-items-center justify-content-end gap-2">
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
                  <button
                    className="tz-button d-inline-flex d-xl-none tz-offcanvas-btn tz-offcanvas-open-btn ms-4"
                    onClick={() => setShowOffcanvas(!showOffcanvas)}
                    aria-label="Open navigation menu"
                  >
                    <i className="ph ph-list" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
