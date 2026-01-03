import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useCart } from "../context/CartContext";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const { items, increase, decrease, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <Container sx={{ py: 4, maxWidth: "md" }}>
        <Typography variant="h5" fontWeight={700} mb={3}>
          Your Cart
        </Typography>

        {!items.length && (
          <Typography color="text.secondary">Your cart is empty</Typography>
        )}

        {items.map((item) => (
          <Card key={item.id} sx={{ mb: 2, borderRadius: 3 }}>
            <CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                {/* IMAGE */}
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: 90,
                    height: 70,
                    borderRadius: 2,
                    objectFit: "cover",
                  }}
                />

                {/* INFO */}
                <Box sx={{ flexGrow: 1 }}>
                  <Typography fontWeight={600}>{item.name}</Typography>
                  <Typography color="text.secondary">
                    ₹{item.price} each
                  </Typography>

                  {/* COUNTER */}
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      alignItems: "center",
                      border: "1px solid #E0E0E0",
                      borderRadius: 2,
                      width: "fit-content",
                    }}
                  >
                    <IconButton size="small" onClick={() => decrease(item.id)}>
                      <RemoveIcon />
                    </IconButton>
                    <Typography sx={{ mx: 1 }}>{item.qty}</Typography>
                    <IconButton size="small" onClick={() => increase(item.id)}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </Box>

                {/* PRICE & REMOVE */}
                <Box sx={{ textAlign: "right" }}>
                  <Typography fontWeight={700}>
                    ₹{item.qty * item.price}
                  </Typography>
                  <IconButton color="error" onClick={() => decrease(item.id)}>
                    <DeleteOutlineIcon />
                  </IconButton>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}

        {/* TOTAL */}
        {items.length > 0 && (
          <Box
            sx={{
              mt: 4,
              p: 3,
              borderRadius: 3,
              background: "#FFF3E0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mb: 2,
              }}
            >
              <Typography fontWeight={700}>Total Amount</Typography>
              <Typography fontWeight={700}>₹{totalPrice}</Typography>
            </Box>

            <Button
              fullWidth
              variant="contained"
              sx={{
                py: 1.4,
                borderRadius: 3,
                backgroundColor: "#FC8019",
                fontWeight: 600,
              }}
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </Button>
          </Box>
        )}
      </Container>
      <Footer />
    </>
  );
}
