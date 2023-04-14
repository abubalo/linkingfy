import { Request } from "express";
import Jwt, { VerifyErrors } from "jsonwebtoken";
import { IVerifyToken } from "../interface/interface";

const jwtSecret = process.env.JWT_SECRET;

const verifyToken = (req: Request): Promise<IVerifyToken> => {
  if (!jwtSecret) {
    throw new Error("Unable to verify JWT secret");
  }

  return new Promise((resolve, reject) => {
    Jwt.verify(
      req.body.token,
      jwtSecret,
      (error: VerifyErrors | null, decodedToken?: object) => {
        if (error || !decodedToken) {
          return reject(error);
        }

        const { id } = decodedToken as IVerifyToken;
        return resolve({ id });
      }
    );
  });
};

export default verifyToken;
