// src/components/common/Button.jsx
import React from "react";
import { Button as MUIButton } from "@mui/material";

export default function Button({
  children,
  variant = "contained",
  color = "primary",
  fullWidth = false,
  onClick,
  sx = {},
  ...props
}) {
  return (
    <MUIButton
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      onClick={onClick}
      sx={{
        borderRadius: 2,
        textTransform: "none",
        fontWeight: 600,
        px: 3,
        py: 1.2,
        ...sx,
      }}
      {...props}
    >
      {children}
    </MUIButton>
  );
}
