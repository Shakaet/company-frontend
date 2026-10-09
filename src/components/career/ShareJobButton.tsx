"use client";

import { useState } from "react";
import { Share2, Check, Copy } from "lucide-react";

interface ShareJobButtonProps {
  title: string;
  jobId: string;
}

export default function ShareJobButton({ title, jobId }: ShareJobButtonProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const getShareUrl = (platform: "linkedin" | "twitter" | "whatsapp") => {
    if (typeof window === "undefined") return "#";
    const currentUrl = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Check out this open position for ${title} at Neutrinobyte!`);

    switch (platform) {
      case "linkedin":
        return `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
      case "twitter":
        return `https://twitter.com/intent/tweet?url=${currentUrl}&text=${text}`;
      case "whatsapp":
        return `https://api.whatsapp.com/send?text=${text}%20${currentUrl}`;
    }
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 text-sm font-semibold hover:bg-slate-50 hover:border-slate-300 transition shadow-xs cursor-pointer"
        aria-label="Share this job"
      >
        <Share2 className="w-4 h-4 text-slate-500" />
        <span>Share Job</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop to close dropdown */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown panel */}
          <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-white p-2 shadow-xl border border-slate-200/80 z-40 text-slate-800 animate-in fade-in zoom-in-95 duration-150">
            <button
              onClick={handleCopyLink}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition cursor-pointer"
            >
              <div className="flex items-center gap-2.5">
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4 text-slate-400" />
                )}
                <span>{copied ? "Link Copied!" : "Copy Page Link"}</span>
              </div>
              {copied && <span className="text-[10px] text-emerald-600 font-bold">Done</span>}
            </button>

            {/* LinkedIn */}
            <a
              href={getShareUrl("linkedin")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700 transition"
            >
              <svg className="w-4 h-4 fill-[#0A66C2]" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              <span>Share to LinkedIn</span>
            </a>

            {/* X / Twitter */}
            <a
              href={getShareUrl("twitter")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-slate-100 transition"
            >
              <svg className="w-3.5 h-3.5 fill-slate-900 ml-0.5" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span>Share to X</span>
            </a>

            {/* WhatsApp */}
            <a
              href={getShareUrl("whatsapp")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition"
            >
              <svg className="w-4 h-4 fill-[#25D366]" viewBox="0 0 24 24">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.27-2.42 5.82a8.188 8.188 0 0 1-5.82 2.42c-1.46 0-2.89-.39-4.14-1.13l-.3-.18-3.08.81.82-3-.19-.31a8.217 8.217 0 0 1-1.27-4.43c0-4.54 3.7-8.24 8.24-8.24m4.53 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.17 1.6.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29z"/>
              </svg>
              <span>Share to WhatsApp</span>
            </a>
          </div>
        </>
      )}
    </div>
  );
}
