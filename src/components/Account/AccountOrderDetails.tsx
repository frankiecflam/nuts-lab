import styles from "./AccountOrderDetails.module.css";
import { createPortal } from "react-dom";
import { Overlay } from "../UI";
import { useState } from "react";
import { AccountOrderDetailsModal } from "./index";
import { Button } from "../UI/index";
import { Order } from "../../types/index";

interface AccountOrderDetailsProp {
  order: Order;
}

const AccountOrderDetails = ({ order }: AccountOrderDetailsProp) => {
  const [showOrderDetailsModal, setShowOrderDetailsModal] = useState(false);

  const handleShowOrderDetailsModalToggle = () =>
    setShowOrderDetailsModal((prevState) => !prevState);

  return (
    <div className={styles.AccountOrderDetails}>
      <Button
        type="button"
        name="view"
        className={styles.orderViewDetailsBtn}
        onClick={handleShowOrderDetailsModalToggle}
      />
      {showOrderDetailsModal &&
        createPortal(
          <Overlay onClick={handleShowOrderDetailsModalToggle} />,
          document.getElementById("overlay-root") as HTMLDivElement
        )}
      {showOrderDetailsModal &&
        createPortal(
          <AccountOrderDetailsModal
            order={order}
            orderDetailsModalActive={showOrderDetailsModal}
            onCloseModal={handleShowOrderDetailsModalToggle}
          />,
          document.getElementById("modal-root") as HTMLDivElement
        )}
    </div>
  );
};

export default AccountOrderDetails;
