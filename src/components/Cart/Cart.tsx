import styles from "./Cart.module.css";
import { createPortal } from "react-dom";
import { Overlay } from "../UI";
import { useState, useEffect } from "react";
import { CartModal } from "./index";
import { CartIcon } from "../../assets/Icons";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const handleCartModalToggle = () => {
    setShowCartModal((prveState) => !prveState);
  };

  return (
    <div className={styles.cart}>
      <div className={styles.cartIconDiv}>
        <CartIcon className={styles.cartIcon} onClick={handleCartModalToggle} />
        <p className={styles.cartIconQty}>1</p>
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
