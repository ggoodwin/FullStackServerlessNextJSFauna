import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Full Stack Serverless Next Fauna</title>
        <meta
          name="description"
          content="Full Stack Serverless App Built on Next.js using Fauna"
        />
      </Head>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default Home;
