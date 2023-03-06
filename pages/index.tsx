import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

const Home: NextPage = ({ exploreData, cardData }: any) => {
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
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {exploreData.map((item: any) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardData.map((item: any) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
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

  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  // 기존 url인 "https://links.papareact.com/zp1"로 하게 되면 fetch 에러

  return {
    props: {
      exploreData,
      cardData,
    },
  };
}
