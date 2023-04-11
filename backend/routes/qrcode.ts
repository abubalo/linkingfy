import express, { Request, Response } from "express";
import Jwt, { JwtPayload } from "jsonwebtoken";
const router = express.Router();

// Generate qrcode
router.post("/qrcode", (req: Request, res: Response) => {});

// Get all qrcodes
router.get("/qrcode", (req: Request, res: Response) => {});

// Update qrcode
router.put("/qrcode", (req: Request, res: Response) => {});

const qrCodeRouter = router;

export default qrCodeRouter;
