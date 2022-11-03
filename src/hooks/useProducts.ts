import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { z } from "zod";

const Product = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.number(),
  image: z.string(),
  topPick: z.boolean(),
});
const Products = z.array(Product);

export default function useProducts() {
  return useQuery(
    ["products"],
    () =>
      axios.get("/api/products").then((res) => {
        const { products } = res.data;

        let loadedProducts: any[] = [];

        for (const key in products) {
          loadedProducts.push(products[key]);
        }

        const validatedProducts = Products.parse(loadedProducts);

        return validatedProducts;
      }),
    {
      onError: (error) => {
        console.log(
          "Error occured when zod schema was parsing the api response of products!"
        );
      },
    }
  );
}
