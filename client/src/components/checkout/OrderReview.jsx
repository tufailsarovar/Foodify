import { Box, Typography, Divider } from "@mui/material";
import { useCart } from "../../context/CartContext";

export default function OrderReview() {
  const { items, totalPrice } = useCart();

  if (!items || items.length === 0) {
    return (
      <Typography color="text.secondary">
        Your cart is empty
      </Typography>
    );
  }

  return (
    <>
      {items.map((item, i) => (
        <Box
          key={i}
          display="flex"
          justifyContent="space-between"
          mb={1}
        >
          <Typography>
            {item.name} × {item.qty}
          </Typography>
          <Typography>
            ₹{item.price * item.qty}
          </Typography>
        </Box>
      ))}

      <Divider sx={{ my: 2 }} />

      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight={700}>Total</Typography>
        <Typography fontWeight={700}>₹{totalPrice}</Typography>
      </Box>
    </>
  );
}
