import { Request } from "express";
import Jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET;

 const verifyToken = (req: Request) => {
  if (!jwtSecret) {
    throw new Error("Unable to verify JWT secret");
  }
  return new Promise((resolve, reject) => {
    Jwt.verify(req.body.token, jwtSecret, {}, (error, decodedToken) => {
      if (error) {
       return reject(error);
      }

      return resolve(decodedToken);
    });
  });
};

export default verifyToken