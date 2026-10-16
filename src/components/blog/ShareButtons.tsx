"use client";
import { Link as LinkIcon, Check } from "lucide-react";
import { useState } from "react";

interface ShareButtonsProps {
  url?: string;
  title?: string;
}

/** Brand icons — inline SVGs (lucide removed these) */
const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
  </svg>
);

export default function ShareButtons({ url = "", title = "" }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "");
  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedTitle = encodeURIComponent(title);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-200/90 flex flex-wrap items-center gap-2 sm:gap-3">
      <span className="text-xs sm:text-sm font-bold text-slate-600 mr-1">Share:</span>

      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:border-blue-300 hover:text-blue-600 text-xs sm:text-sm font-medium transition-all shadow-2xs"
        aria-label="Share on Facebook"
      >
        <FacebookIcon />
        <span>Facebook</span>
      </a>

      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:border-blue-300 hover:text-blue-600 text-xs sm:text-sm font-medium transition-all shadow-2xs"
        aria-label="Share on LinkedIn"
      >
        <LinkedinIcon />
        <span>LinkedIn</span>
      </a>

      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:border-blue-300 hover:text-blue-600 text-xs sm:text-sm font-medium transition-all shadow-2xs"
        aria-label="Share on X"
      >
        <XIcon />
        <span className="hidden xs:inline">Post</span>
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white border border-slate-200/90 text-slate-700 hover:border-blue-300 hover:text-blue-600 text-xs sm:text-sm font-medium transition-all shadow-2xs cursor-pointer"
        aria-label="Copy article link"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600 shrink-0" />
            <span className="text-emerald-700 font-semibold">Copied!</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Copy link</span>
          </>
        )}
      </button>
    </div>
  );
}