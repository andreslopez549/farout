import React, { useRef } from "react";
import Image from "next/image";
import { HiOutlineShoppingBag, HiOutlineHeart, HiOutlineUser } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";

import ListDD from "./ListDD";
import SiteLogo from "@/assets/icons/logo.svg";
import SubHeader from "./subheader";

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

      <div className="w-full h-[44px] flex flex-row justify-between gap-4">
        <SubHeader />

        <div className="shrink w-[270px] flex flex-row items-center border border-black px-3 rounded-md">
          <CiSearch size={25} color={"gray"} className="mr-2" />
          <input placeholder="Search" className="text-black w-full outline-none" />
        </div>
      </div>
    </div>
  );
};

export default Header;
