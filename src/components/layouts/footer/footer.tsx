import Link from "next/link";
import React from "react";
import { BsInstagram, BsFacebook, BsPinterest, BsTwitter, BsSnapchat, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full py-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="mb-3">
        <div className="text-base font-semibold text-black mb-2">Customer Service</div>
        <div className="mb-2">
          <Link href="#">Contact us</Link>
        </div>
        <div className="mb-2">
          <Link href="#">FAQs</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Orders and delivery</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Returns and refunds</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Payment and pricing</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Cryptocurrency payments</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Promotion terms and conditions</Link>
        </div>
        <div>
          <Link href="#">FAROUT Customer Promise</Link>
        </div>
      </div>
      <div className="mb-3">
        <div className="text-base font-semibold text-black mb-2">About FAROUT</div>
        <div className="mb-2">
          <Link href="#">About us</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Investors</Link>
        </div>
        <div className="mb-2">
          <Link href="#">FAROUT partner boutiques</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Careers</Link>
        </div>
        <div className="mb-2">
          <Link href="#">FAROUT app</Link>
        </div>
        <div>
          <Link href="#">Modern slavery statement</Link>
        </div>
      </div>
      <div className="mb-3">
        <div className="text-base font-semibold text-black mb-2">Discount and membership</div>
        <div className="mb-2">
          <Link href="#">Affiliate program</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Refer a friend</Link>
        </div>
        <div className="mb-2">
          <Link href="#">FARFETCH membership</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Student discount UNiDAYS</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Student Beans and Graduates</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Student and Youth discount</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Essential worker discount</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Shoprunner discount</Link>
        </div>
        <div className="mb-2">
          <Link href="#">Donate and save</Link>
        </div>
        <div>Senior discount</div>
      </div>
      <div className="mb-3">
        <div className="text-base font-semibold text-black mb-2">FAROUT Sustainable Services</div>
        <div className="mb-2">
          <Link href="#">Refresh: clear out your wardrobe</Link>
        </div>
        <Link href="#">Second Life: sell your designer bags</Link>

        <div className="text-base font-semibold text-black mb-2 mt-6">Follow us</div>
        <div className="flex flex-row flex-wrap">
          <Link href="#">
            <div className="p-3 hover:bg-zinc-100 rounded-lg">
              <BsInstagram size={20} />
            </div>
          </Link>
          <Link href="#">
            <div className="p-3 hover:bg-zinc-100 rounded-lg">
              <BsFacebook size={20} />
            </div>
          </Link>
          <Link href="#">
            <div className="p-3 hover:bg-zinc-100 rounded-lg">
              <BsPinterest size={20} />
            </div>
          </Link>

          <Link href="#">
            <div className="p-3 hover:bg-zinc-100 rounded-lg">
              <BsTwitter size={20} />
            </div>
          </Link>

          <Link href="#">
            <div className="p-3 hover:bg-zinc-100 rounded-lg">
              <BsSnapchat size={20} />
            </div>
          </Link>

          <Link href="#">
            <div className="p-3 hover:bg-zinc-100 rounded-lg">
              <BsYoutube size={20} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
