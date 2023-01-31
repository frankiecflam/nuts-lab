import "@testing-library/jest-dom";
import { renderHook } from "@testing-library/react";
import { ChangeEvent } from "react";
import { act } from "react-dom/test-utils";
import { useInput } from "../../src/hooks";

describe("useInput hook", () => {
  it("should return initial state when executed", () => {
    const { result } = renderHook(() => useInput({}));

    const { inputValue, inputIsValid, inputIsTouched } = result.current;

    expect(inputValue).toBe("");
    expect(inputIsValid).toBeFalsy();
    expect(inputIsTouched).toBeFalsy();
  });

  it("should update the inputValue state when onChange is invoked", () => {
    const { result } = renderHook(() => useInput({}));

    act(() => {
      const changeEvent = {
        target: { value: "nuts lab" },
      } as ChangeEvent<HTMLInputElement>;

      result.current.onChange(changeEvent);
    });

    expect(result.current.inputValue).toBe("nuts lab");
  });

  it("should return truthy value for inputIsValid when inputValue state has more than 5 characters when onBlur is invoked", () => {
    const { result } = renderHook(() =>
      useInput({ authenticate: (value: string) => value.trim().length > 5 })
    );

    act(() => {
      const changeEvent = {
        target: { value: "almonds" },
      } as ChangeEvent<HTMLInputElement>;

      result.current.onChange(changeEvent);
      result.current.onBlur();
    });

    expect(result.current.inputIsValid).toBeTruthy();
  });

  it("should return falsey value for inputIsValid when inputValue state has no more than 5 characters when onBlur is invoked", () => {
    const { result } = renderHook(() =>
      useInput({ authenticate: (value: string) => value.trim().length > 5 })
    );

    act(() => {
      const changeEvent = {
        target: { value: "pecan" },
      } as ChangeEvent<HTMLInputElement>;

      result.current.onChange(changeEvent);
      result.current.onBlur();
    });

    expect(result.current.inputIsValid).toBeFalsy();
  });

  it("should reset the initialState when onReset is invoked", () => {
    const { result } = renderHook(() =>
      useInput({ authenticate: (value: string) => value.trim().length > 5 })
    );

    act(() => {
      const changeEvent = {
        target: { value: "almonds" },
      } as ChangeEvent<HTMLInputElement>;

      result.current.onChange(changeEvent);
      result.current.onBlur();
      result.current.onReset();
    });

    const { inputValue, inputIsValid, inputIsTouched } = result.current;
    expect(inputValue).toBe("");
    expect(inputIsValid).toBeFalsy();
    expect(inputIsTouched).toBeFalsy();
  });
});
