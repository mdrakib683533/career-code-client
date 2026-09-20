import React from "react";
import { Link, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";
import {
  FaArrowLeft,
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaLock,
} from "react-icons/fa";

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = useAuth();

  const handleApplyFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const linkedIn = form.linkedIn.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const application = {
      jobId,
      applicant: user.email,
      linkedIn,
      github,
      resume,
    };

    axios
      .post(
        "https://career-code-server-lac.vercel.app/applications",
        application,
      )
      .then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Application submitted successfully!",
            text: "Your application has been sent to the recruiter.",
            showConfirmButton: false,
            timer: 1800,
          });
        }
      })
      .catch((error) => {
        console.log(error);

        Swal.fire({
          icon: "error",
          title: "Something went wrong",
          text: "Please try again later.",
        });
      });
  };

  return (
    <main className="min-h-screen bg-base-200/30">
      {/* Top Navigation */}
      <div className="mx-auto max-w-5xl px-4 pt-6 sm:px-6 lg:px-8">
        <Link
          to={`/jobs/${jobId}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-base-content/50 transition-colors hover:text-primary"
        >
          <FaArrowLeft className="text-xs" />
          Back to Job Details
        </Link>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
          {/* Application Form */}
          <div className="overflow-hidden rounded-3xl border border-base-200 bg-base-100 shadow-sm">
            {/* Header */}
            <div className="relative overflow-hidden border-b border-base-200 bg-primary/5 p-6 sm:p-8">
              <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl"></div>

              <div className="relative">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <FaBriefcase />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Career Opportunity
                </p>

                <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
                  Submit Your Application
                </h1>

                <p className="mt-2 max-w-xl text-sm leading-6 text-base-content/55">
                  Complete the form below with your professional profiles and
                  resume to apply for this position.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleApplyFormSubmit} className="p-6 sm:p-8">
              {/* Applicant Email */}
              <div className="mb-6 rounded-xl border border-base-200 bg-base-200/30 p-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-base-content/40">
                  Applying as
                </p>

                <p className="mt-1 text-sm font-semibold text-base-content/80">
                  {user?.email}
                </p>
              </div>

              {/* LinkedIn */}
              <div className="mb-5">
                <label className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-info/10 text-info">
                    <FaLinkedin />
                  </span>
                  LinkedIn Profile
                </label>

                <input
                  type="url"
                  name="linkedIn"
                  required
                  className="input h-12 w-full rounded-xl border-base-300 bg-base-100 text-sm transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                  placeholder="https://linkedin.com/in/your-profile"
                />

                <p className="mt-1.5 text-xs text-base-content/40">
                  Add your professional LinkedIn profile.
                </p>
              </div>

              {/* GitHub */}
              <div className="mb-5">
                <label className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-base-200 text-base-content">
                    <FaGithub />
                  </span>
                  GitHub Profile
                </label>

                <input
                  type="url"
                  name="github"
                  required
                  className="input h-12 w-full rounded-xl border-base-300 bg-base-100 text-sm transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                  placeholder="https://github.com/your-username"
                />

                <p className="mt-1.5 text-xs text-base-content/40">
                  Showcase your projects and coding experience.
                </p>
              </div>

              {/* Resume */}
              <div className="mb-7">
                <label className="mb-2 flex items-center gap-2 text-sm font-bold">
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-success/10 text-success">
                    <FaFileAlt />
                  </span>
                  Resume / CV Link
                </label>

                <input
                  type="url"
                  name="resume"
                  required
                  className="input h-12 w-full rounded-xl border-base-300 bg-base-100 text-sm transition-all duration-300 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/10"
                  placeholder="https://drive.google.com/your-resume"
                />

                <p className="mt-1.5 text-xs text-base-content/40">
                  Make sure your resume link is publicly accessible.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="group btn btn-primary h-12 w-full rounded-xl text-sm font-bold normal-case shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
              >
                Submit Application
                <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              {/* Security */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs text-base-content/40">
                <FaLock className="text-[10px]" />
                Your application information is securely submitted.
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
            {/* Application Checklist */}
            <div className="rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm">
              <h2 className="text-base font-extrabold">Before you apply</h2>

              <p className="mt-1 text-xs leading-5 text-base-content/45">
                Make sure your application is ready before submitting.
              </p>

              <div className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-sm text-success" />

                  <div>
                    <p className="text-xs font-bold">Update your LinkedIn</p>
                    <p className="mt-0.5 text-[11px] text-base-content/45">
                      Keep your professional profile updated.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-sm text-success" />

                  <div>
                    <p className="text-xs font-bold">Check your GitHub</p>
                    <p className="mt-0.5 text-[11px] text-base-content/45">
                      Highlight your best projects.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <FaCheckCircle className="mt-0.5 shrink-0 text-sm text-success" />

                  <div>
                    <p className="text-xs font-bold">Verify your resume</p>
                    <p className="mt-0.5 text-[11px] text-base-content/45">
                      Make sure recruiters can access it.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Application Process */}
            <div className="rounded-2xl border border-primary/10 bg-primary/5 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-primary">
                Application Process
              </p>

              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-content">
                    1
                  </span>

                  <span className="text-xs font-semibold">
                    Submit application
                  </span>
                </div>

                <div className="ml-3.5 h-4 w-px bg-primary/20"></div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    2
                  </span>

                  <span className="text-xs font-semibold">
                    Recruiter reviews
                  </span>
                </div>

                <div className="ml-3.5 h-4 w-px bg-primary/20"></div>

                <div className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    3
                  </span>

                  <span className="text-xs font-semibold">
                    Interview / Next step
                  </span>
                </div>
              </div>
            </div>

            {/* Job Details Link */}
            <Link
              to={`/jobs/${jobId}`}
              className="group flex items-center justify-between rounded-2xl border border-primary/20 bg-primary/5 p-4 text-sm font-semibold text-primary shadow-sm transition-all duration-300 hover:border-primary hover:bg-primary hover:text-primary-content hover:shadow-md"
            >
              <span>Review job details</span>

              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default JobApply;
