import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import "./custom-colors.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const foundersGrotesk = localFont({
  src: [
    {
      path: "./fonts/FoundersGrotesk-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/FoundersGrotesk-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/FoundersGrotesk-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/FoundersGrotesk-Medium.woff",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-founders-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DaisyUI Landing Page",
  description: "A beautiful landing page built with Next.js and DaisyUI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${foundersGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
