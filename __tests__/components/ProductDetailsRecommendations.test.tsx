import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductDetailsRecommendations } from "../../src/components/Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

jest.mock("axios");

const renderComponent = () => {
  const client = new QueryClient();

  render(
    <ProductDetailsRecommendations currentProductId="products-86a606f3-dbda-4ce9-b75e-69b8f8d27fb8" />,
    {
      wrapper: ({ children }: { children: ReactNode }) => (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
      ),
    }
  );
};

describe("ProductDetailsRecommendations", () => {
  it("should render a list for recommended products", () => {
    renderComponent();

    waitFor(() => expect(screen.getByRole("list")).toBeInTheDocument());
  });

  it("should render 4 listitems as recommended products", async () => {
    renderComponent();

    waitFor(() => expect(screen.getAllByRole("listitem")).toHaveLength(4));
  });
});
