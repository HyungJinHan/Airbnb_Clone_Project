import Image from "next/image";
import React from "react";
import airbnb from "../public/airbnb.png";
import {
  Bars3Icon,
  GlobeAltIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const Header = () => {
  return (
    <header className="sticky z-50 top-0 grid grid-cols-3 bg-white shadow-md py-5 px-3 md:px-7">
      <div className="relative object-left object-contain flex items-center h-10 my-auto">
        <Image src={airbnb} alt="airbnbIcon" className="w-32 cursor-pointer" />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder="Start your Search"
          className="flex-grow pl-5 bg-transparent outline-none text-base max-sm:text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-9 w-9 text-white rounded-full p-2 cursor-pointer md:mx-2 airbnbContentColor" />
      </div>

      <div>
        <p>Become a Host</p>
        <GlobeAltIcon />
        <Bars3Icon />
        <UserCircleIcon />
        <UserIcon />
      </div>
    </header>
  );
};

export default Header;
