import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken;

    if (!token) {
      res.status(401).json({ message: "Cannot find JWT. Unauthorized Access" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    console.log(decodedToken);

    const user = await User.findById(decodedToken?.id).select("-password");
    console.log(user);
    if (!user) {
      res.status(404).json({ message: "User not Found" });
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
