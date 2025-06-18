"use client";
import React, { useState, useEffect } from "react";

// Simple Menu Icon SVG
const MenuIcon = ({ className = "" }) => (
  <svg
    className={className}
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
  >
    <rect x="6" y="9" width="20" height="2.5" rx="1.25" fill="#23235a" />
    <rect x="6" y="15" width="20" height="2.5" rx="1.25" fill="#23235a" />
    <rect x="6" y="21" width="20" height="2.5" rx="1.25" fill="#23235a" />
  </svg>
);

const navLinks = [
  { label: "Home", target: "home" },
  { label: "How it works", target: "how-dobby-works" },
  { label: "Partners", target: "as-seen-on" },
  { label: "Testimonials", target: "testimonials" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Smooth scroll to section by id (must match section id)
  const scrollToComponent = (targetId) => {
    // Close mobile menu if open
    setOpen(false);

    // Find the target element
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Offset for fixed header (adjust if your header height changes)
      const headerHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header
        className={`dobby-header fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 md:px-16 flex items-center h-20 justify-between ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg border-b border-gray-200 shadow-lg"
            : "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
        }`}
      >
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById("home");
            if (el) {
              window.scrollTo({ top: el.offsetTop - 80, behavior: "smooth" });
            }
            setOpen(false);
          }}
          className="flex items-center cursor-pointer select-none"
          aria-label="Go to top"
        >
          <img
            src="/assets/home-img.png"
            alt="Dobby Logo"
            className="dobby-header-logo"
            width={44}
            height={44}
          />
          <span className="dobby-header-title ml-3 text-2xl font-extrabold text-[#23235a] mt-2 tracking-tight">
            dobby
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-12">
          <div className="flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToComponent(link.target)}
                className="dobby-header-link text-[#23235a] font-semibold text-lg relative transition-colors duration-200 px-2 py-1 rounded hover:bg-[#f5f5f5] focus-visible:ring-2 focus-visible:ring-[#ff8c3e] focus:outline-none
                  after:content-[''] after:block after:h-[2px] after:bg-[#ff8c3e] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1"
                style={{
                  paddingBottom: "2px",
                  background: "none",
                  border: "none",
                }}
                type="button"
              >
                {link.label}
              </button>
            ))}
          </div>
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            className="dobby-header-download ml-8 bg-gradient-to-r from-[#ff8c3e] to-[#ffb300] text-white rounded-full px-8 py-3 font-semibold text-base shadow-lg hover:from-[#ffb300] hover:to-[#ff8c3e] transition flex items-center gap-2"
            style={{ display: "inline-flex", alignItems: "center" }}
          >
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block align-middle"
              style={{ marginRight: "0.5rem", minWidth: 20, minHeight: 20 }}
            >
              <path
                d="M12 3v12m0 0l-5-5m5 5l5-5"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5 21h14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="inline-block align-middle">Download App</span>
          </a>
        </nav>

        {/* Mobile/Tablet Menu Icon */}
        <button
          className="lg:hidden p-2 rounded-full hover:bg-[#f5f5f5] focus-visible:ring-2 focus-visible:ring-[#ff8c3e] transition-colors duration-200"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <MenuIcon />
        </button>
      </header>

      {/* Mobile/Tablet Nav Overlay - Separate from header for better z-index control */}
      {open && (
        <div className="fixed inset-0 z-[9999] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          {/* Slide-out Menu */}
          <div className="absolute top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300 ease-in-out">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="flex items-center">
                <img
                  src="/assets/home-img.png"
                  alt="Dobby Logo"
                  width={32}
                  height={32}
                />
                <span className="ml-2 text-xl font-bold text-[#23235a] mt-2">
                  dobby
                </span>
              </div>
              <button
                className="p-2 rounded-full hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-[#ff8c3e] transition-colors duration-200"
                aria-label="Close navigation"
                onClick={() => setOpen(false)}
              >
                <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 6l12 12M6 18L18 6"
                    stroke="#23235a"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Content */}
            <nav className="flex flex-col p-6">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToComponent(link.target)}
                    className="text-[#23235a] font-semibold text-lg py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 border-l-4 border-transparent hover:border-[#ff8c3e] text-left w-full"
                    type="button"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* Download Button */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <a
                  href="https://play.google.com/store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-[#ff8c3e] to-[#ffb300] text-white rounded-full px-6 py-4 font-semibold text-base shadow-lg hover:from-[#ffb300] hover:to-[#ff8c3e] transition-all duration-200 text-center transform hover:scale-105"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block align-middle"
                    style={{
                      marginRight: "0.5rem",
                      minWidth: 20,
                      minHeight: 20,
                    }}
                  >
                    <path
                      d="M12 3v12m0 0l-5-5m5 5l5-5"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5 21h14"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="inline-block align-middle">
                    Download App
                  </span>
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
