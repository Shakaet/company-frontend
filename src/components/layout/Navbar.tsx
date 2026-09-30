"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link href="/" className="text-xl font-extrabold tracking-tight">
          IT<span className="text-blue-600">Startup</span>
        </Link>
        <ul className="hidden md:flex gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-medium transition ${pathname === l.href ? "text-blue-600" : "text-gray-700 hover:text-blue-600"
                  }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>☰</button>
      </nav>
      {open && (
        <ul className="md:hidden flex flex-col gap-2 px-4 pb-4">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}