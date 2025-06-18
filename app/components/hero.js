import React from "react";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/solid";
import { PlayIcon } from "@heroicons/react/24/solid";

const AppleIcon = () => (
  <svg className="w-7 h-7 mr-3 flex-shrink-0" viewBox="0 0 24 24" fill="white">
    <path d="M16.7 1.7c0 1-0.4 2-1.1 2.8-0.8 0.9-2.1 1.6-3.2 1.5-0.1-1.1 0.4-2.2 1.1-3 0.8-0.9 2.2-1.6 3.2-1.3zm4.2 17.2c-0.5 1.1-1 2.1-1.7 3-0.8 1-1.7 2-2.9 2-1.1 0-1.4-0.7-2.8-0.7s-1.8 0.7-2.8 0.7c-1.2 0-2.1-1-2.9-2-1.6-2.2-2.8-6.2-1.2-8.9 0.8-1.3 2.2-2.1 3.7-2.1 1.1 0 2.1 0.7 2.8 0.7s1.9-0.8 3.2-0.7c0.5 0 2.3 0.2 3.4 1.7-0.1 0.1-2 1.1-2 3.3 0 2.6 2.4 3.5 2.4 3.5z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-7 h-7 mr-3 flex-shrink-0" viewBox="0 0 24 24">
    <g>
      <polygon fill="#FFD400" points="3.6,2.2 12.7,11.3 3.6,20.4" />
      <polygon fill="#FF3333" points="21.6,12.1 17.1,9.6 14.2,12.5 17.1,15.4" />
      <polygon fill="#48FF48" points="3.6,2.2 17.1,9.6 14.2,12.5" />
      <polygon fill="#00BFFF" points="3.6,20.4 17.1,15.4 14.2,12.5" />
    </g>
  </svg>
);

const Hero = () => (
  <section
    id="home"
    className="dobby-hero flex flex-col md:flex-row items-center justify-between gap-10 px-4 md:px-16 py-20 bg-gradient-to-br from-[#fff7f0] via-[#f5f5f5] to-[#f0f7ff] min-h-[80vh]"
  >
    <div className="dobby-hero-content flex-1 flex flex-col justify-center items-start gap-7 max-w-xl">
      <span className="dobby-hero-label text-[#ff8c3e] font-bold tracking-widest text-sm mb-2 uppercase">
        MEET DOBBY
      </span>
      <h1 className="dobby-hero-title text-[#23235a] font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-4">
        The future of home
        <br />
        maintenance
      </h1>
      <p className="dobby-hero-desc text-[#23235a] text-lg md:text-xl leading-relaxed mb-8">
        Being a homeowner is hard enough.
        <br />
        Let Dobby tackle your to-do list with the best pros, transparent
        pricing, and lots of love.
      </p>
      <div className="dobby-hero-buttons flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a
          href="https://apps.apple.com/"
          className="flex items-center bg-gradient-to-r md:m-0 m-4 from-[#18186a] to-[#23235a] text-white rounded-xl px-7 py-4 min-w-[180px] shadow-lg hover:from-[#23235a] hover:to-[#18186a] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AppleIcon />
          <div className="flex flex-col text-left leading-tight">
            <span
              className="text-xs font-normal mb-1"
              style={{ lineHeight: "1.1" }}
            >
              Download on the
            </span>
            <span
              className="font-semibold text-lg -mt-1"
              style={{ lineHeight: "1.1" }}
            >
              App Store
            </span>
          </div>
        </a>
        <a
          href="https://play.google.com/store"
          className="dobby-store-btn flex items-center md:m-0 m-4 bg-gradient-to-r from-[#18186a] to-[#23235a] text-white rounded-xl px-7 py-4 min-w-[180px] shadow-lg hover:from-[#23235a] hover:to-[#18186a] transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GooglePlayIcon />
          <div className="flex flex-col text-left leading-tight">
            <span
              className="text-xs font-normal mb-1"
              style={{ lineHeight: "1.1" }}
            >
              GET IT ON
            </span>
            <span
              className="font-semibold text-lg -mt-1"
              style={{ lineHeight: "1.1" }}
            >
              Google Play
            </span>
          </div>
        </a>
      </div>
    </div>
    <div className="dobby-hero-image-wrap flex-1 flex items-center justify-center md:justify-end md:pr-25 md:mt-25">
      <div className="dobby-hero-house rounded-3xl shadow-2xl overflow-hidden bg-white p-4">
        <img
          src="/assets/hero-home.png"
          alt="Home"
          className="dobby-hero-image w-full h-full object-cover"
        />
      </div>
    </div>
  </section>
);

export default Hero;
