import { siteConfig } from "@/config/site";

const FooterSocial = () => {
  return (
    <div className="tz-footer__socials d-flex gap-2 align-items-center" role="list" aria-label="Social media profiles">
      {siteConfig.socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="tz-footer__social-link d-inline-flex align-items-center justify-content-center"
          aria-label={social.name}
        >
          <i className={`ph ${social.icon}`} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;