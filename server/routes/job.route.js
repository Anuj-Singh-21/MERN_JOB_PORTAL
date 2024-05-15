import express from "express";
import {
  createJob,
  deleteJob,
  editJob,
  getAllJobs,
  getJob,
} from "../controllers/job.controller.js";
import { verifyJWT } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", createJob);
router.put("/:id", editJob);
router.delete("/:id", deleteJob);
router.get("/:id", getJob);
router.get("/", getAllJobs);

export default router;
