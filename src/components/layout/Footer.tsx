import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import type { SiteSettings } from "@/lib/types";

interface FooterProps {
  settings: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-6 mt-20">
      <div className="container-x grid md:grid-cols-3 gap-10">
        {/* Brand + tagline */}
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            {settings.logo ? (
              <Image
                src={settings.logo}
                alt={settings.companyName}
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
            ) : null}
            <h3 className="text-white font-extrabold text-lg hover:text-blue-400 transition-colors">
              {settings.companyName}
            </h3>
          </Link>
          <p className="text-sm text-gray-400 mt-3">
            {settings.footerTagline || settings.tagline}
          </p>

          {/* Address if present */}
          {settings.address && (
            <p className="text-sm text-gray-400 mt-2 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {settings.address}
            </p>
          )}
        </div>

        {/* Quick links from API */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {settings.footerQuickLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="hover:text-blue-400 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            {settings.email && (
              <li>
                <a
                  href={`mailto:${settings.email}`}
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition"
                >
                  <Mail className="w-4 h-4" />
                  {settings.email}
                </a>
              </li>
            )}
            {settings.phone && (
              <li>
                <a
                  href={`tel:${settings.phone}`}
                  className="inline-flex items-center gap-2 hover:text-blue-400 transition"
                >
                  <Phone className="w-4 h-4" />
                  {settings.phone}
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-x border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        {settings.copyrightText ||
          `© ${new Date().getFullYear()} ${settings.companyName}. All rights reserved.`}
      </div>
    </footer>
  );
}