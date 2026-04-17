"use client";

import { Sarabun } from "next/font/google";
import "./globals.css";
import ThemeRegistry from "@/lib/theme-registry";

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
      <body className={` ${sarabun.className} bg-white`}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
