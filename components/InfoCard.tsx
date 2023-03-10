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
    <div>
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} alt="resultImage" fill className="object-cover" />
      </div>
    </div>
  );
};

export default InfoCard;
