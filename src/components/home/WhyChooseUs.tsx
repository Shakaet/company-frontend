import SectionTitle from "@/components/ui/SectionTitle";

const points = [
  { title: "Fast Delivery", desc: "We ship on time, every time." },
  { title: "Expert Team", desc: "Senior engineers and designers." },
  { title: "Scalable Code", desc: "Built to grow with your business." },
  { title: "24/7 Support", desc: "We are here whenever you need us." },
];

export default function WhyChooseUs() {
  return (
    <section className="section">
      <div className="container-x">
        <SectionTitle title="Why Choose Us" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((p) => (
            <div key={p.title} className="card text-center">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-4 font-bold">
                ✓
              </div>
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}