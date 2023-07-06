import Image, { StaticImageData } from "next/image";
import React from "react";
import { HiOutlineHeart } from "react-icons/hi";

export interface ProductCardI {
  item: {
    id: string;
    image: StaticImageData;
    name: string;
    description: string;
    price?: number;
  };
}

const ProductCard = ({ item }: ProductCardI) => {
  return (
    <div className="w-2/3 flex-none sm:w-1/4 sm:flex-1 relative -z-10" key={item.id}>
      <div className="absolute top-2 right-3">
        <HiOutlineHeart size={22} />
      </div>

      <div className="flex justify-center mt-4">
        <Image src={item.image} className="w-56 object-cover" alt="product-image" />
      </div>

      <div className="mt-3">
        <div className="text-[#727272]">New Season</div>
        <div className="text-black font-semibold">{item.name}</div>
        <div className="h-12 overflow-hidden">{item.description}</div>
        <div>${item.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;
