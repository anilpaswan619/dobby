"use client";

import React, { useState } from "react";

const TESTIMONIALS = [
  {
    color: "#22d3ee",
    quote:
      "My favorite feature would be the fact that Dobby works with you when it comes to how you run your business. They'll take their time and work towards the best solutions. And I love it.",
    name: "Fabian",
    role: "Owner of Louis Lawn and Landscaping LLC",
    colorClass: "text-[#22d3ee]",
  },
  {
    color: "#ff8c3e",
    quote:
      "With Dobby, I can manage my home from my pocket! I have had a to-do list on my desk for a few years and Dobby has helped us finish all of those projects. Now we are enjoying our home so much more because of it!",
    name: "Kristen",
    role: "A new buyer in DC metro",
    colorClass: "text-[#ff8c3e]",
  },
  {
    color: "#4338ca",
    quote:
      "With Dobby, I can manage my home from my pocket! I have had a to-do list on my desk for a few years and Dobby has helped us finish all of those projects. Now we are enjoying our home so much more because of it!",
    name: "Cheryl",
    role: "Homeowner in the DC Metro",
    colorClass: "text-[#4338ca]",
  },
];

const QuoteIcon = ({ color }) => (
  <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
    <path
      d="M13.5 27.5c0-3.59 2.91-6.5 6.5-6.5V13.5c-7.18 0-13 5.82-13 13h6.5zm17 0c0-3.59 2.91-6.5 6.5-6.5V13.5c-7.18 0-13 5.82-13 13h6.5z"
      fill={color}
    />
  </svg>
);

export default function Testimonials() {
  const [active, setActive] = useState(1); // Center testimonial active by default

  const handlePrev = () =>
    setActive((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  const handleNext = () =>
    setActive((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));

  return (
    <section className="w-full bg-[#f5f5f5] py-16 md:py-32 px-2">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#23235a] mb-12">
        What is our community saying about us
      </h2>
      <div className="flex items-center justify-center gap-2 md:gap-6 max-w-9xl mx-auto">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          aria-label="Previous testimonial"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              d="M15 19l-7-7 7-7"
              stroke="#bbb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Testimonials */}
        <div className="flex flex-col md:flex-row gap-6 w-full md:w-auto justify-center items-center">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.name}
              className={`bg-white rounded-xl shadow-sm px-8 py-12 flex flex-col items-center text-center w-full max-w-md transition-all duration-300
                ${
                  idx === active
                    ? "scale-100 opacity-100"
                    : "md:scale-95 md:opacity-70"
                }
                ${idx !== active && "hidden md:flex"}
              `}
              style={{ minHeight: 380, height: 380, boxSizing: "border-box" }}
            >
              <div className="mb-4">
                <svg
                  color={t.color}
                  class="w-10 h-10 mx-auto mb-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
              </div>
              <p className="text-[#23235a] text-base mb-6">{t.quote}</p>
              <div className={`font-semibold mt-auto ${t.colorClass}`}>
                {t.name}
              </div>
              <div className="text-gray-400 text-sm mt-1">{t.role}</div>
            </div>
          ))}
        </div>
        {/* Right Arrow */}
        <button
          onClick={handleNext}
          aria-label="Next testimonial"
          className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 transition"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path
              d="M9 5l7 7-7 7"
              stroke="#bbb"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      {/* Mobile dots */}
      <div className="flex md:hidden justify-center gap-2 mt-8">
        {TESTIMONIALS.map((_, idx) => (
          <button
            key={idx}
            className={`w-2.5 h-2.5 rounded-full ${
              active === idx ? "bg-[#23235a]" : "bg-gray-300"
            }`}
            onClick={() => setActive(idx)}
            aria-label={`Go to testimonial ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
