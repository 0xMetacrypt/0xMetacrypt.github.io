import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { AppConfig, GOOGLE_ANALYTICS_ID } from "@/config/appConfig";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "block",
});

export const metadata: Metadata = {
  metadataBase: new URL(AppConfig.base),
  title: {
    template: `%s | ${AppConfig.title}`,
    default: AppConfig.title,
    absolute: `Built for the Decentralized Web | ${AppConfig.title}`,
  },
  applicationName: AppConfig.title,
  description: AppConfig.description,
  referrer: "no-referrer",
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@0xMetacrypt",
  },
  openGraph: {
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  minimumScale: 1,
  themeColor: "#212121",
};

interface IRootLayout {
  children: Readonly<React.ReactNode>;
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en">
      {GOOGLE_ANALYTICS_ID && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
