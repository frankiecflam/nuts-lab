import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Product } from "../types";

export default function useProducts() {
  return useQuery(
    ["products"],
    () => axios.get("/api/products").then((res) => res.data),
    {
      select: ({ data }) => {
        let loadedProducts: Product[] = [];

        for (const key in data) {
          loadedProducts.push(data[key]);
        }

        return loadedProducts;
      },
    }
  );
}
