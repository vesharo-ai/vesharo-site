import React from "react";
import SectionSubtitle from "../section-subtitle/SectionSubtitle";
import SectionTitle from "../section-title/SectionTitle";
import ContactInfoBox from "./ContactInfoBox";
import ContactFormBox from "./ContactFormBox";
import { siteConfig } from "@/config/site";

const { contact } = siteConfig;

function ContactForm() {
  return (
    <div className="tz-contact tz-bg-neutral3 tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120">
      <div className="container">
        <div className="tz-section-top tz-section-top--centered">
          <SectionSubtitle subtitle="CONTACT US" />
          <SectionTitle title=" LET’S START A CONVERSATION" />
        </div>
        <div className="row gy-5 gx-60">
          <div className="col-lg-4">
            <ContactInfoBox
              icon="ph-phone-call"
              title={`Call / WhatsApp · ${contact.hours}`}
              link={contact.phone}
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            />
            <ContactInfoBox
              icon="ph-envelope-simple-open"
              title="Email Us"
              link={contact.email}
              href={`mailto:${contact.email}`}
            />
            <ContactInfoBox
              icon="ph-map-pin"
              title="Our Location"
              link={contact.location}
              className="mb-0"
            />
          </div>
          <div className="col-lg-8">
            <div className="tz-contact-form">
              <div className="tz-section-top text-center">
                <h5 className="tz-section-top__subtitle tz-text-primary">
                  Get In Touch
                </h5>
                <h3 className="tz-section-top__title tz-text-neutral5 mb-0">
                  Have Any&nbsp;Question?
                </h3>
              </div>
              <ContactFormBox />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
