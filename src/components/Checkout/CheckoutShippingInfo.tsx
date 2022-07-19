import styles from "./CheckoutShippingInfo.module.css";
import { Input } from "../Input";
import { Button } from "../UI";
import { useInput } from "../../hooks";
import {
  authTextInput,
  authEmailInput,
  authPhoneInput,
} from "../../utils/helpers";
import { FormEvent, useState } from "react";
import { User } from "../../types";
import Link from "next/link";

interface CheckoutShippingInfoProps {
  user: User | undefined;
}

const CheckoutShippingInfo = ({ user }: CheckoutShippingInfoProps) => {
  const {
    inputValue: nameInputState,
    inputIsValid: nameInputValid,
    onChange: nameInputChange,
    onBlur: nameInputBlur,
    onReset: nameInputReset,
  } = useInput({
    authenticate: authTextInput,
    initialInputValue: user ? user.name : "",
  });

  const {
    inputValue: emailInputState,
    inputIsValid: emailInputValid,
    onChange: emailInputChange,
    onBlur: emailInputBlur,
    onReset: emailInputReset,
  } = useInput({
    authenticate: authEmailInput,
    initialInputValue: user ? user.email : "",
  });

  const {
    inputValue: addressInputState,
    inputIsValid: addressInputValid,
    onChange: addressInputChange,
    onBlur: addressInputBlur,
    onReset: addressInputReset,
  } = useInput({
    authenticate: authTextInput,
    initialInputValue: user ? user.address : "",
  });

  const {
    inputValue: phoneInputState,
    inputIsValid: phoneInputValid,
    onChange: phoneInputChange,
    onBlur: phoneInputBlur,
    onReset: phoneInputReset,
  } = useInput({
    authenticate: authPhoneInput,
    initialInputValue: user ? user.phone : "",
  });

  const [formFeedback, setFormFeedback] = useState("");

  const formValidity =
    nameInputValid && emailInputValid && addressInputValid && phoneInputValid;

  const resetAllInputFields = () => {
    nameInputReset();
    emailInputReset();
    addressInputReset();
    phoneInputReset();
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formValidity) return;

    // Submit order to the DB

    // Show form feedback to user (Return order no#)
    setFormFeedback("Thank you for your order!");

    // Reset cartContext

    // Reset all input fields upon successful submission
    resetAllInputFields();
  };

  return (
    <div className={styles.shippingInfo}>
      <header className={styles.shippingHeader}>
        <h2 className={styles.shippingHeading}>Shipping Information</h2>
        <div className={styles.shippingLogin}>
          {user && (
            <p>
              You are now logged in as <Link href="/account">{user.name}</Link>{" "}
              &#40;
              {user.email}&#41;.
            </p>
          )}
          {!user && (
            <>
              <p>Already have an account?</p>
              <Link href="/account">
                <a className={styles.shippingLoginLink}>log in</a>
              </Link>
            </>
          )}
        </div>
      </header>
      <form className={styles.shippingForm} onSubmit={handleFormSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.shippingInputLabel}>
            name
          </label>
          <Input
            type="text"
            className={styles.shippingInput}
            id="name"
            required
            value={nameInputState}
            onChange={nameInputChange}
            onBlur={nameInputBlur}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.shippingInputLabel}>
            email
          </label>
          <Input
            type="email"
            className={styles.shippingInput}
            id="email"
            required
            value={emailInputState}
            onChange={emailInputChange}
            onBlur={emailInputBlur}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="address" className={styles.shippingInputLabel}>
            address
          </label>
          <Input
            type="text"
            className={styles.shippingInput}
            id="address"
            required
            value={addressInputState}
            onChange={addressInputChange}
            onBlur={addressInputBlur}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.shippingInputLabel}>
            phone
          </label>
          <Input
            type="tel"
            className={styles.shippingInput}
            id="phone"
            required
            minLength={9}
            value={phoneInputState}
            onChange={phoneInputChange}
            onBlur={phoneInputBlur}
          />
        </div>
        <Button
          type="submit"
          name="submit order"
          className={styles.shippingSubmitBtn}
        />
      </form>
      {formFeedback && <p className={styles.formFeedback}>{formFeedback}</p>}
    </div>
  );
};

export default CheckoutShippingInfo;
