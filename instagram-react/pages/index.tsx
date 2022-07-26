import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Instagram clone</title>
      </Head>

      <main>
        <Header />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
