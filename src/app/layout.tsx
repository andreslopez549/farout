"use client";

import "./globals.css";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";
import SubFooter from "@/components/layouts/footer/subFooter";
import { useState } from "react";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(true);

  const sectionClass = "flex max-w-[1440px] flex-col items-center justify-between px-[16px] md:px-[48px] mx-auto";

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* TOP NOTIFICATION AREA */}
        <div className="w-full min-h-[30px] bg-black text-white text-sm underline flex justify-center items-center py-[6px] px-[16px]">
          Sale update: now up to 60% off | Selected styles; limited time | Shop now
        </div>

        {/* HEADER AREA */}
        <div className={`sticky top-0 bg-white`}>
          <Header onShowSubMenu={setShowSubMenu} />
          {showSubMenu && (
            <div className="w-full h-screen bg-[rgba(0,0,0,0.5)] absolute">
              <div onMouseLeave={() => setShowSubMenu(false)} className="w-full h-auto bg-white">
                <div className={"max-w-[1440px] flex items-center px-[16px] md:px-[60px] py-1 mx-auto "}>
                  <div className="grid grid-cols-4">
                    <div>
                      <div className="mb-3">SALE</div>
                      <Link href={"#"}>
                        <div>All sale</div>
                      </Link>
                      <Link href={"#"}>
                        <div>Sale clothing</div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
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
