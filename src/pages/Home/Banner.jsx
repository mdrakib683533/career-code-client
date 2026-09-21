import React from "react";
import { motion } from "motion/react";
import {
  FaArrowRight,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaPlay,
  FaBriefcase,
} from "react-icons/fa";

import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-base-200">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-24">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center lg:text-left"
        >
          {/* Small Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-base-100 px-4 py-2 text-sm font-semibold text-primary shadow-sm">
            <FaCheckCircle />
            Find your dream career
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Find Your
            <span className="block text-primary">Dream Job</span>
            <span className="block">
              Build Your <span className="text-secondary">Future.</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-base-content/65 sm:text-lg lg:mx-0">
            Discover exciting career opportunities, connect with top companies,
            and take the next step toward your professional success with
            CareerCode.
          </p>

          {/* Feature Points */}
          <div className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm font-medium text-base-content/75 lg:justify-start">
            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-success" />
              Verified Jobs
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-success" />
              Easy Apply
            </span>

            <span className="flex items-center gap-2">
              <FaCheckCircle className="text-success" />
              Career Growth
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <button className="btn btn-primary rounded-full px-7 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Explore Jobs
              <FaArrowRight />
            </button>

            <button className="btn btn-outline rounded-full px-7 transition-all duration-300 hover:-translate-y-1">
              <FaPlay className="text-xs" />
              How It Works
            </button>
          </div>

          {/* Trust Text */}
          <p className="mt-6 text-sm text-base-content/50">
            Join thousands of job seekers building their future.
          </p>
        </motion.div>

        {/* Right Image Section */}
        <div className="relative mx-auto min-h-[420px] w-full max-w-lg sm:min-h-[500px]">
          {/* Decorative Circle */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-sm sm:h-96 sm:w-96" />

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute right-0 top-4 w-[75%] sm:right-2 sm:top-0"
          >
            <img
              src={team1}
              alt="Professional working remotely"
              className="h-72 w-full rounded-[2rem] border-8 border-base-100 object-cover shadow-2xl sm:h-96"
            />
          </motion.div>

          {/* Second Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute bottom-4 left-0 z-10 w-[65%] sm:bottom-0 sm:left-2"
          >
            <img
              src={team2}
              alt="Team member working on a laptop"
              className="h-56 w-full rounded-[2rem] border-8 border-base-100 object-cover shadow-2xl sm:h-72"
            />
          </motion.div>

          {/* Floating Job Card */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-24 right-0 z-20 hidden w-56 rounded-2xl border border-base-200 bg-base-100 p-4 shadow-xl sm:block"
          >
            <div className="mb-3 flex items-center gap-3">
              <div className="rounded-xl bg-primary/10 p-3 text-primary">
                <FaBriefcase />
              </div>

              <div>
                <p className="text-xs text-base-content/50">Featured Job</p>
                <h3 className="font-bold">Software Engineer</h3>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-base-content/60">
              <FaMapMarkerAlt className="text-primary" />
              Remote · Worldwide
            </div>

            <div className="mt-3 flex items-center justify-between">
              <span className="text-sm font-bold text-primary">
                $80K - $120K
              </span>

              <span className="badge badge-success badge-sm">New</span>
            </div>
          </motion.div>

          {/* Floating Top Badge */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-0 top-24 z-20 rounded-2xl border border-base-200 bg-base-100 px-4 py-3 shadow-lg sm:left-2"
          >
            <p className="text-xs text-base-content/50">Opportunities</p>
            <p className="text-lg font-extrabold text-primary">1000+</p>
            <p className="text-xs text-base-content/60">Active Jobs</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
