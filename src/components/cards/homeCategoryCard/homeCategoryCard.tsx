import Image from "next/image";
import Link from "next/link";
import React from "react";

interface HomeCategoryCardI {
  id: string;
  name: string;
  image: any;
  href: string;
}

const HomeCategoryCard = ({ id, name, image, href }: HomeCategoryCardI) => {
  return (
    <Link href={href}>
      <div className="grid relative" key={id}>
        <Image src={image} alt="home-card" className="w-full h-full" />
        <div className="absolute w-full h-full flex justify-center items-center font-bold text-3xl lg:text-5xl text-white">{name}</div>
      </div>
    </Link>
  );
};

export default HomeCategoryCard;