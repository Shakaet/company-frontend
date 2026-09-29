import { clients } from "@/lib/data";

export default function Clients() {
  return (
    <section className="section">
      <div className="container-x text-center">
        <p className="text-gray-500 mb-8 text-sm uppercase tracking-wider">Trusted by leading companies</p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60">
          {clients.map((c) => (
            <span key={c} className="text-xl font-bold text-gray-700">{c}</span>
          ))}
        </div>
      </div>
    </section>
  );
}