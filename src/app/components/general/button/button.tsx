import React from "react";

interface ButtonI {
  title: string;
  overridingStylesClass?: string;
}

const Button = ({ title, overridingStylesClass, ...rest }: ButtonI) => {
  return (
    <button
      className={`hidden sm:flex sm:w-[132px] h-[44px] lg:flex justify-center items-center text-[#222222] font-semibold border border-black rounded-lg hover:bg-zinc-100 ${overridingStylesClass}`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
