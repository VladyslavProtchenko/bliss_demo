import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { cn } from "@/lib/cn";
import Header from "./components/header";
import Footer from "./components/footer";
import Head from 'next/head';
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: "notch",
  description: "Notch best technology in the world",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className={cn(manrope.variable, 'min-h-screen flex flex-col bg-bgLight pt-[80px]')}>
        <Header />
        <main className={content}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

const content = "flex w-full justify-center flex-grow items-start ";
