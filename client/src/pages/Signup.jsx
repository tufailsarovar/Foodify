import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        {
          name: form.name,
          email: form.email,
          password: form.password,
        }
      );

      // save JWT token
      localStorage.setItem("token", res.data.token);

      // update auth context
      login(res.data.user);

      navigate("/");
    } catch (err) {
      alert("Signup failed");
      console.error(err);
    }
  };

  return (
    <Container sx={{ py: 6 }}>
      <Box
        sx={{
          maxWidth: 420,
          mx: "auto",
          p: 4,
          borderRadius: 3,
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <Typography variant="h5" fontWeight={700} mb={2}>
          Create Account
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            required
            sx={{ mb: 2 }}
            value={form.name}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            required
            sx={{ mb: 2 }}
            value={form.email}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            type="password"
            label="Password"
            name="password"
            required
            sx={{ mb: 3 }}
            value={form.password}
            onChange={handleChange}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ py: 1.2, borderRadius: 3, background: "#FC8019" }}
            type="submit"
          >
            Sign Up
          </Button>
        </form>

        <Typography
          align="center"
          sx={{ mt: 3, cursor: "pointer", color: "#FC8019" }}
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </Typography>
      </Box>
    </Container>
  );
}
