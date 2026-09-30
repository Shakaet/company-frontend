import React from "react";
import { Sparkles } from "lucide-react";

export default function Clients() {
  const logos = [
    {
      name: "Google Cloud",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
          <path
            fill="#4285F4"
            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.05h3.87c2.26-2.09 3.67-5.17 3.67-9.15z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.87-3.05c-1.08.72-2.45 1.16-4.06 1.16-3.13 0-5.78-2.11-6.73-4.96H1.26v3.15C3.25 21.36 7.34 24 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.27 14.24A7.275 7.275 0 0 1 4.89 12c0-.78.14-1.54.38-2.24V6.61H1.26A11.967 11.967 0 0 0 0 12c0 1.92.45 3.74 1.26 5.39l4.01-3.15z"
          />
          <path
            fill="#EA4335"
            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.34 0 3.25 2.64 1.26 6.61l4.01 3.15c.95-2.85 3.6-4.96 6.73-4.96z"
          />
        </svg>
      ),
    },
    {
      name: "Microsoft",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
          <rect x="2" y="2" width="9.5" height="9.5" fill="#f25022" />
          <rect x="12.5" y="2" width="9.5" height="9.5" fill="#7fba00" />
          <rect x="2" y="12.5" width="9.5" height="9.5" fill="#00a4ef" />
          <rect x="12.5" y="12.5" width="9.5" height="9.5" fill="#ffb900" />
        </svg>
      ),
    },
    {
      name: "Stripe",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 text-[#635BFF] fill-current">
          <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697.4 12.756.4 6.786.4 2.65 3.564 2.65 8.878c0 5.253 4.814 6.945 8.163 8.17 2.457.9 3.284 1.565 3.284 2.532 0 .979-.87 1.503-2.316 1.503-2.612 0-5.385-1.168-7.307-2.189l-.92 5.568c2.25 1.107 5.503 1.738 8.665 1.738 6.223 0 10.428-3.084 10.428-8.549 0-5.467-4.66-7.143-8.671-8.501z" />
        </svg>
      ),
    },
    {
      name: "Amazon AWS",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 fill-[#FF9900]">
          <path d="M8.28 10.5c0-.6.18-1.08.54-1.44.36-.36.9-.54 1.62-.54.6 0 1.08.12 1.44.36v1.92c-.36-.18-.72-.3-1.08-.36-.36 0-.72.06-1.02.18-.3.12-.48.42-.48.9 0 .42.18.72.54.9.36.18.9.3 1.62.36.72.06 1.32.18 1.8.36.48.18.84.48 1.08.9.24.42.36.96.36 1.62 0 .9-.36 1.62-1.08 2.16-.72.54-1.74.81-3.06.81-.84 0-1.68-.12-2.52-.36v-2.04c.78.36 1.62.54 2.52.54.66 0 1.14-.12 1.44-.36.3-.24.45-.6.45-1.08 0-.42-.18-.72-.54-.9-.36-.18-.9-.3-1.62-.36-.72-.06-1.32-.18-1.8-.36-.48-.18-.84-.48-1.08-.9-.24-.42-.36-.96-.36-1.62zM2.88 18h2.04l2.16-9.6H5.04L3.9 14.16 2.76 8.4H.72L2.88 18zm17.64 3.72c-5.76 2.76-13.68 1.2-18.72-2.04-.36-.24-.12-.72.24-.6 5.04 1.92 11.28 2.76 17.52-.36.6-.3 1.2.48.96 1zm2.16-1.56c-.6-.72-3.84-.36-5.4-.18-.48.06-.54-.42-.12-.66 2.76-1.68 7.32-.6 7.8 0 .48.6-1.08 4.68-3.72 6.6-.36.3-.72.12-.48-.3 1.08-1.68 2.4-4.8 1.92-5.46z" />
        </svg>
      ),
    },
    {
      name: "Vercel",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 fill-slate-900">
          <path d="M24 22.525H0l12-21.05 12 21.05z" />
        </svg>
      ),
    },
    {
      name: "Supabase",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 fill-[#3ECF8E]">
          <path d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L.198 13.916a.396.396 0 0 0 .313.638h9.362v8.958a.396.396 0 0 0 .716.233l11.086-13.753a.396.396 0 0 0-.313-.638z" />
        </svg>
      ),
    },
    {
      name: "Shopify Plus",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 fill-[#96bf48]">
          <path d="M19.98 5.7c-.12-.36-.48-.6-.84-.6H4.86c-.36 0-.72.24-.84.6L2.04 12c-.06.24 0 .48.18.66l9.36 9.36c.24.24.6.24.84 0l9.36-9.36c.18-.18.24-.42.18-.66L19.98 5.7zM12 19.8L4.2 12l1.62-5.1h12.36L19.8 12 12 19.8z" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 fill-slate-900">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "OpenAI",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 fill-[#10A37F]">
          <path d="M22.28 9.37a5.998 5.998 0 0 0-.52-4.91 6.046 6.046 0 0 0-6.51-2.9 6.065 6.065 0 0 0-4.7-2.22 6.04 6.04 0 0 0-5.75 4.19 6.05 6.05 0 0 0-4.13 2.99 6.03 6.03 0 0 0-.74-7.07zM12 21.36a4.53 4.53 0 0 1-2.89-1.04l.14-.08 4.79-2.76a.79.79 0 0 0 .4-.69v-6.75l2.03 1.17a.07.07 0 0 1 .04.06v5.56a4.55 4.55 0 0 1-4.51 4.53zm-8.08-4.47a4.52 4.52 0 0 1-.55-3.02l.14.08 4.79 2.76c.24.14.39.4.39.69v6.75l-2.03-1.17a.07.07 0 0 1-.04-.06v-5.56a4.52 4.52 0 0 1-2.7-3.53zm-1.38-8.91a4.53 4.53 0 0 1 2.34-1.98v5.68c0 .28.15.54.39.69l5.85 3.38-2.03 1.17a.07.07 0 0 1-.07 0l-4.81-2.78a4.55 4.55 0 0 1-1.67-6.16zm15.11 3.51l-5.85-3.38 2.03-1.17a.07.07 0 0 1 .07 0l4.81 2.78a4.55 4.55 0 0 1 1.67 6.16 4.53 4.53 0 0 1-2.34 1.98v-5.68a.79.79 0 0 0-.39-.69zm2.46 5.38a4.52 4.52 0 0 1 .55 3.02l-.14-.08-4.79-2.76a.79.79 0 0 0-.39-.69V9.61l2.03 1.17a.07.07 0 0 1 .04.06v5.56c0 1.25-.52 2.46-1.3 3.47zM8.88 14.88l-2.03-1.17a.07.07 0 0 1-.04-.06V8.09a4.55 4.55 0 0 1 4.51-4.53c1.07 0 2.1.37 2.89 1.04l-.14.08-4.79 2.76a.79.79 0 0 0-.4.69v6.75zm1.59-2.88l2.53-1.46 2.53 1.46v2.92l-2.53 1.46-2.53-1.46V12z" />
        </svg>
      ),
    },
    {
      name: "Figma",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
          <path fill="#F24E1E" d="M8 0h8a4 4 0 0 1 0 8H8a4 4 0 0 1 0-8z" />
          <path fill="#FF7262" d="M8 8h4v8H8a4 4 0 0 1 0-8z" />
          <path fill="#1ABCFE" d="M8 16h4v4a4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4z" />
          <path fill="#0ACF83" d="M12 8h4a4 4 0 0 1 4 4 4 4 0 0 1-4 4h-4V8z" />
          <path fill="#A259FF" d="M8 8a4 4 0 0 1 4-4v8H8a4 4 0 0 1 0-4z" />
        </svg>
      ),
    },
    {
      name: "Docker",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 fill-[#2496ED]">
          <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.93 0h2.12a.186.186 0 0 0 .184-.186V6.29a.185.185 0 0 0-.185-.185H8.1a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.964 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.136a.186.186 0 0 0-.186.185v1.887c0 .102.084.186.186.186m5.893 2.715h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.929 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186h-2.119a.186.186 0 0 0-.186.186v1.888c0 .102.084.185.186.185m-2.965 0h2.12a.185.185 0 0 0 .184-.185V9.006a.185.185 0 0 0-.184-.186h-2.12a.185.185 0 0 0-.184.186v1.888c0 .102.083.185.185.185M23.76 9.89c-.365-1.578-1.674-2.43-1.74-2.472l-.787-.5-.461.815c-.233.414-.498.796-.795 1.146-.38.448-.82.83-1.309 1.134-.14.087-.193.267-.123.418.396.853.486 1.83.256 2.793-.418 1.75-1.728 3.16-3.415 3.684-1.905.59-4.708.625-7.394-.658-2.673-1.277-3.87-2.982-4.14-3.411a.208.208 0 0 0-.17-.1h-1.63a.208.208 0 0 0-.188.118C1.455 13.9.7 15.65.65 17.58c-.05 1.94.61 3.73 1.82 5.03 1.25 1.34 2.97 2.08 4.86 2.08 5.6 0 10.74-4.22 13.88-8.12.98-1.22 1.87-2.73 2.37-4.42.22-.75.31-1.51.18-2.26" />
        </svg>
      ),
    },
    {
      name: "Slack",
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9">
          <path fill="#E01E5A" d="M5.042 15.165a2.528 2.528 0 0 1-2.52 2.523A2.528 2.528 0 0 1 0 15.165a2.527 2.527 0 0 1 2.522-2.52h2.52v2.52z" />
          <path fill="#E01E5A" d="M6.313 15.165a2.527 2.527 0 0 1 2.521-2.52 2.527 2.527 0 0 1 2.521 2.52v6.313A2.528 2.528 0 0 1 8.834 24a2.528 2.528 0 0 1-2.521-2.522v-6.313z" />
          <path fill="#36C5F0" d="M8.834 5.042a2.528 2.528 0 0 1-2.521-2.52A2.528 2.528 0 0 1 8.834 0a2.528 2.528 0 0 1 2.521 2.522v2.52H8.834z" />
          <path fill="#36C5F0" d="M8.834 6.313a2.528 2.528 0 0 1 2.521 2.521 2.528 2.528 0 0 1-2.521 2.521H2.522A2.528 2.528 0 0 1 0 8.834a2.528 2.528 0 0 1 2.522-2.521h6.312z" />
          <path fill="#2EB67D" d="M18.956 8.834a2.528 2.528 0 0 1 2.522-2.521A2.528 2.528 0 0 1 24 8.834a2.528 2.528 0 0 1-2.522 2.521h-2.522V8.834z" />
          <path fill="#2EB67D" d="M17.688 8.834a2.528 2.528 0 0 1-2.523 2.521 2.527 2.527 0 0 1-2.52-2.521V2.522A2.527 2.527 0 0 1 15.165 0a2.528 2.528 0 0 1 2.523 2.522v6.312z" />
          <path fill="#ECB22E" d="M15.165 18.956a2.528 2.528 0 0 1 2.523 2.522A2.528 2.528 0 0 1 15.165 24a2.527 2.527 0 0 1-2.52-2.522v-2.522h2.52z" />
          <path fill="#ECB22E" d="M15.165 17.688a2.527 2.527 0 0 1-2.52-2.523 2.526 2.526 0 0 1 2.52-2.52h6.313A2.527 2.527 0 0 1 24 15.165a2.528 2.528 0 0 1-2.522 2.523h-6.313z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-[#eef7fa] border-y border-blue-100 overflow-hidden relative">
      {/* Embedded High-Performance Hardware Accelerated Keyframe Animation */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes logoTickerSlide {
              0% {
                transform: translate3d(0, 0, 0);
              }
              100% {
                transform: translate3d(-50%, 0, 0);
              }
            }

            .logo-ticker-track {
              display: flex !important;
              width: max-content !important;
              animation: logoTickerSlide 24s linear infinite !important;
              will-change: transform;
            }

            .logo-ticker-track:hover {
              animation-play-state: paused !important;
            }
          `,
        }}
      />

      {/* Section Header matching other homepage sections */}
      <div className="container mx-auto px-4 max-w-7xl mb-12 sm:mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          <span>Global Partners & Ecosystem</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Trusted by Engineering Teams & High-Growth Startups
        </h2>
        <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Powering mission-critical platforms with industry standard tech stacks and verified partner ecosystems.
        </p>
      </div>

      {/* Marquee Ticker Container */}
      <div className="relative w-full overflow-hidden block select-none">
        {/* Left & Right Gradient Fading Masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-r from-[#eef7fa] via-[#eef7fa]/80 to-transparent z-20" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 bg-gradient-to-l from-[#eef7fa] via-[#eef7fa]/80 to-transparent z-20" />

        {/* Continuous Seamless Infinite Ticker Track with Boxed Cards */}
        <div className="logo-ticker-track flex items-center gap-4 sm:gap-6 py-2">
          {/* Render twice for continuous seamless infinite rotation */}
          {[...logos, ...logos].map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="w-44 h-32 sm:w-52 sm:h-36 bg-white border border-blue-400 shrink-0 flex flex-col items-center justify-center p-4 hover:shadow-md hover:border-blue-500 transition-all duration-300 cursor-default"
            >
              <div className="flex items-center justify-center mb-2.5">
                {brand.icon}
              </div>
              <span className="text-xs sm:text-sm font-bold tracking-tight text-slate-700 text-center">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}