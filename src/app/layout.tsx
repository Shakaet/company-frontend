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
  
  return {
    title: {
      template: `%s | ${settings.companyName}`,
      default: settings.metaTitle || settings.companyName,
    },
    description: settings.metaDescription || settings.tagline,
    keywords: ["Web Development", "App Development", "SEO", "UI/UX", "Digital Agency", settings.companyName],
    openGraph: {
      title: settings.metaTitle || settings.companyName,
      description: settings.metaDescription || settings.tagline,
      url: "https://www.neutrinobyte.com",
      siteName: settings.companyName,
      images: [
        {
          url: settings.logo || "https://www.neutrinobyte.com/og-image.jpg",
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: settings.metaTitle || settings.companyName,
      description: settings.metaDescription || settings.tagline,
      images: [settings.logo || "https://www.neutrinobyte.com/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = await getSiteSettings();

  return (
    <html lang="en">
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