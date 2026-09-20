import React, { Suspense } from "react";
import useAuth from "../../hooks/useAuth";
import JobLists from "./JobLists";
import { jobsCreatedByPromise } from "../../api/jobsApi";
import { FaBriefcase, FaChartLine, FaPlus, FaRocket } from "react-icons/fa";
import { Link } from "react-router";

const MyPostedJobs = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-base-200/40 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
              <FaBriefcase />
              <span>Recruiter Dashboard</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">
              My Posted Jobs
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-base-content/60 sm:text-base">
              Manage your job postings, track applications, and connect with
              talented candidates.
            </p>
          </div>

          <Link
            to="/addJob"
            className="btn btn-primary rounded-xl px-5 shadow-md shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <FaPlus className="text-xs" />
            Post a New Job
          </Link>
        </div>

        {/* Dashboard Highlights */}
        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <FaBriefcase />
              </div>

              <span className="text-xs font-semibold text-base-content/40">
                Overview
              </span>
            </div>

            <h3 className="text-sm font-medium text-base-content/60">
              Published Jobs
            </h3>

            <p className="mt-1 text-2xl font-extrabold text-base-content">
              Your Jobs
            </p>
          </div>

          <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                <FaChartLine />
              </div>

              <span className="text-xs font-semibold text-base-content/40">
                Analytics
              </span>
            </div>

            <h3 className="text-sm font-medium text-base-content/60">
              Application Tracking
            </h3>

            <p className="mt-1 text-2xl font-extrabold text-base-content">
              Stay Updated
            </p>
          </div>

          <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-success/10 text-success">
                <FaRocket />
              </div>

              <span className="text-xs font-semibold text-base-content/40">
                Growth
              </span>
            </div>

            <h3 className="text-sm font-medium text-base-content/60">
              Hiring Progress
            </h3>

            <p className="mt-1 text-2xl font-extrabold text-base-content">
              Find Talent
            </p>
          </div>
        </div>

        {/* Jobs List */}
        <Suspense
          fallback={
            <div className="flex min-h-60 items-center justify-center rounded-3xl border border-base-200 bg-base-100 shadow-sm">
              <div className="text-center">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="mt-3 text-sm text-base-content/50">
                  Loading your posted jobs...
                </p>
              </div>
            </div>
          }
        >
          <JobLists jobsCreatedByPromise={jobsCreatedByPromise(user.email)} />
        </Suspense>
      </div>
    </section>
  );
};

export default MyPostedJobs;
