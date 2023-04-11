import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


export async function mongoConfig(){
    const mongoUrl = process.env.MONGODB_URL;

    if(!mongoUrl){
        throw new Error("MongoDB url is not defined")
    }
    mongoose.connect(mongoUrl);
      
      const db = mongoose.connection;
      
      db.on('error', console.error.bind(console, 'MongoDB connection error:'));
      db.once('open', () => {
        console.log('MongoDB connected!');
      });

    console.log("Hello from mongo db");
}
