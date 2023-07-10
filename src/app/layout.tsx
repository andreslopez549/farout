"use client";

import "./globals.css";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import Header from "@/components/layouts/header/header";
import Footer from "@/components/layouts/footer/footer";
import SubFooter from "@/components/layouts/footer/subFooter";
import { NavLinksCategories } from "@/data/header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showSubMenu, setShowSubMenu] = useState<boolean>(false);

  const sectionClass = "flex max-w-[1440px] flex-col items-center justify-between px-[16px] md:px-[48px] mx-auto";

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        {/* TOP NOTIFICATION AREA */}
        <div className="w-full min-h-[30px] bg-black text-white text-sm underline flex justify-center items-center py-[6px] px-[16px]">
          Sale update: now up to 60% off | Selected styles; limited time | Shop now
        </div>

        {/* HEADER AREA */}
        <div className={`sticky top-0 bg-white z-50`}>
          <Header onShowSubMenu={setShowSubMenu} />

          {/* SUB HEADER - CATEGORIES DROPDOWN */}
          {showSubMenu && (
            <div className="w-full h-[70vh] sm:h-screen overflow-y-scroll md:overflow-y-hidden bg-[rgba(0,0,0,0.5)]">
              <div onMouseLeave={() => setShowSubMenu(false)} className="w-full bg-white">
                <div className={"max-w-[1440px] h-auto flex items-center px-[16px] md:px-[60px] py-4 mx-auto"}>
                  <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-5 pb-8 gap-5 mx-auto">
                    <div className="col-span-1">
                      <div className="mb-5">SALE</div>
                      <div>
                        {NavLinksCategories.Sale["SALE"].map((el) => (
                          <Link href={el.href}>
                            <div className="mt-3 text-sm hover:underline">{el.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="mb-5">STYLE</div>
                      <div>
                        {NavLinksCategories.Sale["STYLE"].map((el) => (
                          <Link href={el.href}>
                            <div className="mt-3 text-sm hover:underline">{el.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-1">
                      <div className="mb-5">EDITOR'S PICK</div>
                      <div>
                        {NavLinksCategories.Sale["EDITORSPICK"].map((el) => (
                          <Link href={el.href}>
                            <div className="mt-3 text-sm hover:underline">{el.name}</div>
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <Image src={NavLinksCategories.Sale.taggedPost.image} alt="black-dress" className="w-full" />
                      <div className="text-sm text-gray-500 mt-3 mb-1">{NavLinksCategories.Sale.taggedPost.type}</div>
                      <div className="text-sm text-red-500">{NavLinksCategories.Sale.taggedPost.title}</div>

                      <Link href={"/#"}>
                        <div className="mt-3 text-sm underline">Shop Now</div>
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
