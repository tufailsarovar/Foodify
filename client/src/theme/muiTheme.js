// src/theme/muiTheme.js
import { createTheme } from "@mui/material/styles";
import colors from "../assets/colors";
import fonts from "../assets/fonts";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      dark: colors.primaryDark,
    },
    secondary: {
      main: colors.secondary,
    },
    background: {
      default: colors.background,
      paper: colors.surface,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    success: {
      main: colors.success,
    },
    error: {
      main: colors.error,
    },
    divider: colors.border,
  },

  typography: {
    fontFamily: fonts.family.primary,
    h1: {
      fontSize: fonts.size.h1,
      fontWeight: fonts.weight.bold,
    },
    h2: {
      fontSize: fonts.size.h2,
      fontWeight: fonts.weight.bold,
    },
    h3: {
      fontSize: fonts.size.h3,
      fontWeight: fonts.weight.bold,
    },
    body1: {
      fontSize: fonts.size.body,
      fontWeight: fonts.weight.regular,
    },
    body2: {
      fontSize: fonts.size.small,
      fontWeight: fonts.weight.regular,
    },
    button: {
      textTransform: "none",
      fontWeight: fonts.weight.medium,
    },
  },

  shape: {
    borderRadius: 12,
  },

  spacing: 8,

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "10px 22px",
          boxShadow: "none",
        },
        containedPrimary: {
          boxShadow: "0 8px 20px rgba(255, 87, 34, 0.25)",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

export default muiTheme;
