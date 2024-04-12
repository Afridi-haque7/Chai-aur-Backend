import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();

app.use(cors());
app.use(express.json({limit:"20kb"}));
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));
app.use(cookieParser());


//import routes
import userRouter from './routes/user.routes.js'


//routes declaration
app.use("/api/users", userRouter);

export {app};