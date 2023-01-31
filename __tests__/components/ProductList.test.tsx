import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductList } from "../../src/components/Products";

const renderComponent = () => {
  const products = [
    {
      id: "1",
      title: "Almonds",
      description: "",
      price: 12.99,
      image:
        "https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topPick: false,
    },
    {
      id: "2",
      title: "Peanuts",
      description: "",
      price: 13.99,
      image:
        "https://images.pexels.com/photos/4202955/pexels-photo-4202955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topPick: false,
    },
    {
      id: "3",
      title: "Hazelnuts",
      description: "",
      price: 12.99,
      image:
        "https://images.pexels.com/photos/7676046/pexels-photo-7676046.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      topPick: false,
    },
  ];

  render(<ProductList products={products} />);
};

describe("ProductList", () => {
  it("should render a list element", () => {
    renderComponent();

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("should render product items within the list", () => {
    renderComponent();

    expect(screen.getAllByRole("listitem")).toHaveLength(3);
  });
});
