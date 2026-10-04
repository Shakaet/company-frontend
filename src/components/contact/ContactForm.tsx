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
} from "lucide-react";
import { submitContact } from "@/lib/api/contact";
import type { ContactPayload } from "@/lib/types";

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState("New Project");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Web Application Development",
    budget: "$3,000 - $10,000",
    timeline: "Within 1 month",
    message: "",
    requestNda: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const inquiryTypes = [
    "New Project",
    "Dedicated Team",
    "Tech Consultation",
    "General Inquiry",
  ];

  const servicesList = [
    "Web Application Development",
    "Mobile App Development",
    "UI/UX & Product Design",
    "Digital Marketing & Growth",
    "Cloud & DevOps Engineering",
    "Other / Custom Project",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload: ContactPayload = {
        inquiryType,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        timeline: formData.timeline,
        message: formData.message,
        requestNda: formData.requestNda ? 1 : 0,
        status: "pending",
      };

      const result = await submitContact(payload);

      if (result.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMessage(
          result.error ||
            "Something went wrong while sending. Please email hello@itstartup.com directly."
        );
      }
    } catch {
      setErrorMessage(
        "Something went wrong while sending. Please email hello@itstartup.com directly."
      );
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
          Message Sent Successfully
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Thank You, {formData.name}!
        </h3>
        <p className="mt-3 text-slate-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          We've received your inquiry regarding{" "}
          <span className="font-semibold text-slate-900">{formData.service}</span>. Our team reviews
          all requests within 2 business hours.
        </p>

        {/* Next Steps Box */}
        <div className="mt-8 p-5 bg-white rounded-2xl border border-emerald-200/80 text-left max-w-md mx-auto space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            What happens next?
          </div>
          <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <span className="font-bold text-emerald-600">1.</span>
            <span>A technical lead reviews your requirements and tech stack fit.</span>
          </div>
          <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <span className="font-bold text-emerald-600">2.</span>
            <span>We send an intro email with calendar links for a 20-min discovery call.</span>
          </div>
          <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
            <span className="font-bold text-emerald-600">3.</span>
            <span>You receive a structured proposal with milestones and pricing.</span>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-emerald-200 flex justify-center">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "Web Application Development",
                budget: "$3,000 - $10,000",
                timeline: "Within 1 month",
                message: "",
                requestNda: false,
              });
            }}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition cursor-pointer"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-9 lg:p-10 shadow-sm">
      {/* Form Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quick Response Within 2 Hours</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Send Us a Message
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Fill out the details below and we'll get back to you with guidance and initial estimates.
        </p>
      </div>

      {/* Inquiry Type Tabs */}
      <div className="mb-8">
        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
          How can we help you?
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {inquiryTypes.map((type) => {
            const isSelected = inquiryType === type;
            return (
              <button
                key={type}
                type="button"
                onClick={() => setInquiryType(type)}
                className={`py-2.5 px-3 rounded-xl text-xs font-semibold border text-center transition cursor-pointer ${
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 shadow-xs shadow-blue-500/30"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name & Email */}
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
                placeholder="michael@company.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>
        </div>

        {/* Phone & Company */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Phone / WhatsApp Number
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+880 1700-000000"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Company Name & Website
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Inc (acme.com)"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>
        </div>

        {/* Service & Budget */}
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Service of Interest
            </label>
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition cursor-pointer"
              >
                {servicesList.map((svc) => (
                  <option key={svc} value={svc}>
                    {svc}
                  </option>
                ))}
              </select>
            </div>
          </div>

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
        </div>

        {/* Timeline */}
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
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition cursor-pointer appearance-none"
            >
              <option value="Immediately">Immediately (Ready to start)</option>
              <option value="Within 1 month">Within 1 Month</option>
              <option value="1 - 3 months">1 - 3 Months</option>
              <option value="Exploring & Planning">Just Planning / Gathering Quotes</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Tell Us About Your Project & Scope <span className="text-rose-500">*</span>
          </label>
          <textarea
            required
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Describe your product idea, existing systems, key milestones, and desired deliverables..."
            className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition leading-relaxed"
          />
        </div>

        {/* NDA Request Checkbox */}
        <div className="flex items-start gap-3 pt-1">
          <input
            id="requestNda"
            type="checkbox"
            name="requestNda"
            checked={formData.requestNda}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
          <label htmlFor="requestNda" className="text-xs text-slate-600 leading-normal cursor-pointer select-none">
            <span className="font-semibold text-slate-800">Request an NDA</span> — Please send a mutual Non-Disclosure Agreement before discussing proprietary technical details.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Sending Your Message...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Send Message</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}