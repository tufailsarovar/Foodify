import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AddressForm from "../components/checkout/AddressForm";
import PaymentOptions from "../components/checkout/PaymentOptions";
import OrderReview from "../components/checkout/OrderReview";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { items, totalPrice } = useCart();

  const [address, setAddress] = useState({});
  const [payment, setPayment] = useState("cod");
  const [loading, setLoading] = useState(false);

  const placeOrder = async () => {
  try {
    setLoading(true);

    const token = localStorage.getItem("token");

    await axios.post(
      `${import.meta.env.VITE_API_URL}/orders`,
      {
        items,
        amount: totalPrice,
        address,
        paymentMethod: payment,
      },
      {
        headers: token
          ? { Authorization: `Bearer ${token}` }
          : {},
      }
    );

    navigate("/orders");
  } catch (err) {
    // 🔴 THIS WILL NOW ALWAYS TRIGGER FOR GUEST
    if (err.response?.status === 401) {
      navigate("/login");
    } else {
      alert("Order failed");
    }
  } finally {
    setLoading(false);
  }
};


  return (
    <>
      <Navbar />

      <Container sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight={700} mb={3}>
          Checkout
        </Typography>

        <Grid container spacing={4}>
          {/* LEFT */}
          <Grid item xs={12} md={7}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" mb={2}>
                Delivery Address
              </Typography>

              <AddressForm address={address} setAddress={setAddress} />

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" mb={2}>
                Payment Method
              </Typography>

              <PaymentOptions payment={payment} setPayment={setPayment} />
            </Paper>
          </Grid>

          {/* RIGHT */}
          <Grid item xs={12} md={5}>
            <Paper sx={{ p: 3, borderRadius: 3 }}>
              <Typography variant="h6" mb={2}>
                Order Summary
              </Typography>

              <OrderReview />

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  py: 1.3,
                  borderRadius: 3,
                  backgroundColor: "#FC8019",
                }}
                onClick={placeOrder}
                disabled={loading || items.length === 0}
              >
                {loading ? "Placing Order..." : "Place Order"}
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </>
  );
}
