import Header from "./components/header";
import Hero from "./components/hero";
import HowDobbyWorks from "./components/HowDobbyWorks";
import BeingAHomeowner from "./components/BeingAHomeowner";
import AsSeenOn from "./components/AsSeenOn";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <HowDobbyWorks />
      <BeingAHomeowner />
      <AsSeenOn />
      <Testimonials />

      {/* Footer */}
      <footer className="text-center py-8 bg-gray-100">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Dobby. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
