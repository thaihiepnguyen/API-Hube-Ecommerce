import express from "express";
import productController from "../controllers/product.controller.js";

const router = express.Router()

router.get('/', productController.getAllProducts);
router.get('/byProId/:proId', productController.getProductbyId);
router.get('/')

export default router;