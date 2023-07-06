import Link from "next/link";
import React, { ReactNode } from "react";

interface SupportInfoCardI {
  href: string;
  icon?: any;
  title: string;
  description: string;
}

const SupportInfoCard = ({ href, icon: SvgIcon, title, description }: SupportInfoCardI) => {
  return (
    <Link href={href} className="flex w-full">
      <div className="w-full border px-6 py-6 mt-4 md:mt-0 hover:bg-zinc-100">
        <div className="pb-3">
          <SvgIcon size={22} />
        </div>
        <div className="font-normal pb-3">{title}</div>
        <div className="text-sm">{description}</div>
      </div>
    </Link>
  );
};

export default SupportInfoCard;
