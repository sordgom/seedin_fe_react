import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import dp from "../assets/img/profilePicture.png";

function NavbarListing() {
  return (
    <div className="flex flex-row w-full justify-between font-robotoMono p-2">
      <div className="ml-6 ">
        <img src={logo} alt="" />
      </div>
      <div className="flex flex-row items-center">
        <button
          type="button"
          className="border-solid border-2 border-black rounded-full px-2 font-bold"
        >
          <Link to="/profiledisplay">My Web3 Profile</Link>
        </button>
        <div className="bg-black border-solid border-2 border-black rounded-full px-2 font-bold text-[#DAFF3E]">
          Career Hub
        </div>
        <div className="border-solid border-2 border-black rounded-full px-2 font-bold">
          <Link to="/rentalent">Rent Talent</Link>
        </div>
        <div className="border-solid border-2 border-black rounded-full px-2 font-bold">
          Academy
        </div>
      </div>
      <div className="flex flex-row">
        <div className="pr-2">
          <img src={dp} alt="" className="w-[45px] h-auto" />
        </div>
        <div className="px-3 text-left">
          <p className="font-semibold pop text-[16px] leading-[24px] py-1">
            Illia Polosukhin
          </p>
          <p className="pop text-[#8F8F8F] text-[12px] leading-[18px]">
            Super Admin
          </p>
        </div>
      </div>
    </div>
  );
}
export default NavbarListing;
