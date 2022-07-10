import styles from "./SectionBody.module.css";
import { FC } from "react";

interface SectionBodyProps {
  children: React.ReactNode;
  className?: string;
}

const SectionBody: FC<SectionBodyProps> = ({ children, className }) => {
  const classes = className ? `${styles.body} ${className}` : styles.body;

  return <div className={classes}>{children}</div>;
};

export default SectionBody;
