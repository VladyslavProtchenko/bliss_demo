import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/cn";

import Header from "./components/header";
import Footer from "./components/footer";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "Bliss",
  description: "Bliss best website in thje world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(manrope.variable, 'min-h-screen flex flex-col bg-bgLight')}>
        <Header />
        <main className={content}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

const content = "flex flex-grow items-start ";
