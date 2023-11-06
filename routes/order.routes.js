import { Router } from "express";
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/order.controllers.js";

const router = Router();

router.post("/api/orders", createOrder);
router.get("/api/orders", getOrders);
router.get("/api/orders/:id", getOrder);
router.put("/api/orders/:id", updateOrder);
router.delete("/api/orders/:id", deleteOrder);

export default router;
