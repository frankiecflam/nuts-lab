import styles from "./Cart.module.css";
import { createPortal } from "react-dom";
import { Overlay } from "../UI";
import { useState, useEffect } from "react";
import { CartModal } from "./index";
import { CartIcon } from "../../assets/Icons";
import { useCartContext } from "../../context/CartContext";
import { calculateCartQuantity } from "../../utils/helpers";

const Cart = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartQuantityBump, setCartQuantityBump] = useState(false);
  const cartQuantity = calculateCartQuantity(useCartContext().items);

  useEffect(() => {
    if (!hasMounted) {
      setHasMounted(true);
      return;
    }

    setCartQuantityBump(true);
    setTimeout(() => {
      setCartQuantityBump(false);
    }, 1000);
  }, [cartQuantity]);

  if (!hasMounted) return null;

  const handleCartModalToggle = () => {
    setShowCartModal((prveState) => !prveState);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartIconDiv}>
        <CartIcon className={styles.cartIcon} onClick={handleCartModalToggle} />
        <p
          className={
            cartQuantityBump
              ? `${styles.cartIconQty} ${styles.bump}`
              : styles.cartIconQty
          }
        >
          {cartQuantity}
        </p>
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
        document.getElementById("overlay-root")! as HTMLDivElement
      )}
    </div>
  );
};

export default Cart;
