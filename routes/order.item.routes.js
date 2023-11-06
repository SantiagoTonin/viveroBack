import { Router } from "express";
import {
  getOrderItem,
  getOrderItems,
  createOrderItem,
  updateOrderItem,
  deleteOrderItem,
} from "../controllers/order.item.controllers.js";

const router = Router();

router.post("/api/order-items", createOrderItem);
router.get("/api/order-items", getOrderItems);
router.get("/api/order-items/:id", getOrderItem);
router.put("/api/order-items/:id", updateOrderItem);
router.delete("/api/order-items/:id", deleteOrderItem);

export default router;
