import Link from "@/components/common/Link";
import React from "react";

interface BreadCrumbProps {
  // Define your props here
  title: string;
}

function BreadCrumb({ title }: BreadCrumbProps) {
  return (
    <>
      <section
        className="tz-breadcrumb"
        style={{
          backgroundImage: 'url("/images/breadcrumb/breadcrumb-img.jpg")',
        }}
      >
        <div className="tz-breadcrumb__overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="tz-breadcrumb__content">
                <h5 className="tz-breadcrumb__title tz-display-4 tz-text-neutral5 text-uppercase">
                  {title}
                </h5>
                <div className="tz-breadcrumb__menu tz-text-l text-uppercase">
                  <nav aria-label="tz-breadcrumb__nav">
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
                        {title}
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
