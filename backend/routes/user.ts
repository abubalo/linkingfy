import express, { Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

// Register a new user
router.post("/register", (req: Request, res: Response) => {
  // Your implementation here
});

// Log in a user
router.get("/login", (req: Request, res: Response) => {
  // Your implementation here
});

// Edit a user's details
router.put("/edit", (req: Request, res: Response) => {
  // Your implementation here
});

// Delete a user's account
router.delete("/delete", (req: Request, res: Response) => {
  // Your implementation here
});

const userRouter = router;

export default userRouter;
