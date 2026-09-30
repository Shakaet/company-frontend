"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const aboutSubmenu = [
  { href: "/about/our-company",     label: "Our Company" },
  { href: "/about/our-team",        label: "Our Team" },
  { href: "/about/founder-message", label: "Founder Message" },
];

const links = [
  { href: "/",          label: "Home" },
  { href: "/about",     label: "About", submenu: aboutSubmenu },
  { href: "/services",  label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog",      label: "Blog" },
  { href: "/career",    label: "Career" },
  { href: "/contact",   label: "Contact" },
];

export default function Navbar() {
  const pathname   = usePathname();
  const [open, setOpen]           = useState(false); // mobile drawer
  const [aboutOpen, setAboutOpen] = useState(false); // mobile about accordion
  const [hovered, setHovered]     = useState(false); // desktop dropdown
  const dropdownRef = useRef<HTMLLIElement>(null);


  // Auto-close drawer on scroll (>10px threshold)
  useEffect(() => {
    if (!open) return;
    const startY = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - startY) > 10) setOpen(false);
    };
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 150);
    return () => { clearTimeout(timer); window.removeEventListener("scroll", handleScroll); };
  }, [open]);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isAboutActive = pathname.startsWith("/about");

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto flex items-center justify-between py-6 px-4">

          {/* Logo */}
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            IT<span className="text-blue-600">Startup</span>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-6">
            {links.map((l) =>
              l.submenu ? (
                /* About — with dropdown */
                <li
                  key={l.href}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                      isAboutActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {l.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${hovered ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Dropdown panel */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-200 origin-top ${
                      hovered
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    {/* Small arrow caret */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />
                    <ul className="py-2">
                      {l.submenu.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            onClick={() => setHovered(false)}
                            className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium transition-colors duration-150 ${
                              pathname === sub.href
                                ? "bg-blue-50 text-blue-600"
                                : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            }`}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                /* Normal link */
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      pathname === l.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </nav>
      </header>

      {/* ── Mobile Drawer ── */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer panel */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl md:hidden flex flex-col transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link href="/" onClick={() => setOpen(false)} className="text-xl font-extrabold tracking-tight">
            IT<span className="text-blue-600">Startup</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >✕</button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
          {links.map((l, i) =>
            l.submenu ? (
              /* About — accordion in mobile */
              <li
                key={l.href}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`transform transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
              >
                {/* Accordion toggle */}
                <button
                  onClick={() => setAboutOpen((v) => !v)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isAboutActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  <span>{l.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${aboutOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Accordion submenu */}
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: aboutOpen ? "200px" : "0px" }}
                >
                  <ul className="pl-4 py-1 flex flex-col gap-0.5">
                    {l.submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                            pathname === sub.href
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                          }`}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              /* Normal link */
              <li
                key={l.href}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`transform transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    pathname === l.href ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Drawer footer */}
        <div className="px-6 py-5 border-t border-gray-100">
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-colors duration-200"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  );
}