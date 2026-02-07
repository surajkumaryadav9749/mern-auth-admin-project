import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hire Skilled Developers for Your IT Projects
        </h1>

        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Connect with verified developers and get your IT work done efficiently
          and securely.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/services"
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded text-sm font-medium"
          >
            Hire a Developer
          </Link>

          <Link
            to="/signup"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded text-sm font-medium transition"
          >
            Join as Developer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
