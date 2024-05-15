import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
dotenv.config();

const app = express();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());

app.listen(PORT || 8000, () => {
  console.log("Server Running on PORT ", PORT);
});

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((error) => {
    console.log("Error occured while connecting to database", error);
  });

// Routes
import AuthRouter from "./routes/auth.route.js";
import JobROuter from "./routes/job.route.js";

app.use("/api/auth", AuthRouter);
app.use("/api/jobs", JobROuter);
