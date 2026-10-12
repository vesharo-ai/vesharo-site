"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";

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
    _gotcha: "", // Honeypot field
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Please provide at least 15 characters describing your project.";
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
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // If honeypot is filled, silent discard (bot detected)
    if (formData._gotcha) {
      e.preventDefault();
      window.location.href = "/thank-you";
      return;
    }

    if (!validate()) {
      e.preventDefault();
      return;
    }

    setIsSubmitting(true);
  };

  return (
    <form
      className="row g-4"
      action="/thank-you"
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
            placeholder="e.g. rahul@company.com"
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

      {/* Phone Number (Optional) */}
      <div className="col-md-6">
        <div className="form-group">
          <label className="text-white small fw-semibold mb-2 d-block" htmlFor="contact-phone">
            Phone / WhatsApp <span className="text-white-50">(Optional)</span>
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

      {/* Service Capability Select (7 Services) */}
      <div className="col-md-6">
        <div className="form-group">
          <label className="text-white small fw-semibold mb-2 d-block" htmlFor="contact-service">
            Primary Capability Needed <span className="text-primary">*</span>
          </label>
          <select
            id="contact-service"
            name="service"
            className="form-select bg-dark text-white"
            style={{
              backgroundColor: "#070B14",
              borderColor: errors.service ? "#FF4D4F" : "rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              padding: "12px 16px",
              borderRadius: "8px",
            }}
            value={formData.service}
            onChange={handleChange}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
            required
          >
            <option value="" disabled>Select a capability...</option>
            {siteConfig.services.map((s) => (
              <option key={s.id} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Multi-Capability / End-to-End System">Multi-Capability / End-to-End System</option>
          </select>
          {errors.service && (
            <span id="service-error" className="text-danger small mt-1 d-block" role="alert">
              {errors.service}
            </span>
          )}
        </div>
      </div>

      {/* Estimated Budget Range */}
      <div className="col-12">
        <div className="form-group">
          <label className="text-white small fw-semibold mb-2 d-block" htmlFor="contact-budget">
            Estimated Project Budget <span className="text-primary">*</span>
          </label>
          <select
            id="contact-budget"
            name="budget"
            className="form-select bg-dark text-white"
            style={{
              backgroundColor: "#070B14",
              borderColor: errors.budget ? "#FF4D4F" : "rgba(255,255,255,0.15)",
              color: "#FFFFFF",
              padding: "12px 16px",
              borderRadius: "8px",
            }}
            value={formData.budget}
            onChange={handleChange}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
            required
          >
            <option value="" disabled>Select an estimated budget range...</option>
            <option value="$2,500 – $5,000 (Small sprint / audit / prototype)">$2,500 – $5,000 (Small sprint / audit / prototype)</option>
            <option value="$5,000 – $15,000 (MVP / targeted workflow automation)">$5,000 – $15,000 (MVP / targeted workflow automation)</option>
            <option value="$15,000 – $35,000 (Full production application / mobile launch)">$15,000 – $35,000 (Full production application / mobile launch)</option>
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
            <span>Transmitting to Engineering...</span>
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
