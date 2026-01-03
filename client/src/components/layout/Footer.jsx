import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

export default function Footer() {
  const navigate = useNavigate();

  const footerLink = (label, path) => (
    <Typography
      sx={{
        mt: 1,
        cursor: "pointer",
        "&:hover": { color: "#FC8019" },
      }}
      onClick={() => navigate(path)}
    >
      {label}
    </Typography>
  );

  return (
    <Box sx={{ background: "#111", color: "#fff", mt: 6 }}>
      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* BRAND */}
          <Grid item xs={12} md={4}>
            <Box
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              <RestaurantMenuIcon sx={{ color: "#FC8019", mr: 1 }} />
              <Typography fontWeight={800} fontSize={20}>
                Foodify
              </Typography>
            </Box>
            <Typography sx={{ mt: 1, opacity: 0.7 }}>
              Order delicious food online with fast delivery and secure
              checkout.
            </Typography>
          </Grid>

          {/* QUICK LINKS */}
          <Grid item xs={6} md={4}>
            <Typography fontWeight={600}>Quick Links</Typography>
            {footerLink("Home", "/")}
            {footerLink("Menu", "/menu")}
            {footerLink("Cart", "/cart")}
            {footerLink("Login", "/login")}
          </Grid>

          {/* CATEGORIES */}
          <Grid item xs={6} md={4}>
            <Typography fontWeight={600}>Categories</Typography>
            {footerLink("Pizza", "/menu")}
            {footerLink("Burger", "/menu")}
            {footerLink("Indian", "/menu")}
            {footerLink("Chinese", "/menu")}
          </Grid>
        </Grid>

        <Typography
          sx={{
            mt: 4,
            textAlign: "center",
            opacity: 0.6,
            fontSize: 14,
          }}
        >
          © {new Date().getFullYear()} Foodify. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
