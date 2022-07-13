import { FormEvent } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  name: string;
  type: "submit" | "reset" | "button";
  className?: string;
  onSubmit?: (e: FormEvent) => void;
  onClick?: () => void;
}

const Button = ({ name, type, className, onSubmit, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={className ? `${styles.btn} ${className}` : styles.btn}
      onSubmit={onSubmit}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
