import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Tangerine } from "next/font/google"
import "./globals.css";

const tangerine = Tangerine({
  // subsets: ["latin"],
  weight: '400',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "背景调试",
  description: "初始化",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={tangerine.className}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
