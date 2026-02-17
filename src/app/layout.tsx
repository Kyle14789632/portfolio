import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
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
  title: "Alex Chen — Full-Stack Developer",
  description:
    "Portfolio of Alex Chen, a full-stack developer building elegant solutions to complex problems with React, Next.js, Node.js, and more.",
  keywords: [
    "full-stack developer",
    "react",
    "next.js",
    "portfolio",
    "web developer",
  ],
  openGraph: {
    title: "Alex Chen — Full-Stack Developer",
    description:
      "Portfolio of Alex Chen, a full-stack developer building elegant solutions to complex problems.",
    type: "website",
  },
};

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
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
