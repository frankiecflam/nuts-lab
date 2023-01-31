import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductDetailsContent } from "../../src/components/Products";
import userEvent from "@testing-library/user-event";

const handleAddItemToCart = jest.fn();

const renderComponent = () => {
  const product = {
    id: "1",
    title: "Almonds 425g",
    description: "It tastes delicious!",
    price: 12.99,
    image:
      "https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    topPick: false,
  };

  render(
    <ProductDetailsContent
      product={product}
      handleAddItemToCart={handleAddItemToCart}
    />
  );
};

describe("ProductDetailsContent", () => {
  it("should render an img element for the product image", () => {
    renderComponent();

    const imgElement = screen.getByAltText("Almonds 425g") as HTMLImageElement;
    expect(imgElement).toBeInTheDocument();

    waitFor(() => {
      expect(imgElement.src).toBe(
        "https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      );
    });
  });

  it("should render the title of the product", () => {
    renderComponent();

    expect(screen.getByText("Almonds 425g")).toBeInTheDocument();
  });

  it("should render the description of the product", () => {
    renderComponent();

    expect(screen.getByText("It tastes delicious!")).toBeInTheDocument();
  });

  it("should render the price of the product", () => {
    renderComponent();

    expect(screen.getByText("£12.99")).toBeInTheDocument();
  });

  it("should render the current quantity of the product to be added into the cartContext with default value set to 1", () => {
    renderComponent();

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should render a button for incrementing the quantity of the product to be added into the cartContext", () => {
    renderComponent();

    expect(screen.getByRole("button", { name: "+" })).toBeInTheDocument();
  });

  it("should increase the quantity by 1 if button for increment is clicked", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: "+" }));

    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should render a button for reducing the quantity of the product to be added into the cartContext", () => {
    renderComponent();

    expect(screen.getByRole("button", { name: "-" })).toBeInTheDocument();
  });

  it("should decrease the quantity by 1 if button for decrement is clicked given the current quality is greater than 1", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: "+" }));
    await user.click(screen.getByRole("button", { name: "-" }));

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("shouldn't decrease the quanity if the current quantity is 1 upon a click on the button for decrement", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: "-" }));

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("should render a button for adding the current quantity of the product into the cartContext", () => {
    renderComponent();

    expect(
      screen.getByRole("button", { name: /add to cart/i })
    ).toBeInTheDocument();
  });

  it("should call the handleAddToCartQty function upon a click on the button for it", async () => {
    const user = userEvent.setup();
    renderComponent();

    await user.click(screen.getByRole("button", { name: /add to cart/i }));

    expect(handleAddItemToCart).toBeCalled();
  });
});
