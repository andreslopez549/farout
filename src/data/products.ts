import { StaticImageData } from "next/image";

import P1 from "../../public/product/p1.png";
import P2 from "../../public/product/p2.png";
import P3 from "../../public/product/p3.png";
import P4 from "../../public/product/p4.png";

export interface ProductI {
  id: string;
  image: StaticImageData,
  name: string;
  description: string;
  price: number;
}

export const ProductsData: ProductI[] = [
  {
    id: "0",
    image: P1,
    name: "Alexander McQueen",
    description: "Peplum denim jacket",
    price: 1990,
  },
  {
    id: "1",
    image: P1,
    name: "Gucci",
    description: "Interlocking G Mini Heart shoulder bag",
    price: 2250,
  },
  {
    id: "2",
    image: P1,
    name: "Valentino Garavani",
    description: "Toile Iconographe silk trousers",
    price: 3100,
  },
  {
    id: "3",
    image: P1,
    name: "Saint Laurent",
    description: "Nadja 115mm rhinestone-embellished sandals",
    price: 1500,
  },
];
