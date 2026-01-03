// src/components/home/FoodGrid.jsx  (REPLACE FULL FILE)
import React from "react";
import { Container, Grid } from "@mui/material";
import foods from "../../data/foods";
import FoodCard from "./FoodCard";

export default function FoodGrid({ category }) {
  const filteredFoods =
    category === "All"
      ? foods
      : foods.filter((food) => food.category === category);

  return (
    <Container sx={{ pb: 6 }}>
      <Grid container spacing={3}>
        {filteredFoods.map((food) => (
          <Grid item xs={12} sm={6} md={4} key={food.id}>
            <FoodCard food={food} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
