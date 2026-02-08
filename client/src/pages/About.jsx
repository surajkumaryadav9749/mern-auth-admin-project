import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center px-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-white">
          <h1 className="text-4xl font-bold">
            About <span className="text-orange-400">DeveloperChauk</span>
          </h1>

          <p className="text-gray-300 leading-relaxed">
            DeveloperChauk is a service-based IT platform designed to connect
            skilled developers with clients looking for reliable digital
            solutions. We aim to simplify the process of finding the right
            talent for the right project through a transparent and
            community-driven approach.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Our platform allows developers to showcase their expertise, build
            credibility, and work on meaningful projects. At the same time,
            clients can easily discover verified professionals, communicate
            clearly, and get their work delivered efficiently.
          </p>

          <p className="text-gray-300 leading-relaxed">
            At DeveloperChauk, we believe in creating a trusted digital
            marketplace that empowers developers and helps businesses grow. Our
            vision is to build a strong ecosystem where technology,
            collaboration, and innovation come together.
          </p>

          <div className="mt-4">
            <button className="bg-orange-400 hover:bg-orange-500 transition text-white px-6 py-3 rounded text-sm font-medium">
              Join DeveloperChauk
            </button>
          </div>
        </div>

        {/* Right Image Placeholder */}
        <div className="w-full h-[420px] bg-gray-800 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 text-sm">
            Image Section (Add Image Here)
          </span>
        </div>
      </div>
    </section>
  );
};

export default About;
