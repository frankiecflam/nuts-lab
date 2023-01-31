import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "../../src/components/Contact";

const renderComponent = () => {
  const handleContactFormSubmit = jest.fn();

  render(<ContactForm onContactFormSubmit={handleContactFormSubmit} />);
};

describe("ContractForm", () => {
  it("should have a form element", () => {
    renderComponent();

    expect(screen.getByRole("form")).toBeInTheDocument();
  });

  it("should have an input field for name", () => {
    renderComponent();

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });

  it("should instantly render the user input when given with value for the name input field", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(screen.getByLabelText(/name/i), "Frankie");

    expect(screen.getByLabelText(/name/i)).toHaveValue("Frankie");
  });

  it("should have an input field for email", () => {
    renderComponent();

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  });

  it("should instantly render the user input when given with value for the email input field", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(screen.getByLabelText(/email/i), "frankie@gmail.com");

    expect(screen.getByLabelText(/email/i)).toHaveValue("frankie@gmail.com");
  });

  it("should have an input field for message", () => {
    renderComponent();

    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  it("should instantly render the user input when given with value for the message input field", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(
      screen.getByLabelText(/message/i),
      "I loved your products!"
    );

    expect(screen.getByLabelText(/message/i)).toHaveValue(
      "I loved your products!"
    );
  });

  it("should have a button for form submission", () => {
    renderComponent();

    const submitBtn = screen.getByRole("button", {
      name: /submit/i,
    }) as HTMLButtonElement;

    expect(submitBtn).toBeInTheDocument();
    expect(submitBtn.type).toBe("submit");
  });

  it("shouldn't call the onSubmit function if name input field is empty", async () => {
    const user = userEvent.setup();
    const handleContactFormSubmit = jest.fn();
    render(<ContactForm onContactFormSubmit={handleContactFormSubmit} />);

    await user.type(screen.getByLabelText(/email/i), "frankie@gmail.com");
    await user.type(
      screen.getByLabelText(/message/i),
      "I loved your products!"
    );
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(handleContactFormSubmit).not.toBeCalled();
  });

  it("shouldn't call the onSubmit function if email input field is empty", async () => {
    const user = userEvent.setup();
    const handleContactFormSubmit = jest.fn();
    render(<ContactForm onContactFormSubmit={handleContactFormSubmit} />);

    await user.type(screen.getByLabelText(/name/i), "Frankie");
    await user.type(
      screen.getByLabelText(/message/i),
      "I loved your products!"
    );
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(handleContactFormSubmit).not.toBeCalled();
  });

  it("shouldn't call the onSubmit function if message input field is empty", async () => {
    const user = userEvent.setup();
    const handleContactFormSubmit = jest.fn();
    render(<ContactForm onContactFormSubmit={handleContactFormSubmit} />);

    await user.type(screen.getByLabelText(/name/i), "Frankie");
    await user.type(screen.getByLabelText(/email/i), "frankie@gmail.com");
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(handleContactFormSubmit).not.toBeCalled();
  });

  it("should call the onSubmit functon if all the required input fields are filled with value", async () => {
    const user = userEvent.setup();
    const handleContactFormSubmit = jest.fn();
    render(<ContactForm onContactFormSubmit={handleContactFormSubmit} />);

    await user.type(screen.getByLabelText(/name/i), "Frankie");
    await user.type(screen.getByLabelText(/email/i), "frankie@gmail.com");
    await user.type(
      screen.getByLabelText(/message/i),
      "I loved your products!"
    );
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(handleContactFormSubmit).toBeCalled();
  });

  it("should show a message for successful form submission", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.type(screen.getByLabelText(/name/i), "Frankie");
    await user.type(screen.getByLabelText(/email/i), "frankie@gmail.com");
    await user.type(
      screen.getByLabelText(/message/i),
      "I loved your products!"
    );
    await user.click(screen.getByRole("button", { name: /submit/i }));

    expect(
      screen.getByText(
        "Your message has been sent. We will get back to you shortly."
      )
    ).toBeInTheDocument();
  });
});
