import { Router } from "express";

import {
  createImage,
  getImagesByProductId,
  getImage,
  deleteImage,
  insertImage,
} from "./../controllers/image.controllers.js";

import { fileUpload } from "./../middleware/image.middleware.js";

const router = Router();

router.post("/api/images", fileUpload, createImage);
router.get("/api/images", getImagesByProductId);
router.get("/api/images/:id", getImage);
router.delete("/api/images/:id", deleteImage);

export default router;
