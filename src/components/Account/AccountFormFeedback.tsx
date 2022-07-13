import styles from "./AccountFormFeedback.module.css";

interface AccountFormFeedbackProps {
  message: string;
}

const AccountFormFeedback = ({ message }: AccountFormFeedbackProps) => {
  return <p className={styles.formFeedback}>{message}</p>;
};

export default AccountFormFeedback;
