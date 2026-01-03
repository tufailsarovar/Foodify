// src/components/cart/CartSummary.jsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function CartSummary() {
  const { totals } = useCart();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        border: "1px solid #eee",
        position: "sticky",
        top: 80,
      }}
    >
      <Typography variant="h6" mb={2}>
        Order Summary
      </Typography>
      <Row label="Subtotal" value={totals.subtotal} />
      <Row label="Delivery" value={totals.delivery} />
      <Row label="Tax" value={totals.tax} />
      <Row label="Total" value={totals.total} bold />
      <Button
        fullWidth
        variant="contained"
        sx={{ mt: 2 }}
        onClick={() => navigate("/checkout")}
      >
        Checkout
      </Button>
    </Box>
  );
}

function Row({ label, value, bold }) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", my: 1 }}>
      <Typography fontWeight={bold ? 700 : 400}>{label}</Typography>
      <Typography fontWeight={bold ? 700 : 400}>₹{value}</Typography>
    </Box>
  );
}
