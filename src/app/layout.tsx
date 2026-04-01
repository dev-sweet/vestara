import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://vestaraglobal.com"),
  title: {
    default: "VESTARA Global Sourcing | Bangladesh Apparel Sourcing & Private Label Manufacturing",
    template: "%s | VESTARA Global",
  },
  description:
    "Bangladesh-based premium apparel sourcing company. Baby clothing, women's basics, streetwear, denim, polo & uniform, private label. Low MOQ. Global shipping. Trusted by brands in USA, UK, EU, Australia.",
  keywords: [
    "Bangladesh apparel sourcing",
    "garments buying house Bangladesh",
    "private label clothing manufacturer",
    "low MOQ clothing manufacturer",
    "Bangladesh factory sourcing",
    "apparel sourcing company",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vestaraglobal.com",
    siteName: "VESTARA Global Sourcing",
    images: [{ url: "/images/og-image.png", width: 1344, height: 768, alt: "VESTARA Global Sourcing" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased bg-obsidian text-cream">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
