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
        <a
          href="#"
          className="flex items-center bg-black text-white rounded-lg px-4 min-w-[170px] h-[56px] shadow-md hover:bg-gray-900 transition"
        >
          <AppleIcon />
          <div className="flex flex-col text-left leading-tight">
            <span
              className="text-[13px] font-normal"
              style={{ lineHeight: "1.1" }}
            >
              Download on the
            </span>
            <span
              className="font-semibold text-[20px] -mt-1"
              style={{ lineHeight: "1.1" }}
            >
              App Store
            </span>
          </div>
        </a>
        <a
          href="#"
          className="dobby-store-btn flex items-center bg-black text-white rounded-lg px-4 no-underline min-w-[190px] h-[56px] shadow-md hover:bg-gray-900 transition"
        >
          <GooglePlayIcon />
          <div className="flex flex-col text-left leading-tight">
            <span
              className="text-[13px] font-normal"
              style={{ lineHeight: "1.1" }}
            >
              GET IT ON
            </span>
            <span
              className="font-semibold text-[20px] -mt-1"
              style={{ lineHeight: "1.1" }}
            >
              Google Play
            </span>
          </div>
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
