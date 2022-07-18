import styles from "./AccountUserInfoEditForm.module.css";
import { Input } from "../Input";
import { User } from "../../types";
import { Button } from "../UI/index";
import { useInput } from "../../hooks/index";
import { authTextInput, authPhoneInput } from "../../utils/helpers/index";
import { InmuutableIcon } from "../../assets/Icons/index";
import { FormEvent, useState } from "react";

interface AccountUserInfoEditFormProps {
  user: User;
  onHide: () => void;
}

const AccountUserInfoEditForm = ({
  user,
  onHide,
}: AccountUserInfoEditFormProps) => {
  const { name, email, phone, address } = user;
  const [formFeedback, setFormFeedback] = useState("");

  const {
    inputValue: nameInputState,
    inputIsValid: nameInputValid,
    inputIsTouched: nameInputIsTouched,
    onChange: nameInputChange,
    onBlur: nameInputBlur,
    onReset: nameInputReset,
  } = useInput({ authenticate: authTextInput, initialInputValue: name });

  const { inputValue: emailInputState, onReset: emailInputReset } = useInput({
    initialInputValue: email,
  });

  const {
    inputValue: phoneInputState,
    inputIsValid: phoneInputValid,
    onChange: phoneInputChange,
    onBlur: phoneInputBlur,
    onReset: phoneInputReset,
  } = useInput({ authenticate: authPhoneInput, initialInputValue: phone });

  const {
    inputValue: addressInputState,
    inputIsValid: addressInputValid,
    onChange: addressInputChange,
    onBlur: addressInputBlur,
    onReset: addressInputReset,
  } = useInput({ authenticate: authTextInput, initialInputValue: address });

  const handleResetAllInputFields = () => {
    nameInputReset();
    emailInputReset();
    phoneInputReset();
    addressInputReset();
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    // nameInputValid remains invalid by default if untouched
    const formValidity = nameInputIsTouched
      ? nameInputValid && phoneInputValid && addressInputValid
      : phoneInputValid && addressInputValid;

    if (!formValidity) {
      setFormFeedback("Input fields are incorrect.");
      return;
    }

    // update DB
    console.log(name, email, phone, address);

    // update userData in AccountDetails

    // hide Edit Form upon successful update
    onHide();
    // Reset all input fields
    handleResetAllInputFields();
  };

  return (
    <form className={styles.editForm} onSubmit={handleFormSubmit}>
      <div className={styles.formGroup}>
        <label htmlFor="name" className={styles.editFormInputLabel}>
          name
        </label>
        <Input
          type="text"
          id="name"
          className={styles.editFormInput}
          required
          value={nameInputState}
          onChange={nameInputChange}
          onBlur={nameInputBlur}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="email" className={styles.editFormInputLabel}>
          email
        </label>
        <div className={styles.immutableIcon}>
          <InmuutableIcon />
        </div>
        <Input
          type="email"
          id="email"
          className={styles.editFormInput}
          disabled
          value={emailInputState}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="contact" className={styles.editFormInputLabel}>
          contact
        </label>
        <Input
          type="text"
          id="contact"
          className={styles.editFormInput}
          required
          minLength={9}
          value={phoneInputState}
          onChange={phoneInputChange}
          onBlur={phoneInputBlur}
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor="address" className={styles.editFormInputLabel}>
          address
        </label>
        <Input
          type="text"
          id="address"
          className={styles.editFormInput}
          required
          value={addressInputState}
          onChange={addressInputChange}
          onBlur={addressInputBlur}
        />
      </div>
      <div className={styles.editFormBtns}>
        <Button
          type="button"
          name="cancel"
          className={styles.editFormCancelBtn}
          onClick={onHide}
        />
        <Button type="submit" name="save" className={styles.editFormSaveBtn} />
      </div>
      {formFeedback && (
        <p className={styles.editFormFeedback}>{formFeedback}</p>
      )}
    </form>
  );
};

export default AccountUserInfoEditForm;
