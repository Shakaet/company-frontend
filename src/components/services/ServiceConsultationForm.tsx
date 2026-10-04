"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  Sparkles,
  User,
  Mail,
  Phone,
  Building2,
  DollarSign,
  Clock,
  ArrowRight,
  AlertCircle,
  MessageSquare,
} from "lucide-react";
import { submitConsultation } from "@/lib/api/services";
import type { ConsultationPayload } from "@/lib/types";

interface ServiceConsultationFormProps {
  serviceTitle: string;
  serviceSlug: string;
}

export default function ServiceConsultationForm({
  serviceTitle,
  serviceSlug,
}: ServiceConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "$3,000 - $10,000",
    timeline: "Within 1 month",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFieldErrors((prev) => {
      if (!prev[name]) return prev;
      const next = { ...prev };
      delete next[name];
      return next;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setFieldErrors({});

    if (!formData.name || !formData.email || !formData.projectDetails) {
      setErrorMessage(
        "Please fill in your Name, Email, and Project Details."
      );
      return;
    }

    setIsSubmitting(true);

    const payload: ConsultationPayload = {
      serviceTitle,
      serviceSlug,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      budget: formData.budget,
      timeline: formData.timeline,
      projectDetails: formData.projectDetails,
      status: "pending",
    };

    const result = await submitConsultation(payload);
    setIsSubmitting(false);

    if (result.ok) {
      setIsSubmitted(true);
      return;
    }

    if (result.validationErrors.length > 0) {
      const map: Record<string, string> = {};
      result.validationErrors.forEach((err) => {
        map[err.path] = err.message.replace(/^Path `.*?` /, "").trim();
      });
      setFieldErrors(map);
    }
    setErrorMessage(result.error || "Please fix the errors below and try again.");
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50/80 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          Request Received
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Thank You, {formData.name}!
        </h3>
        <p className="mt-3 text-slate-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          We've received your consultation request for{" "}
          <span className="font-semibold text-slate-900">{serviceTitle}</span>.
          Our team will reach out within 2 business hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: "",
              email: "",
              phone: "",
              company: "",
              budget: "$3,000 - $10,000",
              timeline: "Within 1 month",
              projectDetails: "",
            });
          }}
          className="mt-8 px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-sm">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Free 30-Minute Consultation</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          Request a Consultation
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Tell us about your project. We'll respond within 2 business hours.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Michael Vance"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:ring-3 transition ${fieldErrors.name
                    ? "border-rose-300 focus:border-rose-500 focus:ring-rose-100"
                    : "border-slate-200 focus:border-blue-600 focus:ring-blue-100"
                  }`}
              />
            </div>
            {fieldErrors.name && (
              <p className="mt-1.5 text-xs text-rose-600">{fieldErrors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Email <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:ring-3 transition ${fieldErrors.email
                    ? "border-rose-300 focus:border-rose-500 focus:ring-rose-100"
                    : "border-slate-200 focus:border-blue-600 focus:ring-blue-100"
                  }`}
              />
            </div>
            {fieldErrors.email && (
              <p className="mt-1.5 text-xs text-rose-600">{fieldErrors.email}</p>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Phone
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+880 1XXXXXXXXX"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Company
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Inc"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Estimated Budget
            </label>
            <div className="relative">
              <DollarSign className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition cursor-pointer appearance-none"
              >
                <option value="< $3,000">Less than $3,000</option>
                <option value="$3,000 - $10,000">$3,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000+">$25,000+</option>
                <option value="Not Sure / Flexible">Not Sure / Need Guidance</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Timeline
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition cursor-pointer appearance-none"
              >
                <option value="Immediately">Immediately</option>
                <option value="Within 1 month">Within 1 Month</option>
                <option value="1 - 3 months">1 - 3 Months</option>
                <option value="Exploring & Planning">Just Planning</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Project Details <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <MessageSquare className="w-4 h-4 absolute left-3.5 top-4 text-slate-400" />
            <textarea
              required
              rows={4}
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              placeholder="Describe your project, requirements, and goals..."
              className={`w-full pl-10 pr-4 py-3 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:ring-3 transition leading-relaxed ${fieldErrors.projectDetails
                  ? "border-rose-300 focus:border-rose-500 focus:ring-rose-100"
                  : "border-slate-200 focus:border-blue-600 focus:ring-blue-100"
                }`}
            />
          </div>
          {fieldErrors.projectDetails && (
            <p className="mt-1.5 text-xs text-rose-600">
              {fieldErrors.projectDetails}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending Request...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Request Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}