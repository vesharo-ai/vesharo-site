import { type ServiceCard1Type } from "../../seeds/Service.seeds";
import ServiceCard from "./ServiceCard";

function Service1({
  serviceData,
  backgroundColor = "#0f0f0f",
  isInnerPage,
}: {
  serviceData: ServiceCard1Type[];
  backgroundColor?: string;
  isInnerPage?: boolean;
}) {
  return (
    <>
      <section className="tz-service1" style={{ backgroundColor }}>
        <div className="container">
          {isInnerPage ? (
            <div className="tz-section-top tz-section-top--centered">
              <div className="tz-section-subtitle">
                <span className="tz-section-subtitle__line" />
                <h4 className="text-uppercase tz-text-primary">
                  Services
                </h4>
              </div>
              <h2 className="tz-display-2 text-uppercase tz-text-neutral5">
                Software &amp; IT Services
              </h2>
            </div>
          ) : (
            <div className="tz-section-top">
              <div className="tz-section-subtitle">
                <span className="tz-section-subtitle__line" />
                <h4 className="text-uppercase tz-text-primary">
                  Services
                </h4>
              </div>
              <h2 className="tz-display-2 text-uppercase tz-text-neutral5">
                Engineering Capabilities &amp; Solutions
              </h2>
              <p className="tz-service1__desc tz-text-l tz-text-neutral6">
                Senior-led delivery across the engineering disciplines our
                clients need most — packaged as flexible engagement models.
              </p>
            </div>
          )}
          <div className="row g-4">
            {serviceData &&
              serviceData.map((card) => (
                <ServiceCard
                  key={card.id}
                  {...card}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Service1;
