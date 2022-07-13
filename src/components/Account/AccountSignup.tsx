import styles from "./AccountSignup.module.css";
import { SectionHeader, SectionBody } from "../Section";
import {
  AccountForm,
  AccountInput,
  AccountInputLabel,
  AccountFormGroup,
  AccountFormFeedback,
  AccountFormToggle,
} from "./index";
import { useInput } from "../../hooks";
import { authEmailInput, authPasswordInput } from "../../utils/helpers";
import { Button } from "../UI";
import { FormEvent, useState } from "react";

interface AccountSignupProps {
  onFormSwitch: () => void;
}

const AccountSignup = ({ onFormSwitch }: AccountSignupProps) => {
  const {
    inputValue: emailInputState,
    inputIsValid: emailInputValid,
    onChange: emailInputChange,
    onReset: emailInputReset,
  } = useInput({ authenticate: authEmailInput });

  const {
    inputValue: passwordInputState,
    inputIsValid: passwordInputValid,
    onChange: passwordInputChange,
    onReset: passwordInputReset,
  } = useInput({ authenticate: authPasswordInput });

  const [formFeedback, setFormFeedback] = useState("");

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // If email and password are authenticated as invalid, show error and return
    const formValidity = emailInputValid && passwordInputValid;
    if (!formValidity) {
      setFormFeedback("Invalid email or/and password!");
    }

    // Register user in Firebase
    const res = await fetch("api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputState,
        password: passwordInputState,
      }),
    });

    const { data, error } = await res.json();

    // show registration status to users
    if (error) {
      setFormFeedback(error.message);
      return;
    }
    setFormFeedback("Your account has been set up!");

    // data: {idToken, localId}, 1. create an user instance in DB with the id; 2. idToken to be stored in ContextAPI
  };

  return (
    <>
      <SectionHeader title="sign up" />
      <SectionBody className={styles.signUpBody}>
        <AccountForm onSubmit={handleFormSubmit}>
          <AccountFormGroup>
            <AccountInputLabel name="email" />
            <AccountInput
              id="email"
              type="email"
              required
              value={emailInputState}
              onChange={emailInputChange}
            />
          </AccountFormGroup>
          <AccountFormGroup>
            <AccountInputLabel name="password" />
            <AccountInput
              id="password"
              type="password"
              required
              minLength={6}
              value={passwordInputState}
              onChange={passwordInputChange}
            />
          </AccountFormGroup>
          <Button type="submit" name="sign up" onSubmit={handleFormSubmit} />
          {formFeedback && <AccountFormFeedback message={formFeedback} />}
        </AccountForm>
        <AccountFormToggle onClick={onFormSwitch} />
      </SectionBody>
    </>
  );
};

export default AccountSignup;
