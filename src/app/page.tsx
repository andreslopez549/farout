import Image from "next/image";

import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer/footer";
import SubFooter from "./components/footer/subFooter";

import UserImage from "../../public/userImage.jpeg";

export default function Home() {
  const sectionClass = "flex max-w-[1440px] flex-col items-center justify-between px-[16px] md:px-[48px] mx-auto";

  return (
    <main>
      {/* TOP NOTIFICATION AREA */}
      <div className="w-full min-h-[30px] bg-black text-white text-sm underline flex justify-center items-center py-[6px] px-[16px]">
        Sale update: now up to 60% off | Selected styles; limited time | Shop now
      </div>

      {/* HEADER AREA */}
      <div className={`${sectionClass} sticky top-0 bg-white`}>
        <Header />
      </div>

      {/* CONTENT AREA */}
      <div className={`${sectionClass}`}>
        <div className={`w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-center`}>
          <Image src={UserImage} alt="actor-image" className="w-full h-full object-cover pt-[20px] lg:p-[48px] order-1 lg:order-2" />

          <div className="w-full h-full flex flex-col justify-center items-center px-[4px] sm:px-[48px] py-[20px] lg:p-[48px] order-2 lg:order-1">
            <div className="font-bold text-4xl leading-[2.1rem] sm:text-5xl sm:leading-[3rem] pt-6 sm:pt-0 mb-2 sm:mb-9 text-center">
              THE HEAT IS ON: 5 LOOKS TO STAY COOL
            </div>
            <div className="text-lg sm:text-xl mb-8 text-center">Icy air-con and stifling streets — Prada et al serve both</div>

            <button className="w-full sm:w-[132px] h-[44px] flex justify-center items-center text-[#222222] font-semibold border border-black rounded-lg hover:bg-zinc-100">
              Explore More
            </button>
          </div>
        </div>
      </div>

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
    </main>
  );
}
