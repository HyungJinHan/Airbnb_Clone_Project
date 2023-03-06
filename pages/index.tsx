import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="selection:text-white selection:bg-[#FF5A5F]">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <Banner />
    </div>
  );
};

export default Home;
