import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import localFont from "next/font/local";

// Load Space Game Fonts
const quantico = localFont({
  src: [
    { path: "/fonts/Quantico-Regular.ttf", weight: "400", style: "normal" },
    { path: "/fonts/Quantico-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-quantico",
});

const sairaStencil = localFont({
  src: [{ path: "/fonts/SairaStencilOne-Regular.ttf", weight: "400", style: "normal" }],
  variable: "--font-saira",
});

export const metadata: Metadata = {
  title: "Block Quest",
  description: "An Interactive blockchain learning platform, powered by Solidity",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning className={`${quantico.variable} ${sairaStencil.variable}`}>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
};

export default RootLayout;
