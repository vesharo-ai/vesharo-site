"use client";

import React from "react";
import ContactInfoBox from "./ContactInfoBox";
import ContactFormBox from "./ContactFormBox";
import { siteConfig } from "@/config/site";

const { contact } = siteConfig;

export default function ContactForm() {
  return (
    <section className="tz-contact tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120" style={{ backgroundColor: "#0b0f19" }}>
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="badge px-3 py-2 rounded-pill text-primary mb-3" style={{ backgroundColor: "rgba(0, 102, 255, 0.12)", fontSize: "0.875rem" }}>
            Direct Engineering Desk
          </span>
          <h1 className="h1 text-white fw-bold mb-3">Let's Discuss Your Architecture</h1>
          <p className="text-white-50 lead mx-auto" style={{ maxWidth: "680px" }}>
            Speak directly with our senior software architects and technical leads. We evaluate technical feasibility, estimate timelines, and provide actionable roadmaps.
          </p>
        </div>

        <div className="row gy-5 gx-lg-5">
          {/* Left Column: Details & Book a Call */}
          <div className="col-lg-5 col-xl-4">
            {/* Primary CTA: Book a Free Call */}
            <div
              className="p-4 rounded-4 mb-4"
              style={{
                backgroundColor: "#0f1626",
                border: "1px solid rgba(0, 102, 255, 0.4)",
                boxShadow: "0 10px 30px rgba(0, 102, 255, 0.1)",
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-2">
                <i className="ph ph-calendar-check text-primary" style={{ fontSize: "1.5rem" }} />
                <span className="text-primary text-uppercase tracking-wider small fw-bold">Primary Recommendation</span>
              </div>
              <h2 className="h4 text-white fw-bold mb-2">Schedule Discovery Call</h2>
              <p className="text-white-50 small mb-4" style={{ lineHeight: "1.6" }}>
                Skip the back-and-forth emails. Pick a 30-minute slot on our calendar to discuss your technical requirements directly.
              </p>
              <a
                href={contact.bookingUrl || "https://cal.com/vesharo/discovery"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary w-100 py-3 rounded-pill fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                data-analytics-event="book_call_click"
                data-analytics-label="contact_page_calendar"
              >
                <span>Book a Free Call</span>
                <i className="ph ph-arrow-up-right" />
              </a>
              <span className="d-block text-center text-white-50 small mt-2" style={{ fontSize: "0.75rem" }}>
                30-min Google Meet · No sales pressure
              </span>
            </div>

            {/* WhatsApp Direct Action */}
            <div
              className="p-4 rounded-4 mb-4"
              style={{
                backgroundColor: "#0f1626",
                border: "1px solid rgba(37, 211, 102, 0.3)",
              }}
            >
              <div className="d-flex align-items-center gap-3">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "48px", height: "48px", backgroundColor: "rgba(37, 211, 102, 0.15)", color: "#25D366" }}
                >
                  <i className="ph ph-whatsapp-logo" style={{ fontSize: "1.5rem" }} />
                </div>
                <div>
                  <span className="text-white fw-bold d-block">Quick WhatsApp Chat</span>
                  <span className="text-white-50 small">Typically replies in 15 mins</span>
                </div>
              </div>
              <a
                href={contact.whatsappUrl || "https://wa.me/919586212495"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-success w-100 py-2 rounded-pill mt-3 small fw-semibold d-inline-flex align-items-center justify-content-center gap-2"
                style={{ borderColor: "#25D366", color: "#25D366" }}
                data-analytics-event="whatsapp_click"
                data-analytics-label="contact_page_whatsapp"
              >
                <span>Open WhatsApp Chat</span>
                <i className="ph ph-arrow-right" />
              </a>
            </div>

            {/* Contact Details Cards */}
            <div className="d-flex flex-column gap-3">
              <ContactInfoBox
                icon="ph-phone-call"
                title={`Phone · ${contact.hours}`}
                link={contact.phone}
                href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              />
              <ContactInfoBox
                icon="ph-envelope-simple-open"
                title="Engineering Inquiries"
                link={contact.email}
                href={`mailto:${contact.email}`}
              />
              <ContactInfoBox
                icon="ph-map-pin"
                title="Headquarters Location"
                link={contact.location}
                className="mb-0"
              />
            </div>
          </div>

          {/* Right Column: Lead Capture Form */}
          <div className="col-lg-7 col-xl-8">
            <div
              className="p-4 p-md-5 rounded-4 h-100"
              style={{
                backgroundColor: "#0f1626",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <div className="mb-4 pb-2 border-bottom border-secondary border-opacity-25">
                <h2 className="h3 text-white fw-bold mb-2">Send Project Brief</h2>
                <p className="text-white-50 small mb-0">
                  Fill in your details below and an engineering architect will review your scope and follow up with a proposal.
                </p>
              </div>

              <ContactFormBox />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
