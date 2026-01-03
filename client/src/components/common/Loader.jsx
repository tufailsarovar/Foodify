// src/components/common/Loader.jsx
import React from "react";
import { Box, CircularProgress } from "@mui/material";

export default function Loader({ size = 40 }) {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size={size} />
    </Box>
  );
}
