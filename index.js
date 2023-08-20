import express from 'express'
import connectDB from './configs/db.js';
import 'dotenv/config'
import mongoose from 'mongoose';
import userController from './controllers/user.controller.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRoute from './routes/user.route.js';
import morgan from 'morgan';
import categoryRoute from './routes/category.route.js';
import couponRouter from "./routes/coupon.router.js";
import notificationRoute from "./routes/notification.route.js";
import productRoute from "./routes/product.route.js";
import shopRoute from "./routes/shop.route.js";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3002

const app = express();

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(morgan('combined'));

app.get('/', (req, res) => {
    res.send({message: 'success'});
})
app.post('/sign-up', userController.register);
app.post('/login', userController.login);
app.use('/user', userRoute);
app.use('/categories', categoryRoute);
app.use('/coupons', couponRouter);
app.use('/noti', notificationRoute);
app.use('/products', productRoute);
app.use('/shop', shopRoute);
app.use('/static', express.static(__dirname + '/public'));

connectDB();
mongoose.connection.once('open', () => {
    console.log(`connected to db successfully`);
    app.listen(PORT, () => {
        console.log(`sever started on PORT ${PORT}`);
    })
})

