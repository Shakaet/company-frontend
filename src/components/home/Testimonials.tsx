import { testimonials } from "@/lib/data";
import SectionTitle from "@/components/ui/SectionTitle";
import Card from "@/components/ui/Card";

export default function Testimonials() {
  return (
    <section className="section bg-gray-50">
      <div className="container-x">
        <SectionTitle title="What Clients Say" />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="card relative">
              <span className="absolute top-3 right-5 text-6xl text-blue-100 font-serif leading-none">"</span>
              <p className="text-gray-700 italic relative z-10">{t.message}</p>
              <div className="flex items-center gap-3 mt-5">
                <div className="w-10 h-10 rounded-full bg-blue-100" />
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}