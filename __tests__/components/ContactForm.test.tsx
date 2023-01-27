import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "../../src/components/Contact";

const renderComponent = () => render(<ContactForm />);

describe("ContractForm", () => {
  it("should have a form element", () => {
    renderComponent();

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("should have an input field for name", () => {
    renderComponent();

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });

  it("should instantly render the user input when given with value for the name input field", () => {
    renderComponent();
  });

  it("should have an input field for email", () => {
    renderComponent();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("should have an input field for message", () => {
    renderComponent();

    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("should have a button for form submission", () => {
    renderComponent();

    const submitBtn = screen.getByRole("button", {
      name: /submit/i,
    }) as HTMLButtonElement;

    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn.type).toBe("submit");
  });
});
