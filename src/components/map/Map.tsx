import React, { useState } from "react";
import { siteConfig } from "@/config/site";

export default function Map() {
  const [loadInteractive, setLoadInteractive] = useState(false);

  // Exact coordinates for Ahmedabad, Gujarat, India
  const mapsEmbedUrl =
    "https://maps.google.com/maps?q=Ahmedabad%2C%20Gujarat%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed";

  return (
    <section className="py-5" style={{ backgroundColor: "#070B14" }}>
      <div className="container">
        <div
          className="rounded-4 overflow-hidden position-relative"
          style={{
            border: "1px solid rgba(255, 255, 255, 0.08)",
            minHeight: "360px",
            backgroundColor: "#0f1626",
          }}
        >
          {loadInteractive ? (
            <iframe
              src={mapsEmbedUrl}
              title="Vesharo Office Location Map — Ahmedabad, Gujarat, India"
              style={{
                width: "100%",
                height: "420px",
                border: 0,
                display: "block",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          ) : (
            <div
              className="p-5 d-flex flex-column align-items-center justify-content-center text-center"
              style={{
                minHeight: "380px",
                background:
                  "radial-gradient(circle at 50% 50%, rgba(0, 102, 255, 0.12) 0%, rgba(11, 15, 25, 0.95) 100%)",
              }}
            >
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: "64px",
                  height: "64px",
                  backgroundColor: "rgba(0, 102, 255, 0.2)",
                  color: "#00D2FF",
                }}
              >
                <i className="ph ph-map-pin" style={{ fontSize: "2rem" }} />
              </div>

              <h3 className="h4 text-white fw-bold mb-2">Vesharo Engineering Headquarters</h3>
              <p className="text-white-50 lead mb-1" style={{ fontSize: "1.1rem" }}>
                {siteConfig.contact.location}
              </p>
              <p className="text-white-50 small mb-4" style={{ fontSize: "0.85rem" }}>
                Coordinates: 23.0225° N, 72.5714° E · Mon–Fri 9:00–18:30 IST
              </p>

              <div className="d-flex flex-wrap align-items-center justify-content-center gap-3">
                <button
                  type="button"
                  className="btn btn-outline-primary px-4 py-2 rounded-pill small fw-semibold d-inline-flex align-items-center gap-2"
                  onClick={() => setLoadInteractive(true)}
                >
                  <i className="ph ph-map-trifold" />
                  <span>Load Interactive Map</span>
                </button>
                <a
                  href="https://maps.google.com/?q=Ahmedabad,+Gujarat,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary px-4 py-2 rounded-pill small fw-semibold text-white d-inline-flex align-items-center gap-2"
                  style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", border: "none" }}
                >
                  <span>Open in Google Maps</span>
                  <i className="ph ph-arrow-up-right" />
                </a>
              </div>

              <span className="text-white-50 small mt-3" style={{ fontSize: "0.75rem" }}>
                Privacy-friendly: External map iframes are not loaded until requested.
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
