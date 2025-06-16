import React from "react";

export default function HowDobbyWorks() {
  return (
    <section className="container mx-auto relative flex flex-col md:flex-row items-center justify-center w-full py-16 px-4 bg-white overflow-hidden">
      {/* Left: Phone image */}
      <div className="relative z-10 flex-1 flex  w-full md:w-auto mb-10 md:mb-0">
        <img
          src="/assets/mobile-img.png"
          alt="How Dobby Works"
          className="w-[340px] h-auto max-w-full drop-shadow-xl"
        />
      </div>
      {/* Right: Text content */}
      <div className="relative z-10 flex-1 flex flex-col items-start  w-full md:w-auto">
        <span className="text-[#C89B7B] text-base font-semibold tracking-wider mb-2 uppercase">
          HOW DOBBY WORKS
        </span>
        <h2 className="text-[#23235a] text-4xl md:text-5xl font-bold leading-tight mb-8">
          From new requests to payment – five-star, zero hassle, 100% digital.
        </h2>
        <div className="flex items-start gap-4">
          <div className="border-l-2 border-[#C89B7B] h-12 mt-1"></div>
          <div>
            <span className="text-[#C89B7B] font-semibold text-base mb-1 block">
              BOOK
            </span>
            <p className="text-[#23235a] text-base max-w-md">
              Submit a request within minutes and connect directly to a vetted
              DobbyPRO within hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
