import verifyToken from "../utils/auth";

export interface IUser {
    fullname: string;
    email: string;
    password: string;
  }


  export interface IUserDoc extends IUser {
    _id: string;
  }

  export interface IVerifyToken {
    id: string;
  }