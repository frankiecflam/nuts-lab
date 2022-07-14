import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { AccountContent } from "../../components/Account/index";
import { verifyIdToken } from "../../utils/helpers";

const Account: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Nuts Lab — Account</title>
        <meta
          name="description"
          content="Nuts Lab is a UK-based nuts retailer wih strong emphasis on naturality, deliciousness and food safety. We have been in business since 1982, and striving to deliver the best nuts. "
        />
      </Head>
      <AccountContent />
    </div>
  );
};

export default Account;

// Account Page is protected for user credentials.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { authToken } = context.req.cookies;
  const idToken = authToken ? await verifyIdToken(authToken) : null;

  return {
    props: {
      idToken,
    },
  };
};
