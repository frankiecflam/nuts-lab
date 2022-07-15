import styles from "./Cart.module.css";
import { createPortal } from "react-dom";
import { Overlay } from "../UI";
import { useState, useEffect } from "react";
import { CartModal } from "./index";

const Cart = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <div className={styles.cart}>
      {createPortal(
        <Overlay />,
        document.getElementById("overlay-root")! as HTMLDivElement
      )}
      {createPortal(
        <CartModal />,
        document.getElementById("overlay-root")! as HTMLDivElement
      )}
    </div>
  );
};

export default Cart;
