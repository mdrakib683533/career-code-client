import React, { use } from "react";
import { Link } from "react-router";
import {
  FaArrowRight,
  FaBriefcase,
  FaCalendarAlt,
  FaEye,
  FaUsers,
} from "react-icons/fa";

const JobLists = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  return (
    <div className="overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-sm">
      {/* Section Header */}
      <div className="flex flex-col justify-between gap-4 border-b border-base-200 p-5 sm:flex-row sm:items-center sm:p-6">
        <div>
          <div className="flex items-center gap-2">
            <FaBriefcase className="text-primary" />

            <h2 className="text-lg font-extrabold text-base-content sm:text-xl">
              Your Job Listings
            </h2>
          </div>

          <p className="mt-2 text-sm text-base-content/50">
            Manage your active job posts and review candidate applications.
          </p>
        </div>

        <div className="flex h-10 items-center gap-2 self-start rounded-full bg-primary/10 px-4 text-sm font-bold text-primary">
          <FaBriefcase className="text-xs" />
          <span>{jobs.length} Jobs</span>
        </div>
      </div>

      {/* Empty State */}
      {jobs.length === 0 ? (
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl text-primary">
            <FaBriefcase />
          </div>

          <h3 className="mt-5 text-xl font-bold text-base-content">
            No jobs posted yet
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-base-content/50">
            You haven't created any job listings. Start by posting your first
            job opportunity.
          </p>

          <Link to="/addJob" className="btn btn-primary mt-6 rounded-xl px-5">
            Post Your First Job
            <FaArrowRight className="text-xs" />
          </Link>
        </div>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="hidden overflow-x-auto md:block">
            <table className="w-full">
              <thead>
                <tr className="border-b border-base-200 bg-base-200/40 text-left">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-base-content/50">
                    #
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-base-content/50">
                    Job Title
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-base-content/50">
                    Deadline
                  </th>

                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-base-content/50">
                    Applications
                  </th>

                  <th className="px-6 py-4 text-right text-xs font-bold uppercase tracking-wider text-base-content/50">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {jobs.map((job, index) => (
                  <tr
                    key={job._id}
                    className="group border-b border-base-200 transition-all duration-300 last:border-0 hover:bg-primary/[0.03]"
                  >
                    {/* Number */}
                    <td className="px-6 py-5">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-base-200 text-xs font-bold text-base-content/50 transition-all duration-300 group-hover:bg-primary/10 group-hover:text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </td>

                    {/* Job Title */}
                    <td className="max-w-[300px] px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <FaBriefcase className="text-sm" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-bold text-base-content transition-colors duration-300 group-hover:text-primary">
                            {job.title}
                          </h3>

                          <p className="mt-1 text-xs text-base-content/40">
                            Job Posting
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Deadline */}
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-sm text-base-content/70">
                        <FaCalendarAlt className="text-xs text-primary" />
                        <span className="whitespace-nowrap">
                          {job.deadline}
                        </span>
                      </div>
                    </td>

                    {/* Application Count */}
                    <td className="px-6 py-5">
                      <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-primary">
                        <FaUsers className="text-xs" />

                        <span className="text-xs font-bold">
                          {job.application_count || 0}
                        </span>

                        <span className="text-xs font-medium">
                          Applications
                        </span>
                      </div>
                    </td>

                    {/* Action */}
                    <td className="px-6 py-5 text-right">
                      <Link
                        to={`/applications/${job._id}`}
                        className="btn btn-sm rounded-lg border border-base-200 bg-base-100 px-4 text-xs font-semibold normal-case shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-content hover:shadow-md"
                      >
                        <FaEye className="text-xs" />
                        View Applications
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="space-y-4 p-4 md:hidden">
            {jobs.map((job, index) => (
              <div
                key={job._id}
                className="rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-md"
              >
                {/* Card Header */}
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FaBriefcase />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-1 flex items-center justify-between gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-base-content/40">
                        Job #{String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="rounded-full bg-success/10 px-2 py-1 text-[10px] font-bold text-success">
                        Active
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-base-content">
                      {job.title}
                    </h3>
                  </div>
                </div>

                {/* Job Info */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-base-200/60 p-3">
                    <div className="flex items-center gap-2 text-xs text-base-content/50">
                      <FaCalendarAlt className="text-primary" />
                      Deadline
                    </div>

                    <p className="mt-2 text-xs font-bold text-base-content">
                      {job.deadline}
                    </p>
                  </div>

                  <div className="rounded-xl bg-base-200/60 p-3">
                    <div className="flex items-center gap-2 text-xs text-base-content/50">
                      <FaUsers className="text-primary" />
                      Applications
                    </div>

                    <p className="mt-2 text-xs font-bold text-base-content">
                      {job.application_count || 0}
                    </p>
                  </div>
                </div>

                {/* Action */}
                <Link
                  to={`/applications/${job._id}`}
                  className="btn btn-primary btn-sm mt-4 h-10 w-full rounded-xl text-xs"
                >
                  <FaEye className="text-xs" />
                  View Applications
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default JobLists;
