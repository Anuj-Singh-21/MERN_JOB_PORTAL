import { Link } from "react-router-dom";
import Card from "./Card";
const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <Card>
          <h2 className="text-2xl font-bold">For Developers</h2>
          <p className="mt-2 mb-4">
            {" "}
            Browse our React Jobs and Start your Career Today.
          </p>
          <Link
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            to="/jobs"
          >
            Browse Jobs
          </Link>
        </Card>
        <Card bg="bg-indigo-200">
          <h2 className="text-2xl font-bold">For Employers</h2>
          <p className="mt-2 mb-4">
            List Your jobs to find the perfect Defeloper for the Role
          </p>
          <Link
            className="inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600"
            to="/add-job"
          >
            Add Jobs
          </Link>
        </Card>
      </div>
    </section>
  );
};

export default HomeCards;
