// src/components/cart/CartItem.jsx
import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { useCart } from "../../context/CartContext";

export default function CartItem({ item }) {
  const { updateQty, removeItem } = useCart();

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "80px 1fr auto",
        gap: 2,
        alignItems: "center",
        py: 2,
        borderBottom: "1px solid #eee",
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{ width: 80, height: 60, objectFit: "cover", borderRadius: 8 }}
      />
      <Box>
        <Typography fontWeight={600}>{item.name}</Typography>
        <Typography color="text.secondary">₹{item.price}</Typography>
        <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
          <IconButton size="small" onClick={() => updateQty(item.id, item.qty - 1)}>
            <RemoveIcon />
          </IconButton>
          <Typography sx={{ mx: 1 }}>{item.qty}</Typography>
          <IconButton size="small" onClick={() => updateQty(item.id, item.qty + 1)}>
            <AddIcon />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography fontWeight={600}>₹{item.price * item.qty}</Typography>
        <IconButton onClick={() => removeItem(item.id)}>
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
