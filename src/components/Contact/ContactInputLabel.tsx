import styles from "./ContactInputLabel.module.css";

interface ContactInputLabelProps {
  htmlFor?: string;
  name: string;
  className?: string;
}

const ContactInputLabel = ({
  htmlFor,
  name,
  className,
}: ContactInputLabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={className ? `${styles.label} ${className}` : styles.label}
    >
      {name}
    </label>
  );
};

export default ContactInputLabel;
