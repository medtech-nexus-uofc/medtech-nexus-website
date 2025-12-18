import type { Metadata } from "next";
import { Assistant, Funnel_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const assistant = Assistant({
  variable: "--font-assistant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const funnel_display = Funnel_Display({
  variable: "--font-funnel-display",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
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
      <body className="font-assistant antialiased">
        <div className="flex h-screen min-h-screen flex-col">
          <Navbar />
          <div className="my-5 flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
