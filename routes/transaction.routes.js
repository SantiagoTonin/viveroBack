import { Router } from "express";
import {
  createTransaction,
  getTransactions,
  getTransaction,
  updateTransaction,
  deleteTransaction,
} from "../controllers/transaction.controllers.js";

const router = Router();

router.post("/api/transactions", createTransaction);
router.get("/api/transactions", getTransactions);
router.get("/api/transactions/:id", getTransaction);
router.put("/api/transactions/:id", updateTransaction);
router.delete("/api/transactions/:id", deleteTransaction);

export default router;
