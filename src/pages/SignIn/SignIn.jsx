import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { useLocation, useNavigate } from "react-router";

const SignIn = () => {
  const { signInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || "/";

  console.log("location in sign in page", location);

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="min-h-screen bg-base-200/40 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 lg:grid-cols-2">
        {/* Left Content */}
        <div className="hidden lg:block">
          <div className="max-w-lg">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-bold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary"></span>
              Career Code Marketplace
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-base-content xl:text-6xl">
              Find your next
              <span className="block text-primary">career opportunity.</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-base-content/60">
              Sign in to explore jobs, manage your applications, and connect
              with companies looking for talented professionals.
            </p>

            <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
              <div className="rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm">
                <p className="text-2xl font-extrabold text-primary">1K+</p>
                <p className="mt-1 text-xs text-base-content/50">
                  Jobs
                </p>
              </div>

              <div className="rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm">
                <p className="text-2xl font-extrabold text-primary">500+</p>
                <p className="mt-1 text-xs text-base-content/50">
                  Companies
                </p>
              </div>

              <div className="rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm">
                <p className="text-2xl font-extrabold text-primary">24/7</p>
                <p className="mt-1 text-xs text-base-content/50">
                  Access
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sign In Card */}
        <div className="mx-auto w-full max-w-md">
          <div className="rounded-3xl border border-base-200 bg-base-100 p-6 shadow-xl sm:p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12H3m0 0l4-4m-4 4l4 4m8-9V5a2 2 0 00-2-2H9a2 2 0 00-2 2v1m8 8v5a2 2 0 01-2 2H9a2 2 0 01-2-2v-1"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
                Welcome back
              </h2>

              <p className="mt-2 text-sm leading-6 text-base-content/50">
                Sign in to continue your career journey.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSignIn}>
              <fieldset className="space-y-5">
                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-base-content">
                    Email address
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    className="input input-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-semibold text-base-content">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs font-semibold text-primary transition-colors hover:text-primary/70"
                    >
                      Forgot password?
                    </button>
                  </div>

                  <input
                    type="password"
                    name="password"
                    required
                    className="input input-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary focus:outline-none"
                    placeholder="Enter your password"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary h-12 w-full rounded-xl border-0 text-sm font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
                >
                  Sign In
                </button>
              </fieldset>
            </form>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-base-200"></div>
              <span className="text-xs font-medium text-base-content/40">
                OR CONTINUE WITH
              </span>
              <div className="h-px flex-1 bg-base-200"></div>
            </div>

            {/* Social Login */}
            <SocialLogin from={from} />

            {/* Footer */}
            <p className="mt-7 text-center text-xs leading-5 text-base-content/40">
              By continuing, you agree to our terms and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
