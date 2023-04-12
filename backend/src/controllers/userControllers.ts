import { Request, Response } from "express";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";
import User from "../models/User";
import verifyToken from "../utils/auth";
import { IUser, IUserDoc, IVerifyToken } from "../interface/interface";

const SALT_ROUNDS = 10;

export const register = async (req: Request<IUser>, res: Response) => {
  const { fullname, email, phone, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }

    const salt = bcrypt.getSaltSync(SALT_ROUNDS);
    const hashedPassword = bcrypt.hashSync(password, salt);

    const newUser = await User.create({
      fullname,
      email,
      phone,
      password: hashedPassword,
    });

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};



export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const userDoc: IUserDoc = await User.findOne({ email });

    if (!userDoc) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, userDoc.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      throw new Error("JWT secret is not defined");
    }

    const token = Jwt.sign(
      { id: userDoc._id, fullname: userDoc.fullname, email: userDoc.email },
      jwtSecret
    );

    res
      .cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
      })
      .json(userDoc);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const decodedToken: IVerifyToken = await verifyToken(req);
    const userId = decodedToken;

    const { fullname, email, phone } = req.body;
    const user = await User.findByIdAndUpdate(
      userId,
      { fullname, email, phone },
      { new: true }
    );

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const deleteUser = async (req: Request<{token: string}>, res: Response) => {
    const decodedToken: IVerifyToken = await verifyToken(req);
    const userId = decodedToken;
  
    try {
      const user = await User.findByIdAndDelete(userId);
  
      if (!user) {
        return res.status(404).json("User not found");
      }
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  };
  
export const analytics = async (req: Request, res: Response) => {
  res.json("");
};
