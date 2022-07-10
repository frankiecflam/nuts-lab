import styles from "./Section.module.css";
import { FC } from "react";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = ({ children, className }) => {
  const classes = className ? `${styles.section} ${className}` : styles.section;

  return <section className={classes}>{children}</section>;
};

export default Section;
