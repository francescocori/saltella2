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
  title: "Chef Gabbo website",
  description:
    "Private dining, fresh delivery and weekly meal right at your place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preload"
          as="image"
          href="/Videos/Images/hero.webp"
          type="image/webp"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Italianno&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} ${foundersGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
