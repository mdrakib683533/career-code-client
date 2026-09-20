import React, { useEffect, useRef } from "react";
import {
  FaBullhorn,
  FaHeadset,
  FaChartLine,
  FaCode,
  FaUsers,
  FaPaintBrush,
  FaMobileAlt,
  FaBriefcase,
  FaDatabase,
} from "react-icons/fa";

const categories = [
  {
    title: "Marketing & Sale",
    jobs: 1526,
    icon: <FaBullhorn />,
    color: "bg-orange-100 text-orange-500",
  },
  {
    title: "Customer Help",
    jobs: 185,
    icon: <FaHeadset />,
    color: "bg-blue-100 text-blue-500",
  },
  {
    title: "Finance",
    jobs: 168,
    icon: <FaChartLine />,
    color: "bg-green-100 text-green-500",
  },
  {
    title: "Software",
    jobs: 1856,
    icon: <FaCode />,
    color: "bg-purple-100 text-purple-500",
  },
  {
    title: "Human Resource",
    jobs: 165,
    icon: <FaUsers />,
    color: "bg-pink-100 text-pink-500",
  },
  {
    title: "Design",
    jobs: 425,
    icon: <FaPaintBrush />,
    color: "bg-yellow-100 text-yellow-500",
  },
  {
    title: "Mobile Development",
    jobs: 620,
    icon: <FaMobileAlt />,
    color: "bg-cyan-100 text-cyan-500",
  },
  {
    title: "Business",
    jobs: 315,
    icon: <FaBriefcase />,
    color: "bg-red-100 text-red-500",
  },
  {
    title: "Data Science",
    jobs: 280,
    icon: <FaDatabase />,
    color: "bg-indigo-100 text-indigo-500",
  },
];

const BrowseCategories = () => {
  const sliderRef = useRef(null);
  const sectionRef = useRef(null);
  const animationFrameRef = useRef(null);
  const directionRef = useRef(1);
  const isPausedRef = useRef(false);

  // Card smooth auto-scroll
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const speed = 0.6;

    const scroll = () => {
      if (!isPausedRef.current) {
        const maxScroll = slider.scrollWidth - slider.clientWidth;

        if (maxScroll > 0) {
          if (slider.scrollLeft >= maxScroll - 1) {
            directionRef.current = -1;
          }

          if (slider.scrollLeft <= 1) {
            directionRef.current = 1;
          }

          slider.scrollLeft += speed * directionRef.current;
        }
      }

      animationFrameRef.current = requestAnimationFrame(scroll);
    };

    animationFrameRef.current = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // Pause when mouse is over cards
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    const pause = () => {
      isPausedRef.current = true;
    };

    const resume = () => {
      isPausedRef.current = false;
    };

    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", resume);

    return () => {
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", resume);
    };
  }, []);

  // Whole section reveal animation
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("category-show");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="category-section mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8"
    >
      {/* Header */}
      <div className="mb-8 text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          Explore Categories
        </span>

        <h2 className="mt-2 text-3xl font-extrabold text-base-content sm:text-4xl">
          Browse by category
        </h2>

        <p className="mt-2 text-sm text-base-content/60 sm:text-base">
          Find the job that’s perfect for you. 800+ new jobs everyday.
        </p>
      </div>

      {/* Category Cards */}
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {categories.map((category) => (
          <div
            key={category.title}
            className="group min-w-[220px] rounded-2xl border border-base-200 bg-base-100 p-5 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-xl sm:min-w-[240px]"
          >
            {/* Icon */}
            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl transition-transform duration-500 group-hover:scale-110 ${category.color}`}
            >
              {category.icon}
            </div>

            {/* Content */}
            <h3 className="text-lg font-bold text-base-content transition-colors duration-300 group-hover:text-primary">
              {category.title}
            </h3>

            <p className="mt-2 text-sm font-medium text-base-content/60">
              {category.jobs} Jobs Available
            </p>

            <button className="mt-4 text-sm font-semibold text-primary transition-all duration-300 hover:tracking-wide">
              Explore Jobs →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseCategories;
