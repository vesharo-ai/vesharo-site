import React from "react";
import ServiceSidebar from "./ServiceSidebar";
import ServiceDetailsCounter from "./ServiceDetailsCounter";
import ServiceDetailsAccordion from "./ServiceDetailsAccordion";

function ServiceDetails() {
  return (
    <div className="tz-service-details">
      <div className="container">
        <div className="row g-4">
          <div className="col-xl-9">
            <div className="tz-service-details__image">
              <img src="/images/service/service-details-img1.jpg" alt="img" />
            </div>
            <h5 className="tz-service-details__title tz-display-4 tz-text-neutral5 text-uppercase tz-pt-30 tz-pt-lg-60">
              Web Design &amp; UI/UX Development
            </h5>
            <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
              we specialize in delivering cutting-edge digital solutions
              tailored to your business needs. Our team of experts is dedicated
              to helping you achieve your goals through innovative strategies,
              creative design, and advanced technology. Here’s a breakdown of
              the services we offer: Your website is the cornerstone of your
              online presence. We create visually stunning, user-friendly, and
              responsive websites that not only look great but also perform
              seamlessly across all devices.
            </p>
            <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
              A strong brand identity sets you apart from the competition. Our
              branding services include logo design, color palette creation,
              typography selection, and brand guideline development. We also
              offer graphic design services for marketing materials such as
              business cards,
            </p>
            <div className="row g-4 d-flex justify-content-between tz-pt-30 tz-pt-lg-60">
              <div className="col-md-8">
                <h2 className="tz-service-details__subtitle tz-text-neutral5">
                  Service Overview
                </h2>
                <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
                  We also offer graphic design services for marketing materials
                  such as business cards, brochures, social media graphics, and
                  more. Our goal is to create a memorable brand that resonates
                  with your target audience.
                </p>
                <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
                  In today’s competitive landscape, effective digital marketing
                  is essential for growth. Improve your website’s
                  visibility&nbsp; Our digital marketing services include:
                </p>
                <div className="tz-service-details__image tz-pt-10 tz-pt-lg-32">
                  <img
                    src="/images/service/service-details-img2.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-md-3">
                <ServiceDetailsCounter />
              </div>
            </div>
            <div className="row g-4 tz-pt-30 tz-pt-lg-60">
              <div className="col-md-8">
                <div className="tz-service-details__image">
                  <img
                    src="/images/service/service-details-img3.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-md-4">
                <div className="tz-service-details__image">
                  <img
                    src="/images/service/service-details-img4.jpg"
                    alt="img"
                  />
                </div>
              </div>
            </div>
            <div className="row g-4 d-flex justify-content-between tz-pt-30 tz-pt-lg-60">
              <div className="col-md-6">
                <h3 className="tz-service-details__subtitle tz-text-neutral5">
                  Key Features
                </h3>
                <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
                  A strong brand identity is essential for standing out in
                  today’s competitive market. comprehensive brand design
                  services, including logo creation, color palettes, typography
                  selection,
                </p>
                <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
                  and visual guidelines that align with your brand’s values and
                  message. I help you create a cohesive look across all
                  platforms to image.
                </p>
              </div>
              <div className="col-md-5">
                <p className="tz-service-details__desc tz-text-neutral6 tz-text-l fw-light">
                  Engage with your target audience, build brand awareness, and
                  foster loyalty through expertly managed social media accounts.
                </p>
                <ul className="tz-service-details__list tz-text-neutral6 tz-text-l fw-light">
                  <li className="tz-service-details__item">
                    <span className="tz-service-details__list-icon">
                      <i className="ph ph-check" />
                    </span>
                    Frontend development with HTML, JavaScript
                  </li>
                  <li className="tz-service-details__item">
                    <span className="tz-service-details__list-icon">
                      <i className="ph ph-check" />
                    </span>
                    CMS integration (WordPress, Webflow)
                  </li>
                  <li className="tz-service-details__item">
                    <span className="tz-service-details__list-icon">
                      <i className="ph ph-check" />
                    </span>
                    Custom coding solutions
                  </li>
                </ul>
              </div>
            </div>
            <div className="row g-4 d-flex justify-content-between tz-pt-30 tz-pt-lg-60">
              <div className="col-md-5">
                <div className="tz-service-details__image">
                  <img
                    src="/images/service/service-details-img5.jpg"
                    alt="img"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <ServiceDetailsAccordion />
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <ServiceSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
