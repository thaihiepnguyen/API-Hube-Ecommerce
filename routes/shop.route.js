import express from "express";
import shopController from "../controllers/shop.controller.js";

const router = express.Router()

router.get('/:shopId', shopController.getShopById);

export default router;