import { Router } from "express";
import {getUserLogeado,userLogeado} from "../controllers/logueado.controllers.js"

const router = Router();
router.post("/api/logeado",userLogeado)
router.get("/api/logeado", getUserLogeado);

export default router;