import styles from "./CheckoutShippingInfo.module.css";
import { Input } from "../Input";
import { Button } from "../UI";
import { useInput } from "../../hooks";
import {
  authTextInput,
  authEmailInput,
  authPhoneInput,
} from "../../utils/helpers";
import { FormEvent } from "react";

const CheckoutShippingInfo = () => {
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
    inputValue: addressInputState,
    inputIsValid: addressInputValid,
    onChange: addressInputChange,
    onFocus: addressInputFocus,
    onBlur: addressInputBlur,
    onReset: addressInputReset,
  } = useInput({ authenticate: authTextInput });

  const {
    inputValue: phoneInputState,
    inputIsValid: phoneInputValid,
    onChange: phoneInputChange,
    onFocus: phoneInputFocus,
    onBlur: phoneInputBlur,
    onReset: phoneInputReset,
  } = useInput({ authenticate: authPhoneInput });

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

    // Reset all input fields upon successful submission
    resetAllInputFields();
  };

  return (
    <div className={styles.shippingInfo}>
      <h2 className={styles.shippingHeading}>Shipping Information</h2>
      <form className={styles.shippingForm} onSubmit={handleFormSubmit}>
        {/* Name, emailAddress, address, phone  */}
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
    </div>
  );
};

export default CheckoutShippingInfo;
