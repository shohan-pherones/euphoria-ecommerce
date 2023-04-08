export function formatCurrency(price) {
  return price?.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
