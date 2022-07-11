export default function formatPrice(price: number) {
  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);

  return formattedPrice;
}
