import styles from "./Overlay.module.css";

interface OverlayProps {
  onClick: () => void;
}

const Overlay = ({ onClick }: OverlayProps) => {
  return (
    <div className={styles.overlay} onClick={onClick}>
      Overlay
    </div>
  );
};

export default Overlay;
