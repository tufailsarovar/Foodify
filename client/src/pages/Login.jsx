import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const { login } = useAuth();

  const [isSignup, setIsSignup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    identifier: "",
    password: "",
  });

  useEffect(() => {
    if (params.get("mode") === "signup") {
      setIsSignup(true);
    }
  }, [params]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const url = isSignup
        ? `${import.meta.env.VITE_API_URL}/auth/register`
        : `${import.meta.env.VITE_API_URL}/auth/login`;

      const payload = isSignup
        ? {
            name: form.name,
            email: form.identifier,
            password: form.password,
          }
        : {
            email: form.identifier,
            password: form.password,
          };

      const res = await axios.post(url, payload);

      // save JWT token
      localStorage.setItem("token", res.data.token);

      // update auth context
      login(res.data.user);

      navigate("/");
    } catch (err) {
      alert("Authentication failed");
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
        <Typography variant="h5" fontWeight={700} mb={1}>
          {isSignup ? "Create Account" : "Login"}
        </Typography>

        <Typography color="text.secondary" mb={3}>
          {isSignup
            ? "Sign up to start ordering"
            : "Login to continue ordering"}
        </Typography>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              required
              sx={{ mb: 2 }}
              value={form.name}
              onChange={handleChange}
            />
          )}

          <TextField
            fullWidth
            label="Mobile number or Email"
            name="identifier"
            required
            sx={{ mb: 2 }}
            value={form.identifier}
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
            {isSignup ? "Sign Up" : "Login"}
          </Button>
        </form>

        <Typography
          align="center"
          sx={{ mt: 3, cursor: "pointer", color: "#FC8019" }}
          onClick={() => setIsSignup(!isSignup)}
        >
          {isSignup
            ? "Already have an account? Login"
            : "New to Foodify? Create an account"}
        </Typography>
      </Box>
    </Container>
  );
}
