import express, { Request, Response } from "express";
import Jwt, { JwtPayload } from "jsonwebtoken";
const router = express.Router();

// Create url
router.post("/url", (req: Request, res: Response) => {});

// Get all url
router.get("/urls", (req: Request, res: Response) => {});

// Get specific url
router.get("/url:id", (req: Request, res: Response) => {});

// Update Url
router.put("/url:id", (req: Request, res: Response) => {});

// Delete Url
router.delete("/url:id", (req: Request, res: Response) => {});

const urlRouter = router;

export default urlRouter;
