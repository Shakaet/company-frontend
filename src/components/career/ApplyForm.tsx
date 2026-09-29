"use client";
import { useState } from "react";

export default function ApplyForm({ jobTitle }: { jobTitle: string }) {
  const [form, setForm] = useState({ name: "", email: "", cover: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Applying for: ${jobTitle}\n\nName: ${form.name}\nEmail: ${form.email}\n\nCover Letter:\n${form.cover}`
    );
    window.location.href = `mailto:careers@itstartup.com?subject=Application: ${jobTitle}&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        required
        placeholder="Full Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-600"
      />
      <input
        required
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-600"
      />
      <textarea
        required
        rows={5}
        placeholder="Cover Letter"
        value={form.cover}
        onChange={(e) => setForm({ ...form, cover: e.target.value })}
        className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-600"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition"
      >
        Submit Application
      </button>
      {sent && <p className="text-green-600 text-sm">Opening your email client...</p>}
    </form>
  );
}