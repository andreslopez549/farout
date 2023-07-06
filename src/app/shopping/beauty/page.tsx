import Image from "next/image";
import BeautyImage from "../../../../public/beautyImage.jpeg";

const MenPage = () => {
  const sectionClass = "flex max-w-[1440px] flex-col items-center justify-between px-[16px] md:px-[48px] mx-auto";

  return (
    <div className={`${sectionClass}`}>
      <div className={`w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-center`}>
        <Image src={BeautyImage} alt="actor-image" className="w-full h-full object-cover pt-[20px] lg:p-[48px] order-2 lg:order-1" />

        <div className="w-full h-full flex flex-col justify-center items-center px-[4px] sm:px-[48px] py-[20px] lg:p-[48px] order-1 lg:order-2">
          <div className="font-bold text-4xl leading-[2.1rem] sm:text-5xl sm:leading-[3rem] pt-6 sm:pt-0 mb-2 sm:mb-9 text-center">
            20% OFF BEAUTY NOW ON
          </div>
          <div className="text-lg sm:text-xl mb-8 text-center">Don’t miss out on the best beauty haul of the season. Enjoy 20% off when you shop selected beauty items on FARFETCH. Offer valid for a limited time only; discount applied at checkout</div>

          <button className="w-full sm:w-[132px] h-[44px] flex justify-center items-center text-[#222222] font-semibold border border-black rounded-lg hover:bg-zinc-100">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenPage;
