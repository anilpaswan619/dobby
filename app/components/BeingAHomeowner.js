import React from "react";

export default function BeingAHomeowner() {
  return (
    <section className=" container-fluid mx-auto flex flex-col md:flex-row items-center justify-around w-full py-16 px-4 bg-[#f5f5f5]">
      {/* Left: Image with accent */}
      <div className="relative flex-1 flex justify-center items-center max-w-xl w-full">
        <img
          src="/assets/homemaker-img.png"
          alt="Family in kitchen"
          className="relative z-10 rounded-lg object-cover w-full  h-auto"
        />
      </div>
      {/* Right: Text content */}
      <div className="flex-1 flex flex-col items-start md:pl-16 mt-10 md:mt-0 max-w-xl">
        <span className="text-[#ff8c3e] text-base font-semibold tracking-wider mb-3 uppercase">
          BEING A HOMEOWNER
        </span>
        <h2 className="text-[#23235a] text-3xl md:text-5xl  font-bold leading-tight mb-6">
          Finally, a new way to take care of your home
        </h2>
        <p className="text-[#23235a] text-base md:text-lg mb-4">
          Being a homeowner is supposed to be fun. So why does it start to feel
          like so much work?
        </p>
        <p className="text-[#23235a] text-base md:text-lg mb-4">
          Leave your home maintenance to Dobby. Dobby only works with 5-star
          service providers and comes with quality assurance and a price-match
          guarantee. Dobby makes the process nearly zero-touch with a
          supersmart, "get-stuff-done" app powered by AI. The more you use
          Dobby, the smarter it gets, telling you what to fix and when!
        </p>
        <p className="text-[#23235a] text-base md:text-lg font-semibold mt-2">
          Quality work. Fair Pricing. Peace of mind. That’s Dobby.
        </p>
      </div>
    </section>
  );
}
