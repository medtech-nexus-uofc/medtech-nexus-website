import type { Metadata } from "next";
import { Assistant, Funnel_Display } from "next/font/google";
import "./globals.css";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: "500",
  display: "swap",
});

const funnel_display = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MedTech Nexus",
  description: "The Medicine and Technology Nexus",
  icons: [
    {
      rel: "icon",
      type: "image/ico",
      sizes: "32x32",
      url: "/favicon.ico",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${assistant.variable} ${funnel_display.variable}`}
    >
      <body className="font-assistant antialiased">{children}</body>
    </html>
  );
}
