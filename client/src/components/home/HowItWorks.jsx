import React from "react";

const HowItWorks = () => {
  return (
    <section className="bg-gray-800 py-16 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Client Flow */}
          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">
              For Clients
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>Post your project requirement</li>
              <li>Get matched with developers</li>
              <li>Start your project</li>
            </ul>
          </div>

          {/* Developer Flow */}
          <div className="bg-gray-900 p-6 rounded">
            <h3 className="text-xl font-semibold mb-4 text-orange-400">
              For Developers
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>Create your developer profile</li>
              <li>Receive project requests</li>
              <li>Deliver work & earn</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
