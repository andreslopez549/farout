"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { UserGenre } from "@/data/header";
import SiteLogo from "@/assets/icons/logo.svg";
import HeaderGenderList from "./headerGenderList";
import SubHeader from "./subheader";

const Header = ({onShowSubMenu}: {onShowSubMenu: any}) => {
  // Get current path of url
  const currentPath = usePathname();

  // Function to determine if a link is active
  const isLinkActive = (path: string) => {
    return currentPath === path;
  };

  const smallRoundedContainers = "p-3 hover:bg-zinc-100 rounded-lg";

  return (
    <div className="flex max-w-[1440px] flex-col items-center justify-between px-[16px] md:px-[48px] mx-auto w-full py-1 md:py-3">

      {/* TOP-HEADER SECTION */}
      <div className="w-full h-[68px] flex flex-row justify-between items-center">
        {/* HEADER TOP LEFT */}
        <div className="hidden md:flex md:flex-1">
          {UserGenre.map((el, index) => (
            <Link href={el.href} key={index}>
              <div
                className={`text-base px-3 py-[10px] hover:bg-zinc-100 ${index === 0 && "rounded-l-md"} ${index === 3 && "rounded-r-md"} ${
                  isLinkActive(el.href) && "font-semibold"
                }`}
                key={index}
              >
                {el.name}
              </div>
            </Link>
          ))}
        </div>

        <div className="flex-1 md:hidden">
          <HeaderGenderList UserGenre={UserGenre} />
        </div>

        {/* SITE LOGO */}
        <div className="flex flex-1 justify-center">
          <Image src={SiteLogo} alt="site-logo" className="h-4 w-auto md:h-6 md:w-auto" />
        </div>

        {/* HEADER TOP RIGHT */}
        <div className="flex flex-1 justify-end">
          <div className={smallRoundedContainers}>
            <Link href="#">🇺🇸</Link>
          </div>
          <div className={smallRoundedContainers}>
            <Link href="#">
              <HiOutlineUser size={20} />
            </Link>
          </div>
          <div className={smallRoundedContainers}>
            <Link href="#">
              <HiOutlineHeart size={20} />
            </Link>
          </div>
          <div className={smallRoundedContainers}>
            <Link href="#">
              <HiOutlineShoppingBag size={20} />
            </Link>
          </div>
        </div>
      </div>

      {/* SUB-HEADER SECTION */}
      <div className="w-full h-[44px] flex flex-row justify-between gap-4">
        <SubHeader onShowSubMenu={onShowSubMenu} />
      </div>
    </div>
  );
};

export default Header;
