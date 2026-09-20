import React from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
  FaCheckCircle,
  FaDollarSign,
  FaGlobe,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaRegFileAlt,
  FaUserTie,
} from "react-icons/fa";

const AddJob = () => {
  const { user } = useAuth();

  const handleAddAJob = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    // Process salary range
    const { min, max, currency, ...newJob } = data;

    newJob.salaryRange = {
      min,
      max,
      currency,
    };

    // Process requirements
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(",");
    const requirementsClean = requirementsDirty.map((req) => req.trim());

    newJob.requirements = requirementsClean;

    // Process responsibilities
    newJob.responsibilities = newJob.responsibilities
      .split(",")
      .map((res) => res.trim());

    newJob.status = "active";

    console.log(newJob);

    // Save job to database
    axios
      .post("https://career-code-server-lac.vercel.app/jobs", newJob)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "This job has been saved and published successfully.",
            showConfirmButton: false,
            timer: 1500,
          });

          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="min-h-screen bg-base-200/40 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
            <FaBriefcase />
            <span>Recruiter Dashboard</span>
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">
            Create a new job
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-base-content/60 sm:text-base">
            Share your opportunity with talented professionals and find the
            right candidate for your team.
          </p>
        </div>

        <form onSubmit={handleAddAJob}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
            {/* Main Form */}
            <div className="space-y-6">
              {/* Basic Information */}
              <div className="rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm sm:p-8">
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FaBuilding />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-base-content">
                      Basic Information
                    </h2>
                    <p className="mt-1 text-sm text-base-content/50">
                      Tell candidates about your company and job.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold">
                      Job Title
                    </label>
                    <input
                      type="text"
                      name="title"
                      required
                      className="input input-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary"
                      placeholder="e.g. Frontend Developer"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      className="input input-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary"
                      placeholder="Company name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      Job Location
                    </label>

                    <div className="relative">
                      <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-base-content/40" />

                      <input
                        type="text"
                        name="location"
                        required
                        className="input input-bordered h-12 w-full rounded-xl bg-base-100 pl-10 focus:border-primary"
                        placeholder="e.g. Dhaka, Bangladesh"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label className="mb-2 block text-sm font-semibold">
                      Company Logo URL
                    </label>

                    <input
                      type="url"
                      name="company_logo"
                      required
                      className="input input-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary"
                      placeholder="https://example.com/logo.png"
                    />
                  </div>
                </div>
              </div>

              {/* Job Type and Category */}
              <div className="rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm sm:p-8">
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FaLayerGroup />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-base-content">
                      Job Classification
                    </h2>
                    <p className="mt-1 text-sm text-base-content/50">
                      Select the job type and category.
                    </p>
                  </div>
                </div>

                {/* Job Type */}
                <div className="mb-6">
                  <label className="mb-3 block text-sm font-semibold">
                    Job Type
                  </label>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    {["On-site", "Remote", "Hybrid"].map((type) => (
                      <label
                        key={type}
                        className="flex cursor-pointer items-center gap-3 rounded-xl border border-base-200 p-4 transition-all duration-300 hover:border-primary hover:bg-primary/5 has-[:checked]:border-primary has-[:checked]:bg-primary/10"
                      >
                        <input
                          type="radio"
                          name="jobType"
                          value={type}
                          required
                          className="radio radio-primary radio-sm"
                        />

                        <span className="text-sm font-semibold">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Job Category
                  </label>

                  <select
                    defaultValue=""
                    name="category"
                    required
                    className="select select-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option>Engineering</option>
                    <option>Marketing</option>
                    <option>Finance</option>
                  </select>
                </div>
              </div>

              {/* Deadline and Salary */}
              <div className="rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm sm:p-8">
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FaDollarSign />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-base-content">
                      Compensation & Deadline
                    </h2>
                    <p className="mt-1 text-sm text-base-content/50">
                      Add salary details and application deadline.
                    </p>
                  </div>
                </div>

                {/* Deadline */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-semibold">
                    Application Deadline
                  </label>

                  <div className="relative">
                    <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-base-content/40" />

                    <input
                      type="date"
                      name="deadline"
                      required
                      className="input input-bordered h-12 w-full rounded-xl bg-base-100 pl-10 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Salary */}
                <div>
                  <label className="mb-3 block text-sm font-semibold">
                    Salary Range
                  </label>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div>
                      <label className="mb-2 block text-xs font-medium text-base-content/50">
                        Minimum Salary
                      </label>

                      <input
                        type="number"
                        name="min"
                        required
                        className="input input-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary"
                        placeholder="e.g. 30000"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-base-content/50">
                        Maximum Salary
                      </label>

                      <input
                        type="number"
                        name="max"
                        required
                        className="input input-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary"
                        placeholder="e.g. 60000"
                      />
                    </div>

                    <div>
                      <label className="mb-2 block text-xs font-medium text-base-content/50">
                        Currency
                      </label>

                      <select
                        defaultValue=""
                        name="currency"
                        required
                        className="select select-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary"
                      >
                        <option value="" disabled>
                          Currency
                        </option>
                        <option>BDT</option>
                        <option>USD</option>
                        <option>EU</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm sm:p-8">
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FaRegFileAlt />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-base-content">
                      Job Details
                    </h2>
                    <p className="mt-1 text-sm text-base-content/50">
                      Describe the role and what candidates will do.
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-semibold">
                    Job Description
                  </label>

                  <textarea
                    name="description"
                    required
                    rows="6"
                    className="textarea textarea-bordered min-h-36 w-full rounded-xl bg-base-100 leading-6 focus:border-primary"
                    placeholder="Write a detailed description of the job..."
                  ></textarea>
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <label className="mb-2 block text-sm font-semibold">
                    Job Requirements
                  </label>

                  <textarea
                    name="requirements"
                    required
                    rows="4"
                    className="textarea textarea-bordered min-h-28 w-full rounded-xl bg-base-100 leading-6 focus:border-primary"
                    placeholder="JavaScript, React, Tailwind CSS, Git"
                  ></textarea>

                  <p className="mt-2 text-xs text-base-content/50">
                    Separate each requirement using a comma.
                  </p>
                </div>

                {/* Responsibilities */}
                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Job Responsibilities
                  </label>

                  <textarea
                    name="responsibilities"
                    required
                    rows="4"
                    className="textarea textarea-bordered min-h-28 w-full rounded-xl bg-base-100 leading-6 focus:border-primary"
                    placeholder="Build user interfaces, Collaborate with the team, Fix bugs"
                  ></textarea>

                  <p className="mt-2 text-xs text-base-content/50">
                    Separate each responsibility using a comma.
                  </p>
                </div>
              </div>

              {/* HR Information */}
              <div className="rounded-3xl border border-base-200 bg-base-100 p-5 shadow-sm sm:p-8">
                <div className="mb-7 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FaUserTie />
                  </div>

                  <div>
                    <h2 className="text-lg font-bold text-base-content">
                      Recruiter Information
                    </h2>
                    <p className="mt-1 text-sm text-base-content/50">
                      Provide contact information for the hiring team.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      HR Name
                    </label>

                    <input
                      type="text"
                      name="hr_name"
                      required
                      className="input input-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary"
                      placeholder="HR Name"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold">
                      HR Email
                    </label>

                    <input
                      type="email"
                      name="hr_email"
                      required
                      defaultValue={user?.email}
                      className="input input-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary"
                      placeholder="HR Email"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary h-14 w-full rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/30"
              >
                <FaCheckCircle />
                Publish Job
              </button>
            </div>

            {/* Right Sidebar */}
            <aside className="space-y-6">
              {/* Preview Card */}
              <div className="rounded-3xl border border-base-200 bg-base-100 p-6 shadow-sm">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FaBriefcase />
                  </div>

                  <h3 className="font-bold text-base-content">
                    Job Publishing
                  </h3>
                </div>

                <p className="text-sm leading-6 text-base-content/60">
                  Make your job post clear and attractive to potential
                  candidates.
                </p>

                <div className="my-5 h-px bg-base-200"></div>

                <ul className="space-y-4">
                  {[
                    "Use a clear and specific job title",
                    "Add complete job requirements",
                    "Mention accurate salary details",
                    "Choose the correct job category",
                    "Provide a valid application deadline",
                  ].map((tip) => (
                    <li
                      key={tip}
                      className="flex items-start gap-3 text-sm text-base-content/70"
                    >
                      <FaCheckCircle className="mt-0.5 shrink-0 text-primary" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Marketplace Card */}
              <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-6 text-primary-content shadow-lg">
                <FaGlobe className="mb-5 text-3xl opacity-80" />

                <h3 className="text-xl font-extrabold leading-tight">
                  Find the right talent for your team.
                </h3>

                <p className="mt-3 text-sm leading-6 opacity-80">
                  Publish your opportunity and connect with skilled
                  professionals.
                </p>

                <div className="mt-6 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-70">
                    Career Code Marketplace
                  </p>

                  <p className="mt-1 text-sm font-bold">
                    Your next great hire starts here.
                  </p>
                </div>
              </div>

              {/* Security Note */}
              <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-success" />

                  <div>
                    <h4 className="text-sm font-bold">Ready to publish?</h4>

                    <p className="mt-1 text-xs leading-5 text-base-content/50">
                      Review all information before publishing your job post.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddJob;
