import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My IT Company",
  description: "Modern IT solutions, web apps, and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
