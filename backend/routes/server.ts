import express, {Request, Response} from "express"
import cors from "cors";
import bodyParser from "body-parser";
import { mongoConfig } from "../config/mongoConfig";

import userRouter from "./user"
import urlRouter from "./url";

mongoConfig()

const port = process.env.PORT ||  6000
const mongoUrl = process.env.MONGODB_URL
const jwtSecret = process.env.JWT_SECRET

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended: false}))







// user routes
app.use("/user", userRouter)


// Url routes
app.use('/url', urlRouter)

// Qrcode routes

app.use("/qrcode", )


app.get("/analytics", (req:Request, res:Response)=>{

})



app.listen(5000, ()=>{
    console.log(`server is running at http://localhost:${port}`);
})

