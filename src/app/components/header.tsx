import React from "react";
import Image from "next/image";
import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineUser } from "react-icons/hi";

import ListDD from "./ListDD";
import SiteLogo from  "@/assets/icons/logo.svg"
import { NavLinks } from "@/data/header";

const Header = () => {

  return (
    <div className="w-full py-1 md:py-3">
      <div className="w-full h-[68px] flex flex-row justify-between items-center">
        <div className="hidden md:flex md:flex-1">
          <div className="text-base px-[12px] py-[10px] hover:bg-zinc-100 rounded-l-md cursor-pointer">Women</div>
          <div className="text-base px-[12px] py-[10px] hover:bg-zinc-100 cursor-pointer">Men</div>
          <div className="text-base px-[12px] py-[10px] hover:bg-zinc-100 cursor-pointer">Kids</div>
          <div className="text-base px-[12px] py-[10px] hover:bg-zinc-100 rounded-r-md cursor-pointer">Beauty</div>
        </div>

        <div className="flex-1 md:hidden">
          <ListDD />
        </div>

        <div className="flex flex-1 justify-center">
          <Image src={SiteLogo} alt="site-logo" className="h-4 w-auto md:h-6 md:w-auto" />
        </div>

        <div className="flex flex-1 justify-end">
          <div className="p-3 hover:bg-zinc-100 rounded-lg cursor-pointer">🇺🇸</div>
          <div className="p-3 hover:bg-zinc-100 rounded-lg cursor-pointer">
            <HiOutlineUser size={20} />
          </div>
          <div className="p-3 hover:bg-zinc-100 rounded-lg cursor-pointer">
            <HiOutlineHeart size={20} />
          </div>
          <div className="p-3 hover:bg-zinc-100 rounded-lg cursor-pointer">
            <HiOutlineShoppingBag size={20} />
          </div>
        </div>
      </div>

      <div className="w-full h-[44px] flex flex-row border">
        {NavLinks.map(item => (
          <div className="px-[12px] py-[10px] cursor-pointer">{item.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Header;
