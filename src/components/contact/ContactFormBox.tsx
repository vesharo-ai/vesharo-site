"use client";

import React, { useState } from "react";
import { brand } from "@/config/brand";

type Status = "idle" | "submitting" | "sent";

/**
 * Contact form.
 *
 * Posts to our own /api/contact endpoint, which sends the visitor a personal
 * confirmation and emails Vesharo the full enquiry. We only report success
 * when the server confirms the enquiry was actually delivered.
 */
const ENDPOINT = "/api/contact";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "Web Application",
  budget: "$10k - $25k",
  message: "",
};

function ContactFormBox() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  // Honeypot: hidden from humans, catches naive bots.
  const [honeypot, setHoneypot] = useState("");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const srvParam = params.get("service");
      const complexityParam = params.get("complexity");
      const featuresParam = params.get("features");

      if (srvParam) {
        let mappedService = "Web Application";
        if (srvParam.includes("Mobile")) mappedService = "Mobile App";
        else if (srvParam.includes("Cloud")) mappedService = "Cloud & DevOps";
        else if (srvParam.includes("Enterprise")) mappedService = "Enterprise Modernization";
        else if (srvParam.includes("Data") || srvParam.includes("AI")) mappedService = "Data & AI";
        else if (srvParam.includes("Design") || srvParam.includes("UI")) mappedService = "UI/UX Design";

        let autoMsg = "";
        if (complexityParam || featuresParam) {
          autoMsg = `Interested in ${srvParam} (${complexityParam || "MVP"} stage). Selected requirements: ${featuresParam || "standard"}.`;
        }

        setFormData((prev) => ({
          ...prev,
          service: mappedService,
          message: prev.message || autoMsg,
        }));
      }
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (honeypot) return; // silently drop bots

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg("Please fill in Name, Business Email and Project Details.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email.trim())) {
      setErrorMsg("Please enter a valid email address so we can reply.");
      return;
    }

    setErrorMsg("");
    setStatus("submitting");

    try {
      let response: Response;

      // 1. If Web3Forms access key is configured in env
      if (brand.forms.web3formsKey) {
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: brand.forms.web3formsKey,
            subject: `New Project Quote Request: ${formData.service} (${formData.name})`,
            from_name: "Vesharo Website Quote Form",
            name: formData.name,
            email: formData.email,
            phone: formData.phone || "Not provided",
            company: formData.company || "Not provided",
            service: formData.service,
            budget: formData.budget,
            message: formData.message,
            botcheck: honeypot,
          }),
        });
      } else if (brand.forms.formspreeEndpoint) {
        // 2. If Formspree endpoint is configured
        response = await fetch(brand.forms.formspreeEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.company,
            service: formData.service,
            budget: formData.budget,
            message: formData.message,
            _gotcha: honeypot,
          }),
        });
      } else {
        // 3. Default to internal /api/contact route
        response = await fetch(ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...formData,
            website: honeypot,
            source: typeof document !== "undefined" ? document.location.pathname : undefined,
          }),
        });
      }

      const payload = await response.json().catch(() => null);

      if (!response.ok || (payload && payload.success === false && payload.ok === false)) {
        setStatus("idle");
        setErrorMsg(
          payload?.message ||
            payload?.error ||
            `We could not send that just now. Please email ${brand.contact.email} or call ${brand.contact.phoneFormatted} directly.`,
        );
        return;
      }

      setStatus("sent");
    } catch {
      setStatus("idle");
      setErrorMsg(
        `We could not reach the quote service. Please email ${brand.contact.email} or call ${brand.contact.phoneFormatted}.`,
      );
    }
  };

  if (status === "sent") {
    return (
      <div
        className="p-4 p-lg-5 text-center rounded-3 tz-bg-neutral2 border border-secondary"
        role="status"
      >
        <div className="mb-3">
          <i className="ph ph-check-circle" style={{ fontSize: "3rem", color: "#A78BFA" }} aria-hidden="true" />
        </div>
        <h3 className="tz-text-neutral5 mb-2">Thank you — your enquiry is with us</h3>
        <p className="tz-text-neutral6 tz-text-l mb-2">
          We have sent a confirmation to{" "}
          <strong className="text-white">{formData.email}</strong> and passed
          your details straight to our team.
        </p>
        <p className="tz-text-neutral6 tz-text-l mb-4">
          Someone from Vesharo will get back to you within 24 business hours. If
          it is urgent, call{" "}
          <a
            className="tz-text-primary"
            href={`tel:${brand.contact.phone.replace(/\s+/g, "")}`}
          >
            {brand.contact.phoneFormatted}
          </a>
          .
        </p>
        <div className="tz-buttons justify-content-center">
          <button
            type="button"
            onClick={() => {
              setFormData(initialForm);
              setStatus("idle");
            }}
            className="tz-button tz-text-m text-uppercase"
          >
            Send another message
          </button>
          <a
            className="tz-button-circle"
            href="/services"
            aria-label="Explore our services while you wait"
          >
            <i className="ph ph-arrow-up-right" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form className="row g-4" onSubmit={handleSubmit} noValidate>
      {errorMsg && (
        <div className="col-12">
          <div className="alert alert-danger mb-0 tz-text-m" role="alert">
            {errorMsg}
          </div>
        </div>
      )}

      {/* Honeypot — hidden from users, ignored by assistive tech */}
      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="website">Do not fill this in</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="name">
            Your Name <span className="tz-text-primary">*</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="email">
            Business Email <span className="tz-text-primary">*</span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="you@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="phone">
            Phone Number (optional)
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="company">
            Company / Organization (optional)
          </label>
          <input
            type="text"
            className="form-control"
            id="company"
            placeholder="Your company"
            value={formData.company}
            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
          />
        </div>
      </div>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="service">
            Primary Service
          </label>
          <select
            className="form-control"
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            style={{ backgroundColor: "#171717", color: "#fff" }}
          >
            <option value="Web Application">Custom Web Application</option>
            <option value="Mobile App">Mobile App Development</option>
            <option value="Cloud & DevOps">Cloud Engineering &amp; DevOps</option>
            <option value="Enterprise Modernization">Enterprise Modernization</option>
            <option value="Data & AI">Data &amp; AI Engineering</option>
            <option value="UI/UX Design">UI/UX &amp; Product Design</option>
          </select>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="budget">
            Estimated Budget
          </label>
          <select
            className="form-control"
            id="budget"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            style={{ backgroundColor: "#171717", color: "#fff" }}
          >
            <option value="Under $10k">Under $10,000</option>
            <option value="$10k - $25k">$10,000 – $25,000</option>
            <option value="$25k - $50k">$25,000 – $50,000</option>
            <option value="$50k+">$50,000+</option>
          </select>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="form-group">
          <label className="tz-text-l" htmlFor="message">
            Project Details &amp; Objectives <span className="tz-text-primary">*</span>
          </label>
          <textarea
            className="form-control"
            id="message"
            rows={5}
            placeholder="What are you trying to build, who will use it, and is there a timeline or existing system we should know about?"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="col-12">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="tz-button tz-button--full tz-text-l tz-bg-primary"
        >
          {status === "submitting" ? "Sending your enquiry..." : "Send project enquiry"}
        </button>
        <p className="tz-text-s tz-text-neutral6 mt-3 mb-0">
          We reply {brand.contact.supportResponseTime.toLowerCase()}. You will
          receive a confirmation email straight away. Your details are used only
          to respond to this enquiry.
        </p>
      </div>
    </form>
  );
}

export default ContactFormBox;