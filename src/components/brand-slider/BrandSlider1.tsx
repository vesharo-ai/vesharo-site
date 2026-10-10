"use client";

import React from "react";

const techStack = [
  { name: "Python", role: "AI & Neural Pipelines", badge: "AI" },
  { name: "TypeScript", role: "Strict Type Safety", badge: "TS" },
  { name: "React 19", role: "Modern Component Architecture", badge: "UI" },
  { name: "Next.js", role: "Enterprise Full-Stack", badge: "SSR" },
  { name: "Astro", role: "High-Velocity Web", badge: "Core" },
  { name: "Node.js", role: "Scalable Microservices", badge: "API" },
  { name: "AWS", role: "Cloud Infrastructure", badge: "Cloud" },
  { name: "Docker", role: "Containerization", badge: "DevOps" },
  { name: "PostgreSQL", role: "Relational Persistence", badge: "DB" },
  { name: "Redis", role: "Distributed In-Memory Cache", badge: "Cache" },
  { name: "Kubernetes", role: "Cluster Orchestration", badge: "K8s" },
  { name: "GraphQL", role: "Unified Query API", badge: "Query" },
  { name: "PyTorch", role: "Model Inference & Fine-tuning", badge: "ML" },
  { name: "FastAPI", role: "High-Throughput Services", badge: "Async" },
];

function BrandSlider1() {
  // Duplicate for smooth seamless loop
  const marqueeItems = [...techStack, ...techStack, ...techStack];

  return (
    <div className="vesharo-tech-strip tz-pt-lg-120 tz-pt-60">
      <div className="vesharo-tech-strip__inner d-flex flex-column flex-lg-row align-items-lg-center gap-4">
        {/* Section Label */}
        <div className="vesharo-tech-strip__label flex-shrink-0">
          <span className="vesharo-tech-strip__tag">CORE STACK</span>
          <h4 className="vesharo-tech-strip__title mb-0">
            TECHNOLOGY STACK &amp;<br />
            PLATFORM INTEGRATIONS
          </h4>
        </div>

        {/* Marquee Track Container */}
        <div className="vesharo-tech-strip__marquee flex-grow-1 overflow-hidden position-relative">
          <div className="vesharo-tech-track">
            {marqueeItems.map((tech, idx) => (
              <div key={idx} className="vesharo-tech-card">
                <span className="vesharo-tech-badge">{tech.badge}</span>
                <div className="vesharo-tech-info">
                  <div className="vesharo-tech-name">{tech.name}</div>
                  <div className="vesharo-tech-role">{tech.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandSlider1;
