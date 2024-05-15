import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const registerUser = async (req, res) => {
  try {
    const { name, email, role, password } = req.body;

    console.log(name, email, role, password);

    if (!name || !password || !email || !role) {
      res.status(400).json("All Fields Are Required");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });
    res.status(200).json({ message: "User Created Successfully", user });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!password || !email) {
      res.send(400).json({ message: "Email and Password are Required" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      res.send(404).json("Email not Found or Incorrect");
    }

    const hashedPassword = user.password;

    const correctPassword = await bcrypt.compare(password, hashedPassword);

    if (!correctPassword) {
      res.status(401).json("Invalid Credentials");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        name: user.name,
      },
      process.env.JWT_SECRET
    );

    res
      .status(200)
      .cookie("accessToken", accessToken)
      .json({ message: "User LoggedIn Successfully.", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export { registerUser, loginUser };
