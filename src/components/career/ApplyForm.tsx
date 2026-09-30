"use client";

import { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  FileText, 
  User, 
  Mail, 
  Phone, 
  Globe, 
  Briefcase, 
  DollarSign, 
  Calendar,
  Sparkles,
  ArrowRight,
  AlertCircle
} from "lucide-react";

interface ApplyFormProps {
  jobTitle: string;
  jobId?: string;
  department?: string;
}

export default function ApplyForm({ jobTitle, jobId, department }: ApplyFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    portfolioUrl: "",
    experience: "3-5 years",
    expectedSalary: "",
    noticePeriod: "Immediate",
    resumeLink: "",
    coverLetter: "",
    agreeConsent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

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

    if (!formData.fullName || !formData.email || !formData.resumeLink) {
      setErrorMessage("Please fill in all required fields (Name, Email, and Resume link).");
      return;
    }

    setIsSubmitting(true);

    try {
      // Future API endpoint:
      // await fetch('/api/career/apply', { method: 'POST', body: JSON.stringify({ ...formData, jobTitle, jobId }) });
      
      // Simulate smooth network latency
      await new Promise((resolve) => setTimeout(resolve, 800));

      // Compose mailto payload as reliable client-side backup
      const mailBody = encodeURIComponent(
        `Job Application for: ${jobTitle} (ID: ${jobId || "N/A"})\n` +
        `Department: ${department || "N/A"}\n\n` +
        `Candidate Details:\n` +
        `------------------------\n` +
        `Full Name: ${formData.fullName}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone || "Not provided"}\n` +
        `Portfolio/LinkedIn/GitHub: ${formData.portfolioUrl || "Not provided"}\n` +
        `Experience: ${formData.experience}\n` +
        `Expected Salary: ${formData.expectedSalary || "Negotiable"}\n` +
        `Notice Period: ${formData.noticePeriod}\n` +
        `Resume Link: ${formData.resumeLink}\n\n` +
        `Cover Letter:\n` +
        `------------------------\n` +
        `${formData.coverLetter || "No cover letter provided."}`
      );

      // Open mail client as backup
      window.location.href = `mailto:careers@itstartup.com?subject=Job Application: ${encodeURIComponent(
        jobTitle
      )} - ${encodeURIComponent(formData.fullName)}&body=${mailBody}`;

      setIsSubmitted(true);
    } catch {
      setErrorMessage("Something went wrong. Please try again or email careers@itstartup.com directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50/70 border border-emerald-200/80 rounded-3xl p-8 sm:p-12 text-center animate-in fade-in zoom-in-95 duration-200">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-2">
          Application Received
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
          Thank You, {formData.fullName}!
        </h3>
        <p className="mt-3 text-slate-600 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          Your application for <span className="font-semibold text-slate-900">{jobTitle}</span> has been successfully submitted. Our talent acquisition team will review your profile and reach out within 48 hours.
        </p>

        <div className="mt-8 pt-6 border-t border-emerald-200/60 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                fullName: "",
                email: "",
                phone: "",
                portfolioUrl: "",
                experience: "3-5 years",
                expectedSalary: "",
                noticePeriod: "Immediate",
                resumeLink: "",
                coverLetter: "",
                agreeConsent: true,
              });
            }}
            className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 transition"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-8 lg:p-10 shadow-sm">
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Quick 2-Minute Application</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">
          Apply for this Position
        </h3>
        <p className="mt-1 text-sm text-slate-500">
          Fill out the details below. Our team reviews all applications within 48 hours.
        </p>
      </div>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 flex items-center gap-3 text-rose-700 text-sm">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Full Name & Email */}
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
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>
        </div>

        {/* Phone & Portfolio URL */}
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
                placeholder="+880 1XXXXXXXXX"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Portfolio / GitHub / LinkedIn
            </label>
            <div className="relative">
              <Globe className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="url"
                name="portfolioUrl"
                value={formData.portfolioUrl}
                onChange={handleChange}
                placeholder="https://github.com/yourhandle"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>
        </div>

        {/* Experience & Notice Period & Expected Salary */}
        <div className="grid sm:grid-cols-3 gap-5">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Experience Level
            </label>
            <div className="relative">
              <Briefcase className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <select
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition cursor-pointer appearance-none"
              >
                <option value="1-2 years">1 - 2 Years</option>
                <option value="3-5 years">3 - 5 Years</option>
                <option value="5-8 years">5 - 8 Years</option>
                <option value="8+ years">8+ Years (Lead / Principal)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Notice Period
            </label>
            <div className="relative">
              <Calendar className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <select
                name="noticePeriod"
                value={formData.noticePeriod}
                onChange={handleChange}
                className="w-full pl-10 pr-8 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm font-medium focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition cursor-pointer appearance-none"
              >
                <option value="Immediate">Immediate Joining</option>
                <option value="2 Weeks">2 Weeks Notice</option>
                <option value="1 Month">1 Month Notice</option>
                <option value="2 Months">2 Months Notice</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              Expected Salary
            </label>
            <div className="relative">
              <DollarSign className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                name="expectedSalary"
                value={formData.expectedSalary}
                onChange={handleChange}
                placeholder="e.g. $1,500 / Negotiable"
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
              />
            </div>
          </div>
        </div>

        {/* Resume Link */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Resume / CV Link (Google Drive / Dropbox / PDF URL) <span className="text-rose-500">*</span>
          </label>
          <div className="relative">
            <FileText className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              required
              type="url"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleChange}
              placeholder="https://drive.google.com/file/d/... (Make sure link is viewable)"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition"
            />
          </div>
          <p className="mt-1.5 text-xs text-slate-500">
            Tip: Please ensure link access is set to "Anyone with the link can view".
          </p>
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Why do you want to join ITStartup? (Cover Letter / Notes)
          </label>
          <textarea
            rows={4}
            name="coverLetter"
            value={formData.coverLetter}
            onChange={handleChange}
            placeholder="Tell us about yourself, your most impactful recent project, and what excites you about this role..."
            className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm focus:outline-none focus:bg-white focus:border-blue-600 focus:ring-3 focus:ring-blue-100 transition leading-relaxed"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="flex items-start gap-3 pt-1">
          <input
            id="agreeConsent"
            type="checkbox"
            name="agreeConsent"
            checked={formData.agreeConsent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
          />
          <label htmlFor="agreeConsent" className="text-xs text-slate-500 leading-normal">
            I agree to the processing of my submitted information for recruitment and talent evaluation at ITStartup.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 text-white font-bold text-base hover:bg-blue-700 active:bg-blue-800 disabled:opacity-70 shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              <span>Submitting Application...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Application</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}