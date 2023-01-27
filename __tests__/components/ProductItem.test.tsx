import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductItem } from "../../src/components/Products";

const renderComponent = () => {
  const item = {
    href: "https://nutslab.vercel.app/products/products-a21f6202-cbfb-4d2f-93d4-f1ea8c7f1922",
    src: "https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    title: "Almonds",
    price: 12.99,
  };

  render(<ProductItem {...item} />);
};

describe("ProductItem", () => {
  it("should render a listitem", () => {
    renderComponent();

    expect(screen.getByRole("listitem")).toBeInTheDocument();
  });

  it("should render an anchor tag with href to a correct product detail page", () => {
    renderComponent();

    const anchorTage = screen.getByRole("link") as HTMLAnchorElement;

    expect(anchorTage).toBeInTheDocument();
    expect(anchorTage.href).toBe(
      "https://nutslab.vercel.app/products/products-a21f6202-cbfb-4d2f-93d4-f1ea8c7f1922"
    );
  });

  it("should render an image element with the correct src attribute", async () => {
    renderComponent();

    const imgElement = screen.getByRole("img") as HTMLImageElement;

    expect(imgElement).toBeInTheDocument();
    waitFor(() => {
      expect(imgElement.src).toBe(
        "https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      );
    });
  });

  it("should render the title of the item", () => {
    renderComponent();

    expect(screen.getByText("Almonds")).toBeInTheDocument();
  });

  it("should render the price of the item", () => {
    renderComponent();

    expect(screen.getByText("£12.99")).toBeInTheDocument();
  });
});
