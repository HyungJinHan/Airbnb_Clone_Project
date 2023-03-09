import { useRouter } from "next/router";
import { format } from "date-fns";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {};

const Search = (props: Props) => {
  const router = useRouter();
  console.log(router);

  const { location, startDate, endDate, numOfGuests } = router.query; // ES6 Destructuring 문법
  const formattedStartDate =
    startDate && format(new Date(`${startDate}`), "dd MMMM yy");
  // const formattedStartDate = format(new Date(`${startDate}`), "dd MMMM yy");
  const formattedEndDate =
    endDate && format(new Date(`${endDate}`), "dd MMMM yy");
  // const formattedEndDate = format(new Date(`${endDate}`), "dd MMMM yy");
  const range = `${formattedStartDate} ~ ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${numOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mb-6">Stays in {location}</h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="searchPageButton">Cancellation Flexibility</p>
            <p className="searchPageButton">Type of place</p>
            <p className="searchPageButton">Price</p>
            <p className="searchPageButton">Rooms and Beds</p>
            <p className="searchPageButton">More filters</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;
