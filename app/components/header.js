import React from "react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About us", href: "#" },
  { label: "Partners", href: "#" },
];

const Header = () => (
  <header className="dobby-header fixed top-0 left-0 w-full z-50 bg-white shadow transition-all">
    <div className="dobby-header-brand">
      <img
        src="/assets/home-img.png"
        alt="Dobby Logo"
        className="dobby-header-logo"
        width={32}
        height={32}
      />
      <span className="dobby-header-title">dobby</span>
    </div>
    <nav className="dobby-header-nav">
      <div className="dobby-header-links">
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="dobby-header-link">
            {link.label}
          </a>
        ))}
      </div>
      <a href="#" className="dobby-header-download">
        Download App
      </a>
    </nav>
  </header>
);

export default Header;
