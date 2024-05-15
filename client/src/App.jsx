import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import About from "./pages/About";
import JobsPage from "./pages/JobsPage";
import AddJobPage from "./pages/AddJobPage";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import EditJobPage from "./pages/EditJobPage";
import axios from "axios";

function App() {
  const addJob = async (newJob) => {
    console.log(newJob);
    const res = await axios.post("/api/jobs/", newJob);
  };

  const updateJob = async (job) => {
    console.log("function", job);
    const res = await axios.put(`/api/jobs/${job.id}`, job);
  };

  const deleteJob = async (id) => {
    const res = await axios.delete(`/api/jobs/${id}`);
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/add-job"
            element={<AddJobPage addJobSubmit={addJob} />}
          />
          <Route path="/jobs" element={<JobsPage />} />
          <Route
            path="/jobs/:id"
            element={<JobPage deleteJob={deleteJob} />}
            loader={jobLoader}
          />
          <Route
            path="/edit-job/:id"
            element={<EditJobPage updateJobSubmit={updateJob} />}
            loader={jobLoader}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
