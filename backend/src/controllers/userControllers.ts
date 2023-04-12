
import {Request, Response} from "express"
import bcrypt from "bcrypt";
import User from "../models/User"

interface IUser{
    fullname: string;
    emai: string;
    phone: string;
    password: string;
}

const  SALT_ROUNDS = 10

export const register = async (req:Request<IUser>, res:Response)=>{

    const{fullname, email, phone, password} = req.body 

    const salt = bcrypt.getSaltSync(SALT_ROUNDS)
    const hashedPassword = bcrypt.hashSync(password,salt);

    try{
       const user = await User.create({
            fullname,
            email,
            phone,
            password
        })

        res.status(200).json(user);

    }catch(error){
        res.json(`Something went wrong: ${error.message}`)
    }

}



export const loginUser = async (req:Request, res:Response)=>{
    const {email, password} = req.body;

    
}

export const updateUser = async (req:Request, res:Response)=>{
    res.json("")
}
export const deleteUser = async (req:Request, res:Response)=>{
    res.json("")
}
export const analytics = async (req:Request, res:Response)=>{
    res.json("")
}


