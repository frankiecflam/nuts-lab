import type { NextPage } from "next";
import Head from "next/head";
import { ContactUs } from "../../components/Contact/index";

const Contact: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nuts Lab — Contact</title>
        <meta
          name="description"
          content="Nuts Lab is a UK-based nuts retailer wih strong emphasis on naturality, deliciousness and food safety. We have been in business since 1982, and striving to deliver the best nuts. "
        />
      </Head>
      <ContactUs />
    </div>
  );
};

export default Contact;
