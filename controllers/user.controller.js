import bcrypt from 'bcrypt';
import 'dotenv/config';
import userService from "../services/user.service.js";
import jwt from "jsonwebtoken";
export default {
  register: async (req, res) => {
    const { fullname, email, password } = req.body;
    const salt = +process.env.SALT;

    if (!fullname || !email || !password) {
      return res.status(400).json({message: 'Invalid User'});
    }

    const userExists = await userService.findUserByEmail(email);
    if (userExists) {
      return res.status(400).json({message: 'User Exists'});
    }

    const passwordEncrypt = await bcrypt.hash(password, salt);

    const userEncrypt = {
      ...req.body,
      password: passwordEncrypt
    };

    await userService.save(userEncrypt);

    res.json({message: "register successfully"});
  },
  login: async  (req, res) => {
    const { email, password } = req.body;
    const userExists = await userService.findUserByEmail(email);

    if (!userExists) return res.status(400).json({message: `Invalid email or password`})

    const match = await bcrypt.compare(password, userExists.password);
    if (!match) return res.status(400).json({message: `Invalid email or password`})

    userExists.password = null;
    const accessToken = jwt.sign(JSON.stringify(userExists), process.env.ACCESS_TOKEN);
    return res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        // secure: process.env.NODE_ENV === "production",
      })
      .status(200)
      .json({ token: accessToken });
  }
}