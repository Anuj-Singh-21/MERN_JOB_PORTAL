import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex justify-center items-center h-screen m-10">
      <div className="flex flex-col">
        <h1 className=" flex justify-center text-9xl text-indigo-200 m-6">
          Oops!
        </h1>
        <h1 className="text-center text-3xl text-indigo-800 mb-2">
          404 Not Found.
        </h1>
        <p className="text-center p-2 text-indigo-700 text-xs">
          This Page Does Not Exist
        </p>
        <Link
          to="/"
          className="bg-indigo-600 mx-6 my-2 px-5 py-2 rounded-2xl text-white text-center"
        >
          Go Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
