import { useEffect, useState } from "react";
import jobs from "../jobs.json";
import JobsPage from "./../pages/JobsPage";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import axios from "axios";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiUrl = isHome ? "/api/jobs" : "/api/jobs";
    try {
      const fetchJobs = async () => {
        const res = await axios.get(apiUrl);
        console.log(res);
        const data = await res.data.jobs;

        setJobs(data);
      };
      fetchJobs();
    } catch (error) {
      console.log("Error Occured While Fetching Data: ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {!isHome ? "Browse Jobs" : "Recent Jobs"}
        </h2>
      </div>

      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobListing key={job._id} job={job} />
          ))}
        </div>
      )}
    </section>
  );
};

export default JobListings;
