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

function App() {
  const addJob = async (newJob) => {
    const res = await fetch("/api/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return;
  };

  const updateJob = async (job) => {
    const res = await fetch(`/api/jobs/${job.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),
    });
    return;
  };

  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`, {
      method: "DELETE",
    });
    return;
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
