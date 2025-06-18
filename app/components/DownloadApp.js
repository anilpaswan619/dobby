import React from "react";

export default function DownloadApp() {
  return (
    <section className="w-full bg-[#f5f5f5] md:py-25 py-15  flex items-center justify-center">
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
    </section>
  );
}
