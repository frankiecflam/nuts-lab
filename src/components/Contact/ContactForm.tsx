import styles from "./ContactForm.module.css";
import { ContactInput, ContactInputLabel } from "./index";
import { useInput } from "../../hooks";
import { authTextInput, authEmailInput } from "../../utils/helpers";

const ContactForm = () => {
  const {
    inputValue: nameInputState,
    inputIsValid: nameInputValid,
    onChange: nameInputChange,
    onFocus: nameInputFocus,
    onBlur: nameInputBlur,
  } = useInput({ authenticate: authTextInput });

  const {
    inputValue: emailInputState,
    inputIsValid: emailInputValid,
    onChange: emailInputChange,
    onFocus: emailInputFocus,
    onBlur: emailInputBlur,
  } = useInput({ authenticate: authEmailInput });

  const {
    inputValue: messageInputState,
    inputIsValid: messageInputValid,
    onChange: messageInputChange,
    onFocus: messageInputFocus,
    onBlur: messageInputBlur,
  } = useInput({ authenticate: authTextInput });

  return (
    <form className={styles.contactForm}>
      <h1 className={styles.contactFormHeading}>
        we would love to hear from you!
      </h1>
      <div className={styles.contactFormBody}>
        <div className={styles.formGroup}>
          <ContactInputLabel htmlFor="name" name="name" />
          <ContactInput
            type="text"
            id="name"
            required={true}
            value={nameInputState}
            onChange={nameInputChange}
            onFocus={nameInputFocus}
            onBlur={nameInputBlur}
          />
        </div>
        <div className={styles.formGroup}>
          <ContactInputLabel htmlFor="email" name="email" />
          <ContactInput
            type="email"
            id="email"
            required={true}
            value={emailInputState}
            onChange={emailInputChange}
            onFocus={emailInputFocus}
            onBlur={emailInputBlur}
          />
        </div>
        <div className={styles.formGroup}>
          <ContactInputLabel htmlFor="message" name="message" />
          <ContactInput
            type="text"
            id="message"
            textarea={true}
            required={true}
            value={messageInputState}
            onChange={messageInputChange}
            onFocus={messageInputFocus}
            onBlur={messageInputBlur}
          />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
