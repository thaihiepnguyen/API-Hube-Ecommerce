import jwt from "jsonwebtoken";
export default {
  authenticate: (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(400).json({message: 'Bad request'});

    try {
      const tokenEncrypt = jwt.verify(token, process.env.ACCESS_TOKEN);
      req.userId = tokenEncrypt._id
      next();
    } catch (error) {
      return res.status(400).json({message: 'Bad request'});
    }
  }
}