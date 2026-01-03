// src/components/common/SectionTitle.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function SectionTitle({ title, subtitle, align = "left" }) {
  return (
    <Box sx={{ mb: 4, textAlign: align }}>
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ lineHeight: 1.2 }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          color="text.secondary"
          sx={{ mt: 1, maxWidth: 640, mx: align === "center" ? "auto" : 0 }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
