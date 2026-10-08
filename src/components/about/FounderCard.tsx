"use client";
import founderData from "@/data/founder.json";
import { site } from "@/config/site";

export default function FounderCard() {
  const hasFounder = Boolean(founderData && founderData.name && founderData.name.trim().length > 0);

  return (
    <section className="tz-founder tz-pt-60 tz-pb-60 tz-bg-neutral2" aria-labelledby="leadership-heading">
      <div className="container">
        <div
          className="p-4 p-lg-5 rounded-4 mx-auto"
          style={{
            maxWidth: "960px",
            background: "linear-gradient(135deg, rgba(28, 28, 38, 0.95) 0%, rgba(18, 18, 24, 0.98) 100%)",
            border: "1px solid rgba(124, 92, 255, 0.25)",
            boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.7)",
          }}
        >
          {hasFounder ? (
            <div className="row g-4 align-items-center">
              {founderData.photo && (
                <div className="col-md-4 text-center">
                  <img
                    src={founderData.photo}
                    alt={founderData.name}
                    width={200}
                    height={200}
                    className="rounded-4 object-fit-cover shadow"
                    style={{ border: "2px solid #7C5CFF" }}
                  />
                </div>
              )}
              <div className={founderData.photo ? "col-md-8" : "col-12"}>
                <div className="badge bg-primary text-white mb-2 px-3 py-1 rounded-pill tz-text-s">
                  Leadership
                </div>
                <h2 id="leadership-heading" className="tz-display-3 text-white fw-bold mb-1">
                  {founderData.name}
                </h2>
                <div className="text-primary fw-medium tz-text-l mb-3" style={{ color: "#A78BFA" }}>
                  {founderData.role}
                </div>
                <p className="text-white-50 tz-text-l mb-4" style={{ lineHeight: "1.7" }}>
                  {founderData.bio}
                </p>
                {founderData.linkedin && (
                  <a
                    href={founderData.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-secondary text-white d-inline-flex align-items-center gap-2 rounded-pill px-4 py-2 tz-text-s"
                  >
                    <i className="ph ph-linkedin-logo text-primary" aria-hidden="true" />
                    <span>Connect on LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center py-2">
              <div
                className="d-inline-flex align-items-center justify-content-center rounded-circle mb-3"
                style={{
                  width: "56px",
                  height: "56px",
                  backgroundColor: "rgba(124, 92, 255, 0.15)",
                  color: "#A78BFA",
                  fontSize: "1.6rem",
                }}
              >
                <i className="ph ph-shield-check" aria-hidden="true" />
              </div>
              <h2 id="leadership-heading" className="tz-display-3 text-white fw-bold mb-2">
                Executive Engineering Leadership
              </h2>
              <p className="text-white-50 tz-text-l mx-auto mb-4" style={{ maxWidth: "680px", lineHeight: "1.7" }}>
                Vesharo is owner-operated from Ahmedabad, India. Our leadership actively reviews every architectural blueprint, code repository, and deployment milestone. You speak directly with senior practitioners who have real skin in the game.
              </p>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                <a
                  href={`mailto:${site.contact.email}`}
                  className="tz-button text-uppercase fw-medium tz-text-m"
                >
                  Contact Engineering Leadership
                </a>
                <a
                  href={site.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-success d-inline-flex align-items-center gap-2 px-4 py-3 rounded-pill fw-medium"
                  style={{ borderColor: "rgba(37, 211, 102, 0.4)", color: "#25D366" }}
                >
                  <i className="ph ph-whatsapp-logo" style={{ fontSize: "1.2rem" }} aria-hidden="true" />
                  <span>WhatsApp Direct</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
