import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useCart } from "../../context/CartContext";

export default function FoodCard({ food }) {
  const { items, addItem, increase, decrease } = useCart();
  const cartItem = items.find((i) => i.id === food.id);

  return (
    <Card
      sx={{
        borderRadius: 3,
        height: "100%",
        transition: "all 0.3s ease",
        cursor: "pointer",
        overflow: "hidden",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* IMAGE */}
      <Box sx={{ overflow: "hidden" }}>
        <CardMedia
          component="img"
          height="200"
          image={food.image}
          alt={food.name}
          sx={{
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.08)",
            },
          }}
        />
      </Box>

      <CardContent>
        {/* NAME */}
        <Typography fontWeight={700} gutterBottom>
          {food.name}
        </Typography>

        {/* PRICE & RATING */}
        <Typography color="text.secondary" sx={{ mb: 1 }}>
          ₹{food.price} • ⭐ {food.rating}
        </Typography>

        {/* ACTION */}
        {!cartItem ? (
          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 1,
              borderRadius: 3,
              py: 1,
              backgroundColor: "#FC8019",
              transition: "all 0.25s ease",
              "&:hover": {
                backgroundColor: "#e96f12",
                transform: "scale(1.02)",
              },
            }}
            onClick={() => addItem(food)}
          >
            Add to Cart
          </Button>
        ) : (
          <Box
            sx={{
              mt: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* COUNTER */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #E0E0E0",
                borderRadius: 3,
                px: 1,
                background: "#fff",
              }}
            >
              <IconButton size="small" onClick={() => decrease(food.id)}>
                <RemoveIcon color="success" />
              </IconButton>

              <Typography sx={{ mx: 1, fontWeight: 600 }}>
                {cartItem.qty}
              </Typography>

              <IconButton size="small" onClick={() => increase(food.id)}>
                <AddIcon color="success" />
              </IconButton>
            </Box>

            {/* TOTAL PRICE */}
            <Typography fontWeight={700}>
              ₹{cartItem.qty * food.price}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
