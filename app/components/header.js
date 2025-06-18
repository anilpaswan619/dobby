"use client";
import React, { useState } from "react";

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
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-dobby-works" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Partners", href: "#as-seen-on" },
  { label: "Contact", href: "#footer" },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md dobby-header fixed top-0 left-0 w-full z-50 bg-white shadow transition-all px-4 md:px-18 flex items-center h-20 justify-between">
      {/* Brand */}
      <div className="flex items-center">
        <img
          src="/assets/home-img.png"
          alt="Dobby Logo"
          className="dobby-header-logo"
          width={40}
          height={40}
        />
        <span className="dobby-header-title ml-2 text-2xl font-semibold text-[#23235a] font-sans">
          dobby
        </span>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-9">
        <div className="flex gap-10">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="dobby-header-link text-[#23235a] font-medium text-base relative transition-colors duration-200
                hover:text-[#2d2e83] after:content-[''] after:block after:h-[2px] after:bg-[#2d2e83] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1"
              style={{ paddingBottom: "2px" }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#footer"
          className="dobby-header-download ml-8 bg-[#18186a] text-white rounded-full px-7 py-2 font-semibold text-base shadow hover:bg-[#2d2e83] transition"
        >
          Download App
        </a>
      </nav>
      {/* Mobile/Tablet Menu Icon */}
      <button
        className="lg:hidden"
        aria-label="Open navigation"
        onClick={() => setOpen((v) => !v)}
      >
        <MenuIcon />
      </button>
      {/* Mobile/Tablet Nav Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex flex-col"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white shadow-lg w-full max-w-xs ml-auto h-full flex flex-col pt-8 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-8"
              aria-label="Close navigation"
              onClick={() => setOpen(false)}
            >
              <svg width={28} height={28} viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="#23235a"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#23235a] font-medium text-lg py-2 transition-colors duration-200 hover:text-[#2d2e83]"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#footer"
                className="bg-[#18186a] text-white rounded-full px-6 py-3 font-semibold text-base shadow hover:bg-[#2d2e83] transition mt-4 text-center"
                onClick={() => setOpen(false)}
              >
                Download App
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
