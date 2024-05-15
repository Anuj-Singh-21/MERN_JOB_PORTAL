import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    jobType: {
      type: String,
      required: true,
      enum: ["Full-Time", "Part-Time", "Remote", "Internship"],
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    company: {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

export const Job = new mongoose.model("Job", jobSchema);
