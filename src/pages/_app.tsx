import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Favicon } from "../assets/Images/Logos/index";
import Layout from "../components/Layout/Layout";
import AuthContextProvider from "../context/AuthContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const { idToken } = pageProps;

  return (
    <>
      <Head>
        <link rel="icon" href={Favicon.src} />
      </Head>

      <AuthContextProvider idTokenFromCookies={idToken}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
