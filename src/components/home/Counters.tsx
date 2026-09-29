"use client";
import { useEffect, useRef, useState } from "react";

function Counter({ end, label, suffix = "+" }: { end: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      let start = 0;
      const step = end / 60;
      const id = setInterval(() => {
        start += step;
        if (start >= end) { setCount(end); clearInterval(id); }
        else setCount(Math.floor(start));
      }, 20);
      obs.disconnect();
    });
    if (ref.current) obs.observe(ref.current);
  }, [end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-white">
        {count}{suffix}
      </div>
      <p className="text-blue-100 mt-2 text-sm">{label}</p>
    </div>
  );
}

export default function Counters() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-8">
        <Counter end={120} label="Projects Delivered" />
        <Counter end={80} label="Happy Clients" />
        <Counter end={15} label="Team Members" />
        <Counter end={8} label="Years Experience" />
      </div>
    </section>
  );
}