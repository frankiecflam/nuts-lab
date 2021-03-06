import type { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../../components/About/AboutUs";

const About: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nuts Lab — About</title>
        <meta
          name="description"
          content="Nuts Lab is a UK-based nuts retailer wih strong emphasis on naturality, deliciousness and food safety. We have been in business since 1982, and striving to deliver the best nuts. "
        />
      </Head>
      <AboutUs />
    </div>
  );
};

export default About;
