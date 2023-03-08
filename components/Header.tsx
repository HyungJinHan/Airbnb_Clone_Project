import Image from "next/image";
import React, { useState } from "react";
import airbnb from "../public/airbnb.png";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Header = () => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <header className="sticky z-50 top-0 grid grid-cols-3 bg-white shadow-md py-5 px-3 md:px-7">
      <div className="relative object-left object-contain flex items-center h-10 my-auto">
        <Image src={airbnb} alt="airbnbIcon" className="w-36 cursor-pointer" />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder="Start your Search"
          className="flex-grow pl-5 bg-transparent outline-none text-base max-sm:text-sm text-gray-600 placeholder-gray-400"
        />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-9 w-9 text-white rounded-full p-2 cursor-pointer md:mx-2 airbnbContentColor" />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500 font-semibold">
        <p className="hidden md:inline cursor-pointer">Become a Host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 rounded-full p-2">
          <Bars3Icon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>

      {searchInput && <div></div>}
    </header>
  );
};

export default Header;
