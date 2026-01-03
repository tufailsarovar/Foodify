import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createOrder,
  getUserOrders,
  deleteOrder,
} from "../controllers/orderController.js";

const router = express.Router();

// 🔒 LOGIN REQUIRED ROUTES
router.post("/", authMiddleware, createOrder);
router.get("/", authMiddleware, getUserOrders);
router.delete("/:id", authMiddleware, deleteOrder);

export default router;
