import { Router } from "express";
import { login } from "../controllers/login.controllers.js";

const router = Router();
router.post("/api/login", login);

export default router;
