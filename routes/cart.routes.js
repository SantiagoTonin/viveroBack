import { Router } from "express";
import {
  getCarts,
  getCart,
  createCart,
  updateCart,
  deleteCart,
} from "../controllers/cart.controllers.js";

const router = Router();

router.post("/api/carts", createCart);
router.get("/api/carts", getCarts);
router.get("/api/carts/:id", getCart);
router.put("/api/carts/:id", updateCart);
router.delete("/api/carts/:id", deleteCart);

export default router;
