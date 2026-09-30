import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  HelpCircle 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | ITStartup",
  description: "Get in touch with ITStartup. Let's discuss your next web, mobile, UI/UX, or cloud engineering project.",
  openGraph: {
    title: "Contact ITStartup | Let's Build Something Great",
    description: "Connect with our engineering and product leads. Quick response within 2 business hours.",
  },
};

export default function ContactPage() {
  const contactChannels = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@itstartup.com",
      desc: "For general inquiries, RFPs, and estimates.",
      href: "mailto:hello@itstartup.com",
      actionText: "Send an email",
    },
    {
      icon: Phone,
      title: "Call or WhatsApp",
      value: "+880 1700-000000",
      desc: "Instant chat and direct phone consultation.",
      href: "https://wa.me/8801700000000",
      actionText: "Chat on WhatsApp",
    },
    {
      icon: MapPin,
      title: "Headquarters",
      value: "Dhaka, Bangladesh",
      desc: "Gulshan-2, Dhaka 1212. Collaborative hub.",
      href: "#map",
      actionText: "See map location",
    },
    {
      icon: Clock,
      title: "Office Hours",
      value: "9:00 AM – 7:00 PM",
      desc: "Monday to Friday (GMT+6). On-call for clients.",
      href: "#contact-form",
      actionText: "Leave a message",
    },
  ];

  const faqs = [
    {
      q: "How quickly will I receive a response after submitting?",
      a: "Our team reviews incoming project inquiries and responds within 2 business hours with initial feedback and discovery call scheduling options.",
    },
    {
      q: "Can you sign a Non-Disclosure Agreement (NDA) before we discuss details?",
      a: "Yes, absolutely. Check the 'Request an NDA' box in the contact form or email your standard NDA to hello@itstartup.com and we'll sign it before reviewing your proprietary specifications.",
    },
    {
      q: "Do you work with international clients across different time zones?",
      a: "Yes! Over 70% of our clients are based in the United States, Europe, Australia, and the Middle East. We maintain 4 to 6 overlapping working hours with your local time zone.",
    },
    {
      q: "What engagement models do you offer?",
      a: "We offer both fixed-price milestone delivery (for well-defined scopes) and dedicated monthly agile teams (for continuous product scaling).",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50/30 pb-24">
      {/* Hero Header */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/80 via-indigo-50/30 to-white pt-20 pb-16 md:pt-28 md:pb-24 border-b border-slate-100">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-400/15 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute top-48 right-12 w-64 h-64 bg-indigo-400/10 rounded-full blur-2xl" />

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/80 border border-blue-200/60 text-blue-700 text-xs md:text-sm font-semibold mb-6 shadow-xs">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span>Let's Connect · Responses Within 2 Hours</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Have a Project in Mind?{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Let's Build It.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Whether you have a detailed product specification, an architectural question, or want to explore how our dedicated team can accelerate your roadmap, we’re here to help.
          </p>
        </div>
      </section>

      {/* 4 Contact Channels Cards */}
      <section className="py-12 -mt-10 relative z-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactChannels.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.href}
                  className="group bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                      {item.title}
                    </div>
                    <div className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {item.value}
                    </div>
                    <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-blue-600 group-hover:text-blue-700">
                    <span>{item.actionText}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main 2-Column Contact & Location Section */}
      <section id="contact-form" className="py-12 scroll-mt-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Comprehensive Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Office Location, Direct Meeting, & Trust Signals */}
            <div className="lg:col-span-5 space-y-6">
              {/* Map & Innovation Hub Card */}
              <div id="map" className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-7 shadow-xs scroll-mt-24">
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Dhaka Engineering Hub
                    </h3>
                    <p className="text-xs text-slate-500">
                      Gulshan-2, Dhaka 1212, Bangladesh
                    </p>
                  </div>
                </div>

                <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14606.071850117036!2d90.4072382!3d23.7922262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70c15ea1de1%3A0xf62511d4fb771a00!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
                    className="w-full h-full border-0"
                    loading="lazy"
                    title="ITStartup Office Location"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Visiting? Call ahead for parking pass.</span>
                  <a
                    href="https://maps.google.com/?q=Gulshan-2,Dhaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-blue-600 hover:text-blue-700 hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Maps</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Direct Technical Discovery Call Card */}
              <div className="bg-gradient-to-br from-blue-50/80 to-indigo-50/70 rounded-3xl border border-blue-100 p-6 sm:p-7 shadow-xs">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-base shadow-sm">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">
                      Prefer a Direct 20-Min Video Call?
                    </h4>
                    <p className="text-xs text-slate-500">
                      With our Solutions Architect
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                  Skip the emails and chat live on Google Meet or Zoom. We’ll discuss feasibility, rough timelines, and architectural choices.
                </p>

                <a
                  href="mailto:hello@itstartup.com?subject=Schedule a Discovery Call"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-blue-600 text-white font-bold text-xs sm:text-sm hover:bg-blue-700 shadow-md shadow-blue-600/20 hover:-translate-y-0.5 transition-all"
                >
                  <span>Book a Discovery Session</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Enterprise Trust Badges */}
              <div className="bg-white rounded-3xl border border-slate-200/80 p-6 shadow-xs space-y-3.5">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Enterprise Guarantees
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>100% Strict Non-Disclosure Agreement (NDA)</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <Clock className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Guaranteed response within 2 business hours</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Transparent milestone-based pricing with no hidden fees</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-2">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Common Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              Everything you need to know about starting a project with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 rounded-3xl p-6 sm:p-7 border border-slate-200/70"
              >
                <h3 className="font-bold text-slate-900 text-base mb-2">
                  {faq.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}