import React from "react";
import Checkbox from "../general/checkbox/checkbox";

const Get10PercentOff = () => {
  return (
    <React.Fragment>
      <div className="w-full">
        <div className="font-bold text-2xl mb-3">GET 10% OFF YOUR FIRST ORDER</div>
        <div className="font-normal text-md">Sign up for promotions, tailored new arrivals, stock updates and more – straight to your inbox</div>
      </div>
      <div className="w-full">
        <div className="font-base uppercase mb-3">GET UPDATES BY</div>

        <Checkbox label="Email" />
        <input placeholder="Your email address" className="w-full md:w-1/2 px-4 py-2 border border-black rounded-md text-md mt-4 mb-4" />

        <Checkbox label="SMS" />
        <input placeholder="Your phone number" className="w-full md:w-1/2 px-4 py-2 border border-black rounded-md text-md mt-4 " />

        <button className="w-[95px] h-[44px] flex justify-center items-center text-white font-semibold rounded-lg bg-black hover:bg-zinc-500 mt-4">
          Sign Up
        </button>

        <div className="font-normal text-md mt-4">
          By signing up, you consent to receiving marketing by email and/or SMS and acknowledge you have read our{" "}
          <span className="underline">Privacy Policy</span>. Unsubscribe anytime at the bottom of our emails or by replying STOP to any of our SMS.
        </div>
      </div>
    </React.Fragment>
  );
};

export default Get10PercentOff;
