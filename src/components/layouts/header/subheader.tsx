"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { CiSearch } from "react-icons/ci";
import { NavLinks } from "@/data/header";

const SubHeader = () => {
  const myDivRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const divElement = myDivRef.current;

      setShowLeftButton(divElement?.scrollLeft > 0);
      setShowRightButton(divElement?.scrollLeft + divElement?.clientWidth < divElement?.scrollWidth);
    };

    const divElement = myDivRef.current;
    divElement?.addEventListener("scroll", handleScroll);

    return () => {
      divElement?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    myDivRef.current?.scrollBy({ left: -150, behavior: "smooth" });
  };

  const scrollRight = () => {
    myDivRef.current?.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full flex flex-row justify-between">
        {/* FOR Mobile and Tab Screens */}
        <div className="flex items-center lg:hidden max-w-[70%] -z-10">
          {showLeftButton && (
            <button onClick={scrollLeft} className="w-11 h-11 grid place-items-center hover:bg-zinc-100 rounded-md cursor-pointer">
              <ChevronLeftIcon className="h-6 w-6 text-black" />
            </button>
          )}
          <div ref={myDivRef} className="w-full flex items-center overflow-y-hidden hide-scrollbar overflow-x-auto">
            {NavLinks.map((item, index) => (
              <button className={`min-w-fit px-[12px] py-[10px] cursor-pointer ${index === 0 && "pl-0"}`} key={item.name + index}>
                {item.name}
              </button>
            ))}
          </div>
          {showRightButton && (
            <div className="relative flex items-center">
              <button onClick={scrollRight} className="w-11 h-11 grid place-items-center hover:bg-zinc-100 rounded-md cursor-pointer">
                <ChevronRightIcon className="h-6 w-6 text-black" />
              </button>
              <div className="w-[2.2rem] h-[2.4rem] absolute right-[2.6rem] bg-gradient-button" />
            </div>
          )}
        </div>

        {/* For desktop Screens */}
        <div className="hidden lg:flex item-center">
          {NavLinks.map((item, index) => (
            <div className="relative group">
              <button className="min-w-fit px-[12px] py-[10px] cursor-pointer" key={item.name + index}>
                {item.name}
              </button>
              <div className="hidden group-hover:block absolute top-11 left-0 w-auto h-auto bg-red-500 px-[12px] py-[20px]">hello world</div>
              {/* hidden group-hover:block  */}

              {/* For Backdrop logic */}
              {/* <div className="absolute top-11 left-0 w-full h-screen bg-[rgba(0,0,0,0.04)]"> */}
              {/* </div> */}
            </div>
          ))}
        </div>

        <div className="shrink w-[270px] flex flex-row items-center border border-black px-3 rounded-md">
          <CiSearch size={25} color={"gray"} className="mr-2" />
          <input placeholder="Search" className="text-black w-full outline-none" />
        </div>
      </div>
    </>
  );
};

export default SubHeader;
