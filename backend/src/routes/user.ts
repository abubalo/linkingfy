import express, { Request, Response } from "express";
import {
  register,
  loginUser,
  updateUser,
  deleteUser,
} from "../controllers/userControllers";


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
router.post("/login", loginUser);

// Edit a user's details
router.put("/update", updateUser);

// Delete a user's account
router.delete("/delete", deleteUser);


const userRouter = router;

export default userRouter;
