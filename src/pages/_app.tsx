import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Favicon } from "../assets/Images/Logos/index";
import Layout from "../components/Layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={Favicon.src} />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
