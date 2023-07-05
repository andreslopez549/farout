"use client";

import { NavLinks } from "@/data/header";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef, useState } from "react";

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
      <div className="hidden lg:flex item-center">
        {NavLinks.map((item, index) => (
          <button className="min-w-fit px-[12px] py-[10px] cursor-pointer" key={item.name + index}>
            {item.name}
          </button>
        ))}
      </div>

      <div className="flex items-center lg:hidden max-w-[70%]">
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
    </>
  );
};

export default SubHeader;
