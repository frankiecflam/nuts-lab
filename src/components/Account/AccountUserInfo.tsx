import styles from "./AccountUserInfo.module.css";
import { AccountDetailsHeader, AccountUserInfoEditForm } from "./index";
import { User } from "../../types/index";
import { Button } from "../UI/index";
import { useState } from "react";

interface AccountUserInfoProps {
  user: User;
  onSetUserDetails: (user: User) => void;
}

const AccountUserInfo = ({ user, onSetUserDetails }: AccountUserInfoProps) => {
  const { name, email, phone, address } = user;
  const [showEditForm, setShowEditForm] = useState(false);

  const handleShowEditFormToggle = () => {
    setShowEditForm((prevState) => !prevState);
  };

  return (
    <div className={styles.details}>
      <AccountDetailsHeader name="personal details" />
      <div className={styles.detailsBody}>
        {!showEditForm && (
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
                <p className={styles.itemDataBlank}>
                  No contact numbers saved yet
                </p>
              )}
            </li>
            <li className={styles.detailsItem}>
              <p className={styles.itemName}>address&#58;</p>
              {address && (
                <address className={styles.itemData}>{address}</address>
              )}
              {!address && (
                <p className={styles.itemDataBlank}>No addresses saved yet</p>
              )}
            </li>
          </ul>
        )}
        {showEditForm && (
          <AccountUserInfoEditForm
            user={user}
            onHide={handleShowEditFormToggle}
            onSetUserDetails={onSetUserDetails}
          />
        )}
      </div>
      {!showEditForm && (
        <Button
          type="button"
          name="update"
          className={styles.detailsEditBtn}
          onClick={handleShowEditFormToggle}
        />
      )}
    </div>
  );
};

export default AccountUserInfo;
