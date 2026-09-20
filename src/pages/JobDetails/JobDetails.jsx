import React from "react";
import { Link, useLoaderData } from "react-router";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaClock,
  FaDollarSign,
  FaMapMarkerAlt,
  FaRegClock,
  FaShareAlt,
} from "react-icons/fa";

const JobDetails = () => {
  const job = useLoaderData();

  const {
    _id,
    title,
    company,
    company_logo,
    location,
    jobType,
    category,
    description,
    requirements = [],
    salaryRange,
    deadline,
  } = job;

  return (
    <main className="min-h-screen bg-base-200/30">
      {/* Back Button */}
      <div className="mx-auto max-w-6xl px-4 pt-6 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/50 transition-colors hover:text-primary"
        >
          <FaArrowLeft className="text-xs" />
          Back to Jobs
        </Link>
      </div>

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-sm">
          {/* Decorative background */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"></div>
          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl"></div>

          <div className="relative p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              {/* Company */}
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-base-200 bg-base-100 p-3 shadow-md sm:h-24 sm:w-24">
                  <img
                    src={company_logo}
                    alt={`${company} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                      {category || "Job Opportunity"}
                    </span>

                    <span className="rounded-full bg-success/10 px-3 py-1 text-xs font-semibold text-success">
                      <span className="mr-1">●</span>
                      Hiring
                    </span>
                  </div>

                  <h1 className="text-2xl font-extrabold tracking-tight text-base-content sm:text-3xl lg:text-4xl">
                    {title}
                  </h1>

                  <p className="mt-2 flex items-center gap-2 text-sm font-medium text-base-content/50">
                    <FaBuilding className="text-primary" />
                    {company}
                  </p>
                </div>
              </div>

              {/* Share */}
              <button className="btn btn-ghost btn-sm rounded-xl border border-base-200 normal-case">
                <FaShareAlt />
                Share
              </button>
            </div>

            {/* Job Meta */}
            <div className="mt-8 grid grid-cols-1 gap-3 border-t border-base-200 pt-6 sm:grid-cols-2 lg:grid-cols-4">
              {/* Location */}
              <div className="flex items-center gap-3 rounded-xl bg-base-200/40 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-base-content/40">
                    Location
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {location || "Remote"}
                  </p>
                </div>
              </div>

              {/* Job Type */}
              <div className="flex items-center gap-3 rounded-xl bg-base-200/40 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-info/10 text-info">
                  <FaBriefcase />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-base-content/40">
                    Job Type
                  </p>
                  <p className="mt-1 text-sm font-semibold">
                    {jobType || "Full Time"}
                  </p>
                </div>
              </div>

              {/* Salary */}
              <div className="flex items-center gap-3 rounded-xl bg-base-200/40 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success">
                  <FaDollarSign />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-base-content/40">
                    Salary
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {salaryRange
                      ? `${salaryRange.min} - ${salaryRange.max} ${salaryRange.currency || ""}`
                      : "Negotiable"}
                  </p>
                </div>
              </div>

              {/* Deadline */}
              <div className="flex items-center gap-3 rounded-xl bg-base-200/40 p-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-warning/10 text-warning">
                  <FaCalendarAlt />
                </div>

                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-base-content/40">
                    Deadline
                  </p>

                  <p className="mt-1 text-sm font-semibold">
                    {deadline || "Open"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
          {/* Left */}
          <div className="space-y-6">
            {/* Description */}
            <div className="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-primary"></div>

                <h2 className="text-xl font-extrabold">Job Description</h2>
              </div>

              <p className="whitespace-pre-line text-sm leading-7 text-base-content/65">
                {description ||
                  "We are looking for talented and motivated professionals to join our team."}
              </p>
            </div>

            {/* Requirements */}
            <div className="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-primary"></div>

                <h2 className="text-xl font-extrabold">
                  Requirements & Skills
                </h2>
              </div>

              {requirements.length > 0 ? (
                <div className="grid gap-3 sm:grid-cols-2">
                  {requirements.map((skill, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 rounded-xl border border-base-200 bg-base-200/30 p-3 transition-all duration-300 hover:border-primary/20 hover:bg-primary/5"
                    >
                      <FaCheckCircle className="shrink-0 text-sm text-primary" />

                      <span className="text-sm font-medium text-base-content/70">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-base-content/50">
                  Requirements will be discussed during the hiring process.
                </p>
              )}
            </div>

            {/* About Company */}
            <div className="rounded-2xl border border-base-200 bg-base-100 p-6 shadow-sm sm:p-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-8 w-1 rounded-full bg-primary"></div>

                <h2 className="text-xl font-extrabold">About {company}</h2>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-base-200 bg-base-100 p-2">
                  <img
                    src={company_logo}
                    alt={`${company} logo`}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="font-bold">{company}</h3>
                  <p className="mt-1 text-xs text-base-content/50">
                    Company information and career opportunities
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-base-content/60">
                Join {company} and become part of a team where your skills,
                creativity, and experience can make a meaningful impact. Explore
                this opportunity and take the next step in your career.
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="overflow-hidden rounded-2xl border border-base-200 bg-base-100 shadow-sm">
              <div className="border-b border-base-200 bg-primary/5 p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Interested in this role?
                </p>

                <h3 className="mt-1 text-xl font-extrabold">
                  Apply for this job
                </h3>
              </div>

              <div className="p-5">
                {/* Apply Button */}
                <Link to={`/jobApply/${_id}`} className="block">
                  <button className="btn btn-primary h-12 w-full rounded-xl text-sm font-bold normal-case shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl">
                    Apply Now
                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>

                {/* Quick Info */}
                <div className="mt-6 space-y-4">
                  <div className="flex items-center justify-between border-b border-base-200 pb-4">
                    <span className="flex items-center gap-2 text-xs text-base-content/50">
                      <FaBriefcase />
                      Job Type
                    </span>

                    <span className="text-xs font-bold">
                      {jobType || "Full Time"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-base-200 pb-4">
                    <span className="flex items-center gap-2 text-xs text-base-content/50">
                      <FaMapMarkerAlt />
                      Location
                    </span>

                    <span className="max-w-[150px] truncate text-right text-xs font-bold">
                      {location || "Remote"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-base-200 pb-4">
                    <span className="flex items-center gap-2 text-xs text-base-content/50">
                      <FaClock />
                      Experience
                    </span>

                    <span className="text-xs font-bold">Any Experience</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-xs text-base-content/50">
                      <FaRegClock />
                      Application
                    </span>

                    <span className="text-xs font-bold text-success">Open</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="mt-4 rounded-2xl border border-primary/10 bg-primary/5 p-5">
              <h4 className="text-sm font-bold">💡 Application Tip</h4>

              <p className="mt-2 text-xs leading-5 text-base-content/55">
                Make sure your profile and application information are complete
                before applying.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default JobDetails;
