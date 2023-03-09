import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

type Props = {};

const search = (props: Props) => {
  return (
    <div>
      <Header />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for 5 number of guests</p>

          <h1 className="text-3xl font-semibold mb-6">Stays in Mars</h1>

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

export default search;
