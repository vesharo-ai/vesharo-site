import ContactInfoBox from "./ContactInfoBox";
import ContactFormBox from "./ContactFormBox";
import { site } from "@/config/site";

function ContactForm() {
  return (
    <div className="tz-contact tz-bg-neutral2 tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120">
      <div className="container">
        <div className="tz-section-top tz-section-top--centered">
          <div className="tz-section-subtitle">
            <span className="tz-section-subtitle__line" />
            <h4 className="text-uppercase tz-text-primary">Direct Contact</h4>
          </div>
          <h1 className="tz-display-2 text-uppercase tz-text-neutral5">
            Let&apos;s talk about your next build
          </h1>
          <p className="tz-text-l tz-text-neutral6 mx-auto text-center" style={{ maxWidth: "640px" }}>
            Reach a senior engineer directly. No sales reps, no phone trees. We review requirements and send back structured proposals within 24 business hours.
          </p>
        </div>

        <div className="row gy-5 gx-60 align-items-start">
          <div className="col-lg-4">
            <div className="row g-4">
              <div className="col-12 col-sm-6 col-lg-12">
                <ContactInfoBox
                  icon="ph-envelope-simple-open"
                  title="Email"
                  link={site.contact.email}
                  href={`mailto:${site.contact.email}`}
                />
              </div>
              <div className="col-12 col-sm-6 col-lg-12">
                <ContactInfoBox
                  icon="ph-phone-call"
                  title="Phone (Click to Call)"
                  link={site.contact.phoneFormatted}
                  href={`tel:${site.contact.phoneRaw}`}
                />
              </div>
              <div className="col-12 col-sm-6 col-lg-12">
                <ContactInfoBox
                  icon="ph-whatsapp-logo"
                  title="WhatsApp"
                  link="Chat on WhatsApp"
                  href={site.contact.whatsappUrl}
                />
              </div>
              <div className="col-12 col-sm-6 col-lg-12">
                <ContactInfoBox
                  icon="ph-map-pin"
                  title="Office & Hours"
                  link={`${site.contact.address} · ${site.contact.hours}`}
                  href="/about"
                  className="mb-0"
                />
              </div>
            </div>

            {/* Optional Cal.com Booking Link (rendered ONLY when PUBLIC_BOOKING_URL is set) */}
            {site.booking.url && (
              <div className="mt-4 p-4 rounded-3" style={{ backgroundColor: "rgba(124, 92, 255, 0.1)", border: "1px solid rgba(124, 92, 255, 0.3)" }}>
                <div className="d-flex align-items-center gap-2 mb-2 text-white fw-bold">
                  <i className="ph ph-calendar text-primary" style={{ fontSize: "1.3rem" }} aria-hidden="true" />
                  <span>Book a Discovery Call</span>
                </div>
                <p className="text-white-50 tz-text-s mb-3">
                  Prefer a video conversation? Choose a 20-minute window with our solution architect.
                </p>
                <a
                  href={site.booking.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-100 rounded-pill py-2 text-uppercase fw-semibold tz-text-s"
                >
                  Schedule on Cal.com
                </a>
              </div>
            )}
          </div>

          <div className="col-lg-8">
            <div className="tz-contact-form">
              <ContactFormBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
