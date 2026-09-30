"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/career", label: "Career" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Auto-close menu only when user intentionally scrolls (>10px threshold)
  useEffect(() => {
    if (!open) return;
    const startY = window.scrollY;
    const handleScroll = () => {
      if (Math.abs(window.scrollY - startY) > 10) {
        setOpen(false);
      }
    };
    const timer = setTimeout(() => {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }, 150);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [open]);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <nav className="container mx-auto flex items-center justify-between py-6 px-4">
          {/* Logo */}
          <Link href="/" className="text-xl font-extrabold tracking-tight">
            IT<span className="text-blue-600">Startup</span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    pathname === l.href
                      ? "text-blue-600"
                      : "text-gray-700 hover:text-blue-600"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger / Close button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* ── Right-side Drawer Sidebar ── */}

      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Drawer panel — slides in from the right */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl md:hidden
          flex flex-col transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-xl font-extrabold tracking-tight"
          >
            IT<span className="text-blue-600">Startup</span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
          {links.map((l, i) => (
            <li
              key={l.href}
              style={{
                transitionDelay: open ? `${i * 40}ms` : "0ms",
              }}
              className={`transform transition-all duration-300 ${
                open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
              }`}
            >
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  pathname === l.href
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
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