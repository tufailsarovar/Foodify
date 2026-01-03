// src/pages/Menu.jsx
import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const restaurants = [
  {
    id: 1,
    name: "Burger Blaze",
    image: "/images/r1.jpeg",
    cuisines: ["Pizza", "Burger", "Chinese"],
    rating: 4.5,
    time: "25–30 mins",
  },
  {
    id: 2,
    name: "Crunchy Bites",
    image: "/images/r2.jpeg",
    cuisines: ["Indian", "Biryani"],
    rating: 4.3,
    time: "30–35 mins",
  },
  {
    id: 3,
    name: "Pizza Pulse",
    image: "/images/r3.jpeg",
    cuisines: ["Burger", "Fast Food"],
    rating: 4.4,
    time: "20–25 mins",
  },
  {
    id: 4,
    name: "Wrap & Roll",
    image: "/images/r4.jpeg",
    cuisines: ["Rolls","Momos", "Sandwiches"],
    rating: 4.4,
    time: "20–25 mins",
  },
  {
    id: 5,
    name: "Street Snack Hub",
    image: "/images/r5.jpeg",
    cuisines: ["Burger", "Fries & Snacks"],
    rating: 4.4,
    time: "20–25 mins",
  }
];

export default function Menu() {
  const navigate = useNavigate();

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Restaurants near you
      </Typography>

      <Grid container spacing={3}>
        {restaurants.map((res) => (
          <Grid item xs={12} sm={6} md={4} key={res.id}>
            <Card
              sx={{
                cursor: "pointer",
                borderRadius: 3,
                transition: "transform .2s",
                "&:hover": { transform: "translateY(-6px)" },
              }}
              onClick={() => navigate(`/menu/${res.id}`)}
            >
              <CardMedia
                component="img"
                height="180"
                image={res.image}
                alt={res.name}
              />
              <CardContent>
                <Typography fontWeight={700} gutterBottom>
                  {res.name}
                </Typography>

                <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap", mb: 1 }}>
                  {res.cuisines.map((c) => (
                    <Chip key={c} label={c} size="small" />
                  ))}
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    color: "text.secondary",
                    fontSize: 14,
                  }}
                >
                  <Typography>⭐ {res.rating}</Typography>
                  <Typography>{res.time}</Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
