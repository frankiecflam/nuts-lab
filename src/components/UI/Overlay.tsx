import styles from "./Overlay.module.css";
import { motion, AnimatePresence } from "framer-motion";

interface OverlayProps {
  onClick?: () => void;
}

const Overlay = ({ onClick }: OverlayProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className={styles.overlay}
        onClick={onClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </AnimatePresence>
  );
};

export default Overlay;
