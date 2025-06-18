"use client";
import React, { useState, useRef } from "react";

const CAROUSEL_ITEMS = [
  {
    color: "#ff8c3e",
    label: "BOOK",
    desc: "Submit a request within minutes and connect directly to a vetted DobbyPRO within hours.",
    more: "Our booking process is seamless and fast, ensuring you get the help you need without any hassle. You can specify your needs, preferred time, and even add notes for the pro.",
    extra:
      "Dobby matches you with the best available pro based on your requirements and location.",
  },
  {
    color: "#ffe0c2",
    label: "PAYMENT",
    desc: "Pay securely and easily through the app after the job is completed to your satisfaction.",
    more: "All transactions are encrypted and receipts are stored for your records. No hidden fees, no surprises.",
    extra:
      "You can use your preferred payment method and manage all your payments in one place.",
  },
  {
    color: "#ffe0c2",
    label: "INVOICE",
    desc: "Receive digital invoices and keep track of all your home maintenance expenses.",
    more: "Access your invoice history anytime and download them for your personal bookkeeping.",
    extra:
      "Invoices are clear, detailed, and always available in your Dobby account.",
  },
  {
    color: "#ff8c3e",
    label: "SUPPORT",
    desc: "Get real-time updates and chat with our support team for any help you need.",
    more: "Our support team is available 24/7 to answer your questions and resolve any issues quickly.",
    extra:
      "You can reach us via chat, email, or phone—whatever is most convenient for you.",
  },
];

function CarouselBar({ activeIndex, onDotClick }) {
  return (
    <div className="flex flex-col items-center h-20 w-4 mr-2 select-none">
      {/* Active bar (always orange) */}
      <div className="flex flex-col justify-center items-center h-12 w-full transition-all duration-300">
        <div
          className="rounded w-full transition-all duration-300"
          style={{
            height: "2.1rem",
            width: "0.7rem",
            background: "#ff8c3e", // Always orange, not dynamic
          }}
        ></div>
      </div>
      {/* Vertical line selectors */}
      <div className="flex flex-col items-center gap-1 mt-2">
        {CAROUSEL_ITEMS.map((item, idx) => (
          <button
            key={idx}
            type="button"
            className={`block w-1.5 h-8 rounded-full border-0 transition-all duration-200 focus:outline-none ${
              idx === activeIndex ? "" : "opacity-60"
            }`}
            style={{
              background: item.color,
              opacity: idx === activeIndex ? 1 : 0.5,
              border: idx === activeIndex ? "2px solid #ff8c3e" : "none",
              boxShadow: idx === activeIndex ? "0 0 0 2px #ffe0c2" : "none",
              cursor: "pointer",
            }}
            aria-label={`Go to item ${idx + 1}`}
            onClick={() => onDotClick(idx)}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}

export default function HowDobbyWorks() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  // Handle wheel/scroll events for vertical carousel
  React.useEffect(() => {
    const ref = containerRef.current;
    if (!ref) return;

    let ticking = false;
    const onWheel = (e) => {
      if (ticking) return;
      ticking = true;
      setTimeout(() => {
        ticking = false;
      }, 200);

      if (e.deltaY > 10) {
        setActive((prev) => Math.min(prev + 1, CAROUSEL_ITEMS.length - 1));
      } else if (e.deltaY < -10) {
        setActive((prev) => Math.max(prev - 1, 0));
      }
    };

    ref.addEventListener("wheel", onWheel, { passive: false });
    return () => ref.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section
      ref={containerRef}
      className="container mx-auto relative flex flex-col md:flex-row items-center justify-center w-full py-18 px-4 bg-white overflow-hidden"
      tabIndex={0}
      aria-label="How Dobby Works Carousel"
      style={{ outline: "none" }}
    >
      {/* Left: Phone image */}
      <div className="relative z-10 flex-1 flex w-full md:w-auto mb-10 md:mb-0">
        <img
          src="/assets/mobile-img.png"
          alt="How Dobby Works"
          className="w-[340px] h-auto max-w-full drop-shadow-xl"
        />
      </div>
      {/* Right: Text content */}
      <div className="relative z-10 flex-1 flex flex-col items-start w-full md:w-auto gap-9">
        <span className="text-[#ff8c3e] text-base font-semibold tracking-wider mb-2 uppercase">
          HOW DOBBY WORKS
        </span>
        <h2 className="text-[#23235a] text-4xl md:text-5xl font-bold leading-tight mb-8">
          From new requests to payment – five-star, zero hassle, 100% digital.
        </h2>
        <div className="flex items-start gap-4">
          <CarouselBar activeIndex={active} onDotClick={setActive} />
          <div>
            <span className="text-[#ff8c3e] font-semibold text-base mb-1 block">
              {CAROUSEL_ITEMS[active].label}
            </span>
            <p className="text-[#23235a] text-base max-w-md mb-4">
              {CAROUSEL_ITEMS[active].desc}
            </p>
            <p className="text-[#23235a] text-sm max-w-md opacity-80 mb-1">
              {CAROUSEL_ITEMS[active].more}
            </p>
            {CAROUSEL_ITEMS[active].extra && (
              <p className="text-[#23235a] text-sm max-w-md opacity-70">
                {CAROUSEL_ITEMS[active].extra}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
