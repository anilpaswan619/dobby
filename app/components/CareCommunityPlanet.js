import React from "react";

export default function CareCommunityPlanet() {
  return (
    <section className="container mx-auto w-full flex flex-col md:flex-row items-center justify-center bg-white py-16 px-4">
      {/* Left: Text */}
      <div className="flex-1 max-w-xl md:pl-12">
        <h2 className="text-[#23235a]  font-bold text-3xl md:text-5xl leading-tight mb-8">
          We take care of your
          <br />
          home, community,
          <br />
          and the planet
        </h2>
        <p className="text-[#23235a] text-base md:text-lg mb-5">
          We are proud to be the first home maintenance and real estate platform
          to contribute a portion of the revenue to remove CO2 from the
          atmosphere.
        </p>
        <p className="text-[#23235a] text-base md:text-lg mb-5">
          And unlike other home maintenance services, we don't sell your
          contacts to multiple service providers and squeeze them for every
          penny. We assign one high-quality service provider to your job and
          only take a commission when we know the job is done (and done well).
          This forward-looking strategy protects your privacy, lowers your cost,
          and allows local small businesses to make more money.
        </p>
        <p className="text-[#23235a] text-base md:text-lg font-semibold mb-8">
          Join us, and let's do more together!
        </p>
        <div className="flex items-center gap-8 mt-2">
          <div className="flex items-center gap-2">
            <img
              src="/assets/air-img.png"
              alt="Cleaner Air"
              className="h-7 w-7"
            />
            <span className="text-[#1db954] font-semibold text-lg">
              Cleaner Air
            </span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="/assets/group-img.png"
              alt="Stronger Community"
              className="h-7 w-7"
            />
            <span className="text-[#ffb300] font-semibold text-lg">
              Stronger Community
            </span>
          </div>
        </div>
      </div>
      {/* Right: Image */}
      <div className="flex-1 flex justify-end items-center mt-12 md:mt-0">
        <img
          src="/assets/baby-img.png"
          alt="We take care of your home, community, and the planet"
          className="rounded-lg object-cover w-full  max-w-xl"
        />
      </div>
    </section>
  );
}
