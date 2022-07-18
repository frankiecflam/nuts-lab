import styles from "./AccountUserInfo.module.css";
import { AccountDetailsHeader } from "./index";
import { User } from "../../types/index";
import { Button } from "../UI/index";

interface AccountUserInfoProps {
  user: User;
}

const AccountUserInfo = ({ user }: AccountUserInfoProps) => {
  const { name, email, phone, address } = user;

  return (
    <div className={styles.details}>
      <AccountDetailsHeader name="personal details" />
      <ul className={styles.detailsList}>
        <li className={styles.detailsItem}>
          <p className={styles.itemName}>name&#58;</p>
          <p className={styles.itemData}>{name}</p>
        </li>
        <li className={styles.detailsItem}>
          <p className={styles.itemName}>email&#58;</p>
          <p className={styles.itemData}>{email}</p>
        </li>
        <li className={styles.detailsItem}>
          <p className={styles.itemName}>Contact&#58;</p>
          {phone && <p className={styles.itemData}>{phone}</p>}
          {!phone && (
            <Button
              type="button"
              name="add"
              className={styles.detailsItemAddBtn}
            />
          )}
        </li>
        <li className={styles.detailsItem}>
          <p className={styles.itemName}>address&#58;</p>
          {address && <p className={styles.itemData}>{address}</p>}
          {!address && (
            <Button
              type="button"
              name="add"
              className={styles.detailsItemAddBtn}
            />
          )}
        </li>
      </ul>
    </div>
  );
};

export default AccountUserInfo;
