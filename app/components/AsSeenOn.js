import React from "react";

export default function AsSeenOn() {
  return (
    <section className="container mx-auto w-full bg-white py-12 flex items-center justify-center">
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 w-full max-w-6xl">
        <img
          src="/assets/org1.png"
          alt="Forbes"
          className="h-10 w-auto object-contain grayscale opacity-70 flex-shrink-0"
        />
        <img
          src="/assets/org2.png"
          alt="TechCrunch"
          className="h-10 w-auto object-contain grayscale opacity-70 flex-shrink-0"
        />
        <img
          src="/assets/org3.png"
          alt="NPR"
          className="h-10 w-auto object-contain grayscale opacity-70 flex-shrink-0"
        />
        <img
          src="/assets/org4.png"
          alt="Disruptor Daily"
          className="h-10 w-auto object-contain grayscale opacity-70 flex-shrink-0"
        />
      </div>
    </section>
  );
}
