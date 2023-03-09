import Image from "next/image";
import React, { useState } from "react";
import airbnb from "../public/airbnb.png";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/24/solid";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
  placeholder?: string;
};

const Header = ({ placeholder }: Props) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [numOfGuests, setNumOfGuests] = useState<number>(1);
  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges: any) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  // const searchClick = () => {
  //   router.push({
  //     pathname: "/search",
  //     query: {
  //       location: searchInput,
  //       startDate: startDate.toISOString(), // xxxx-xx-xx 형식으로 날짜 표현하는 방식
  //       endDate: endDate.toISOString(),
  //       numOfGuests,
  //     },
  //   });
  // };

  return (
    <header className="sticky z-50 top-0 grid grid-cols-3 bg-white shadow-md py-5 px-3 md:px-7">
      <div className="relative object-left object-contain flex items-center h-10 my-auto">
        <Image
          src={airbnb}
          alt="airbnbIcon"
          className="w-36 cursor-pointer"
          onClick={() => router.push("/")}
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type="text"
          placeholder={placeholder || "Start your search"}
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

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto mt-5">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FF5A5F"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={numOfGuests}
              onChange={(e) => setNumOfGuests(parseInt(e.target.value))}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-[#FF5A5F]"
            />
          </div>

          {/* Emmet for React */}
          <div className="flex">
            <button onClick={resetInput} className="flex-grow text-gray-500">
              Cancel
            </button>
            <Link
              href={`/search?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numOfGuests}`}
              as={"/search"}
            >
              <button className="flex-grow text-[#FF5A5F]">Search</button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
