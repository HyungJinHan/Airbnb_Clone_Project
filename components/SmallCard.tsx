import Image from "next/image";
import React from "react";

type Props = {
  img: string;
  location: string;
  distance: string;
};

const SmallCard = ({ img, location, distance }: Props) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* Left */}
      <div className="relative h-16 w-16">
        <Image src={img} alt="img" fill className="rounded-lg" sizes="100%" />
      </div>

      {/* Right */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
};

export default SmallCard;
