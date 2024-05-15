import { Job } from "./../models/job.model.js";

export const createJob = async (req, res) => {
  try {
    const { jobType, title, description, location, salary, company } = req.body;
    if (
      !jobType ||
      !title ||
      !description ||
      !salary ||
      !company ||
      !location
    ) {
      res.status(400).json({ message: "All Fields Are Required" });
    }

    const job = await Job.create({
      jobType,
      title,
      description,
      location,
      salary,
      company,
    });
    res.status(200).json({ message: "Job Post created Successfylly", job });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const editJob = async (req, res) => {
  try {
    const { jobType, title, description, location, salary, company } = req.body;

    const job = await Job.findById(req.params.id);

    if (jobType) {
      job.jobType = jobType;
    }
    if (title) {
      job.title = title;
    }
    if (description) {
      job.description = description;
    }
    if (location) {
      job.location = location;
    }
    if (salary) {
      job.salary = salary;
    }
    if (company.name) {
      job.company.name = company.name;
    }
    if (company.description) {
      job.company.description = company.description;
    }
    if (company.email) {
      job.company.email = company.email;
    }
    if (company.phone) {
      job.company.phone = company.phone;
    }

    job.save();

    res.status(200).json({ message: "Job Post Updated Successfylly", job });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Job Post Deleted Successfylly" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

export const getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.status(200).json({ job });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json({ message: "All Jobs Fetched SuccessFully", jobs });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
