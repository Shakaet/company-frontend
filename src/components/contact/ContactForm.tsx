"use client";
import { useState } from "react";

type Form = { name: string; email: string; message: string };

export default function ContactForm() {
  const [form, setForm] = useState<Form>({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} <${form.email}>`);
    window.location.href = `mailto:hello@itstartup.com?subject=Contact&body=${body}`;
    setSent(true);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        required
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-600"
      />
      <input
        required
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-600"
      />
      <textarea
        required
        rows={5}
        placeholder="Your Message"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:border-blue-600"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition"
      >
        Send Message
      </button>
      {sent && <p className="text-green-600 text-sm">Opening your email client...</p>}
    </form>
  );
}