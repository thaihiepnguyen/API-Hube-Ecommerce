import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router()

router.get('/', productController.getAllProducts);
router.get('/orderByPrice', productController.getProductOrderByPrice);
router.get('/history', productController.getProductHistory)
router.get('/byProId/:proId', productController.getProductbyId);
router.get('/orderBySale', productController.getProductSale);

export default router;