import { Router } from "express";
import {
  getProduct,
  getCustomProducts,
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductUserCart
} from "../controllers/product.controllers.js";

const router = Router();

router.post("/api/products", createProduct);
router.get("/api/products", getProducts);
router.get("/api/products/shopCart/:id", getProductUserCart)
router.get("/api/products/custom", getCustomProducts);
router.get("/api/products/:id", getProduct);
router.put("/api/products/:id", updateProduct);
router.delete("/api/products/:id", deleteProduct);

export default router;
