import type { NextPage } from "next";
import Head from "next/head";
import Feed from "../src/components/Feed";
import Header from "../src/components/Header";

const Home: NextPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Head>
        <title>Instagram clone</title>
      </Head>
      <Header />
      <Feed />
      <footer></footer>
    </div>
  );
};

export default Home;
