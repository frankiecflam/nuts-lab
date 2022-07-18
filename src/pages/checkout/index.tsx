import type { NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import { CheckoutContent } from "../../components/Checkout/index";
import { verifyIdToken, getUserDetails } from "../../utils/helpers/index";
import { User } from "../../types/index";

interface CheckoutPageProps {
  user: User | undefined;
}

const Checkoout: NextPage<CheckoutPageProps> = ({ user }) => {
  return (
    <div>
      <Head>
        <title>Nuts Lab — Checkoout</title>
        <meta
          name="description"
          content="Nuts Lab is a UK-based nuts retailer wih strong emphasis on naturality, deliciousness and food safety. We have been in business since 1982, and striving to deliver the best nuts. "
        />
      </Head>
      <CheckoutContent user={user} />
    </div>
  );
};

export default Checkoout;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { authToken } = context.req.cookies;
  const idToken = authToken ? await verifyIdToken(authToken) : null;
  const user = idToken ? await getUserDetails(idToken) : null;

  if (!user) {
    return {
      props: {},
    };
  }

  return {
    props: {
      user,
    },
  };
};
