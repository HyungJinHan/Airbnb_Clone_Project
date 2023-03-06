import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home: NextPage = ({ exploreData }: any) => {
  return (
    <div className="selection:text-white selection:bg-[#FF5A5F]">
      <Head>
        <title>Airbnb Clone</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* Pull some data from a server - API endpoints */}
          {exploreData.map((item: any) => (
            <h1>{item.location}</h1>
          ))}
        </section>
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    // 기존 url인 "https://links.papareact.com/pyp"로 하게 되면 fetch 에러
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}
