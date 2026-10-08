import React from "react";

/**
 * Commitments, not testimonials.
 *
 * We only publish client quotes and outcome metrics we can verify. Until
 * approved client references are available, this section states the working
 * commitments a client can hold us to — policy, not claims about past results.
 */
const commitments: { title: string; body: string; icon: string }[] = [
  {
    icon: "ph-shield-check",
    title: "You own the intellectual property",
    body: "Source code, infrastructure definitions and design files are yours from day one. They are delivered in your repositories, under your accounts, on your billing.",
  },
  {
    icon: "ph-ruler",
    title: "Fixed scope before we start",
    body: "We quote against a written scope. Anything outside it becomes a change request you approve with a price and a timeline attached — never a surprise on the invoice.",
  },
  {
    icon: "ph-git-branch",
    title: "You see the work continuously",
    body: "Short sprints, a live demo at the end of each one, and a staging environment you can open at any time. No big-bang reveal at the end of a six-month build.",
  },
  {
    icon: "ph-graduation-cap",
    title: "We hand over, we don't hold on",
    body: "Documentation, runbooks and a walkthrough with your engineers before launch. If you later bring an in-house team or another vendor, that is a success, not a loss.",
  },
  {
    icon: "ph-lifebuoy",
    title: "Support after go-live",
    body: "A defined post-launch support window is included in every proposal, with agreed response times. Anything beyond that is a simple monthly retainer you can cancel.",
  },
  {
    icon: "ph-scales",
    title: "We'll say if we're the wrong fit",
    body: "If your problem is better solved in-house, with an off-the-shelf tool, or by a different kind of specialist, we will tell you before you sign anything.",
  },
];

const Commitments1 = React.memo(function Commitments1({
  bgClass = "tz-bg-neutral3",
}: {
  bgClass?: string;
}) {
  return (
    <section
      className={`tz-commitments tz-pt-60 tz-pb-60 tz-pt-lg-120 tz-pb-lg-120 ${bgClass}`}
      aria-labelledby="commitments-heading"
    >
      <div className="container">
        <div className="row g-4 g-lg-5">
          <div className="col-lg-5">
            <div className="tz-section-top">
              <div className="tz-section-subtitle">
                <span className="tz-section-subtitle__line" />
                <h4 className="text-uppercase tz-text-primary">
                  How we work
                </h4>
              </div>
              <h2
                id="commitments-heading"
                className="tz-display-2 text-uppercase tz-text-neutral5"
              >
                What you can hold us to
              </h2>
              <p className="tz-text-l tz-text-neutral6">
                Trust is earned in the working agreement, not in a testimonial
                slider. These are the commitments we put in writing before any
                project starts.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              {commitments.map((item) => (
                <div className="col-md-6" key={item.title}>
                  <div className="d-flex gap-3 h-100">
                    <i
                      className={`ph ${item.icon} tz-text-primary flex-shrink-0`}
                      style={{ fontSize: "1.75rem" }}
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="tz-text-m tz-text-neutral5 text-uppercase mb-2">
                        {item.title}
                      </h3>
                      <p className="tz-text-s tz-text-neutral6 mb-0">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Commitments1;