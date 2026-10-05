"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { SiteSettings } from "@/lib/types";

interface SubmenuItem {
  href: string;
  label: string;
  desc?: string;
  icon?: string;
}

interface NavLink {
  href: string;
  label: string;
  submenu?: SubmenuItem[];
  isMega?: boolean;
}

interface NavbarProps {
  settings: SiteSettings;
}

const aboutSubmenu: SubmenuItem[] = [
  { href: "/about/our-company",     label: "Our Company" },
  { href: "/about/our-team",        label: "Our Team" },
  { href: "/about/founder-message", label: "Founder Message" },
];

const servicesSubmenu: SubmenuItem[] = [
  { href: "/services/web",      label: "Web Development",   desc: "Modern and scalable web applications.", icon: "💻" },
  { href: "/services/mobile",   label: "Mobile Apps",       desc: "Native and cross-platform apps.",       icon: "📱" },
  { href: "/services/design",   label: "UI/UX Design",      desc: "Intuitive and engaging interfaces.",    icon: "🎨" },
  { href: "/services/marketing",label: "Digital Marketing", desc: "SEO, SMM and growth hacking.",          icon: "📈" },
];

const links: NavLink[] = [
  { href: "/",          label: "Home" },
  { href: "/about",     label: "About",    submenu: aboutSubmenu },
  { href: "/services",  label: "Services", submenu: servicesSubmenu, isMega: true },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/pricing",   label: "Pricing" },
  { href: "/career",    label: "Career" },
  { href: "/contact",   label: "Contact" },
];

export default function Navbar({ settings }: NavbarProps) {
  const pathname   = usePathname();
  const [open, setOpen]           = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const dropdownRef  = useRef<HTMLLIElement>(null);
  const leaveTimer   = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        <nav className="container mx-auto flex items-center justify-between py-4 px-4">

          {/* Logo */}
          <Link href="/" className="flex h-14 items-center gap-2">
            {settings.logo ? (
              <Image
                src={settings.logo}
                alt={settings.companyName}
                width={56}
                height={56}
                className="h-14 w-14 flex-shrink-0 object-contain"
                priority
              />
            ) : null}
            <span className="text-xl font-extrabold tracking-tight text-blue-900">
              {settings.companyName}
            </span>
          </Link>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-4">
            {links.map((l) => {
              const isActive = pathname.startsWith(l.href) && l.href !== "/";
              const isHovered = hoveredMenu === l.label;

              return l.submenu ? (
                /* Menu with dropdown */
                <li
                  key={l.href}
                  className="relative flex h-10 items-center"
                  onMouseEnter={() => {
                    if (leaveTimer.current) clearTimeout(leaveTimer.current);
                    setHoveredMenu(l.label);
                  }}
                  onMouseLeave={() => {
                    leaveTimer.current = setTimeout(() => setHoveredMenu(null), 150);
                  }}
                >
                  <button
                    className={`flex h-10 items-center gap-1 px-2 text-sm font-bold transition-colors duration-200 cursor-pointer ${
                      isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {l.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isHovered ? "rotate-180" : ""}`}
                      fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {/* Invisible bridge */}
                  <div className="absolute top-full left-0 w-full h-4" />

                  {/* Dropdown panel */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 translate-y-4 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${
                      isHovered
                        ? "opacity-100 scale-100 pointer-events-auto"
                        : "opacity-0 scale-95 pointer-events-none"
                    } ${l.isMega ? "w-[400px]" : "w-52"}`}
                  >
                    {/* Small arrow caret */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-100 rotate-45" />

                    {l.isMega ? (
                      /* Mega Menu (Cards) */
                      <div className="grid grid-cols-2 gap-2 p-3">
                        {l.submenu.map((sub, i) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setHoveredMenu(null)}
                            className="group flex flex-col gap-2 p-4 rounded-xl hover:bg-blue-50 transition-colors duration-200"
                            style={{
                              transform: isHovered ? "translateY(0)" : "translateY(10px)",
                              opacity: isHovered ? 1 : 0,
                              transition: `all 300ms ease-out ${i * 50}ms`
                            }}
                          >
                            <span className="text-2xl bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300">
                              {sub.icon}
                            </span>
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                {sub.label}
                              </h4>
                              <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                                {sub.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ) : (
                      /* Normal Dropdown */
                      <ul className="py-2">
                        {l.submenu.map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => setHoveredMenu(null)}
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
                    )}
                  </div>
                </li>
              ) : (
                /* Normal link */
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className={`flex h-10 items-center px-2 text-sm font-bold transition-colors duration-200 ${
                      pathname === l.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
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
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2"
          >
            {settings.logo ? (
              <Image
                src={settings.logo}
                alt={settings.companyName}
                width={44}
                height={44}
                className="h-11 w-11 flex-shrink-0 object-contain"
              />
            ) : null}
            <span className="text-xl font-extrabold tracking-tight text-gray-900">
              {settings.companyName}
            </span>
          </Link>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-500 hover:bg-gray-100 transition-colors cursor-pointer"
          >✕</button>
        </div>

        {/* Nav links */}
        <ul className="flex flex-col gap-1 px-4 py-6 flex-1 overflow-y-auto">
          {links.map((l, i) => {
            const isActive = pathname.startsWith(l.href) && l.href !== "/";
            const isMenuOpen = l.label === "About" ? aboutOpen : l.label === "Services" ? servicesOpen : false;
            const toggleMenu = () => {
              if (l.label === "About") setAboutOpen(!aboutOpen);
              if (l.label === "Services") setServicesOpen(!servicesOpen);
            };

            return l.submenu ? (
              /* Accordion in mobile */
              <li
                key={l.href}
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
                className={`transform transition-all duration-300 ${open ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"}`}
              >
                <button
                  onClick={toggleMenu}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  }`}
                >
                  <span>{l.label}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isMenuOpen ? "rotate-180" : ""}`}
                    fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{ maxHeight: isMenuOpen ? (l.isMega ? "400px" : "200px") : "0px" }}
                >
                  <ul className="pl-4 py-1 flex flex-col gap-1">
                    {l.submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          onClick={() => setOpen(false)}
                          className={`flex items-start gap-3 px-4 py-2.5 rounded-lg transition-all duration-200 ${
                            pathname === sub.href
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                          }`}
                        >
                          {l.isMega && sub.icon && <span className="text-lg mt-0.5">{sub.icon}</span>}
                          <div>
                            <span className="text-sm font-medium">{sub.label}</span>
                            {l.isMega && sub.desc && <p className="text-xs text-gray-500 mt-0.5">{sub.desc}</p>}
                          </div>
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
            );
          })}
        </ul>
      </div>
    </>
  );
}