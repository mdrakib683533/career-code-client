import React, { use } from "react";
import JobApplicationRow from "./JobApplicationRow";

const ApplicationsList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Career Activity
        </span>

        <div className="mt-2 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-extrabold tracking-tight text-base-content sm:text-3xl">
              My Applications
            </h2>

            <p className="mt-1 text-sm text-base-content/50">
              Keep track of the jobs you have applied for.
            </p>
          </div>

          <div className="rounded-xl border border-base-200 bg-base-100 px-5 py-2.5 shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-wider text-base-content/40">
              Total Applications
            </p>

            <p className="mt-0.5 text-xl font-extrabold text-primary">
              {applications.length}
            </p>
          </div>
        </div>
      </div>

      {/* Applications Table */}
      <div className="overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm">
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="border-b border-base-200 bg-base-200/40 text-xs uppercase tracking-wider text-base-content/50">
                <th className="w-16">#</th>
                <th>Job</th>
                <th>Company</th>
                <th>Application</th>
                <th className="text-right">Action</th>
              </tr>
            </thead>

            <tbody>
              {applications.map((application, index) => (
                <JobApplicationRow
                  key={application._id}
                  index={index}
                  application={application}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ApplicationsList;