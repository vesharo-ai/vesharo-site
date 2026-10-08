import { site } from "@/config/site";

export default function StickyMobileBar() {
  return (
    <aside
      className="d-md-none fixed-bottom"
      style={{
        zIndex: 1040,
        backgroundColor: "rgba(18, 18, 24, 0.94)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderTop: "1px solid rgba(124, 92, 255, 0.3)",
        boxShadow: "0 -8px 24px rgba(0, 0, 0, 0.5)",
        paddingBottom: "max(8px, env(safe-area-inset-bottom, 8px))",
        paddingTop: "8px",
        paddingLeft: "12px",
        paddingRight: "12px",
      }}
      aria-label="Quick contact actions"
    >
      <div className="d-flex align-items-center justify-content-between gap-2">
        {/* Call button */}
        <a
          href={`tel:${site.contact.phoneRaw}`}
          className="btn btn-dark d-flex flex-column align-items-center justify-content-center flex-grow-1 py-1 px-2 rounded-3 text-decoration-none"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            color: "#E2E8F0",
            fontSize: "0.75rem",
          }}
          aria-label={`Call Vesharo at ${site.contact.phoneFormatted}`}
        >
          <i className="ph ph-phone-call text-primary mb-1" style={{ fontSize: "1.2rem", color: "#A78BFA" }} aria-hidden="true" />
          <span className="fw-medium">Call</span>
        </a>

        {/* WhatsApp button */}
        <a
          href={site.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark d-flex flex-column align-items-center justify-content-center flex-grow-1 py-1 px-2 rounded-3 text-decoration-none"
          style={{
            backgroundColor: "rgba(37, 211, 102, 0.12)",
            border: "1px solid rgba(37, 211, 102, 0.3)",
            color: "#25D366",
            fontSize: "0.75rem",
          }}
          aria-label="Chat with Vesharo on WhatsApp"
        >
          <i className="ph ph-whatsapp-logo mb-1" style={{ fontSize: "1.2rem", color: "#25D366" }} aria-hidden="true" />
          <span className="fw-medium">WhatsApp</span>
        </a>

        {/* Quote button */}
        <a
          href="/contact"
          className="btn btn-primary d-flex flex-column align-items-center justify-content-center flex-grow-1 py-1 px-2 rounded-3 text-decoration-none"
          style={{
            backgroundColor: "#7C5CFF",
            borderColor: "#7C5CFF",
            color: "#FFFFFF",
            fontSize: "0.75rem",
          }}
          aria-label="Request a free quote"
        >
          <i className="ph ph-paper-plane-tilt mb-1" style={{ fontSize: "1.2rem" }} aria-hidden="true" />
          <span className="fw-semibold">Get Quote</span>
        </a>
      </div>
    </aside>
  );
}
