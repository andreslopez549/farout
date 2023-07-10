"use client";

import HomeCategoryCard from "@/components/cards/homeCategoryCard/homeCategoryCard";
import SupportInfoCard from "@/components/cards/supportInfoCard/supportInfoCard";
import Get10PercentOff from "@/components/get10PercentOff/Get10PercentOff";

import { SupportInfoData } from "@/data/Women";
import { homeCards } from "@/data/home";

export default function Page() {

  const sectionClass = "max-w-[1440px] px-[16px] md:px-[48px] mx-auto";

  return (
    <div className={`flex flex-col ${sectionClass} py-6 md:py-8`}>
      <div className="text-[24px] py-[12px] sm:py-[24px] text-left sm:text-center">Choose a department</div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {homeCards.map((item) => (
          <HomeCategoryCard {...item} />
        ))}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 mt-6 md:my-20">
        {SupportInfoData.map((item) => (
          <SupportInfoCard {...item} />
        ))}
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-10">
        <Get10PercentOff />
      </div>
    </div>
  );
}
