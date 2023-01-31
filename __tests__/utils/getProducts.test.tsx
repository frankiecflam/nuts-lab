import { getProducts } from "../../src/utils/helpers";

describe("getProducts function", () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () =>
        Promise.resolve({
          product1: {
            id: "1",
            title: "Almonds",
            description: "",
            price: 12.99,
            image:
              "https://images.pexels.com/photos/57042/pexels-photo-57042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            topPick: false,
          },
          product2: {
            id: "2",
            title: "Peanuts",
            description: "",
            price: 13.99,
            image:
              "https://images.pexels.com/photos/4202955/pexels-photo-4202955.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            topPick: false,
          },
        }),
    });
  });

  it("should return an array of product items", async () => {
    const products = await getProducts();

    expect(products).toHaveLength(2);
    expect(products).toEqual([
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
    ]);
  });
});
