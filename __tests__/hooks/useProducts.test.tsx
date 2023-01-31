import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@testing-library/jest-dom";
import { renderHook, waitFor } from "@testing-library/react";
import { ReactNode } from "react";
import { useProducts } from "../../src/hooks";

const wrapper = ({ children }: { children: ReactNode }) => {
  const client = new QueryClient();
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

const renderCustomHook = () =>
  renderHook(() => useProducts(), {
    wrapper,
  });

describe("useProducts", () => {
  it("should return an array of product items as data", async () => {
    const { result } = renderCustomHook();

    // ✅ wait until the query has transitioned to success state
    await waitFor(() => expect(result.current.isSuccess).toBe(true));

    expect(result.current.data).not.toHaveLength(0);
  });
});
