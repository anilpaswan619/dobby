import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#18186a] text-white pt-24 pb-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        {/* Left: Logo and nav */}
        <div>
          <div className="flex items-center mb-6">
            <img
              src="/assets/home-img.png"
              alt="Dobby Logo"
              className="w-10 h-10 mr-2"
            />
            <span className="text-3xl   tracking-tight">dobby</span>
            <span className="ml-1 text-lg font-serif font-bold tracking-tight align-super">
              ™
            </span>
          </div>
          <nav className="flex gap-8 mb-6">
            <a href="#" className="text-white hover:underline transition">
              Home
            </a>
            <a href="#" className="text-white hover:underline transition">
              About us
            </a>
            <a href="#" className="text-white hover:underline transition">
              Partners
            </a>
          </nav>
        </div>
        {/* Right: Newsletter and contact */}
        <div className="flex flex-col items-end gap-4 w-full md:w-auto">
          <form className="flex items-center gap-2 mb-2">
            <input
              type="email"
              placeholder="Sign up for our newsletter"
              className="rounded-full px-4 py-2 bg-[#23235a] text-white placeholder:text-gray-300 focus:outline-none w-100 md:w-80 transition duration-200 focus:ring-2 focus:ring-[#ff8c3e] focus:border-transparent"
            />
            <button
              type="submit"
              className="rounded-full px-4 py-2 bg-[#23235a] hover:bg-[#ff8c3e] transition text-white flex items-center gap-1"
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
