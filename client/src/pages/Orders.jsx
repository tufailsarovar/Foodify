import React, { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Divider,
  Box,
  Button,
} from "@mui/material";
import axios from "axios";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/orders`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // ✅ FIX: handle both array & object response (NO UI CHANGE)
        const data = Array.isArray(res.data)
          ? res.data
          : res.data.orders || [];
        setOrders(data);
      })
      .catch((err) => console.error(err));
  }, []);

  // ✅ DELETE ORDER (NEW – minimal)
  const deleteOrder = async (orderId) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/orders/${orderId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      // remove from UI (no refetch)
      setOrders((prev) => prev.filter((o) => o._id !== orderId));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  return (
    <>
      <Navbar />

      <Container sx={{ py: 5 }}>
        <Typography variant="h4" fontWeight={700} mb={3}>
          My Orders
        </Typography>

        {orders.length === 0 ? (
          <Typography>No orders yet</Typography>
        ) : (
          orders.map((order) => (
            <Paper key={order._id} sx={{ p: 3, mb: 3, borderRadius: 3 }}>
              <Typography fontWeight={600}>
                Order ID: {order._id}
              </Typography>

              <Divider sx={{ my: 1 }} />

              {order.items.map((item, i) => (
                <Box
                  key={i}
                  display="flex"
                  justifyContent="space-between"
                >
                  <Typography>{item.name}</Typography>
                  <Typography>₹{item.price}</Typography>
                </Box>
              ))}

              <Divider sx={{ my: 1 }} />

              <Typography fontWeight={700} mb={1}>
                Total: ₹{order.amount || "—"}
              </Typography>

              {/* ✅ DELETE BUTTON (NO DESIGN CHANGE) */}
              <Button
                color="error"
                variant="outlined"
                size="small"
                onClick={() => deleteOrder(order._id)}
              >
                Delete Order
              </Button>
            </Paper>
          ))
        )}
      </Container>

      <Footer />
    </>
  );
}
