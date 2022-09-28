import Head from "next/head";
import type { NextPage } from "next";
import {
  Hero,
  TopPicks,
  Features,
  Testimonials,
  InstagramFeed,
} from "../components/Home/index";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nuts Lab — Home</title>
        <meta
          name="description"
          content="Nuts Lab is a UK-based nuts retailer wih strong emphasis on naturality, deliciousness and food safety. We have been in business since 1982, and striving to deliver the best nuts. "
        />
      </Head>
      <Hero />
      <TopPicks />
      <Features />
      <Testimonials />
      <InstagramFeed />
    </div>
  );
};

export default Home;
