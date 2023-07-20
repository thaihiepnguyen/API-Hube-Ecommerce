import express from "express";
import authMiddleware from "../middlewares/auth.middleware.js";
import userService from "../services/user.service.js";
const router = express.Router()
router.get('/', authMiddleware.authenticate, async (req, res) => {
  const userId = req.userId;

  const userEncrypt = await userService.findUserById(userId);
  return res.send({
    userId,
    email: userEncrypt.email,
    fullname: userEncrypt.fullname,
  });
})
export default router;