import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-3">Contact Us</h1>
      <p className="text-center text-gray-600 mb-12">We'd love to hear from you.</p>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        <ContactForm />

        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9!2d90.39!3d23.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDQ1JzAwLjAiTiA5MMKwMjMnMjQuMCJF!5e0!3m2!1sen!2sbd!4v1600000000000"
            className="w-full h-full min-h-[400px] rounded-xl border"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}