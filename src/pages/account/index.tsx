import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { AccountContent } from "../../components/Account/index";
import { verifyIdToken, getUserDetails } from "../../utils/helpers";
import { User } from "../../types/index";

interface AccountPageProps {
  user: User;
}

const Account: NextPage<AccountPageProps> = ({ user }) => {
  return (
    <div>
      <Head>
        <title>Nuts Lab — Account</title>
        <meta
          name="description"
          content="Nuts Lab is a UK-based nuts retailer wih strong emphasis on naturality, deliciousness and food safety. We have been in business since 1982, and striving to deliver the best nuts. "
        />
      </Head>
      <AccountContent user={user} />
    </div>
  );
};

export default Account;

// Account Page is protected for user credentials.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { authToken } = context.req.cookies;
  const idToken = authToken ? await verifyIdToken(authToken) : null;
  const user = idToken ? await getUserDetails(idToken) : null;

  if (!idToken || !user) {
    return {
      props: {},
    };
  }

  return {
    props: {
      idToken,
      user,
    },
  };
};
