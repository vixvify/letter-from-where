"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useTransitionStore } from "@/store/transition";
import TransitionOverlay from "@/components/transition/Transition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const transition = useTransitionStore((s) => s.transition);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-black antialiased flex justify-center`}
      >
        <div className="w-full max-w-120 min-h-screen bg-white relative overflow-hidden">
          {children}
          <TransitionOverlay type={transition} />
        </div>
      </body>
    </html>
  );
}
