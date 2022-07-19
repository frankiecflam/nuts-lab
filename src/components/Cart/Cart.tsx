import styles from "./Cart.module.css";
import { createPortal } from "react-dom";
import { Overlay } from "../UI";
import { useState, useEffect, useRef } from "react";
import { CartModal } from "./index";
import { CartIcon } from "../../assets/Icons";
import { useCartContext } from "../../context/CartContext";
import { calculateCartQuantity } from "../../utils/helpers";

const Cart = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const isInitialRender = useRef(true);
  const [showCartModal, setShowCartModal] = useState(false);
  const { items, status: cartStatus } = useCartContext();

  const cartQuantity = calculateCartQuantity(items);

  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
      return;
    }

    // showCartModal whenever there is an update on cartQty
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    } else {
      // If order has just been submitted, don't toggle
      if (cartStatus === "submitted") {
        isInitialRender.current = true;
        return;
      }
      setShowCartModal(true);
    }
  }, [hasMounted, cartQuantity, cartStatus]);

  if (!hasMounted) return null;

  const handleCartModalToggle = () => {
    setShowCartModal((prveState) => !prveState);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartIconDiv}>
        <CartIcon className={styles.cartIcon} onClick={handleCartModalToggle} />
        <p className={styles.cartIconQty}>{cartQuantity}</p>
      </div>
      {showCartModal &&
        createPortal(
          <Overlay onClick={handleCartModalToggle} />,
          document.getElementById("overlay-root")! as HTMLDivElement
        )}
      {createPortal(
        <CartModal
          onCloseModal={handleCartModalToggle}
          showCartModal={showCartModal}
        />,
        document.getElementById("modal-root")! as HTMLDivElement
      )}
    </div>
  );
};

export default Cart;
