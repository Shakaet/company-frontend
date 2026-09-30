export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <span className="inline-block w-12 h-1 bg-blue-600 rounded-full mb-4" />
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
      {subtitle && <p className="text-gray-500 mt-3 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}