// src/components/layout/PageWrapper.jsx
import React from "react";
import { Box } from "@mui/material";

export default function PageWrapper({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {children}
    </Box>
  );
}
