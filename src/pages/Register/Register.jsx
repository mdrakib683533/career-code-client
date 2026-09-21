import React, { use } from "react";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import SocialLogin from "../Shared/SocialLogin";
import { useNavigate } from "react-router";

const Register = () => {
  const { createUser } = use(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);

        // Registration successful → Home page
        navigate("/");
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
              Start your
              <span className="block text-primary">career journey.</span>
            </h1>

            <p className="mt-6 max-w-md text-base leading-7 text-base-content/60">
              Create your account and discover new opportunities, connect with
              companies, and take the next step in your career.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Discover thousands of career opportunities",
                "Apply to jobs with ease",
                "Track your applications in one place",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    ✓
                  </div>

                  <span className="text-sm font-medium text-base-content/70">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Register Card */}
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
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3M13 7a4 4 0 11-8 0 4 4 0 018 0zM3 21a7 7 0 0114 0"
                  />
                </svg>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-base-content">
                Create your account
              </h2>

              <p className="mt-2 text-sm leading-6 text-base-content/50">
                Join Career Code and start exploring new opportunities.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleRegister}>
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
                  <label className="mb-2 block text-sm font-semibold text-base-content">
                    Password
                  </label>

                  <input
                    type="password"
                    name="password"
                    required
                    className="input input-bordered h-12 w-full rounded-xl bg-base-100 focus:border-primary focus:outline-none"
                    placeholder="Create a password"
                  />

                  <p className="mt-2 text-xs text-base-content/40">
                    Use a strong password to keep your account secure.
                  </p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary h-12 w-full rounded-xl border-0 text-sm font-bold shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
                >
                  Create Account
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
            <SocialLogin />

            {/* Footer */}
            <p className="mt-7 text-center text-xs leading-5 text-base-content/40">
              By creating an account, you agree to our terms and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
