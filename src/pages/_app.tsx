import "../../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Favicon } from "../assets/Images/Logos/index";
import Layout from "../components/Layout/Layout";
import AuthContextProvider from "../context/AuthContextProvider";
import CartContextProvider from "../context/CartContextProvider";

function MyApp({ Component, pageProps }: AppProps) {
  const { idToken }: { idToken: string | undefined } = pageProps;

  return (
    <>
      <Head>
        <link rel="icon" href={Favicon.src} />
      </Head>

      <AuthContextProvider idTokenFromCookies={idToken}>
        <CartContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CartContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
