import React, { useEffect, useRef, useState } from "react";
import JobCard from "../Shared/JobCard";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const sectionRef = useRef(null);

  useEffect(() => {
    fetch("https://career-code-server-lac.vercel.app/jobs")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch jobs");
        }
        return res.json();
      })
      .then((data) => {
        setJobs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load jobs. Please try again.");
        setLoading(false);
      });
  }, []);

  // Card animation
  useEffect(() => {
    if (loading || jobs.length === 0) return;

    const cards = sectionRef.current?.querySelectorAll(".job-card-animation");

    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("job-card-show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [loading, jobs]);

  return (
    <section
      id="explore-opportunities"
      ref={sectionRef}
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      {/* Section Header */}
      <div className="mb-10 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          Explore Opportunities
        </span>

        <h2 className="mt-2 text-3xl font-extrabold text-base-content sm:text-4xl">
          Jobs of the Day
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-base-content/60">
          Discover exciting career opportunities and find your perfect job.
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-80 animate-pulse rounded-2xl bg-base-200"
            ></div>
          ))}
        </div>
      )}

      {/* Error State */}
      {!loading && error && (
        <div className="rounded-2xl bg-error/10 p-6 text-center text-error">
          <p className="font-semibold">{error}</p>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && jobs.length === 0 && (
        <div className="rounded-2xl bg-base-200 p-10 text-center">
          <h3 className="text-xl font-bold">No jobs available</h3>

          <p className="mt-2 text-base-content/60">
            Please check again later for new opportunities.
          </p>
        </div>
      )}

      {/* Jobs Grid */}
      {!loading && !error && jobs.length > 0 && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <div
              key={job._id}
              className="job-card-animation"
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <JobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default HotJobs;
