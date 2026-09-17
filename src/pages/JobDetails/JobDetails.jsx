import React from "react";
import { Link, useLoaderData } from "react-router";

const JobDetails = () => {
  const { _id, title, company } = useLoaderData();

  return (
    <div>
      <h1 className="text-3xl">Job details of {title}</h1>
      <h1 className="text-2xl font-bold">Company: {company}</h1>
      <Link to={`/jobApply/${_id}`}>
        <button
          className="
    btn btn-primary
    hover:scale-105
    active:scale-95
    transition-all
    duration-300
  "
        >
          Apply Now
        </button>
      </Link>
    </div>
  );
};

export default JobDetails;
