import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "@/components/ReduxProvider";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fresh Harvest - Organic Food Store",
  description:
    "Fresh Harvest offers a wide selection of organic and fresh food products. Shop online and enjoy healthy living.",
  keywords: [
    "organic food",
    "fresh produce",
    "healthy food",
    "e-commerce",
    "Fresh Harvest",
  ],
  authors: [
    { name: "Jobair Al Sarkar", url: "mailto:jobair.a.sarkar@gmail.com" },
  ],
  creator: "Jobair Al Sarkar",
  openGraph: {
    title: "Fresh Harvest - Organic Food Store",
    description:
      "Fresh Harvest offers a wide selection of organic and fresh food products.",
    url: "https://livedomain.com", // Replace with live domain
    siteName: "Fresh Harvest",
    images: [
      {
        url: "https://livedomain.com/stock_01.jpeg", // Replace with OG image
        width: 1200,
        height: 630,
        alt: "Fresh Harvest",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Harvest - Organic Food Store",
    description:
      "Fresh Harvest offers a wide selection of organic and fresh food products.",
    creator: "@JobairAlSarkar",
    images: ["https://livedomain.com/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          {children}
          <Toaster />
        </ReduxProvider>
      </body>
    </html>
  );
}
