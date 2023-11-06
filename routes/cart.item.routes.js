import { Router } from "express";
import {
  getCartItem,
  getCartItems,
  createCartItem,
  updateCartItem,
  deleteCartItem,
  deleteAllCartProduct
} from "../controllers/cart.item.controllers.js";

const router = Router();

router.post("/api/cart-items", createCartItem);
router.get("/api/cart-items", getCartItems);
router.get("/api/cart-items/:id", getCartItem);
router.put("/api/cart-items/:id", updateCartItem);
router.delete("/api/cart-items/:id", deleteCartItem);
router.delete("/api/cart-item/delete",deleteAllCartProduct);

export default router;
