import type { IconType } from "react-icons";
import { BiShoppingBag, BiComment } from "react-icons/bi";
import { BsQuestionCircle } from "react-icons/bs";

interface SupportInfoCardI {
  href: string;
  icon: IconType;
  title: string;
  description: string;
}

export const SupportInfoData: SupportInfoCardI[] = [
    {
        href: "/how-to-shop",
        icon: BiShoppingBag,
        title: "HOW TO SHOP",
        description: "Your guide to shopping and placing orders"
    },
    {
        href: "/faqs",
        icon: BsQuestionCircle,
        title: "FAQs",
        description: "Your questions answered"
    },
    {
        href: "/contact-us",
        icon: BiComment,
        title: "NEED HELP?",
        description: "Contact our global Customer Service team"
    },
];

