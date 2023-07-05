"use client";

import { NavLinks } from "@/data/header";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useRef } from "react";

const SubHeader = () => {
  const myDivRef = useRef(null);

  const scrollLeft = () => {
    // myDivRef.current.scrollTop = 500;
  };

  const scrollRight = () => {
    // myDivRef.current.
  }

  return (
    <>
      <div className="hidden lg:flex item-center">
        {NavLinks.map((item, index) => (
          <button className="min-w-fit px-[12px] py-[10px] cursor-pointer" key={item.name + index}>
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex items-center lg:hidden max-w-[70%]">
        <button onClick={scrollLeft} className="w-11 h-11 grid place-items-center hover:bg-zinc-100 rounded-md cursor-pointer">
          <ChevronLeftIcon className="h-6 w-6 text-black" />
        </button>
        <div ref={myDivRef} className="w-full flex items-center overflow-y-hidden hide-scrollbar overflow-x-auto">
          {NavLinks.map((item, index) => (
            <button className="min-w-fit px-[12px] py-[10px] cursor-pointer" key={item.name + index}>
              {item.name}
            </button>
          ))}
        </div>
        <button className="w-11 h-11 grid place-items-center hover:bg-zinc-100 rounded-md cursor-pointer">
          <ChevronRightIcon className="h-6 w-6 text-black" />
        </button>
      </div>
    </>
  );
};

export default SubHeader;
