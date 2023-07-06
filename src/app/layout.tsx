"use client";

import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import SubFooter from "@/components/footer/subFooter";

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const sectionClass = "flex max-w-[1440px] flex-col items-center justify-between px-[16px] md:px-[48px] mx-auto";

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* TOP NOTIFICATION AREA */}
        <div className="w-full min-h-[30px] bg-black text-white text-sm underline flex justify-center items-center py-[6px] px-[16px]">
          Sale update: now up to 60% off | Selected styles; limited time | Shop now
        </div>

        {/* HEADER AREA */}
        <div className={`${sectionClass} sticky top-0 bg-white`}>
          <Header />
        </div>

        {/* CONTENT AREA */}
        {children}

        {/* FOOTER AREA */}
        <div className={`w-full bg-[#E6E6E6]`}>
          <div className={`${sectionClass}`}>
            <Footer />
          </div>
          <div className="bg-white h-[1px]" />
          <div className="flex max-w-[1440px] px-[16px] md:px-[48px] mx-auto">
            <SubFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
