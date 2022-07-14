import styles from "./AccountDetails.module.css";
import { SectionHeader, SectionBody } from "../Section";

const AccountDetails = () => {
  return (
    <>
      <SectionHeader title="account" />
      <SectionBody>
        <div>Personal Info</div>
        <div>Order History</div>
        <button>Log out</button>
      </SectionBody>
    </>
  );
};

export default AccountDetails;
