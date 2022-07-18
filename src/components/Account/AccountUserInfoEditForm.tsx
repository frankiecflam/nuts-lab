import styles from "./AccountUserInfoEditForm.module.css";
import { Input } from "../Input";
import { User } from "../../types";
import { Button } from "../UI/index";
import { useInput } from "../../hooks/index";
import { authTextInput, authPhoneInput } from "../../utils/helpers/index";
import { InmuutableIcon } from "../../assets/Icons/index";
import { FormEvent, useState } from "react";
import { getUserDbKeyById } from "../../utils/helpers/index";

interface AccountUserInfoEditFormProps {
  user: User;
  onHide: () => void;
  onSetUserDetails: (user: User) => void;
}

const AccountUserInfoEditForm = ({
  user,
  onHide,
  onSetUserDetails,
}: AccountUserInfoEditFormProps) => {
  const { id, name, email, phone, address } = user;
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
    inputIsTouched: phoneInputIsTouched,
    onChange: phoneInputChange,
    onBlur: phoneInputBlur,
    onReset: phoneInputReset,
  } = useInput({ authenticate: authPhoneInput, initialInputValue: phone });

  const {
    inputValue: addressInputState,
    inputIsValid: addressInputValid,
    inputIsTouched: addressInputIsTouched,
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

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    //   Only check if field is touched
    const formValidity = nameInputIsTouched
      ? nameInputValid
      : true && phoneInputIsTouched
      ? phoneInputValid
      : true && addressInputIsTouched
      ? addressInputValid
      : true;

    if (!formValidity) {
      setFormFeedback("Input fields are incorrect.");
      return;
    }

    const userDBKey = await getUserDbKeyById(id);
    const userUpdatedData: User = {
      ...user,
      name: nameInputState,
      email: emailInputState,
      phone: phoneInputState,
      address: addressInputState,
    };

    // update DB
    const updateRes = await fetch("api/updateUserData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userDBKey,
        userData: userUpdatedData,
      }),
    });

    // client-side updating userData in AccountDetails
    onSetUserDetails(userUpdatedData);

    // Reset all input fields
    handleResetAllInputFields();

    // hide Edit Form upon successful update
    onHide();
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
