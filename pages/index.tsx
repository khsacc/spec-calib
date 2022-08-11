import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Top } from "../components/Top";

const Home: NextPage = () => {
  return (
    <div className="p-1.5 ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Top />
      </main>
    </div>
  );
};

export default Home;
