import React from "react";
import Link from "@/components/common/Link";

/**
 * Closing call to action.
 *
 * Every major page ends with one of these, worded for what that page has
 * already established. The point is that the action is never a generic
 * "Learn more" — a visitor who just read six service descriptions should not be
 * asked to "learn more", they should be asked to scope one.
 */

export interface CtaBandProps {
  /** Short kicker above the heading. */
  kicker?: string;
  /** The question or statement that closes the page. */
  heading: string;
  /** One or two sentences on what happens if they click. */
  body?: string;
  /** Primary action label, e.g. "Request a fixed quote". */
  label: string;
  href?: string;
  /** Optional secondary action. */
  secondaryLabel?: string;
  secondaryHref?: string;
  /** Bullet points on what the visitor gets back. */
  points?: string[];
}

function CtaBand({
  kicker = "Next step",
  heading,
  body,
  label,
  href = "/contact",
  secondaryLabel,
  secondaryHref,
  points,
}: CtaBandProps) {
  return (
    <section className="tz-cta-band tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120">
      <div className="container">
        <div className="tz-cta-band__inner">
          <div className="row g-4 g-lg-5 align-items-center">
            <div className={points?.length ? "col-lg-7" : "col-lg-9"}>
              <div className="tz-section-subtitle">
                <span className="tz-section-subtitle__line" />
                <h2 className="text-uppercase tz-text-primary">{kicker}</h2>
              </div>
              <h3 className="tz-cta-band__heading tz-display-2 text-uppercase">
                {heading}
              </h3>
              {body && <p className="tz-cta-band__body tz-text-l tz-text-neutral6">{body}</p>}

              <div className="tz-buttons d-flex flex-wrap">
                <Link href={href} className="tz-button text-uppercase fw-medium tz-text-m">
                  {label}
                </Link>
                <Link href={href} className="tz-button-circle" aria-label={label}>
                  <i className="ph ph-arrow-up-right" />
                </Link>
                {secondaryLabel && secondaryHref && (
                  <>
                    <Link
                      href={secondaryHref}
                      className="tz-button tz-button--ghost text-uppercase fw-medium"
                    >
                      {secondaryLabel}
                    </Link>
                    <Link
                      href={secondaryHref}
                      className="tz-button-circle"
                      aria-label={secondaryLabel}
                    >
                      <i className="ph ph-arrow-up-right" />
                    </Link>
                  </>
                )}
              </div>
            </div>

            {points?.length ? (
              <div className="col-lg-5">
                <div className="tz-cta-band__panel">
                  <h4 className="tz-cta-band__panel-title text-uppercase">
                    What you get back
                  </h4>
                  <ul className="tz-cta-band__points">
                    {points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaBand;