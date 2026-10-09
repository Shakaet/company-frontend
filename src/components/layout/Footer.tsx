import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Send, MessageCircle, ChevronRight, Home, Info, Briefcase, FolderOpen, DollarSign, Users, Star, FileText, Shield, Cloud, Palette, Cpu, Globe, BarChart2, Award, HelpCircle, Rocket } from "lucide-react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import type { SiteSettings } from "@/lib/types";

function getQuickLinkIcon(href: string, label: string) {
  const key = (href + " " + label).toLowerCase();
  
  // Social media
  if (key.includes("facebook") || key.includes("fb")) return <FaFacebook className="w-4 h-4 shrink-0" />;
  if (key.includes("twitter") || key.includes(" x ") || key === "x" || href.includes("x.com")) return <FaTwitter className="w-4 h-4 shrink-0" />;
  if (key.includes("instagram") || key.includes("insta")) return <FaInstagram className="w-4 h-4 shrink-0" />;
  if (key.includes("youtube") || key.includes("yt")) return <FaYoutube className="w-4 h-4 shrink-0" />;
  if (key.includes("linkedin")) return <FaLinkedin className="w-4 h-4 shrink-0" />;
  if (key.includes("telegram")) return <FaTelegramPlane className="w-4 h-4 shrink-0" />;
  if (key.includes("whatsapp") || key.includes("wa.me")) return <FaWhatsapp className="w-4 h-4 shrink-0" />;
  
  // Other links
  if (key.includes("home") || key.trim() === "/" || key.trim() === "") return <Home className="w-4 h-4 shrink-0" />;
  if (key.includes("about")) return <Info className="w-4 h-4 shrink-0" />;
  if (key.includes("service")) return <Briefcase className="w-4 h-4 shrink-0" />;
  if (key.includes("portfolio") || key.includes("work")) return <FolderOpen className="w-4 h-4 shrink-0" />;
  if (key.includes("pric")) return <DollarSign className="w-4 h-4 shrink-0" />;
  if (key.includes("team") || key.includes("career") || key.includes("job")) return <Users className="w-4 h-4 shrink-0" />;
  if (key.includes("contact")) return <MessageCircle className="w-4 h-4 shrink-0" />;
  
  return <ChevronRight className="w-4 h-4 shrink-0" />;
}

interface FooterProps {
  settings: SiteSettings;
}

export default function Footer({ settings }: FooterProps) {
  return (
    <footer className="bg-blue-600 text-white pt-16 pb-6 mt-20">
      <div className="container-x grid md:grid-cols-4 gap-10">
        {/* Brand + tagline */}
        <div>
          <Link href="/" className="inline-flex items-center gap-2">
            {settings.logo ? (
              <Image
                src={settings.logo}
                alt={settings.companyName}
                width={40}
                height={40}
                className="w-20 h-20 object-contain"
              />
            ) : null}
            <h3 className="text-xl font-extrabold tracking-tight text-blue-900">
              {/* {settings.companyName} */}
            </h3>
          </Link>
          <p className="text-sm text-white mt-3">
            {settings.footerTagline || settings.tagline}
          </p>

          {/* Address if present */}
          {settings.address && (
            <p className="text-sm text-white mt-2 flex items-center gap-2">
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
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition group"
                >
                  <span className="opacity-70 group-hover:opacity-100 transition">
                    {getQuickLinkIcon(link.href, link.label)}
                  </span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/services/web-development" className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition">
                <ChevronRight className="w-3.5 h-3.5" /> Web Development
              </Link>
            </li>
            <li>
              <Link href="/services/app-development" className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition">
                <ChevronRight className="w-3.5 h-3.5" /> Mobile Apps
              </Link>
            </li>
            <li>
              <Link href="/services/creative-digital-solutions" className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition">
                <ChevronRight className="w-3.5 h-3.5" /> Creative & Digital
              </Link>
            </li>
            <li>
              <Link href="/services/devops-cloud-solutions" className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition">
                <ChevronRight className="w-3.5 h-3.5" /> DevOps & Cloud
              </Link>
            </li>
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
                  className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition"
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
                  className="inline-flex items-center gap-2 text-white hover:text-blue-100 transition"
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
      <div className="container-x border-t border-blue-400 mt-10 pt-6 text-center text-sm text-white">
        {settings.copyrightText ||
          `© ${new Date().getFullYear()} ${settings.companyName}. All rights reserved.`}
      </div>
    </footer>
  );
}