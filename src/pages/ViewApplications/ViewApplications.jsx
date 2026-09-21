import axios from "axios";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const ViewApplications = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();

  const handleStatusChange = (e, app_id) => {
    const newStatus = e.target.value;

    console.log(newStatus, app_id);

    axios
      .patch(
        `https://career-code-server-lac.vercel.app/applications/${app_id}`,
        {
          status: newStatus,
        },
      )
      .then((res) => {
        console.log(res.data);

        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application status updated.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Update failed",
          text: "Unable to update application status.",
        });
      });
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Hired":
        return "bg-success/10 text-success border-success/20";

      case "Interview":
        return "bg-info/10 text-info border-info/20";

      case "Rejected":
        return "bg-error/10 text-error border-error/20";

      case "Pending":
      default:
        return "bg-warning/10 text-warning border-warning/20";
    }
  };

  return (
    <section className="min-h-screen bg-base-200/40 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary"></span>

              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Recruiter Dashboard
              </p>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">
              Job Applications
            </h1>

            <p className="mt-2 text-base-content/60">
              Review applicants and manage their application status.
            </p>
          </div>

          {/* Total Applications */}
          <div className="flex w-fit items-center gap-3 rounded-2xl border border-base-200 bg-base-100 px-5 py-3 shadow-sm">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m4-4a4 4 0 100-8 4 4 0 000 8zm6 0a3 3 0 100-6 3 3 0 000 6z"
                />
              </svg>
            </div>

            <div>
              <p className="text-xs font-medium text-base-content/50">
                Total Applicants
              </p>

              <p className="text-2xl font-bold text-base-content">
                {applications.length}
              </p>
            </div>
          </div>
        </div>

        {/* Job Information */}
        <div className="mb-6 rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-1 text-sm font-medium text-base-content/50">
                Applications for Job ID
              </p>

              <h2 className="break-all text-lg font-bold text-base-content">
                {job_id}
              </h2>
            </div>

            <span className="w-fit rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
              {applications.length} Applicants
            </span>
          </div>
        </div>

        {/* Applications Table */}
        <div className="overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm">
          <div className="border-b border-base-200 px-5 py-5 sm:px-6">
            <h3 className="text-lg font-bold text-base-content">
              Applicant List
            </h3>

            <p className="mt-1 text-sm text-base-content/50">
              Update the status of each application from the dropdown.
            </p>
          </div>

          {applications.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="border-b border-base-200 bg-base-200/40 text-xs uppercase tracking-wider text-base-content/60">
                    <th className="px-5 py-4">#</th>
                    <th className="px-5 py-4">Applicant</th>
                    <th className="px-5 py-4">Job</th>
                    <th className="px-5 py-4">Current Status</th>
                    <th className="px-5 py-4">Update Status</th>
                  </tr>
                </thead>

                <tbody>
                  {applications.map((application, index) => (
                    <tr
                      key={application._id}
                      className="border-b border-base-200 transition-colors duration-200 last:border-none hover:bg-primary/[0.03]"
                    >
                      {/* Index */}
                      <th className="px-5 py-5 text-sm font-semibold text-base-content/50">
                        {String(index + 1).padStart(2, "0")}
                      </th>

                      {/* Applicant */}
                      <td className="px-5 py-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                            {application.applicant?.charAt(0)?.toUpperCase() ||
                              "A"}
                          </div>

                          <div>
                            <p className="font-semibold text-base-content">
                              {application.applicant}
                            </p>

                            <p className="text-xs text-base-content/50">
                              Applicant
                            </p>
                          </div>
                        </div>
                      </td>

                      {/* Job */}
                      <td className="px-5 py-5">
                        <div>
                          <p className="font-medium text-base-content">
                            Quality Control Specialist
                          </p>

                          <p className="mt-1 text-xs text-base-content/50">
                            Job Application
                          </p>
                        </div>
                      </td>

                      {/* Current Status */}
                      <td className="px-5 py-5">
                        <span
                          className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${getStatusStyle(
                            application.status,
                          )}`}
                        >
                          {application.status || "Pending"}
                        </span>
                      </td>

                      {/* Update Status */}
                      <td className="px-5 py-5">
                        <select
                          onChange={(e) =>
                            handleStatusChange(e, application._id)
                          }
                          defaultValue={application.status || "Pending"}
                          className="select select-sm w-full min-w-32 rounded-lg border-base-300 bg-base-100 text-sm font-medium focus:border-primary focus:outline-none sm:w-auto"
                        >
                          <option disabled value="">
                            Update Status
                          </option>

                          <option value="Pending">Pending</option>
                          <option value="Interview">Interview</option>
                          <option value="Hired">Hired</option>
                          <option value="Rejected">Rejected</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            /* Empty State */
            <div className="px-6 py-16 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-base-200 text-base-content/40">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4m-4 0h16l-1 9H5l-1-9z"
                  />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-base-content">
                No Applications Found
              </h3>

              <p className="mt-2 text-sm text-base-content/50">
                There are currently no applications for this job.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ViewApplications;
