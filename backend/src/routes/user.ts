import express, { Request, Response } from "express";
import {
  register,
  loginUser,
  updateUser,
  deleteUser,
  analytics,
} from "../controllers/userControllers";
import jwt, { JwtPayload } from "jsonwebtoken";


const router = express.Router();

interface User {
  id?: number;
  fullname: string;
  email: string;
  pasword: string;
}

// Register a new user
router.post("/register", register);

// Log in a user
router.get("/login", (req: Request, res: Response) => {
  // Your here
});

// Edit a user's details
router.put("/edit", (req: Request, res: Response) => {
  // Your here
});

// Delete a user's account
router.delete("/delete", (req: Request, res: Response) => {
  // Your here
});

router.get("/analytics", (req: Request, res: Response) => {
  // Your here
});

const userRouter = router;

export default userRouter;
