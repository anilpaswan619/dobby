"use client";
import React from "react";

const navLinks = [
  { label: "Home", target: "home" },
  { label: "How it works", target: "how-dobby-works" },
  { label: "Partners", target: "as-seen-on" },
  { label: "Testimonials", target: "testimonials" },
];

function scrollToComponent(targetId) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const headerHeight = 80;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#18186a] text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Left: Logo and nav */}
        <div className="w-full md:w-auto mb-8 md:mb-0">
          <div className="flex items-center mb-6">
            <img
              src="/assets/home-img.png"
              alt="Dobby Logo"
              className="w-10 h-10 mr-2"
            />
            <span className="text-3xl font-serif font-bold tracking-tight">
              dobby
            </span>
            <span className="ml-1 text-lg font-serif font-bold tracking-tight align-super">
              ™
            </span>
          </div>
          <nav className="flex flex-wrap gap-6 mb-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => scrollToComponent(link.target)}
                className="text-white hover:underline transition text-base bg-transparent border-none p-0 cursor-pointer"
                style={{ background: "none" }}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right: Newsletter and contact */}
        <div className="flex flex-col items-start md:items-end gap-4 w-full md:w-auto">
          <form className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-2 w-full sm:w-auto">
            <input
              type="email"
              placeholder="Sign up for our newsletter"
              className="rounded-full px-4 py-2 bg-[#23235a] text-white placeholder:text-gray-300 focus:outline-none w-full sm:w-72 md:w-80 transition duration-200 focus:ring-2 focus:ring-[#ff8c3e] focus:border-transparent"
            />
            <button
              type="submit"
              className="rounded-full px-4 py-2 bg-[#23235a] hover:bg-[#ff8c3e] transition text-white flex items-center cursor-auto gap-1"
            >
              <span>→</span>
            </button>
          </form>
          <div className="text-sm text-gray-300">
            <div>ask@hellodobby.com</div>
            <div>+91-123456789</div>
          </div>
          <div className="text-xs text-gray-400 mt-2">
            1250/46, New Delhi, India
          </div>
        </div>
      </div>
    </footer>
  );
}
