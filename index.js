import express from 'express'
import connectDB from './configs/db.js';
import 'dotenv/config'
import mongoose from "mongoose";
import userController from "./controllers/user.controller.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authMiddleware from "./middlewares/auth.middleware.js";
import jwt from "jsonwebtoken";
import userRoute from "./routes/user.route.js";

const PORT = process.env.PORT || 3002

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.get('/', authMiddleware.authenticate, cors(), (req, res) => {
    const token = req.cookies.access_token;
    const tokenEncrypt = jwt.verify(token, process.env.ACCESS_TOKEN);
    res.send({
        tokenEncrypt
    });
})
app.post('/sign-up', userController.register);
app.post('/login', userController.login);
app.use('/user', userRoute);

connectDB();
mongoose.connection.once('open', () => {
    console.log(`connected to db successfully`);
    app.listen(PORT, () => {
        console.log(`sever started on PORT ${PORT}`);
    })
})

