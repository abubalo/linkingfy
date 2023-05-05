import verifyToken from "../middleware/auth";

export interface IUser {
    fullname: string;
    email: string;
    password: string;
  }

  export interface IUrl{
    originalUrl: string;
    shortUrl: string;
    userId: string;
  }

  export interface IUserDoc extends IUser {
    _id: string;
  }

  export interface IVerifyToken {
    id: string;
  }