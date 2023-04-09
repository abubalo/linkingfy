import express, {Request, Response} from "express"
import Jwt, {JwtPayload} from "jsonwebtoken"
import cors from "cors";
import bodyParser from "body-parser";

const port = process.env.PORT ||  6000
const mongoUrl = process.env.MONGODB_URL
const jwtSecret = process.env.JWT_SECRET

const app = express();
app.use(express())
app.use(cors)

app.post("/user", (req:Request, res: Response)=>{

})
app.get("/user", (req:Request, res: Response)=>{

})

app.post("/short", (req:Request, res: Response)=>{

})

app.get("/:shortName", (req:Request, res: Response)=>{
    
})


app.put("/short/:shortName", (req:Request, res: Response)=>{

})

app.delete("/short/:shortName", (req:Request, res: Response)=>{

})

app.post("/qrcode", (req:Request, res: Response)=>{

})



app.get("/analytics", (req:Request, res: Response)=>{

})


app.listen(5000, ()=>{
    console.log(`server is running at http://localhost:${port}`);
})
