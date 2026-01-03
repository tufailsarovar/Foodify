import Order from "../models/Order.js";

/* ===============================
   CREATE ORDER (LOGIN REQUIRED)
================================ */
export const createOrder = async (req, res) => {
  // 🔴 HARD BLOCK — THIS IS THE KEY
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "LOGIN_REQUIRED" });
  }

  try {
    const { items, amount, address, paymentMethod } = req.body;

    const order = await Order.create({
      userId: req.user.id,
      items,
      amount,
      address,
      paymentMethod,
      paymentStatus: "PENDING",
    });

    return res.status(201).json(order);
  } catch (error) {
    console.error("CREATE ORDER ERROR:", error);
    return res.status(500).json({ message: "Order creation failed" });
  }
};

/* ===============================
   GET LOGGED-IN USER ORDERS
================================ */
export const getUserOrders = async (req, res) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "LOGIN_REQUIRED" });
  }

  try {
    const orders = await Order.find({ userId: req.user.id }).sort({
      createdAt: -1,
    });

    // ✅ ORIGINAL FORMAT (ARRAY)
    return res.status(200).json(orders);
  } catch (error) {
    return res.status(500).json({ message: "Failed to fetch orders" });
  }
};

/* ===============================
   DELETE ORDER (OWNER ONLY)
================================ */
export const deleteOrder = async (req, res) => {
  if (!req.user || !req.user.id) {
    return res.status(401).json({ message: "LOGIN_REQUIRED" });
  }

  try {
    const order = await Order.findById(req.params.id);

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    // 🔒 ONLY OWNER CAN DELETE
    if (order.userId.toString() !== req.user.id) {
      return res.status(403).json({ message: "NOT_AUTHORIZED" });
    }

    await order.deleteOne();
    return res.status(200).json({ message: "Order deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Delete failed" });
  }
};
