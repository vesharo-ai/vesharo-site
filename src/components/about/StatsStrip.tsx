"use client";
import React from "react";

/**
 * StatsStrip — Truthful engineering standards and operational metrics.
 * Follows CEO Golden Rule: zero invented vanity metrics or unverifiable counts.
 */
const operationalSignals: {
  metric: string;
  label: string;
  icon: string;
  note: string;
}[] = [
  {
    metric: "100%",
    label: "Code & IP Ownership",
    icon: "ph-shield-check",
    note: "All code, schemas, and cloud accounts owned by you from day one.",
  },
  {
    metric: "< 24h",
    label: "Engineer Response",
    icon: "ph-clock-countdown",
    note: "Direct scoping review by a senior engineer, not a sales script.",
  },
  {
    metric: "2-Week",
    label: "Sprint Cadences",
    icon: "ph-arrows-clockwise",
    note: "Structured milestones, working demos, and deployable increments.",
  },
  {
    metric: "Direct",
    label: "Senior Accountability",
    icon: "ph-user-check",
    note: "Architects who scope your build are the engineers writing the code.",
  },
];

function StatsStrip() {
  return (
    <section
      className="tz-stats-strip tz-bg-neutral2 py-5 border-top border-bottom border-secondary border-opacity-25"
      aria-label="Vesharo engineering commitments"
    >
      <div className="container">
        <ul className="tz-stats-strip__grid" role="list">
          {operationalSignals.map((s) => (
            <li key={s.label} className="tz-stats-strip__item">
              <div className="tz-stats-strip__icon-wrap" aria-hidden="true">
                <i className={`ph ${s.icon} text-primary`} style={{ color: "#A78BFA" }} />
              </div>
              <div className="tz-stats-strip__body">
                <div className="tz-stats-strip__number text-white fw-bold">
                  {s.metric}
                </div>
                <p className="tz-stats-strip__label text-white fw-semibold mb-1">{s.label}</p>
                <p className="tz-stats-strip__note text-white-50 tz-text-s mb-0">{s.note}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default StatsStrip;
