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
];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="dobby-header fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur border-b border-gray-200 shadow-sm transition-all px-4 md:px-16 flex items-center h-20 justify-between">
      {/* Brand */}
      <div className="flex items-center">
        <img
          src="/assets/home-img.png"
          alt="Dobby Logo"
          className="dobby-header-logo"
          width={44}
          height={44}
        />
        <span className="dobby-header-title ml-3 text-2xl font-extrabold text-[#23235a] font-serif tracking-tight">
          dobby
        </span>
      </div>
      {/* Desktop Nav */}
      <nav className="hidden lg:flex items-center gap-12">
        <div className="flex gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="dobby-header-link text-[#23235a] font-semibold text-lg relative transition-colors duration-200 px-2 py-1 rounded hover:bg-[#f5f5f5] focus-visible:ring-2 focus-visible:ring-[#ff8c3e] focus:outline-none
                after:content-[''] after:block after:h-[2px] after:bg-[#ff8c3e] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:rounded-full after:mt-1"
              style={{ paddingBottom: "2px" }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#footer"
          className="dobby-header-download ml-8 bg-gradient-to-r from-[#ff8c3e] to-[#ffb300] text-white rounded-full px-8 py-3 font-semibold text-base shadow-lg hover:from-[#ffb300] hover:to-[#ff8c3e] transition"
        >
          Download App
        </a>
      </nav>
      {/* Mobile/Tablet Menu Icon */}
      <button
        className="lg:hidden p-2 rounded-full hover:bg-[#f5f5f5] focus-visible:ring-2 focus-visible:ring-[#ff8c3e] transition"
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
            className="bg-white shadow-2xl w-full max-w-xs ml-auto h-full flex flex-col pt-8 px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="self-end mb-8 p-2 rounded-full hover:bg-[#f5f5f5] focus-visible:ring-2 focus-visible:ring-[#ff8c3e] transition"
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
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#23235a] font-semibold text-lg py-2 rounded hover:bg-[#f5f5f5] transition"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#footer"
                className="bg-gradient-to-r from-[#ff8c3e] to-[#ffb300] text-white rounded-full px-6 py-3 font-semibold text-base shadow-lg hover:from-[#ffb300] hover:to-[#ff8c3e] transition mt-4 text-center"
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
