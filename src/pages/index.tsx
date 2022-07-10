import styles from "./Home.module.css";
import Head from "next/head";
import type { NextPage, GetStaticProps } from "next";
import { Hero, TopPicks } from "../components/Home/index";
import { getTopPicks } from "../utils/helpers/index";
import { Product } from "../types/index";

interface HomeProps {
  topPicks: Product[];
}

const Home: NextPage<HomeProps> = ({ topPicks }) => {
  return (
    <div className={styles.home}>
      <Head>
        <title>Nuts Lab — Home</title>
        <meta
          name="description"
          content="Nuts Lab is a UK-based nuts retailer wih strong emphasis on naturality, deliciousness and food safety. We have been in business since 1982, and striving to deliver the best nuts. "
        />
      </Head>
      <Hero />
      <TopPicks topPicks={topPicks} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const topPicks = await getTopPicks();

  return {
    props: {
      topPicks,
    },
  };
};

export default Home;
