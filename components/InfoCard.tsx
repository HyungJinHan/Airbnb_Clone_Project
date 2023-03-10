import { HeartIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";

type Props = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
};

const InfoCard = ({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}: Props) => {
  return (
    <div className="flex">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} alt="resultImage" fill className="object-cover" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
          {/* <StarIcon /> */}
        </div>

        <h4 className="text-xl">{title}</h4>
      </div>
    </div>
  );
};

export default InfoCard;
