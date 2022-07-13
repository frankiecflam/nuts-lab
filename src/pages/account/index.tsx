import type { NextPage } from "next";
import Head from "next/head";
import { AccountContent } from "../../components/Account/index";
import { useAuthContext } from "../../context/AuthContext";

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
