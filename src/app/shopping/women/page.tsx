import Image from "next/image";
import Link from "next/link";

import { HiOutlineHeart } from "react-icons/hi";
import { BiShoppingBag, BiComment } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";

import WomenImage from "../../../../public/womenImage.jpeg";
import WomenImage1 from "../../../../public/womenImage1.jpeg";
import RandomProduct from "../../../../public/randomProduct.png";

import { ProductsData, TrendingProducts } from "@/data/products";

// components
import Get10PercentOff from "@/app/components/Get10PercentOff/Get10PercentOff";
import { SupportInfoData } from "@/data/Women";
import SupportInfoCard from "@/app/components/Cards/supportInfoCard/supportInfoCard";
import ProductCard from "@/app/components/Cards/ProductCard/productCard";

const WomenPage = () => {
  const sectionClass = "flex max-w-[1440px] flex-col items-center justify-between px-[16px] md:px-[48px] mx-auto";

  return (
    <div className={`${sectionClass} mb-10`}>
      <div className={`w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-center`}>
        <Image src={WomenImage} alt="actor-image" className="w-full h-full object-cover pt-[20px] lg:p-[48px] order-1 lg:order-2" />

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

      <div className={`w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-center py-10`}>
        <div className="w-full">
          <Image src={WomenImage1} alt="actor-image" className="w-full h-full object-cover pt-[20px] lg:px-[48px]" />

          <div className="lg:px-[48px] mt-2 sm:mt-4">
            <div className="text-base leading-6 uppercase">DUA LIPA X VERSACE: LA VACANZA</div>
            <div className="text-base">Designer? Muse? Two become one in summer’s most hotly anticipated collection</div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-row justify-between items-center py-10 lg:px-[48px]">
        <div className="text-[22px]">New in: handpicked daily from the world’s best brands and boutiques</div>
        <button className="hidden sm:flex sm:w-[132px] h-[44px] lg:flex justify-center items-center text-[#222222] font-semibold border border-black rounded-lg hover:bg-zinc-100">
          Shop Now
        </button>
      </div>
      <div className="w-full pb-10 lg:px-[48px] flex flex-row gap-12 overflow-y-hidden hide-scrollbar overflow-x-auto">
        {ProductsData.map((el) => (
          <div className="w-2/3 flex-none sm:w-1/4 sm:flex-1 relative -z-10" key={el.id}>
            <div className="absolute top-2 right-3">
              <HiOutlineHeart size={22} />
            </div>

            <div className="flex justify-center mt-4">
              <Image src={el.image} className="w-56 object-cover" alt="product-image" />
            </div>

            <div className="mt-3">
              <div className="text-[#727272]">New Season</div>
              <div className="text-black font-semibold">{el.name}</div>
              <div className="h-12 overflow-hidden">{el.description}</div>
              <div>${el.price}</div>
            </div>
          </div>
        ))}
      </div>
      <button className="w-full h-[44px] sm:hidden md:hidden text-[#222222] font-semibold border border-black rounded-lg hover:bg-zinc-100">
        Shop Now
      </button>

      <div className="w-full pb-10 lg:px-[48px]">
        <div className="w-full text-left md:text-center text-[28px] my-6 mx-0">Trending this week</div>
        <div className="w-full flex flex-row gap-6 overflow-y-hidden hide-scrollbar overflow-x-auto">
          {TrendingProducts.map((el) => (
            <div className="w-2/3 flex-none sm:w-1/4 sm:flex-1 relative -z-10">
              <Image src={el.image} alt="trending-image" />

              <div className="text-base mt-6">{el.name}</div>
              <div className="text-base">{el.description}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-row justify-between items-center py-10 lg:px-[48px]">
        <div className="text-[22px]">It’s sandal season</div>
        <button className="hidden sm:flex sm:w-[132px] h-[44px] lg:flex justify-center items-center text-[#222222] font-semibold border border-black rounded-lg hover:bg-zinc-100">
          Shop Now
        </button>
      </div>
      <div className="w-full pb-10 lg:px-[48px] flex flex-row gap-12 overflow-y-hidden hide-scrollbar overflow-x-auto">
        {ProductsData.map((item) => (
          <ProductCard item={item} />
        ))}
      </div>
      <button className="w-full h-[44px] sm:hidden md:hidden text-[#222222] font-semibold border border-black rounded-lg hover:bg-zinc-100">
        Shop Now
      </button>

      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 place-items-center">
        <Image src={RandomProduct} alt="actor-image" className="w-full h-full object-cover pt-[20px] lg:p-[48px] order-1" />

        <div className="w-full h-full flex flex-col justify-center items-center px-[4px] sm:px-[48px] py-[20px] lg:p-[48px] order-2">
          <div className=" text-[24px] pt-6 sm:pt-0 mb-2 sm:mb-9 text-center">Watch live: the summer jewelry edit</div>
          <div className="text-sm mb-8 text-center">
            Tune in as fashion writer and consultant Stephanie Broek highlights the season’s trending pieces, from Jil Sander’s clean hoops to signet
            rings from Bleue Burnham
          </div>

          <button className="w-full sm:w-[160px] h-[44px] flex justify-center items-center text-[#222222] font-semibold border border-black rounded-lg hover:bg-zinc-100">
            Watch And Shop
          </button>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 my-12 lg:px-[48px]">
        {SupportInfoData.map((item) => (
          <SupportInfoCard {...item} />
        ))}
      </div>

      {/* GET 10 Percent Off Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 mb-10">
        <Get10PercentOff />
      </div>
    </div>
  );
};

export default WomenPage;
