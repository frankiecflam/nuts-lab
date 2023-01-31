import { getRecommendedProducts } from "../../src/utils/helpers";

const currentProductId = "1";
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
const requiredQuantity = 2;

describe("getRecommendedProducts function", () => {
  it("should return an array of 2 recommended products, which doesn't contain the current product", () => {
    const recommendedProducts = getRecommendedProducts(
      currentProductId,
      products,
      requiredQuantity
    );

    expect(recommendedProducts).toHaveLength(2);
    expect(recommendedProducts).toEqual([
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
    ]);
  });
});
