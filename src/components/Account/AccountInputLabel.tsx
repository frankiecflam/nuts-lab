import styles from "./AccountInputLabel.module.css";

interface AccountInputLabelProps {
  htmlFor?: string;
  name: string;
  className?: string;
}

const AccountInputLabel = ({
  htmlFor,
  name,
  className,
}: AccountInputLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={className ? `${styles.label} ${className}` : styles.label}
    >
      {name}
    </label>
  );
};

export default AccountInputLabel;
