import { Link, useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  return (
    <footer className="relative overflow-hidden bg-[#F4F8E8] text-[#163B35]">
      {/* Decorative Background */}
      <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#B8E0D2]/70 blur-3xl"></div>

      <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-[#D8E8B8]/70 blur-3xl"></div>

      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FFFFFF]/30 blur-3xl"></div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        {/* CTA Section */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Brand */}
          <div className="inline-block text-2xl font-extrabold tracking-tight text-[#164E43]">
            Career<span className="text-[#5C9E85]">Code</span>
            <span className="text-[#D99A5B]">.</span>
          </div>

          {/* Title */}
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#164E43] sm:text-4xl lg:text-5xl">
            Discover Your Next
            <span className="mt-2 block text-2xl sm:text-3xl lg:text-4xl text-[#5C9E85]">
              Career Opportunity
            </span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#55736B] sm:text-base">
            Explore exciting job opportunities, connect with talented
            professionals, and build your future with CareerCode. Your next
            career journey starts here.
          </p>

          {/* CTA Button */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();

                document
                  .getElementById("explore-opportunities")
                  ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
              }
            }}
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#164E43] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#164E43]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#286B5D] hover:shadow-xl"
          >
            Explore CareerCode
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>

        {/* Feature Highlights */}
        <div className="mx-auto mt-14 grid max-w-3xl gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/80 bg-white/45 px-4 py-5 text-center shadow-sm backdrop-blur-sm">
            <div className="text-2xl">✦</div>
            <h3 className="mt-2 text-sm font-bold text-[#164E43]">
              Find Opportunities
            </h3>
            <p className="mt-1 text-xs text-[#718A81]">
              Discover your next role
            </p>
          </div>

          <div className="rounded-2xl border border-white/80 bg-white/45 px-4 py-5 text-center shadow-sm backdrop-blur-sm">
            <div className="text-2xl">◎</div>
            <h3 className="mt-2 text-sm font-bold text-[#164E43]">
              Connect & Grow
            </h3>
            <p className="mt-1 text-xs text-[#718A81]">
              Build your career network
            </p>
          </div>

          <div className="rounded-2xl border border-white/80 bg-white/45 px-4 py-5 text-center shadow-sm backdrop-blur-sm">
            <div className="text-2xl">↗</div>
            <h3 className="mt-2 text-sm font-bold text-[#164E43]">
              Build Your Future
            </h3>
            <p className="mt-1 text-xs text-[#718A81]">Take the next step</p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[#C8DCCB]"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-[#718A81] sm:flex-row sm:text-left">
          {/* Copyright */}
          <p>© {new Date().getFullYear()} CareerCode. All rights reserved.</p>

          {/* Tagline */}
          <p className="font-medium">
            Connecting <span className="text-[#D99A5B]">talent</span> with{" "}
            <span className="text-[#5C9E85]">opportunity.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
