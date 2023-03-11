import { useRouter } from "next/router";
import { format } from "date-fns";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

type Props = {
  // searchResults: Array<string | number | any>;
  searchResults: Array<string | number>;
};

const Search = ({ searchResults }: Props) => {
  const router = useRouter();

  const { searchLocation, startDate, endDate, numOfGuests } = router.query; // ES6 Destructuring 문법
  const formattedStartDate =
    startDate && format(new Date(`${startDate}`), "dd MMMM yy");
  // const formattedStartDate = format(new Date(`${startDate}`), "dd MMMM yy");
  const formattedEndDate =
    endDate && format(new Date(`${endDate}`), "dd MMMM yy");
  // const formattedEndDate = format(new Date(`${endDate}`), "dd MMMM yy");
  const range = `${formattedStartDate} ~ ${formattedEndDate}`;

  return (
    <div>
      <Header
        placeholder={`${searchLocation} | ${range} | ${numOfGuests} guests`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {numOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mb-6">
            Stays in {searchLocation}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="searchPageButton">Cancellation Flexibility</p>
            <p className="searchPageButton">Type of place</p>
            <p className="searchPageButton">Price</p>
            <p className="searchPageButton">Rooms and Beds</p>
            <p className="searchPageButton">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item: string | number | any) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchResults} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  // 기존 url인 "https://links.papareact.com/isz"로 하게 되면 fetch 에러

  return {
    props: {
      searchResults,
    },
  };
}
