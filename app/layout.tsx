import * as React from "react";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ravi Thakur | Full-Stack Developer | Python | TypeScript | Rust",
  description:
    "Ravi Kumar Thakur – Full-Stack Developer proficient in Python, TypeScript, SQL, Django, FastAPI, React, Next.js, and Rust. Passionate about building scalable software and learning fast.",
  keywords: [
    "Ravi Thakur",
    "Full Stack Developer",
    "Python Developer",
    "TypeScript Developer",
    "React Developer",
    "Django Developer",
    "FastAPI Developer",
    "Next.js Developer",
    "Rust Developer",
    "Software Engineer",
    "Open Source",
    "Backend Developer",
    "Frontend Developer",
    "Devops Engineer",
  ],
  authors: [{ name: "Ravi Kumar Thakur", url: "https://github.com/Thakur127" }],
  creator: "Ravi Kumar Thakur",
  publisher: "Ravi Kumar Thakur",
  metadataBase: new URL("https://ravithakur.pages.dev"),
  openGraph: {
    title: "Ravi Thakur | Full-Stack Developer",
    description:
      "Ravi Kumar Thakur – Full-Stack Developer proficient in Python, TypeScript, SQL, Django, FastAPI, React, Next.js, and Rust. Passionate about building scalable software and learning fast.",
    url: "https://ravithakur.pages.dev",
    siteName: "Ravi Thakur Portfolio",
    images: [
      {
        url: "https://bmbptnskmdnddumeazkt.supabase.co/storage/v1/object/public/solana-token-metadata//image.png",
        width: 1200,
        height: 630,
        alt: "Ravi Thakur | Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ravi Thakur | Full-Stack Developer",
    description:
      "Ravi Kumar Thakur – Full-Stack Developer proficient in Python, TypeScript, SQL, Django, FastAPI, React, Next.js, and Rust.",
    creator: "@ravic0des",
    images: [
      "https://bmbptnskmdnddumeazkt.supabase.co/storage/v1/object/public/solana-token-metadata//image.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

// cloudfare config
export const runtime = "edge";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
