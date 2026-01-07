import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV REKA ARSI BANJARNEGARA - Meta Ads & Konsultasi Teknis YBDI",
  description: "Solusi terintegrasi Meta Ads dan konsultasi teknis untuk industri engineering. Keinsinyuran dan Konsultasi Teknis YBDI yang profesional dan terpercaya di Banjarnegara.",
  keywords: ["CV REKA ARSI BANJARNEGARA", "Meta Ads", "Konsultasi Teknis", "Keinsinyuran", "YBDI", "Banjarnegara", "Facebook Ads", "Instagram Ads", "LinkedIn Ads"],
  authors: [{ name: "CV REKA ARSI BANJARNEGARA" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CV REKA ARSI BANJARNEGARA - Meta Ads & Konsultasi Teknis",
    description: "Solusi terintegrasi Meta Ads dan konsultasi teknis untuk industri engineering",
    url: "https://rekaarsibanjarnegara.com",
    siteName: "CV REKA ARSI BANJARNEGARA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV REKA ARSI BANJARNEGARA - Meta Ads & Konsultasi Teknis",
    description: "Solusi terintegrasi Meta Ads dan konsultasi teknis untuk industri engineering",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <meta name="facebook-domain-verification" content="5azyaj06xw5dyr638azf6ajjwh6mnf" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
