import { useReducer, ChangeEvent } from "react";

const inputInitialState = {
  inputValue: "",
  inputIsValid: false,
  inputIsTouched: false,
};

type InputState = {
  inputValue: string;
  inputIsValid: boolean;
  inputIsTouched: boolean;
};

enum ACTIONS {
  "change" = "CHANGE",
  "focus" = "FOCUS",
  "blur" = "BLUR",
  "reset" = "RESET",
}

type ActionType = {
  type: ACTIONS;
  value?: string;
  authentication?: (value: string) => boolean;
};

const inputReducer = (state: InputState, action: ActionType): InputState => {
  switch (action.type) {
    case ACTIONS.change:
      return {
        ...state,
        inputValue: action.value!,
      };

    case ACTIONS.focus:
      return {
        ...state,
      };

    case ACTIONS.blur:
      if (!action.authentication) {
        throw new Error("Input state is not able to validated at the moment!");
      }
      return {
        ...state,
        inputIsValid: action.authentication(state.inputValue),
        inputIsTouched: true,
      };

    case ACTIONS.reset:
      return inputInitialState;

    default:
      return inputInitialState;
  }
};

interface UserInputProps {
  authenticate: (value: string) => boolean;
}

const useInput = ({ authenticate }: UserInputProps) => {
  const [inputState, inputDispatch] = useReducer(
    inputReducer,
    inputInitialState
  );

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    inputDispatch({ type: ACTIONS.change, value: e.target.value });
  };

  const handleInputFocus = () => {
    inputDispatch({ type: ACTIONS.focus });
  };

  const handleInputBlur = () => {
    inputDispatch({
      type: ACTIONS.blur,
      authentication: authenticate,
    });
  };

  const handleInputReset = () => {
    inputDispatch({ type: ACTIONS.reset });
  };

  return {
    ...inputState,
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onReset: handleInputReset,
  };
};

export default useInput;
