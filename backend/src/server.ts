import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { mongoConfig } from "./config/db";

import userRouter from "./routes/user";
import urlRouter from "./routes/url";
import qrCodeRouter from "./routes/qrcode";


 mongoConfig();

const port = process.env.PORT || 6000;

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

const whiteList = ["http://localhost:3000", "http://localhost:5173/"];
app.use(cors({ origin: whiteList }));

// user routes
app.use("/user", userRouter);

// Url routes
app.use("/url", urlRouter);

// Qrcode routes

app.use("/qrcode", qrCodeRouter);



app.listen(5000, () => {
  console.log(`server is running at http://localhost:${port}`);
});
