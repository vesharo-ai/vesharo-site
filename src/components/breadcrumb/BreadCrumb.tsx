import Link from "@/components/common/Link";
import React from "react";

interface BreadCrumbProps {
  /** Short heading shown in the banner. */
  title: string;
  /** Optional longer label for the active crumb (defaults to title). */
  crumb?: string;
}

function BreadCrumb({ title, crumb }: BreadCrumbProps) {
  return (
    <>
      <section className="tz-breadcrumb">
        <div className="tz-breadcrumb__overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tz-breadcrumb__content">
                <h1 className="tz-breadcrumb__title tz-display-4 tz-text-neutral5 text-uppercase">
                  {title}
                </h1>
                <div className="tz-breadcrumb__menu tz-text-l text-uppercase">
                  <nav aria-label="Breadcrumb">
                    <ul className="tz-breadcrumb__list">
                      <li className="tz-breadcrumb__item">
                        <Link href="/">Home</Link>
                      </li>
                      <li className="tz-breadcrumb__item active">
                        <i className="ph ph-caret-double-right" />
                      </li>
                      <li
                        className="tz-breadcrumb__item active"
                        aria-current="page"
                      >
                        {crumb ?? title}
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BreadCrumb;
