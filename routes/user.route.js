import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import userService from "../services/user.service.js";
import userController from "../controllers/user.controller.js";
const router = express.Router()
router.get('/', authMiddleware.authenticate, async (req, res) => {
  const userId = req.userId;

  const userEncrypt = await userService.findUserById(userId);
  return res.send({
    userId,
    email: userEncrypt.email,
    fullname: userEncrypt.fullname,
  });
});

router.get('/all', userController.getAllUsers);
router.get('/:id', userController.getUserById);
export default router;