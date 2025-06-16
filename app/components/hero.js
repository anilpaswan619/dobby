import React from "react";

const Hero = () => (
  <section className="dobby-hero">
    <div className="dobby-hero-content">
      <span className="dobby-hero-label">MEET DOBBY</span>
      <h1 className="dobby-hero-title">
        The future of home
        <br />
        maintenance
      </h1>
      <p className="dobby-hero-desc">
        Being a homeowner is hard enough.
        <br />
        Let Dobby tackle your to-do list with the best pros, transparent
        pricing, and lots of love.
      </p>
      <div className="dobby-hero-buttons">
        <a href="#" className="dobby-hero-appstore">
          <img src="/assets/appstore.png" alt="Download on the App Store" />
        </a>
        <a href="#" className="dobby-hero-playstore">
          <img src="/assets/googleplay.png" alt="Get it on Google Play" />
        </a>
      </div>
    </div>
    <div className="dobby-hero-image-wrap">
      <div className="dobby-hero-house">
        <img
          src="/assets/hero-home.png"
          alt="Home"
          className="dobby-hero-image"
        />
      </div>
    </div>
  </section>
);

export default Hero;
