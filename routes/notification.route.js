import express from "express";
import notificationController from "../controllers/notification.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router()

router.get('/:template_id',authMiddleware.authenticate, notificationController.getNotification);

export default router;