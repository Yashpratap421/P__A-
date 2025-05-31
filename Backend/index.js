import express from "express";
import cors from 'cors'
import userRouter from './Routes/userRouter.js'
import connectDB from './Database/Database.js'
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());

connectDB();

app.use(cors());
app.use(cors({
  origin: '*'  
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/user',userRouter)

app.listen(4000,()=>{
    console.log(`The server is working on port 4000`)
})