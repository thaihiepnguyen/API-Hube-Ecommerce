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

connectDB();
mongoose.connection.once('open', () => {
    console.log(`connected to db successfully`);
    app.listen(PORT, () => {
        console.log(`sever started on PORT ${PORT}`);
    })
})

