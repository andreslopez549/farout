import BlackDressImg from "../../public/blackDress.png";

export interface NavLinkI {
  name: string;
  href: string;
}

export const NavLinks: NavLinkI[] = [
  {
    name: "Sale",
    href: "#",
  },
  {
    name: "New in",
    href: "#",
  },
  {
    name: "Brands",
    href: "#",
  },
  {
    name: "Clothing",
    href: "#",
  },
  {
    name: "Shoes",
    href: "#",
  },
  {
    name: "Trainers",
    href: "#",
  },
  {
    name: "Bags",
    href: "#",
  },
  {
    name: "Accessories",
    href: "#",
  },
  {
    name: "Watches",
    href: "#",
  },
  {
    name: "Homeware",
    href: "#",
  },
];

export const UserGenre: NavLinkI[] = [
  {
    name: "Women",
    href: "/shopping/women",
  },
  {
    name: "Men",
    href: "/shopping/men",
  },
  {
    name: "Kids",
    href: "/shopping/kids",
  },
  {
    name: "Beauty",
    href: "/shopping/beauty",
  },
];

export const NavLinksCategories = {
  Sale: {
    SALE: [
      {
        name: "All sale",
        href: "/#",
      },
      {
        name: "Sale clothing",
        href: "/#",
      },
      {
        name: "Sale jackets",
        href: "/#",
      },
      {
        name: "Sale shirts",
        href: "/#",
      },
      {
        name: "Sale sweatshirts & knitwear",
        href: "/#",
      },
      {
        name: "Sale T-shirts",
        href: "/#",
      },
      {
        name: "Sale shoes",
        href: "/#",
      },
      {
        name: "Sale trainers",
        href: "/#",
      },
      {
        name: "Sale bags",
        href: "/#",
      },
      {
        name: "Sale accessories",
        href: "/#",
      },
    ],
    STYLE: [
      {
        name: 'Sale: classic',
        href: '/#'
      },
      {
        name: 'Sale: cult style',
        href: '/#'
      },
      {
        name: 'Sale: hyper streetwear',
        href: '/#'
      },
      {
        name: 'Sale: minimalism',
        href: '/#'
      },
    ],
    EDITORSPICK: [
      {
        name: 'New in to sale',
        href: "/#"
      },
      {
        name: 'Best of sale',
        href: "/#"
      },
      {
        name: 'Favorite brands on sale',
        href: "/#"
      },
    ],
    taggedPost: {
      image: BlackDressImg,
      type: 'WOMEN',
      title: 'SALE UPDATE: NOW UP TO 60% OFF SELECTED STYLES',
    }
  },
};
