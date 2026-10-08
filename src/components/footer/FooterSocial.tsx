import { site } from "@/config/site";

const FooterSocial = () => {
  return (
    <div className="tz-footer__socials d-flex align-items-center gap-2 mt-3">
      {/* Direct Communication Channels */}
      <a
        href={`mailto:${site.contact.email}`}
        className="tz-footer__social-link"
        aria-label="Email Vesharo"
        title="Email Vesharo"
      >
        <i className="ph ph-envelope-simple" aria-hidden="true" />
      </a>
      <a
        href={`tel:${site.contact.phoneRaw}`}
        className="tz-footer__social-link"
        aria-label="Call Vesharo"
        title="Call Vesharo"
      >
        <i className="ph ph-phone-call" aria-hidden="true" />
      </a>
      <a
        href={site.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="tz-footer__social-link"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <i className="ph ph-whatsapp-logo" aria-hidden="true" />
      </a>

      {/* Verified Social Profiles (render ONLY when URL is non-empty) */}
      {site.social.linkedin && (
        <a
          href={site.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="tz-footer__social-link"
          aria-label="Vesharo on LinkedIn"
          title="LinkedIn"
        >
          <i className="ph ph-linkedin-logo" aria-hidden="true" />
        </a>
      )}
      {site.social.twitter && (
        <a
          href={site.social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="tz-footer__social-link"
          aria-label="Vesharo on X / Twitter"
          title="X / Twitter"
        >
          <i className="ph ph-x-logo" aria-hidden="true" />
        </a>
      )}
      {site.social.github && (
        <a
          href={site.social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="tz-footer__social-link"
          aria-label="Vesharo on GitHub"
          title="GitHub"
        >
          <i className="ph ph-github-logo" aria-hidden="true" />
        </a>
      )}
    </div>
  );
};

export default FooterSocial;
