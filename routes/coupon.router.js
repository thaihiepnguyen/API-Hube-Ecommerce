import express from "express";
import couponModel from "../models/coupon.model.js";
import couponController from "../controllers/coupon.controller.js";

const router = express.Router()

router.get('/', couponController.getAllCoupons);

export default router;