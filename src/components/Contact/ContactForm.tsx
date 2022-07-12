import styles from "./ContactForm.module.css";
import { ContactInput, ContactInputLabel } from "./index";
import { useInput } from "../../hooks";
import { authTextInput, authEmailInput } from "../../utils/helpers";
import { FormEvent } from "react";
import { Button } from "../UI";
import { useState } from "react";

const ContactForm = () => {
  const {
    inputValue: nameInputState,
    inputIsValid: nameInputValid,
    onChange: nameInputChange,
    onFocus: nameInputFocus,
    onBlur: nameInputBlur,
    onReset: nameInputReset,
  } = useInput({ authenticate: authTextInput });

  const {
    inputValue: emailInputState,
    inputIsValid: emailInputValid,
    onChange: emailInputChange,
    onFocus: emailInputFocus,
    onBlur: emailInputBlur,
    onReset: emailInputReset,
  } = useInput({ authenticate: authEmailInput });

  const {
    inputValue: messageInputState,
    inputIsValid: messageInputValid,
    onChange: messageInputChange,
    onFocus: messageInputFocus,
    onBlur: messageInputBlur,
    onReset: messageInputReset,
  } = useInput({ authenticate: authTextInput });

  const [formValidityState, setFormValidity] = useState(false);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Validate form upon submission
    const formIsValid = nameInputValid && emailInputValid && messageInputValid;

    if (!formIsValid) return;

    // Show successful form submission message for n seconds before disappearing
    setFormValidity(formIsValid);
    setTimeout(() => {
      setFormValidity(false);
    }, 5000);

    // Reset input states upon successful submission
    nameInputReset();
    emailInputReset();
    messageInputReset();
  };

  return (
    <form className={styles.contactForm} onSubmit={handleFormSubmit}>
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
      <Button
        type="submit"
        onSubmit={handleFormSubmit}
        name="submit"
        className={styles.formSubmitBtn}
      />
      {formValidityState && (
        <p className={styles.formFeedback}>
          Your message has been sent. We will get back to you shortly.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
