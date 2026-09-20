import React from "react";
import { FaMapMarkerAlt, FaArrowRight, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router";

const JobCard = ({ job }) => {
  const {
    title,
    location,
    requirements = [],
    salaryRange,
    description,
    company,
    company_logo,
    _id,
  } = job;

  return (
    <div className="group mx-auto flex h-[410px] w-full max-w-[350px] flex-col overflow-hidden rounded-xl border border-base-200 bg-base-100 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Top Banner */}
      <div className="relative h-16 shrink-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5">
        {/* Featured */}
        <div className="absolute right-3 top-3">
          <span className="rounded-full bg-base-100 px-2 py-1 text-[10px] font-semibold text-primary shadow-sm">
            Featured
          </span>
        </div>

        {/* Company Logo */}
        <div className="absolute -bottom-6 left-4 flex h-12 w-12 items-center justify-center rounded-lg border-4 border-base-100 bg-base-100 shadow-md">
          <img
            src={company_logo}
            className="h-8 w-8 rounded-md object-contain"
            alt={`${company} logo`}
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="flex min-h-0 flex-1 flex-col p-4 pt-8">
        {/* Company */}
        <div className="mb-2">
          <h3 className="truncate text-sm font-bold text-base-content">
            {company}
          </h3>

          <p className="mt-1 flex items-center gap-1.5 truncate text-xs text-base-content/60">
            <FaMapMarkerAlt className="shrink-0 text-primary" />
            {location}
          </p>
        </div>

        {/* Job Title */}
        <div className="mb-2">
          <h2 className="line-clamp-2 text-base font-bold leading-tight transition-colors duration-300 group-hover:text-primary">
            {title}
          </h2>

          <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-base-content/60">
            <FaBriefcase className="text-primary" />
            <span>Full-time opportunity</span>
          </div>
        </div>

        {/* Salary */}
        <div className="mb-2 rounded-lg bg-primary/5 px-3 py-2">
          <p className="text-[9px] font-medium uppercase tracking-wide text-base-content/50">
            Salary Range
          </p>

          <p className="mt-0.5 text-sm font-bold text-primary">
            {salaryRange?.min} - {salaryRange?.max}{" "}
            <span className="text-[10px] font-medium">
              {salaryRange?.currency}
            </span>
          </p>
        </div>

        {/* Description */}
        <p className="mb-2 line-clamp-2 text-[11px] leading-4 text-base-content/70">
          {description}
        </p>

        {/* Skills */}
        <div className="mb-2 flex min-h-[25px] flex-wrap gap-1">
          {requirements.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="rounded-full border border-primary/20 bg-primary/5 px-2 py-0.5 text-[10px] font-medium text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
            >
              {skill}
            </span>
          ))}

          {requirements.length > 3 && (
            <span className="rounded-full bg-base-200 px-2 py-0.5 text-[10px] font-medium text-base-content/60">
              +{requirements.length - 3}
            </span>
          )}
        </div>

        {/* Button */}
        <div className="mt-auto border-t border-base-200 pt-2">
          <Link to={`/jobs/${_id}`} className="block">
            <button className="btn btn-primary btn-sm min-h-9 h-9 w-full rounded-lg text-xs transition-all duration-300 group-hover:shadow-md">
              Show Details
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
