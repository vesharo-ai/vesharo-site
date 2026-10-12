import React, { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { trackEvent } from "@/lib/analytics";

interface FormErrors {
  name?: string;
  email?: string;
  service?: string;
  budget?: string;
  message?: string;
}

export default function ContactFormBox() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
    _gotcha: "", // Honeypot field (hidden)
  });

  const [formLoadedAt, setFormLoadedAt] = useState<number>(0);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    // Record page load timestamp for time-trap spam protection
    setFormLoadedAt(Date.now());
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Work email address is required.";
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service capability.";
    }

    if (!formData.budget) {
      newErrors.budget = "Please select an estimated budget range.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project brief or message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Please provide at least 10 characters describing your project.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Honeypot spam detection: silent dummy success
    if (formData._gotcha) {
      setSubmitSuccess(true);
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _form_loaded_at: formLoadedAt.toString(),
        }),
      });

      const result = await response.json().catch(() => null);

      if (response.ok && result?.success) {
        setSubmitSuccess(true);
        // Track conversion event (zero PII)
        trackEvent("contact_form_submit", {
          service: formData.service,
          budget: formData.budget,
        });
      } else {
        const errorMsg =
          result?.error ||
          "An unexpected error occurred while transmitting your inquiry. Please try again or email us directly at contact@vesharo.com.";
        setSubmitError(errorMsg);
      }
    } catch (err) {
      setSubmitError(
        "Network connection interrupted. Please check your internet or reach us via email/WhatsApp."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      budget: "",
      message: "",
      _gotcha: "",
    });
    setErrors({});
    setSubmitSuccess(false);
    setSubmitError(null);
    setFormLoadedAt(Date.now());
  };

  // Success State Display
  if (submitSuccess) {
    return (
      <div
        className="p-4 p-md-5 rounded-4 text-center border"
        style={{
          backgroundColor: "#0B0F19",
          borderColor: "rgba(0, 210, 255, 0.3)",
        }}
        role="alert"
        aria-live="polite"
      >
        <div
          className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4"
          style={{
            width: "72px",
            height: "72px",
            background: "linear-gradient(135deg, rgba(0, 102, 255, 0.2), rgba(0, 210, 255, 0.3))",
            color: "#00D2FF",
            fontSize: "2rem",
            border: "1px solid rgba(0, 210, 255, 0.4)",
          }}
        >
          <i className="ph ph-check-circle" />
        </div>
        <h3 className="h3 text-white fw-bold mb-3">Project Brief Received!</h3>
        <p className="text-white-50 mb-4 mx-auto" style={{ maxWidth: "520px", lineHeight: 1.7 }}>
          Thank you, <strong className="text-white">{formData.name || "Client"}</strong>. Our engineering
          leads will review your requirements for <span className="text-primary">{formData.service}</span> and
          get back to <strong className="text-white">{formData.email}</strong> within 24 business hours.
        </p>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          <button
            type="button"
            className="btn btn-outline-light rounded-pill px-4 py-2"
            onClick={handleReset}
          >
            <i className="ph ph-arrow-counter-clockwise me-2" />
            Send Another Inquiry
          </button>
          <a
            href={siteConfig.contact.bookingUrl || "https://cal.com/vesharo"}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary rounded-pill px-4 py-2"
            data-analytics-event="book_call_click"
            data-analytics-label="post_submit_cta"
          >
            <i className="ph ph-calendar-plus me-2" />
            Book Instant Discovery Call
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      className="row g-4"
      action="/api/contact"
      method="POST"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Honeypot field (hidden from real users, caught by spam bots) */}
      <div style={{ display: "none" }} aria-hidden="true">
        <label htmlFor="_gotcha">Do not fill this out if you are human</label>
        <input
          type="text"
          name="_gotcha"
          id="_gotcha"
          tabIndex={-1}
          autoComplete="off"
          value={formData._gotcha}
          onChange={handleChange}
        />
      </div>

      {/* General Submission Error Alert */}
      {submitError && (
        <div className="col-12">
          <div
            className="alert alert-danger d-flex align-items-center gap-2 mb-0"
            role="alert"
            style={{ backgroundColor: "rgba(255, 77, 79, 0.15)", borderColor: "#FF4D4F", color: "#FF7875" }}
          >
            <i className="ph ph-warning-circle flex-shrink-0" style={{ fontSize: "1.25rem" }} />
            <div>{submitError}</div>
          </div>
        </div>
      )}

      {/* Full Name */}
      <div className="col-md-6">
        <div className="form-group">
          <label className="text-white small fw-semibold mb-2 d-block" htmlFor="contact-name">
            Your Full Name <span className="text-primary">*</span>
          </label>
          <input
            type="text"
            id="contact-name"
            name="name"
            autoComplete="name"
            className="form-control bg-dark text-white"
            style={{
              backgroundColor: "#070B14",
              borderColor: errors.name ? "#FF4D4F" : "rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              padding: "12px 16px",
              borderRadius: "8px",
            }}
            placeholder="e.g. Rahul Sharma"
            value={formData.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            required
          />
          {errors.name && (
            <span id="name-error" className="text-danger small mt-1 d-block" role="alert">
              {errors.name}
            </span>
          )}
        </div>
      </div>

      {/* Work Email */}
      <div className="col-md-6">
        <div className="form-group">
          <label className="text-white small fw-semibold mb-2 d-block" htmlFor="contact-email">
            Work Email Address <span className="text-primary">*</span>
          </label>
          <input
            type="email"
            id="contact-email"
            name="email"
            autoComplete="email"
            className="form-control bg-dark text-white"
            style={{
              backgroundColor: "#070B14",
              borderColor: errors.email ? "#FF4D4F" : "rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              padding: "12px 16px",
              borderRadius: "8px",
            }}
            placeholder="rahul@company.com"
            value={formData.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            required
          />
          {errors.email && (
            <span id="email-error" className="text-danger small mt-1 d-block" role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      {/* Phone Number */}
      <div className="col-md-6">
        <div className="form-group">
          <label className="text-white small fw-semibold mb-2 d-block" htmlFor="contact-phone">
            Phone / WhatsApp Number <span className="text-white-50">(Optional)</span>
          </label>
          <input
            type="tel"
            id="contact-phone"
            name="phone"
            autoComplete="tel"
            className="form-control bg-dark text-white"
            style={{
              backgroundColor: "#070B14",
              borderColor: "rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              padding: "12px 16px",
              borderRadius: "8px",
            }}
            placeholder="+91 98765 43210"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Service Selection */}
      <div className="col-md-6">
        <div className="form-group">
          <label className="text-white small fw-semibold mb-2 d-block" htmlFor="contact-service">
            Primary Capability Required <span className="text-primary">*</span>
          </label>
          <select
            id="contact-service"
            name="service"
            className="form-select bg-dark text-white"
            style={{
              backgroundColor: "#070B14",
              borderColor: errors.service ? "#FF4D4F" : "rgba(255,255,255,0.15)",
              color: formData.service ? "#FFFFFF" : "#94A3B8",
              padding: "12px 16px",
              borderRadius: "8px",
            }}
            value={formData.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            required
          >
            <option value="" disabled>
              Select engineering service...
            </option>
            <option value="AI Automation & Agents">AI Automation &amp; Autonomous Agents</option>
            <option value="Custom Software Development">Custom Software &amp; Platform Architecture</option>
            <option value="Full-Stack Web Development">Full-Stack Web Applications (React / Next.js / Astro)</option>
            <option value="Mobile App Development">Mobile Apps (iOS &amp; Android / React Native / Flutter)</option>
            <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure &amp; DevOps (AWS / GCP / K8s)</option>
            <option value="AI Chatbots & LLM Fine-Tuning">Enterprise AI Chatbots &amp; LLM Fine-Tuning</option>
            <option value="IT Consulting & Code Audit">IT Consulting, Architecture Review &amp; Code Audit</option>
          </select>
          {errors.service && (
            <span id="service-error" className="text-danger small mt-1 d-block" role="alert">
              {errors.service}
            </span>
          )}
        </div>
      </div>

      {/* Budget Range */}
      <div className="col-12">
        <div className="form-group">
          <label className="text-white small fw-semibold mb-2 d-block" htmlFor="contact-budget">
            Estimated Budget Range <span className="text-primary">*</span>
          </label>
          <select
            id="contact-budget"
            name="budget"
            className="form-select bg-dark text-white"
            style={{
              backgroundColor: "#070B14",
              borderColor: errors.budget ? "#FF4D4F" : "rgba(255,255,255,0.15)",
              color: formData.budget ? "#FFFFFF" : "#94A3B8",
              padding: "12px 16px",
              borderRadius: "8px",
            }}
            value={formData.budget}
            onChange={handleChange}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            required
          >
            <option value="" disabled>
              Select investment range...
            </option>
            <option value="< $5,000 (MVP / Prototype / Proof of Concept)">&lt; $5,000 (MVP / Prototype / Proof of Concept)</option>
            <option value="$5,000 - $15,000 (Standard Production Build)">$5,000 - $15,000 (Standard Production Build)</option>
            <option value="$15,000 - $35,000 (Scale & Advanced Automation)">$15,000 - $35,000 (Scale &amp; Advanced Automation)</option>
            <option value="$35,000+ (Multi-tenant platform / enterprise systems)">$35,000+ (Multi-tenant platform / enterprise systems)</option>
            <option value="Flexible / Needs Architecture Discovery">Flexible / Needs Architecture Discovery</option>
          </select>
          {errors.budget && (
            <span id="budget-error" className="text-danger small mt-1 d-block" role="alert">
              {errors.budget}
            </span>
          )}
        </div>
      </div>

      {/* Project Message */}
      <div className="col-12">
        <div className="form-group">
          <label className="text-white small fw-semibold mb-2 d-block" htmlFor="contact-message">
            Project Overview &amp; Objectives <span className="text-primary">*</span>
          </label>
          <textarea
            id="contact-message"
            name="message"
            className="form-control bg-dark text-white"
            rows={5}
            style={{
              backgroundColor: "#070B14",
              borderColor: errors.message ? "#FF4D4F" : "rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              padding: "12px 16px",
              borderRadius: "8px",
            }}
            placeholder="Tell us about what you want to build, current bottlenecks, target deadlines, or technical constraints..."
            value={formData.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            required
          />
          {errors.message && (
            <span id="message-error" className="text-danger small mt-1 d-block" role="alert">
              {errors.message}
            </span>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <div className="col-12">
        <button
          type="submit"
          className="btn btn-primary w-100 py-3 rounded-pill fw-semibold text-uppercase tracking-wider d-flex align-items-center justify-content-center gap-2"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true" />
              <span>Transmitting to Engineering...</span>
            </>
          ) : (
            <>
              <span>Send Project Inquiry</span>
              <i className="ph ph-paper-plane-tilt" />
            </>
          )}
        </button>
        <p className="text-center text-white-50 small mt-3 mb-0" style={{ fontSize: "0.8rem" }}>
          <i className="ph ph-shield-check text-primary me-1" />
          Direct engineering response within 24 business hours. No spam, NDA available on request.
        </p>
      </div>
    </form>
  );
}
