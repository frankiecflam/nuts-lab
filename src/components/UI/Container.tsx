import styles from "./Container.module.css";
import { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={
        className ? `${styles.container} ${className}` : styles.container
      }
    >
      {children}
    </div>
  );
};

export default Container;
