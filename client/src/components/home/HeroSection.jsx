// src/components/home/HeroSection.jsx
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import images from "../../assets/images";
import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "70vh",
        backgroundImage: `url(${images.hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Container>
        <Typography variant="h3" fontWeight={800}>
          Order Fresh & Delicious Food
        </Typography>
        <Typography sx={{ mt: 2, maxWidth: 520 }}>
          Fast delivery • Best quality • Easy payment
        </Typography>
        <Button variant="contained" sx={{ mt: 3 }}  onClick={() => navigate("/menu")}>
          Explore Restaurents
        </Button>
      </Container>
    </Box>
  );
}
