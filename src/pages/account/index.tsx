import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { AccountContent } from "../../components/Account/index";
import { verifyIdToken } from "../../utils/helpers";

interface AccountPageProps {
  idToken: string | null;
}

const Account: NextPage<AccountPageProps> = ({ idToken }) => {
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { authToken } = context.req.cookies;
  const idToken = authToken ? await verifyIdToken(authToken) : null;

  return {
    props: {
      idToken,
    },
  };
};

/*
  Retrieve authToken and verify it
    - If valid, then automatically log in users



*/
