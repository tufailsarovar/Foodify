import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import foods from "../data/foods";
import FoodCard from "../components/home/FoodCard";

export default function RestaurantMenu() {
  const { id } = useParams();

  return (
    <Container sx={{ py: 5 }}>
      <Typography variant="h5" fontWeight={700} mb={3}>
        Restaurant Menu
      </Typography>

      <Grid container spacing={3}>
        {foods.map((food) => (
          <Grid item xs={12} sm={6} md={4} key={food.id}>
            <FoodCard food={food} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
