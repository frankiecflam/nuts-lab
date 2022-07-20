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
import {
  authEmailInput,
  authPasswordInput,
  authTextInput,
} from "../../utils/helpers";
import { Button } from "../UI";
import { FormEvent, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { User } from "../../types/index";

interface AccountSignupProps {
  onFormSwitch: () => void;
  onSetUserDetails: (user: User) => void;
}

const AccountSignup = ({
  onFormSwitch,
  onSetUserDetails,
}: AccountSignupProps) => {
  const {
    inputValue: nameInputState,
    inputIsValid: nameInputValid,
    onChange: nameInputChange,
    onBlur: nameInputBlur,
    onReset: nameInputReset,
  } = useInput({ authenticate: authTextInput });

  const {
    inputValue: emailInputState,
    inputIsValid: emailInputValid,
    onChange: emailInputChange,
    onBlur: emailInputBlur,
    onReset: emailInputReset,
  } = useInput({ authenticate: authEmailInput });

  const {
    inputValue: passwordInputState,
    inputIsValid: passwordInputValid,
    onChange: passwordInputChange,
    onBlur: passwordInputBlur,
    onReset: passwordInputReset,
  } = useInput({ authenticate: authPasswordInput });

  const [formFeedback, setFormFeedback] = useState("");
  const { login } = useAuthContext();
  const formValidity = emailInputValid && passwordInputValid && nameInputValid;

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formValidity) {
      setFormFeedback("Invalid name, email or/and password!");
    }

    // Register user in Firebase
    const signUpRes = await fetch("api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailInputState,
        password: passwordInputState,
      }),
    });

    const { data, error: signUpError } = await signUpRes.json();

    // show registration status to users
    if (signUpError) {
      setFormFeedback(signUpError.message);
      return;
    }

    //  1. create an user instance in DB with the id; 2. idToken to be stored in ContextAPI
    const { idToken, localId }: { idToken: string; localId: string } = data;
    const createUserRes = await fetch("api/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        localId,
        name: nameInputState,
        email: emailInputState,
      }),
    });

    const {
      error: createUserError,
      success: { user },
    } = await createUserRes.json();

    if (createUserError) {
      setFormFeedback(
        "Whoops! Something went wrong creating your account. Please contact us !"
      );
      return;
    }

    setFormFeedback("Your account has been set up!");
    onSetUserDetails(user);
    login(idToken);

    // Reset all fields upon successful registration
    nameInputReset();
    emailInputReset();
    passwordInputReset();
  };

  return (
    <>
      <SectionHeader title="sign up" />
      <SectionBody className={styles.signUpBody}>
        <AccountForm onSubmit={handleFormSubmit}>
          <AccountFormGroup>
            <AccountInputLabel name="name" />
            <AccountInput
              id="name"
              type="text"
              required
              minLength={1}
              value={nameInputState}
              onChange={nameInputChange}
              onBlur={nameInputBlur}
            />
          </AccountFormGroup>
          <AccountFormGroup>
            <AccountInputLabel name="email" />
            <AccountInput
              id="email"
              type="email"
              required
              value={emailInputState}
              onChange={emailInputChange}
              onBlur={emailInputBlur}
            />
          </AccountFormGroup>
          <AccountFormGroup>
            <AccountInputLabel name="password" />
            <AccountInput
              id="password"
              type="password"
              autoComplete="on"
              required
              minLength={6}
              value={passwordInputState}
              onChange={passwordInputChange}
              onBlur={passwordInputBlur}
            />
          </AccountFormGroup>
          <Button type="submit" name="sign up" onSubmit={handleFormSubmit} />
          {formFeedback && <AccountFormFeedback message={formFeedback} />}
        </AccountForm>
        <AccountFormToggle onClick={onFormSwitch} signupFormActive={true} />
      </SectionBody>
    </>
  );
};

export default AccountSignup;
