// src/components/home/CategoryTabs.jsx  (REPLACE FULL FILE)
import React from "react";
import { Box, Chip, Container } from "@mui/material";
import categories from "../../data/categories";

export default function CategoryTabs({ category, setCategory }) {
  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
        {["All", ...categories].map((cat) => (
          <Chip
            key={cat}
            label={cat}
            clickable
            color={category === cat ? "primary" : "default"}
            onClick={() => setCategory(cat)}
          />
        ))}
      </Box>
    </Container>
  );
}
