"use client";

import { useState } from "react";
import { PricingPlan } from "@/lib/types";
import PricingCard from "./PricingCard";

interface PricingSectionProps {
  plans: PricingPlan[];
}

export default function PricingSection({ plans }: PricingSectionProps) {
  const [isQuarterly, setIsQuarterly] = useState(false);

  return (
    <div className="py-12 sm:py-16">
      {/* Monthly / Quarterly Toggle Switch */}
      <div className="flex items-center justify-center gap-4 mb-14">
        <span 
          className={`text-sm font-semibold cursor-pointer ${!isQuarterly ? "text-slate-900" : "text-slate-500"}`} 
          onClick={() => setIsQuarterly(false)}
        >
          Monthly Sprints
        </span>

        <button
          type="button"
          onClick={() => setIsQuarterly(!isQuarterly)}
          className={`relative inline-flex h-8 w-15 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-hidden ${
            isQuarterly ? "bg-blue-600" : "bg-slate-200"
          }`}
          role="switch"
          aria-checked={isQuarterly}
        >
          <span
            className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
              isQuarterly ? "translate-x-7" : "translate-x-0"
            }`}
          />
        </button>

        <span 
          className={`text-sm font-semibold flex items-center gap-2 cursor-pointer ${isQuarterly ? "text-slate-900" : "text-slate-500"}`} 
          onClick={() => setIsQuarterly(true)}
        >
          <span>Quarterly Commitment</span>
          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold bg-emerald-100 text-emerald-800">
            Save 10%
          </span>
        </span>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {plans.map((plan) => (
          <PricingCard
            key={plan.id}
            plan={plan}
            isQuarterly={isQuarterly}
          />
        ))}
      </div>
    </div>
  );
}
