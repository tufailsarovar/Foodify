// src/utils/formatPrice.js
export const formatPrice = (value) => {
  if (typeof value !== "number") return "₹0";
  return `₹${value.toLocaleString("en-IN")}`;
};
