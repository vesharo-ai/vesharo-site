import React from "react";
import { brand } from "@/config/brand";

/**
 * Proof strip.
 *
 * Replaces the decorative service-name marquee that used to sit under the
 * header on eleven pages. A scrolling list of the same five words explained
 * nothing; these are the commitments a prospect can actually hold Vesharo to,
 * read straight from brand configuration so they cannot drift from the contact
 * details.
 *
 * Policy, not outcome claims. No client, project or statistic is referenced.
 */
const proofs: { icon: string; label: string; value: string }[] = [
  {
    icon: "ph-clock-countdown",
    label: "Reply within",
    value: brand.contact.supportResponseTime.toLowerCase().replace("within ", ""),
  },
  {
    icon: "ph-identification-card",
    label: "Code ownership",
    value: "Yours from day one",
  },
  {
    icon: "ph-map-pin",
    label: "Based in",
    value: "Ahmedabad, India",
  },
  {
    icon: "ph-globe-hemisphere-west",
    label: "Working with",
    value: "Teams worldwide",
  },
  {
    icon: "ph-arrows-clockwise",
    label: "Delivery cadence",
    value: "Two-week sprints",
  },
];

function ProofStrip() {
  return (
    <section className="tz-proof" aria-label="How Vesharo works, at a glance">
      <div className="container">
        <ul className="tz-proof__list">
          {proofs.map((p) => (
            <li className="tz-proof__item" key={p.label}>
              <i className={`ph ${p.icon} tz-proof__icon`} aria-hidden="true" />
              <span className="tz-proof__text">
                <span className="tz-proof__label">{p.label}</span>
                <span className="tz-proof__value">{p.value}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ProofStrip;