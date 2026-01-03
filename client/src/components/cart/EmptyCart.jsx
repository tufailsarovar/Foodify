// src/components/cart/EmptyCart.jsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function EmptyCart() {
  const navigate = useNavigate();
  return (
    <Box sx={{ textAlign: "center", py: 8 }}>
      <Typography variant="h5" mb={1}>
        Your cart is empty
      </Typography>
      <Typography color="text.secondary" mb={3}>
        Add items from the menu to start your order
      </Typography>
      <Button variant="contained" onClick={() => navigate("/")}>
        Browse Menu
      </Button>
    </Box>
  );
}
