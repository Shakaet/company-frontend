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
  AlertCircle 
} from "lucide-react";

interface ServiceConsultationFormProps {
  serviceTitle?: string;
  serviceSlug?: string;
}

export default function ServiceConsultationForm({ 
  serviceTitle = "General Project Inquiry",
  serviceSlug
}: ServiceConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "$3k - $10k",
    timeline: "Within 1 month",
    projectDetails: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.projectDetails) {
      setErrorMessage("Please complete all required fields (Name, Email, and Project Details).");
      return;
    }

    setIsSubmitting(true);

    try {
      // Future API call:
      // await fetch('/api/services/inquire', { method: 'POST', body: JSON.stringify({ ...formData, serviceTitle, serviceSlug }) });

      await new Promise((resolve) => setTimeout(resolve, 800));

      const mailBody = encodeURIComponent(
        `New Project Inquiry regarding: ${serviceTitle}\n\n` +
        `Client Information:\n` +
        `--------------------\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Company: ${formData.company || "Not provided"}\n` +
        `Estimated Budget: ${formData.budget}\n` +
        `Timeline: ${formData.timeline}\n\n` +
        `Project Scope & Details:\n` +
        `--------------------\n` +
        `${formData.projectDetails}`
      );

      window.location.href = `mailto:hello@itstartup.com?subject=Project Inquiry: ${encodeURIComponent(serviceTitle)} - ${encodeURIComponent(formData.name)}&body=${mailBody}`;

      setIsSubmitted(true);
    } catch {
      setErrorMessage("Something went wrong. Please try again or reach out to hello@itstartup.com directly.");
    } finally {
      setIsSubmitting(false);
    }
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
          We've received your request regarding <span className="font-semibold text-slate-900">{serviceTitle}</span>. One of our lead technical architects will review your project details and respond within 24 hours.
        </p>

        <div className="mt-8 pt-6 border-t border-emerald-200 flex justify-center">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                budget: "$3k - $10k",
                timeline: "Within 1 month",
                projectDetails: "",
              });
            }}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div id="request-quote" className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 shadow-sm scroll-mt-24">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Tailored Architecture & Estimate</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          Request a Free Consultation for {serviceTitle}
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Tell us about your product goals and our senior engineering team will get back to you with a roadmap and estimate.
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
              Your Name <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Sarah Jenkins"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Work Email <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="sarah@company.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Phone / WhatsApp
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Company Name / Website
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Corp (acme.com)"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Estimated Budget Range
            </label>
            <div className="relative">
              <DollarSign className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition cursor-pointer appearance-none"
              >
                <option value="< $3,000">Less than $3,000</option>
                <option value="$3k - $10k">$3,000 - $10,000</option>
                <option value="$10k - $25k">$10,000 - $25,000</option>
                <option value="$25k+">$25,000+</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Target Launch Timeline
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition cursor-pointer appearance-none"
              >
                <option value="Immediately">Immediately (ASAP)</option>
                <option value="Within 1 month">Within 1 Month</option>
                <option value="1 - 3 months">1 - 3 Months</option>
                <option value="Exploring & Scoping">Just Exploring / Need Guidance</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Project Overview & Goals <span className="text-rose-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Tell us what you're building, key features required, existing tech stack, and what success looks like..."
            className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition leading-relaxed"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending Inquiry...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Project Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
