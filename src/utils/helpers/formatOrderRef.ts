export default function formatOrderRef(orderRef: string) {
  const [_, shortOrderRef] = orderRef.split("-");

  return shortOrderRef.toUpperCase();
}
