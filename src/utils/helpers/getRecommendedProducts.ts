import { Product } from "../../types/index";

function pickRandomNumbers(
  filteredListLength: number,
  requiredQuantity: number
): number[] {
  let generatedRandomNumbers: number[] = [];

  while (generatedRandomNumbers.length !== requiredQuantity) {
    const pickedNum = Math.floor(Math.random() * filteredListLength);
    const hasExisted = generatedRandomNumbers.find(
      (currentNum) => currentNum === pickedNum
    );

    if (hasExisted === undefined) {
      generatedRandomNumbers.push(pickedNum);
    }
  }

  return generatedRandomNumbers;
}

export default function getRecommendedProducts(
  currentProductId: string,
  products: Product[],
  requiredQuantity: number
): Product[] {
  const productListWithoutCurrentProduct = products.filter(
    (product) => product.id !== currentProductId
  );
  const filteredListLength = productListWithoutCurrentProduct.length;

  //   Current Picking Algorithm: *** Randomness ***
  const randomNums = pickRandomNumbers(filteredListLength, requiredQuantity);

  const recommendedProducts = randomNums.map(
    (num) => productListWithoutCurrentProduct[num]
  );

  return recommendedProducts;
}
