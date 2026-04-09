import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "MUSE Foundation — Empowering Cultural Stewardship",
    template: "%s | MUSE Foundation",
  },
  description:
    "A public ancillary fund dedicated to empowering cultural stewardship through purposeful philanthropy. Supporting financial literacy, cultural heritage, and youth education across Australia.",
  keywords: [
    "MUSE Foundation",
    "philanthropy",
    "cultural stewardship",
    "grant-making",
    "public ancillary fund",
    "Australia",
    "DGR",
    "ACNC",
  ],
  openGraph: {
    title: "MUSE Foundation — Empowering Cultural Stewardship",
    description:
      "Supporting financial literacy, cultural heritage preservation, and youth capability through purposeful philanthropy.",
    url: "https://musefoundation.org.au",
    siteName: "MUSE Foundation",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-18">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
