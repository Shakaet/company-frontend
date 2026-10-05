import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";
import { getSiteSettings } from "@/lib/data";

export const metadata: Metadata = {
  title: "IT Startup Portfolio",
  description: "We build web, mobile apps & digital experiences.",
};

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
        <main>{children}</main>
        <Footer settings={settings} />
        <FloatingWhatsApp settings={settings} />
      </body>
    </html>
  );
}