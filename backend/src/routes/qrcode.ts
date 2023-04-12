import express from "express";

import {generate, allQrcodes, specificQrcode, updateQrcode, deleteQrcode } from "../controllers/qrcodeControllers";

const router = express.Router();

// Generate qrcode
router.post("/generate", generate);

// Get all qrcodes
router.get("/qrcodes", allQrcodes);

// Get specific  qrcode
router.get("/qrcode", specificQrcode);

// Update qrcode
router.put("/qrcode", updateQrcode);

// Delete qrcode
router.delete("/qrcode", deleteQrcode);

const qrCodeRouter = router;

export default qrCodeRouter;
