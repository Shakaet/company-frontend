import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import ScrollToTop from "@/components/layout/ScrollToTop";
import { getSiteSettings } from "@/lib/data";
import PageTransition from "@/components/layout/PageTransition";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const siteUrl = "https://www.neutrinobyte.com";
  const logoUrl = `${siteUrl}/icon.png`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      template: `%s | ${settings.companyName}`,
      default: settings.metaTitle || settings.companyName,
    },
    description: settings.metaDescription || settings.tagline,
    keywords: ["Web Development", "App Development", "SEO", "UI/UX", "Digital Agency", settings.companyName],
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-48x48.png", sizes: "48x48", type: "image/png" },
        { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
        { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
        { url: "/icon.png", sizes: "500x500", type: "image/png" },
      ],
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
      shortcut: ["/favicon.ico"],
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      title: settings.metaTitle || settings.companyName,
      description: settings.metaDescription || settings.tagline,
      url: siteUrl,
      siteName: settings.companyName,
      images: [
        {
          url: settings.logo || logoUrl,
          width: 1200,
          height: 630,
          alt: `${settings.companyName} Logo`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: settings.metaTitle || settings.companyName,
      description: settings.metaDescription || settings.tagline,
      images: [settings.logo || logoUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();
  const siteUrl = "https://www.neutrinobyte.com";
  const logoUrl = `${siteUrl}/icon.png`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: settings.companyName || "NeutrinoByte",
    url: siteUrl,
    logo: logoUrl,
    image: logoUrl,
    description: settings.metaDescription || settings.tagline,
    sameAs: [
      "https://www.facebook.com/neutrinobyte",
      "https://www.linkedin.com/company/neutrinobyte/",
      "https://x.com/NeutrinoByte",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: settings.phone || "+8801959083951",
      contactType: "customer service",
      email: settings.email || "support@neutrinobyte.com",
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon-48x48.png" type="image/png" sizes="48x48" />
        <link rel="icon" href="/icon-96x96.png" type="image/png" sizes="96x96" />
        <link rel="icon" href="/icon-192x192.png" type="image/png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-white text-gray-900">
        <TopBar settings={settings} />
        <Navbar settings={settings} />
        <PageTransition>{children}</PageTransition>
        <Footer settings={settings} />
        <FloatingWhatsApp settings={settings} />
        <ScrollToTop />
      </body>
    </html>
  );
}