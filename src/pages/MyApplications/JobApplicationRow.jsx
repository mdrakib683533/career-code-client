import React from "react";
import { FaBriefcase, FaBuilding, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const JobApplicationRow = ({ application, index }) => {
  const { company, title, company_logo, _id } = application;

  return (
    <tr className="group border-b border-base-200 transition-all duration-300 last:border-0 hover:bg-primary/[0.03]">
      {/* Number */}
      <th>
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-base-200 text-xs font-bold text-base-content/50 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>
      </th>

      {/* Job */}
      <td className="py-5">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-base-200 bg-base-100 p-2 shadow-sm transition-all duration-300 group-hover:border-primary/20 group-hover:shadow-md">
            <img
              src={company_logo}
              alt={`${company} logo`}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Title */}
          <div className="min-w-0">
            <h3 className="max-w-[280px] truncate text-sm font-bold text-base-content transition-colors duration-300 group-hover:text-primary">
              {title}
            </h3>

            <p className="mt-1 text-xs text-base-content/40">Job Application</p>
          </div>
        </div>
      </td>

      {/* Company */}
      <td>
        <div className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <FaBuilding className="text-xs" />
          </span>

          <span className="text-sm font-semibold text-base-content/70">
            {company}
          </span>
        </div>
      </td>

      {/* Application Type */}
      <td>
        <div className="inline-flex items-center gap-2 rounded-full bg-base-200/70 px-3 py-1.5">
          <FaBriefcase className="text-xs text-primary" />

          <span className="text-xs font-semibold text-base-content/60">
            Applied
          </span>
        </div>
      </td>

      {/* Action */}
      <th className="text-right">
        <Link to={`/jobs/${_id}`}>
          <button className="btn btn-sm rounded-lg border border-base-200 bg-base-100 px-4 text-xs font-semibold normal-case shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-content hover:shadow-md">
            <FaEye className="text-xs" />
            Details
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default JobApplicationRow;
