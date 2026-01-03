import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  InputBase,
  IconButton,
  Button,
  Avatar,
  Drawer,
  Divider,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();
  const { totalItems } = useCart();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen(!open);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <AppBar
        position="sticky"
        elevation={1}
        sx={{ bgcolor: "#fff", color: "#000" }}
      >
        <Toolbar sx={{ gap: 2 }}>
          {/* LOGO */}
          <Box
            sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            <RestaurantMenuIcon sx={{ color: "#FC8019", mr: 1 }} />
            <Typography fontWeight={800} fontSize={20}>
              Foodify
            </Typography>
          </Box>

          {/* LOCATION (DESKTOP ONLY) */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              color: "#555",
              cursor: "pointer",
              ml: 2,
            }}
          >
            <LocationOnIcon fontSize="small" />
            <Typography sx={{ ml: 0.5 }}>
              Setup your precise location
            </Typography>
          </Box>

          {/* SEARCH (DESKTOP ONLY) */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              background: "#F2F2F2",
              px: 2,
              py: 0.5,
              borderRadius: 3,
              ml: 2,
            }}
          >
            <SearchIcon color="action" />
            <InputBase
              placeholder="Search for restaurant and food"
              sx={{ ml: 1, flex: 1 }}
            />
          </Box>

          {/* PUSH RIGHT */}
          <Box sx={{ flexGrow: 1 }} />

          {/* CART */}
          <IconButton onClick={() => navigate("/cart")}>
            <ShoppingCartIcon />
            {totalItems > 0 && (
              <Box sx={{ ml: 0.5, fontWeight: 700 }}>{totalItems}</Box>
            )}
          </IconButton>

          {/* MOBILE MENU TOGGLE (RIGHT SIDE) */}
          <IconButton
            sx={{ display: { xs: "block", md: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>

          {/* AUTH (DESKTOP ONLY) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {!user ? (
              <>
                <Button onClick={() => navigate("/login")}>Login</Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#FC8019" }}
                  onClick={() => navigate("/login?mode=signup")}
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                {/* ✅ MY ORDERS (AUTH ONLY) */}
                <Button
                  sx={{ fontWeight: 600 }}
                  onClick={() => navigate("/orders")}
                >
                  My Orders
                </Button>

                <Avatar sx={{ bgcolor: "#FC8019" }}>
                  {user.name?.[0]?.toUpperCase() || "U"}
                </Avatar>

                <Button color="error" onClick={logout}>
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* ================= MOBILE DRAWER ================= */}
      <Drawer anchor="right" open={open} onClose={toggleDrawer}>
        <Box sx={{ width: 260, p: 2 }}>
          <Typography fontWeight={800} fontSize={18} mb={2}>
            Foodify 🍔
          </Typography>

          <Divider sx={{ mb: 1 }} />

          <Button
            fullWidth
            sx={{ justifyContent: "flex-start" }}
            onClick={() => {
              navigate("/");
              toggleDrawer();
            }}
          >
            Home
          </Button>

          <Button
            fullWidth
            sx={{ justifyContent: "flex-start" }}
            onClick={() => {
              navigate("/cart");
              toggleDrawer();
            }}
          >
            Cart
          </Button>

          <Divider sx={{ my: 1 }} />

          {!user ? (
            <>
              <Button
                fullWidth
                onClick={() => {
                  navigate("/login");
                  toggleDrawer();
                }}
              >
                Login
              </Button>

              <Button
                fullWidth
                variant="contained"
                sx={{ bgcolor: "#FC8019", mt: 1 }}
                onClick={() => {
                  navigate("/login?mode=signup");
                  toggleDrawer();
                }}
              >
                Sign Up
              </Button>
            </>
          ) : (
            <>
              {/* ✅ MY ORDERS (AUTH ONLY) */}
              <Button
                fullWidth
                sx={{ justifyContent: "flex-start" }}
                onClick={() => {
                  navigate("/orders");
                  toggleDrawer();
                }}
              >
                My Orders
              </Button>

              {/* Logout */}
              <Button
                fullWidth
                color="error"
                onClick={() => {
                  logout();
                  toggleDrawer();
                }}
              >
                Logout
              </Button>
            </>
          )}
        </Box>
      </Drawer>
    </>
  );
}
