"use client";

import { Sarabun } from "next/font/google";
import "./globals.css";
import TransitionOverlay from "@/components/transition/Transition";
import RouteSoundManager from "@/lib/audio-manager";

const sarabun = Sarabun({
  subsets: ["latin", "thai"],
  weight: ["300", "400", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${sarabun.className} bg-black antialiased flex justify-center items-center min-h-dvh overflow-hidden`}
      >
        <div className="relative w-full overflow-hidden bg-white max-w-120 min-h-dvh">
          <RouteSoundManager />
          {children}
          <TransitionOverlay />
        </div>
      </body>
    </html>
  );
}
