import styles from "./Main.module.css";
import { FC } from "react";

interface MainProps {
  children: React.ReactNode;
}

const Main: FC<MainProps> = ({ children }) => {
  return (
    <main className={styles.main}>
      <div id="overlay-root" />
      <div id="modal-root" />
      {children}
    </main>
  );
};

export default Main;
