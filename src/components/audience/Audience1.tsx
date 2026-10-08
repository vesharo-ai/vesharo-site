import React from "react";
import Link from "@/components/common/Link";

/**
 * Who Vesharo serves, and the problems it solves.
 *
 * These two questions were previously unanswered anywhere on the site, which
 * left a visitor who did not already know us with no way to self-qualify.
 *
 * Everything here describes categories and problems — never named clients,
 * counts or outcomes. No client has been verified, so none is implied.
 */

const audiences: { icon: string; who: string; need: string }[] = [
  {
    icon: "ph-rocket-launch",
    who: "Product teams shipping a web or mobile product",
    need: "You have traction and need a team that can keep shipping without the codebase becoming the bottleneck.",
  },
  {
    icon: "ph-buildings",
    who: "Enterprises replacing a legacy system",
    need: "The old platform still runs the business and cannot be switched off, but it cannot grow either.",
  },
  {
    icon: "ph-shield-check",
    who: "Regulated businesses in fintech and healthcare",
    need: "Audit trails, role-based access and handover documentation are contractual requirements, not nice-to-haves.",
  },
  {
    icon: "ph-cloud-arrow-up",
    who: "Teams moving infrastructure without downtime",
    need: "You need out of the current environment and cannot afford a maintenance window your customers would notice.",
  },
  {
    icon: "ph-chart-line-up",
    who: "Organisations sitting on unusable data",
    need: "The reporting exists but nobody trusts it, and manual work is still done by hand because of it.",
  },
  {
    icon: "ph-users-three",
    who: "Teams without an in-house engineering bench",
    need: "You need senior capability now, and you want to keep it — the code, the accounts and the documentation.",
  },
];

const problems: { problem: string; consequence: string }[] = [
  {
    problem: "Nothing is visible until the very end",
    consequence:
      "A six-month build with a single reveal is a six-month period where you cannot tell whether it is working.",
  },
  {
    problem: "The vendor owns the code and the cloud accounts",
    consequence:
      "Changing supplier later means starting again, so the relationship can never be honestly contested.",
  },
  {
    problem: "Scope and invoice drift apart",
    consequence:
      "Work that was never agreed turns into a surprise line item, and trust drains long before the project ends.",
  },
  {
    problem: "The legacy system cannot be replaced safely",
    consequence:
      "Every proposal is a rewrite, every rewrite carries risk, and the business stays frozen while it is debated.",
  },
];

function Audience1() {
  return (
    <section className="tz-audience tz-bg-neutral2 tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120" aria-labelledby="audience-heading">
      <div className="container">
        <div className="tz-section-top tz-section-top--centered">
          <div className="tz-section-subtitle">
            <span className="tz-section-subtitle__line" />
            <span className="text-uppercase tz-text-primary fw-semibold" style={{ fontSize: "0.8125rem", letterSpacing: "0.1em" }}>Audience</span>
          </div>
          <h2 id="audience-heading" className="tz-section-title tz-display-2 text-uppercase">
            Who we work with
          </h2>
          <p className="tz-text-l tz-text-neutral6 mx-auto text-center mt-3" style={{ maxWidth: "660px" }}>
            We work with product teams, enterprises and fast-growing businesses across fintech, healthcare, logistics, and more. If your situation is listed below, we already understand the constraints — if it is not, tell us and we will assess honestly.
          </p>
        </div>

        <ul className="tz-audience__grid">
          {audiences.map((a) => (
            <li className="tz-audience__item" key={a.who}>
              <i className={`ph ${a.icon} tz-audience__icon`} aria-hidden="true" />
              <h3 className="tz-audience__who">{a.who}</h3>
              <p className="tz-audience__need">{a.need}</p>
            </li>
          ))}
        </ul>

        <div className="tz-audience__problems">
          <div className="tz-audience__problems-head">
            <h3 className="tz-audience__problems-title text-uppercase">
              The problems behind the brief
            </h3>
            <p className="tz-text-neutral6 mb-0">
              If any of these describe your current supplier, that is worth
              knowing before you sign anything else.
            </p>
          </div>
          <ul className="tz-audience__problem-list">
            {problems.map((p) => (
              <li key={p.problem}>
                <p className="tz-audience__problem mb-1">{p.problem}</p>
                <p className="tz-audience__consequence mb-0">{p.consequence}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="tz-buttons d-flex flex-wrap justify-content-center mt-5">
          <Link
            href="/portfolio"
            className="tz-button text-uppercase fw-medium tz-text-m"
          >
            See the engagements we take on
          </Link>
          <Link
            href="/portfolio"
            className="tz-button-circle"
            aria-label="See the engagements we take on"
          >
            <i className="ph ph-arrow-up-right" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Audience1;