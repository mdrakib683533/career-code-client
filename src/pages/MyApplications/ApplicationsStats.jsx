import React, { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaCheckCircle,
  FaClock,
  FaFileAlt,
} from "react-icons/fa";

const AnimatedNumber = ({ end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const intervalTime = 30;
    const increment = end / (duration / intervalTime);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
      }

      setCount(Math.floor(start));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [end]);

  return count;
};

const ApplicationsStats = () => {
  const stats = [
    {
      title: "Total Applications",
      value: 48,
      description: "Applications submitted",
      icon: <FaFileAlt />,
      color: "text-primary",
      bg: "bg-primary/10",
      bar: "bg-primary",
    },
    {
      title: "Applied Jobs",
      value: 32,
      description: "Jobs you have applied for",
      icon: <FaBriefcase />,
      color: "text-secondary",
      bg: "bg-secondary/10",
      bar: "bg-secondary",
    },
    {
      title: "Pending Applications",
      value: 12,
      description: "Waiting for employer response",
      icon: <FaClock />,
      color: "text-warning",
      bg: "bg-warning/10",
      bar: "bg-warning",
    },
    {
      title: "Accepted Applications",
      value: 4,
      description: "Applications successfully accepted",
      icon: <FaCheckCircle />,
      color: "text-success",
      bg: "bg-success/10",
      bar: "bg-success",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="mb-8 text-center">
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
          Application Overview
        </span>

        <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-base-content sm:text-3xl">
          Track Your Job Applications
        </h2>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-base-content/60 sm:text-base">
          Keep track of your applications, monitor their progress, and stay
          updated on your latest career opportunities.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.title}
            className="group relative overflow-hidden rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            {/* Decorative Glow */}
            <div
              className={`absolute -right-10 -top-10 h-28 w-28 rounded-full ${stat.bg} blur-2xl transition-transform duration-700 group-hover:scale-150`}
            ></div>

            <div className="relative">
              {/* Icon */}
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.bg} ${stat.color} text-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6`}
              >
                {stat.icon}
              </div>

              {/* Title */}
              <p className="mt-5 text-sm font-semibold text-base-content/60">
                {stat.title}
              </p>

              {/* Animated Number */}
              <h3
                className={`mt-1 text-3xl font-extrabold tracking-tight ${stat.color}`}
              >
                <AnimatedNumber end={stat.value} />
              </h3>

              {/* Description */}
              <p className="mt-2 min-h-[32px] text-xs leading-5 text-base-content/50">
                {stat.description}
              </p>

              {/* Progress */}
              <div className="mt-5 h-1 overflow-hidden rounded-full bg-base-200">
                <div
                  className={`h-full w-[65%] rounded-full ${stat.bar} transition-all duration-700 group-hover:w-full`}
                ></div>
              </div>
            </div>

            {/* Bottom Shine */}
            <div
              className={`absolute bottom-0 left-0 h-[2px] w-0 ${stat.bar} transition-all duration-500 group-hover:w-full`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationsStats;