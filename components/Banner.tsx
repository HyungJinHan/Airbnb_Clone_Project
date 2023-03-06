import Image from "next/image";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        className="object-cover"
        src="https://links.papareact.com/0fm"
        alt="background"
        fill
        sizes="100%"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg">Not sure wher to go? Perfect!</p>

        <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 translate duration-150">
          I'm flexible
        </button>
      </div>
    </div>
  );
};

export default Banner;
